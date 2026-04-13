<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue"

useSeoMeta({
  title: "Knowledge Base | Turinguard",
  description: "Doorzoek praktische security-artikelen en checklists.",
})

const route = useRoute()
const router = useRouter()
const CONSENT_COOKIE_NAME = "tg_cookie_consent"
const KB_PROFILE_COOKIE = "tg_kb_profile"

const qInput = ref(typeof route.query.q === "string" ? route.query.q : "")

const currentPage = computed(() => {
  const raw = Number(route.query.page || 1)
  return Number.isFinite(raw) && raw > 0 ? Math.floor(raw) : 1
})

const searchQuery = computed(() => (typeof route.query.q === "string" ? route.query.q : ""))
const selectedCategory = computed(() =>
  typeof route.query.category === "string" && route.query.category.trim() ? route.query.category : "all"
)
const selectedSort = computed(() =>
  typeof route.query.sort === "string" && route.query.sort.trim() ? route.query.sort : "popular"
)
const kbProfileId = ref("")
const canTrackKbBehavior = ref(false)

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

function refreshBehaviorConsent() {
  const rawConsent = readCookieValue(CONSENT_COOKIE_NAME)
  const profile = readCookieValue(KB_PROFILE_COOKIE)

  if (!rawConsent || !profile) {
    canTrackKbBehavior.value = false
    kbProfileId.value = ""
    return
  }

  try {
    const parsed = JSON.parse(rawConsent) as { kbPersonalization?: boolean }
    canTrackKbBehavior.value = Boolean(parsed.kbPersonalization)
    kbProfileId.value = parsed.kbPersonalization ? profile : ""
  } catch {
    canTrackKbBehavior.value = false
    kbProfileId.value = ""
  }
}

watch(
  () => route.query.q,
  (value) => {
    qInput.value = typeof value === "string" ? value : ""
  }
)

const { data, pending } = await useAsyncData(
  () => `kb:list:${searchQuery.value}:${selectedCategory.value}:${selectedSort.value}:${currentPage.value}:${kbProfileId.value}`,
  () =>
    $fetch("/api/knowledgebase", {
      params: {
        q: searchQuery.value,
        category: selectedCategory.value,
        sort: selectedSort.value,
        ...(kbProfileId.value ? { profile: kbProfileId.value } : {}),
        page: currentPage.value,
        limit: 20,
      },
    }),
  {
    watch: [searchQuery, selectedCategory, selectedSort, currentPage, kbProfileId],
  }
)

const items = computed(() => data.value?.items || [])
const total = computed(() => data.value?.total || 0)
const totalPages = computed(() => data.value?.totalPages || 1)
const categories = computed(() => data.value?.categories || [])
const featuredArticle = computed(() => items.value[0] || null)
const articleList = computed(() => items.value.slice(1))

function articleAccent(path: string) {
  const palette = ["#e9f2ff", "#ecfbf3", "#fff4e9", "#eef4ff"]
  const hash = [...path].reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return palette[hash % palette.length]
}

function trackKbBehavior(event: "search" | "filter" | "open", payload: Record<string, string> = {}) {
  if (!import.meta.client || !canTrackKbBehavior.value || !kbProfileId.value) {
    return
  }

  const body = JSON.stringify({
    profileId: kbProfileId.value,
    event,
    ...payload,
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
    // Tracking failures should not affect the user flow.
  })
}

function applySearch() {
  const q = qInput.value.trim()
  trackKbBehavior("search", { query: q })
  router.replace({
    query: {
      ...(q ? { q } : {}),
      ...(selectedCategory.value !== "all" ? { category: selectedCategory.value } : {}),
      ...(selectedSort.value !== "popular" ? { sort: selectedSort.value } : {}),
      page: "1",
    },
  })
}

function setCategory(category: string) {
  trackKbBehavior("filter", { category })
  router.replace({
    query: {
      ...(searchQuery.value ? { q: searchQuery.value } : {}),
      ...(category !== "all" ? { category } : {}),
      ...(selectedSort.value !== "popular" ? { sort: selectedSort.value } : {}),
      page: "1",
    },
  })
}

function setSort(sort: string) {
  router.replace({
    query: {
      ...(searchQuery.value ? { q: searchQuery.value } : {}),
      ...(selectedCategory.value !== "all" ? { category: selectedCategory.value } : {}),
      ...(sort !== "popular" ? { sort } : {}),
      page: "1",
    },
  })
}

function onArticleOpen(article: { path: string; title: string; category: string }) {
  trackKbBehavior("open", {
    path: article.path,
    title: article.title,
    category: article.category,
    query: searchQuery.value,
  })
}

function setSortFromEvent(event: Event) {
  const target = event.target as HTMLSelectElement | null
  if (!target?.value) {
    return
  }
  setSort(target.value)
}

