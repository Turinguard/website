<script setup lang="ts">
import { computed, onMounted, ref } from "vue"

type ConsentPayload = {
  analytics: boolean
  kbPersonalization: boolean
  updatedAt: string
}

const COOKIE_NAME = "tg_cookie_consent"
const KB_PROFILE_COOKIE = "tg_kb_profile"

function readConsentCookie(): ConsentPayload | null {
  if (!import.meta.client) {
    return null
  }

  const match = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${COOKIE_NAME}=`))

  if (!match) {
    return null
  }

  const rawValue = decodeURIComponent(match.split("=").slice(1).join("="))

  try {
    return JSON.parse(rawValue) as ConsentPayload
  } catch {
    return null
  }
}

function writeConsentCookie(payload: ConsentPayload) {
  if (!import.meta.client) {
    return
  }

  const maxAge = 60 * 60 * 24 * 180
  const secure = window.location.protocol === "https:" ? "; Secure" : ""
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(payload))}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`
}

function writeKbProfileCookie() {
  if (!import.meta.client) {
    return
  }

  const maxAge = 60 * 60 * 24 * 180
  const secure = window.location.protocol === "https:" ? "; Secure" : ""
  const profileId = crypto?.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2, 12)}`
  document.cookie = `${KB_PROFILE_COOKIE}=${profileId}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`
}

function clearKbProfileCookie() {
  if (!import.meta.client) {
    return
  }

  const secure = window.location.protocol === "https:" ? "; Secure" : ""
  document.cookie = `${KB_PROFILE_COOKIE}=; Max-Age=0; Path=/; SameSite=Lax${secure}`
}

const analyticsEnabled = ref(false)
const kbPersonalizationEnabled = ref(false)
const hasChoice = ref(false)
const isClientReady = ref(false)

const bannerVisible = computed(() => isClientReady.value && !hasChoice.value)

onMounted(() => {
  const initialConsent = readConsentCookie()
  analyticsEnabled.value = Boolean(initialConsent?.analytics)
  kbPersonalizationEnabled.value = Boolean(initialConsent?.kbPersonalization)
  hasChoice.value = Boolean(initialConsent)
  isClientReady.value = true
})

function saveChoice(analytics: boolean, kbPersonalization: boolean) {
  writeConsentCookie({
    analytics,
    kbPersonalization,
    updatedAt: new Date().toISOString(),
  })
  analyticsEnabled.value = analytics
  kbPersonalizationEnabled.value = kbPersonalization
  hasChoice.value = true

  if (kbPersonalization) {
    writeKbProfileCookie()
  } else {
    clearKbProfileCookie()
  }

  window.dispatchEvent(new CustomEvent("tg-consent-updated"))
}

function acceptAll() {
  saveChoice(true, true)
}

function acceptNecessaryOnly() {
  saveChoice(false, false)
}

function savePreferences() {
  saveChoice(analyticsEnabled.value, kbPersonalizationEnabled.value)
}
</script>

<template>
  <section v-if="bannerVisible" class="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie instellingen">
    <div class="cookie-banner-content">
      <h3>Cookie-instellingen</h3>
      <p>
        We gebruiken noodzakelijke cookies voor de werking van de site. Met analytics-cookies meten we
        basis bezoekersgedrag en performance om de website te verbeteren.
      </p>

      <label class="cookie-toggle">
        <input v-model="analyticsEnabled" type="checkbox" />
        Analytics en performance metingen toestaan
      </label>

      <label class="cookie-toggle">
        <input v-model="kbPersonalizationEnabled" type="checkbox" />
        Kennisbank personalisatie-cookies toestaan
      </label>

      <div class="cookie-actions">
        <button class="btn btn-primary" type="button" @click="acceptAll">Alles accepteren</button>
        <button class="btn btn-ghost" type="button" @click="acceptNecessaryOnly">Alleen noodzakelijk</button>
        <button class="btn btn-ghost" type="button" @click="savePreferences">Voorkeur opslaan</button>
      </div>

      <p class="support-note">
        Meer informatie in het <NuxtLink to="/cookie-policy">cookiebeleid</NuxtLink>.
      </p>
    </div>
  </section>
</template>
