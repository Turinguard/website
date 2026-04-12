import { createError, defineEventHandler, getRequestIP, readBody, setResponseStatus } from "h3"
import { recordQuoteEvent } from "../../utils/metrics"

type RateLimitEntry = {
  count: number
  resetAt: number
}

const RATE_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 8
const rateLimitStore = new Map<string, RateLimitEntry>()

function trimAndLimit(value: unknown, maxLength: number): string {
  return String(value || "").trim().slice(0, maxLength)
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    name?: string
    company?: string
    email?: string
    phone?: string
    packageName?: string
    budget?: string
    timeline?: string
    message?: string
    website?: string
    formStartedAt?: number
  }>(event)

  const now = Date.now()
  const clientIp = getRequestIP(event, { xForwardedFor: true }) || "unknown"
  const currentRate = rateLimitStore.get(clientIp)

  if (!currentRate || now > currentRate.resetAt) {
    rateLimitStore.set(clientIp, { count: 1, resetAt: now + RATE_WINDOW_MS })
  } else if (currentRate.count >= RATE_LIMIT_MAX) {
    recordQuoteEvent("rate_limited")
    throw createError({
      statusCode: 429,
      statusMessage: "Te veel aanvragen. Probeer het over een minuut opnieuw.",
    })
  } else {
    currentRate.count += 1
    rateLimitStore.set(clientIp, currentRate)
  }

  // Simple anti-bot checks: hidden field should stay empty and form should not be posted instantly.
  if (body?.website && String(body.website).trim()) {
    recordQuoteEvent("blocked")
    setResponseStatus(event, 202)
    return { ok: true, message: "Aanvraag ontvangen" }
  }

  const formStartedAt = Number(body?.formStartedAt || 0)
  if (Number.isFinite(formStartedAt) && formStartedAt > 0 && now - formStartedAt < 1500) {
    throw createError({
      statusCode: 400,
      statusMessage: "Aanvraag lijkt ongeldig. Probeer het opnieuw.",
    })
  }

  const name = trimAndLimit(body?.name, 120)
  const company = trimAndLimit(body?.company, 160)
  const email = trimAndLimit(body?.email, 180)
  const phone = trimAndLimit(body?.phone, 60)
  const packageName = trimAndLimit(body?.packageName || "Algemene aanvraag", 120)
  const budget = trimAndLimit(body?.budget, 80)
  const timeline = trimAndLimit(body?.timeline, 60)
  const message = trimAndLimit(body?.message, 2500)

  const requiredFields = [name, company, email, message]

  for (const value of requiredFields) {
    if (!value) {
      throw createError({
        statusCode: 400,
        statusMessage: "Verplichte velden ontbreken.",
      })
    }
  }

  if (!isValidEmail(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: "E-mailadres is ongeldig.",
    })
  }

  const payload = {
    name,
    company,
    email,
    phone,
    packageName,
    budget,
    timeline,
    message,
    createdAt: new Date().toISOString(),
    clientIp,
  }

  console.info("[offerte-aanvraag]", {
    company: payload.company,
    email: payload.email,
    packageName: payload.packageName,
    createdAt: payload.createdAt,
    clientIp: payload.clientIp,
  })

  recordQuoteEvent("accepted")

  return {
    ok: true,
    message: "Offerteaanvraag ontvangen",
  }
})