function goToPage(page: number) {
  const target = Math.min(Math.max(page, 1), totalPages.value)
  router.replace({
    query: {
      ...(searchQuery.value ? { q: searchQuery.value } : {}),
      ...(selectedCategory.value !== "all" ? { category: selectedCategory.value } : {}),
      ...(selectedSort.value !== "popular" ? { sort: selectedSort.value } : {}),
      page: String(target),
    },
  })
}

onMounted(() => {
  refreshBehaviorConsent()
  window.addEventListener("tg-consent-updated", refreshBehaviorConsent)
})

onBeforeUnmount(() => {
  window.removeEventListener("tg-consent-updated", refreshBehaviorConsent)
})
</script>

<template>
  <article class="kb-policy-page">
    <section class="kb-policy-shell">
      <header class="kb-policy-header">
        <p class="kb-policy-kicker">KENNISBANK</p>
        <h1>Security inzichten voor teams die vooruit willen</h1>
        <p class="kb-policy-lead">
          Geen droge lijst met bullets, maar compacte artikelen met context, keuzes en concrete aanpak.
        </p>
      </header>

      <section class="kb-policy-tools">
        <div class="kb-tools-row">
          <div class="kb-search-form">
            <input
              v-model="qInput"
              type="search"
              class="kb-search-input"
              placeholder="Zoek slim op onderwerp, risico of situatie..."
              aria-label="Zoek in knowledge base"
              @keyup.enter="applySearch"
            />
            <button class="btn btn-ghost kb-search-btn" type="button" @click="applySearch">Zoeken</button>
          </div>

          <label class="kb-sort-wrap" for="kb-sort">
            Sortering
            <select id="kb-sort" class="kb-sort-select" :value="selectedSort" @change="setSortFromEvent">
              <option value="popular">Meest gebruikt</option>
              <option value="relevance">Slimme relevantie</option>
              <option value="newest">Nieuwste eerst</option>
            </select>
          </label>
        </div>

        <div class="kb-category-quicksearch" role="tablist" aria-label="Filter op categorie">
          <button
            v-for="category in categories"
            :key="category.slug"
            type="button"
            class="kb-category-chip"
            :class="{ active: selectedCategory === category.slug }"
            @click="setCategory(category.slug)"
          >
            {{ category.label }}
            <span>{{ category.count }}</span>
          </button>
        </div>

        <p class="kb-result-count">
          {{ total }} artikel(en) gevonden
          <span v-if="selectedCategory !== 'all'">in geselecteerde categorie</span>
        </p>
      </section>

      <p v-if="pending" class="support-note">Artikelen laden...</p>

      <section v-else-if="items.length" class="kb-editorial-flow">
        <article v-if="featuredArticle" class="kb-featured-story">
          <div class="kb-item-topline">
            <span class="kb-featured-label">Uitgelicht</span>
            <span class="kb-meta-pill">{{ featuredArticle.category }}</span>
          </div>
          <h2>
            <NuxtLink :to="featuredArticle.path" @click="onArticleOpen(featuredArticle)">{{ featuredArticle.title }}</NuxtLink>
          </h2>
          <p>{{ featuredArticle.description }}</p>
          <div class="kb-card-foot">
            <NuxtLink class="kb-read-link" :to="featuredArticle.path" @click="onArticleOpen(featuredArticle)">
              Lees artikel
            </NuxtLink>
          </div>
        </article>

        <section class="kb-journal-grid">
          <article
            v-for="article in articleList"
            :key="article.path"
            class="kb-journal-card"
            :style="{ '--kb-card-accent': articleAccent(article.path) }"
          >
            <div class="kb-item-topline">
              <span class="kb-meta-pill">{{ article.category }}</span>
            </div>
            <h3>
              <NuxtLink :to="article.path" @click="onArticleOpen(article)">{{ article.title }}</NuxtLink>
            </h3>
            <p>{{ article.description }}</p>
            <div class="kb-card-foot">
              <NuxtLink class="kb-read-link" :to="article.path" @click="onArticleOpen(article)">
                Verder lezen
              </NuxtLink>
            </div>
          </article>
        </section>

        <article v-if="!articleList.length && featuredArticle" class="kb-single-story-note">
          Je ziet momenteel een resultaat. Gebruik categoriechips of zoek op een ander onderwerp.
        </article>
      </section>

      <p v-else class="support-note">Geen resultaten. Probeer een andere zoekterm.</p>

      <div v-if="totalPages > 1" class="kb-pagination">
        <button class="btn btn-ghost" type="button" :disabled="currentPage <= 1" @click="goToPage(currentPage - 1)">
          Vorige
        </button>
        <span>Pagina {{ currentPage }} van {{ totalPages }}</span>
        <button
          class="btn btn-ghost"
          type="button"
          :disabled="currentPage >= totalPages"
          @click="goToPage(currentPage + 1)"
        >
          Volgende
        </button>
      </div>
    </section>
  </article>
</template>

<style scoped>
.kb-policy-page {
  margin-top: 0.75rem;
}

