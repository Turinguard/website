import { defineNuxtPlugin } from "nuxt/app"

type ConsentPayload = {
  analytics?: boolean
}

const CONSENT_COOKIE_NAME = "tg_cookie_consent"

function readConsentCookieRaw(): string | null {
  if (!import.meta.client) {
    return null
  }

  const match = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${CONSENT_COOKIE_NAME}=`))

  if (!match) {
    return null
  }

  return decodeURIComponent(match.split("=").slice(1).join("="))
}

function hasAnalyticsConsent(raw: string | null | undefined): boolean {
  if (!raw) {
    return false
  }

  try {
    const parsed = JSON.parse(raw) as ConsentPayload
    return Boolean(parsed.analytics)
  } catch {
    return false
  }
}

function sendJson(url: string, body: Record<string, unknown>) {
  const payload = JSON.stringify(body)

  if (navigator.sendBeacon) {
    const blob = new Blob([payload], { type: "application/json" })
    navigator.sendBeacon(url, blob)
    return
  }

  fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: payload,
    keepalive: true,
  }).catch(() => {
    // Ignore telemetry transport errors.
  })
}

export default defineNuxtPlugin((nuxtApp: any) => {
  if (!import.meta.client) {
    return
  }

  const router = nuxtApp.$router

  const canTrack = () => hasAnalyticsConsent(readConsentCookieRaw())

  const trackPageview = (path: string) => {
    if (!canTrack()) {
      return
    }

    sendJson("/api/telemetry/pageview", {
      path,
      referrer: document.referrer || "",
      language: navigator.language || "",
    })
  }

  const trackWebVital = (name: string, value: number) => {
    if (!canTrack()) {
      return
    }

    sendJson("/api/telemetry/perf", {
      name,
      value,
      path: window.location.pathname,
    })
  }

  let lastTrackedPath = ""
  const trackCurrentRoute = () => {
    const path = window.location.pathname
    if (!path || path === lastTrackedPath) {
      return
    }

    lastTrackedPath = path
    trackPageview(path)
  }

  router.afterEach(() => {
    setTimeout(trackCurrentRoute, 0)
  })

  nuxtApp.hook("app:mounted", () => {
    trackCurrentRoute()

    const navEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined
    if (navEntry && Number.isFinite(navEntry.responseStart)) {
      trackWebVital("ttfb", navEntry.responseStart)
    }

    const fcpEntry = performance.getEntriesByName("first-contentful-paint")[0] as PerformanceEntry | undefined
    if (fcpEntry && Number.isFinite(fcpEntry.startTime)) {
      trackWebVital("fcp", fcpEntry.startTime)
    }

    if ("PerformanceObserver" in window) {
      let lcpValue = 0
      let clsValue = 0

      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const last = entries[entries.length - 1]
        if (last && Number.isFinite(last.startTime)) {
          lcpValue = last.startTime
        }
      })

      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries() as Array<PerformanceEntry & { value?: number; hadRecentInput?: boolean }>) {
          if (!entry.hadRecentInput) {
            clsValue += Number(entry.value || 0)
          }
        }
      })

      try {
        lcpObserver.observe({ type: "largest-contentful-paint", buffered: true })
        clsObserver.observe({ type: "layout-shift", buffered: true })
      } catch {
        // Browser does not support one of the observers.
      }

      const flushVitals = () => {
        if (lcpValue > 0) {
          trackWebVital("lcp", lcpValue)
        }
        if (clsValue > 0) {
          trackWebVital("cls", Number(clsValue.toFixed(4)))
        }
      }

      window.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
          flushVitals()
        }
      })

      window.addEventListener("pagehide", flushVitals)
    }
  })
})
