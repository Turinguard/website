<script setup lang="ts">
import { computed, ref, watch } from "vue"

useSeoMeta({
  title: "Knowledge Base | Turinguard",
  description: "Doorzoek praktische security-artikelen en checklists.",
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
  () => `kb:list:${searchQuery.value}:${currentPage.value}`,
  () =>
    $fetch("/api/knowledgebase", {
      params: {
        q: searchQuery.value,
        page: currentPage.value,
        limit: 20,
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
</script>

<template>
  <article class="content-page">
    <section class="hero">
      <div class="hero-brand-strip">
        <img src="/img/turinguard-icon.png" alt="Turinguard logo" class="hero-logo" />
      </div>
      <p class="eyebrow">KNOWLEDGE BASE</p>
      <h1>Praktische security kennisbank</h1>
      <p class="lead">
        Zoek op onderwerp en navigeer snel door artikelen. Nieuwe artikelen in
        <strong>content/kennisbank</strong> verschijnen automatisch.
      </p>
    </section>

    <section class="content-card">
      <div class="kb-search-row">
        <div class="kb-search-form">
          <input
            v-model="qInput"
            type="search"
            class="kb-search-input"
            placeholder="Zoek op phishing, incident response, wachtwoorden..."
            aria-label="Zoek in knowledge base"
            @keyup.enter="applySearch"
          />
          <button class="btn btn-ghost kb-search-btn" type="button" @click="applySearch">Zoeken</button>
        </div>
        <p class="kb-result-count">{{ total }} artikel(en) gevonden</p>
      </div>

      <p v-if="pending" class="support-note">Artikelen laden...</p>

      <div v-else-if="items.length" class="kb-grid">
        <article v-for="article in items" :key="article.path" class="kb-card">
          <h3>
            <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
          </h3>
          <p>{{ article.description }}</p>
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