.kb-policy-shell {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  border: 1px solid var(--border);
  border-radius: calc(var(--radius) + 4px);
  box-shadow: var(--shadow);
  padding-top: clamp(1.3rem, 2.3vw, 2.4rem);
  padding-bottom: clamp(1.3rem, 2.3vw, 2.4rem);
  padding-left: max(1rem, calc((100vw - 1280px) / 2 + 1rem));
  padding-right: max(1rem, calc((100vw - 1280px) / 2 + 1rem));
}

.kb-policy-header {
  border-bottom: 1px solid #dbe6f4;
  padding-bottom: 1.2rem;
  margin-bottom: 1.15rem;
}

.kb-policy-kicker {
  margin: 0;
  font-size: 0.76rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #53779e;
  font-weight: 700;
}

.kb-policy-header h1 {
  margin: 0.55rem 0 0.65rem;
  font-size: clamp(2rem, 3.4vw, 2.9rem);
  max-width: 22ch;
  line-height: 1.12;
}

.kb-policy-lead {
  margin: 0;
  color: #5b6f87;
  max-width: 78ch;
  font-size: 1.06rem;
  line-height: 1.7;
}

.kb-policy-tools {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 0.4rem;
}

.kb-tools-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 240px;
  gap: 0.8rem;
}

.kb-sort-wrap {
  display: grid;
  gap: 0.35rem;
  font-size: 0.88rem;
  color: #566c84;
  font-weight: 700;
}

.kb-sort-select {
  border: 1px solid #ccdbee;
  background: #ffffff;
  color: #1d3d60;
  border-radius: 10px;
  padding: 0.58rem 0.7rem;
  font-weight: 600;
}

.kb-category-quicksearch {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.kb-category-chip {
  border: 1px solid #d4e3f4;
  background: #ffffff;
  color: #365a7f;
  border-radius: 999px;
  padding: 0.36rem 0.6rem;
  font-size: 0.82rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
}

.kb-category-chip span {
  display: inline-flex;
  min-width: 1.25rem;
  justify-content: center;
  padding: 0.03rem 0.3rem;
  border-radius: 999px;
  background: #eef4fd;
}

.kb-category-chip.active {
  border-color: #74a6dc;
  background: #edf5ff;
  color: #1d4f80;
}

.kb-result-count {
  margin: 0;
  color: #56708c;
}

.kb-editorial-flow {
  margin-top: 1rem;
  display: grid;
  gap: 1rem;
}

.kb-item-topline {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  align-items: center;
}

.kb-meta-pill {
  display: inline-flex;
  padding: 0.22rem 0.52rem;
  border-radius: 999px;
  background: #dfeeff;
  color: #244f77;
  font-size: 0.74rem;
  font-weight: 700;
}

.kb-featured-story {
  border: 1px solid #dce7f5;
  border-radius: 18px;
  background: linear-gradient(140deg, #f8fbff 0%, #eef4ff 100%);
  padding: clamp(1rem, 1.8vw, 1.45rem);
}

.kb-featured-label {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.24rem 0.58rem;
  border-radius: 999px;
  background: #d2e5ff;
  color: #1f4e7d;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  font-weight: 700;
}

.kb-featured-story h2 {
  margin: 0.7rem 0 0.5rem;
  font-size: clamp(1.35rem, 2.5vw, 1.85rem);
  line-height: 1.25;
}

.kb-featured-story p {
  margin: 0;
  color: #4c627b;
  max-width: 85ch;
  line-height: 1.75;
}

.kb-journal-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
}

.kb-journal-card {
  border: 1px solid #deebf8;
  border-radius: 14px;
  padding: 1rem 0.95rem;
  background: linear-gradient(180deg, var(--kb-card-accent) 0%, #ffffff 34%);
}

.kb-journal-card h3 {
  margin: 0.55rem 0 0.45rem;
  font-size: 1.1rem;
  line-height: 1.35;
}

.kb-journal-card p {
  margin: 0;
  color: #5a6f86;
  line-height: 1.68;
}

.kb-journal-card a,
.kb-featured-story a {
  color: #183f66;
  text-decoration: none;
}

.kb-journal-card a:hover,
.kb-featured-story a:hover,
.kb-read-link:hover {
  text-decoration: underline;
}

.kb-card-foot {
  margin-top: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.kb-read-link {
  display: inline-flex;
  font-weight: 700;
  color: #1d5283;
}

.kb-single-story-note {
  margin: 0;
  border: 1px dashed #d2e1f3;
  border-radius: 12px;
  padding: 0.75rem 0.9rem;
  color: #5e7087;
  background: #fcfdff;
}

@media (max-width: 980px) {
  .kb-journal-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 820px) {
  .kb-tools-row {
    grid-template-columns: 1fr;
  }

  .kb-journal-grid {
    grid-template-columns: 1fr;
  }

  .kb-policy-header h1 {
    max-width: 100%;
  }
}
</style>
