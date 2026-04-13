<script setup lang="ts">
import { computed, onMounted, watch } from "vue"

const route = useRoute()
const CONSENT_COOKIE_NAME = "tg_cookie_consent"
const KB_PROFILE_COOKIE = "tg_kb_profile"

const path = computed(() => {
  const slugParam = route.params.slug
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam
  return `/kennisbank/${slug}`
})

const { data: doc } = await useAsyncData(
  () => `kb:doc:${path.value}`,
  () => queryCollection("content").path(path.value).first(),
  { watch: [path] }
)

const formattedDate = computed(() => {
  const raw = (doc.value as any)?.date
  if (!raw || typeof raw !== "string") {
    return ""
  }

  const parsed = new Date(raw)
  if (Number.isNaN(parsed.getTime())) {
    return raw
  }

  return new Intl.DateTimeFormat("nl-NL", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parsed)
})

function trackUsage(articlePath: string) {
  if (!articlePath) {
    return
  }

  const key = `kb:viewed:${articlePath}`
  if (sessionStorage.getItem(key)) {
    return
  }

  sessionStorage.setItem(key, "1")
  $fetch("/api/knowledgebase/usage", {
    method: "POST",
    body: { path: articlePath },
  }).catch(() => {
    // Usage tracking should never block article rendering.
  })
}

function readCookieValue(name: string): string {
  if (!import.meta.client) {
    return ""
  }

  const match = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${name}=`))

  if (!match) {
    return ""
  }

  return decodeURIComponent(match.split("=").slice(1).join("="))
}

function trackBehaviorOpen() {
  if (!import.meta.client || !doc.value?.path) {
    return
  }

  const consentRaw = readCookieValue(CONSENT_COOKIE_NAME)
  const profileId = readCookieValue(KB_PROFILE_COOKIE)
  if (!consentRaw || !profileId) {
    return
  }

  try {
    const consent = JSON.parse(consentRaw) as { kbPersonalization?: boolean }
    if (!consent.kbPersonalization) {
      return
    }
  } catch {
    return
  }

  const body = JSON.stringify({
    profileId,
    event: "open",
    path: String(doc.value.path || ""),
    category: String((doc.value as any)?.category || ""),
    title: String((doc.value as any)?.title || ""),
  })

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/telemetry/kb-behavior", new Blob([body], { type: "application/json" }))
    return
  }

  fetch("/api/telemetry/kb-behavior", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {
    // Tracking failures should not affect article reading.
  })
}

onMounted(() => {
  if (doc.value?.path) {
    trackUsage(String(doc.value.path))
    trackBehaviorOpen()
  }
})

watch(
  () => doc.value?.path,
  (value) => {
    if (value) {
      trackUsage(String(value))
      trackBehaviorOpen()
    }
  }
)
</script>

<template>
  <article v-if="doc" class="kb-doc-page">
    <section class="kb-doc-shell">
      <header class="kb-doc-header">
        <p class="kb-doc-kicker">KENNISBANK ARTIKEL</p>
        <h1>{{ doc.title }}</h1>
        <p v-if="doc.lead || doc.description" class="kb-doc-lead">{{ doc.lead || doc.description }}</p>
        <div class="kb-doc-meta">
          <span v-if="formattedDate">{{ formattedDate }}</span>
          <NuxtLink to="/kennisbank">Terug naar kennisbank</NuxtLink>
        </div>
      </header>

      <section class="kb-doc-content prose-like">
        <ContentRenderer :value="doc" />
      </section>
    </section>
  </article>

  <article v-else class="kb-doc-page">
    <section class="kb-doc-shell">
      <header class="kb-doc-header">
        <p class="kb-doc-kicker">KENNISBANK ARTIKEL</p>
        <h1>Artikel niet gevonden</h1>
        <p class="kb-doc-lead">Dit artikel bestaat niet of is verplaatst.</p>
        <div class="kb-doc-meta">
          <NuxtLink to="/kennisbank">Terug naar kennisbank</NuxtLink>
        </div>
      </header>
    </section>
  </article>
</template>

<style scoped>
.kb-doc-page {
  margin-top: 0.75rem;
}

.kb-doc-shell {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  background: radial-gradient(circle at 100% 0%, #f1f7ff 0%, transparent 36%), #ffffff;
  border: 1px solid #dce8f6;
  border-radius: calc(var(--radius) + 4px);
  box-shadow: var(--shadow);
  padding-top: clamp(1.4rem, 2.4vw, 2.5rem);
  padding-bottom: clamp(1.4rem, 2.4vw, 2.5rem);
  padding-left: max(1rem, calc((100vw - 1280px) / 2 + 1rem));
  padding-right: max(1rem, calc((100vw - 1280px) / 2 + 1rem));
}

.kb-doc-header {
  border-bottom: 1px solid #dce8f6;
  padding-bottom: 1.2rem;
  margin-bottom: 1.35rem;
}

.kb-doc-kicker {
  margin: 0;
  font-size: 0.76rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #53779e;
  font-weight: 700;
}

.kb-doc-header h1 {
  margin: 0.55rem 0 0.7rem;
  font-size: clamp(2rem, 3.5vw, 2.95rem);
  line-height: 1.12;
  max-width: 24ch;
}

.kb-doc-lead {
  margin: 0;
  color: #556d86;
  max-width: 88ch;
  line-height: 1.74;
  font-size: 1.07rem;
}

.kb-doc-meta {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  color: #5f7088;
  font-size: 0.93rem;
}

.kb-doc-meta a {
  color: #1b568b;
  text-decoration: none;
  font-weight: 700;
}

.kb-doc-meta a:hover {
  text-decoration: underline;
}

.kb-doc-content :deep(h2),
.kb-doc-content :deep(h3) {
  margin-top: 1.8rem;
  color: #173a5f;
  line-height: 1.3;
}

.kb-doc-content :deep(h2) {
  font-size: clamp(1.35rem, 2.2vw, 1.75rem);
}

.kb-doc-content :deep(h3) {
  font-size: clamp(1.1rem, 1.8vw, 1.3rem);
}

.kb-doc-content :deep(p),
.kb-doc-content :deep(li) {
  color: #4f657d;
  line-height: 1.86;
  font-size: 1.08rem;
}

.kb-doc-content :deep(p) {
  max-width: 100%;
}

.kb-doc-content :deep(ul) {
  margin: 0.65rem 0 0;
  padding-left: 1.05rem;
  display: grid;
  gap: 0.6rem;
}

.kb-doc-content :deep(ol) {
  margin: 0.65rem 0 0;
  padding-left: 1.25rem;
  display: grid;
  gap: 0.6rem;
}

.kb-doc-content :deep(li)::marker {
  color: #2a6fb0;
  font-weight: 700;
}

.kb-doc-content :deep(a) {
  color: #1e5f97;
  font-weight: 700;
}

.kb-doc-content :deep(a:hover) {
  text-decoration: underline;
}

.kb-doc-content :deep(blockquote) {
  margin: 1.1rem 0;
  padding: 0.8rem 1rem;
  border-left: 3px solid #76a7d8;
  background: #f7fbff;
  color: #46607a;
  border-radius: 8px;
}

.kb-doc-content :deep(strong) {
  color: #193c61;
}

@media (max-width: 700px) {
  .kb-doc-header h1 {
    max-width: 100%;
  }

  .kb-doc-meta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
