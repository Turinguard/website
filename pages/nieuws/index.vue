<script setup lang="ts">
import { computed, ref, watch } from "vue"

useSeoMeta({
  title: "Nieuws & Blog | Turinguard",
  description: "Updates, praktijkverhalen en inzichten over security en infrastructuur.",
})

const route = useRoute()
const router = useRouter()

const qInput = ref(typeof route.query.q === "string" ? route.query.q : "")

const currentPage = computed(() => {
  const raw = Number(route.query.page || 1)
  return Number.isFinite(raw) && raw > 0 ? Math.floor(raw) : 1
})

const searchQuery = computed(() => (typeof route.query.q === "string" ? route.query.q : ""))

watch(
  () => route.query.q,
  (value) => {
    qInput.value = typeof value === "string" ? value : ""
  }
)

const { data, pending } = await useAsyncData(
  () => `news:list:${searchQuery.value}:${currentPage.value}`,
  () =>
    $fetch("/api/news", {
      params: {
        q: searchQuery.value,
        page: currentPage.value,
        limit: 12,
      },
    })
)

const items = computed(() => data.value?.items || [])
const total = computed(() => data.value?.total || 0)
const totalPages = computed(() => data.value?.totalPages || 1)

function applySearch() {
  const q = qInput.value.trim()
  router.replace({
    query: {
      ...(q ? { q } : {}),
      page: "1",
    },
  })
}

function goToPage(page: number) {
  const target = Math.min(Math.max(page, 1), totalPages.value)
  router.replace({
    query: {
      ...(searchQuery.value ? { q: searchQuery.value } : {}),
      page: String(target),
    },
  })
}

function formatDate(value?: string) {
  if (!value) {
    return ""
  }

  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) {
    return value
  }

  return new Intl.DateTimeFormat("nl-NL", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parsed)
}
</script>

<template>
  <article class="content-page">
    <section class="hero">
      <div class="hero-brand-strip">
        <img src="/img/turinguard-icon.png" alt="Turinguard logo" class="hero-logo" />
      </div>
      <p class="eyebrow">NIEUWS & BLOG</p>
      <h1>Updates en inzichten</h1>
      <p class="lead">
        Publiceer makkelijk nieuwe artikelen in <strong>content/nieuws</strong> via het template-bestand.
      </p>
    </section>

    <section class="content-card">
      <div class="kb-search-row">
        <div class="kb-search-form">
          <input
            v-model="qInput"
            type="search"
            class="kb-search-input"
            placeholder="Zoek op onderwerp, titel of tag..."
            aria-label="Zoek in nieuwsartikelen"
            @keyup.enter="applySearch"
          />
          <button class="btn btn-ghost kb-search-btn" type="button" @click="applySearch">Zoeken</button>
        </div>
        <p class="kb-result-count">{{ total }} artikel(en) gevonden</p>
      </div>

      <p v-if="pending" class="support-note">Artikelen laden...</p>

      <div v-else-if="items.length" class="kb-grid">
        <article v-for="article in items" :key="article.path" class="kb-card">
          <p v-if="article.date" class="support-note">{{ formatDate(article.date) }}</p>
          <h3>
            <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
          </h3>
          <p>{{ article.description }}</p>
          <p v-if="article.tags?.length" class="kb-tags">{{ article.tags.join(" • ") }}</p>
        </article>
      </div>

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
