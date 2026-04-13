<script setup lang="ts">
import { computed } from "vue"
import { createError } from "h3"

const route = useRoute()

type ServiceMeta = {
  title: string
  kicker: string
  summary: string
  path: string
  includes: string[]
  cta: string
}

const serviceMap: Record<string, ServiceMeta> = {
  "business-basis": {
    title: "Business Basis",
    kicker: "Online basis zonder gedoe",
    summary: "Wij beheren domein, e-mail en website zodat je team zich op het werk kan richten.",
    path: "/business-basis",
    includes: ["Domeinnaam en DNS", "Zakelijke e-mail", "Website/landingpage", "Support"],
    cta: "/contact",
  },
  "netwerk-totaal": {
    title: "Netwerk Totaal",
    kicker: "Netwerk volledig ontzorgd",
    summary: "Wij regelen internet, netwerk, wifi en telefonie zodat iedereen kan doorwerken.",
    path: "/netwerk-totaal",
    includes: ["Multi-site netwerkbeheer", "Routers/switches/access points", "Real-time monitoring", "Proactief onderhoud"],
    cta: "/contact",
  },
  hosting: {
    title: "Hosting",
    kicker: "Hosting met beheer",
    summary: "Stabiele hosting met beheer, updates en monitoring zodat je team ontzorgd is.",
    path: "/hosting",
    includes: ["VPS of service hosting", "Monitoring", "Back-upbeleid", "Patchbeheer"],
    cta: "/contact",
  },
  "security-consultancy": {
    title: "Security Consultancy",
    kicker: "Risico's uit de weg",
    summary: "Baseline audit, risicoanalyse en verbeterstappen zodat security het werk niet vertraagt.",
    path: "/security-consultancy",
    includes: ["Baseline audit", "Risicoanalyse", "Fix/advies op maat", "Juiste nazorg"],
    cta: "/contact",
  },
}

const slug = computed(() => {
  const param = route.params.slug
  return Array.isArray(param) ? param[0] : String(param || "")
})

const service = computed(() => serviceMap[slug.value])
const isCenteredLayout = computed(() => slug.value === "security-consultancy")

if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: "Dienst niet gevonden" })
}

const { data: doc } = await useAsyncData(
  () => `dienst:${slug.value}`,
  () => queryCollection("content").path(service.value.path).first(),
  { watch: [slug] }
)

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: "Dienstinhoud niet gevonden" })
}

useSeoMeta({
  title: () => `${service.value.title} | Diensten | Turinguard`,
  description: () => service.value.summary,
})
</script>

<template>
  <article class="service-detail-page">
    <section class="service-detail-hero">
      <p class="service-detail-kicker">{{ service.kicker }}</p>
      <h1>{{ service.title }}</h1>
      <p class="service-detail-lead">{{ doc?.lead || service.summary }}</p>

      <div class="service-detail-chips">
        <span v-for="item in service.includes" :key="item">{{ item }}</span>
      </div>
    </section>

    <section class="service-highlight-grid">
      <article v-for="item in service.includes" :key="item" class="service-highlight-card">
        <span class="service-highlight-icon">★</span>
        <p>{{ item }}</p>
      </article>
    </section>

    <section class="service-detail-layout" :class="{ 'is-centered': isCenteredLayout }">
      <article class="service-main-card">
        <ContentRenderer :value="doc" />
      </article>

      <aside v-if="!isCenteredLayout" class="service-side-column">
        <article class="service-side-card">
          <h2>In het kort</h2>
          <ul>
            <li v-for="item in service.includes" :key="item">{{ item }}</li>
          </ul>
        </article>

        <article class="service-side-card">
          <h2>Volgende stap</h2>
          <p>Wil je dit pakket direct vertalen naar jouw situatie? Dan maken we een voorstel op maat.</p>
          <NuxtLink class="btn btn-primary" :to="service.cta">Plan een gesprek</NuxtLink>
          <NuxtLink class="btn btn-ghost" to="/diensten">Terug naar alle diensten</NuxtLink>
        </article>
      </aside>
    </section>

    <QuoteForm v-if="doc?.quoteForm" :package-name="doc?.quotePackage || service.title" />
  </article>
</template>

<style scoped>
.service-detail-page {
  margin-top: 0.7rem;
  display: grid;
  gap: 1rem;
}

.service-detail-hero {
  border: 1px solid var(--border);
  border-radius: calc(var(--radius) + 4px);
  background:
    radial-gradient(circle at 15% 0%, rgba(31, 111, 185, 0.12) 0%, transparent 42%),
    linear-gradient(180deg, #ffffff 0%, #f4f9ff 100%);
  box-shadow: var(--shadow);
  padding: clamp(1.2rem, 2.2vw, 2.2rem);
}

.service-detail-kicker {
  margin: 0;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #4e6f93;
  font-weight: 700;
}

.service-detail-hero h1 {
  margin: 0.5rem 0 0.6rem;
  font-size: clamp(1.9rem, 3.4vw, 2.8rem);
}

.service-detail-lead {
  margin: 0;
  max-width: 75ch;
  color: var(--muted);
  line-height: 1.75;
}

.service-detail-chips {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.service-detail-chips span {
  display: inline-flex;
  align-items: center;
  border: 1px solid #cfe0f1;
  border-radius: 999px;
  background: #eef5ff;
  color: #20476e;
  padding: 0.28rem 0.58rem;
  font-size: 0.84rem;
  font-weight: 600;
}

.service-highlight-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.8rem;
}

.service-highlight-card {
  border: 1px solid #d9e6f4;
  border-radius: 14px;
  background: linear-gradient(180deg, #ffffff 0%, #f3f8ff 100%);
  padding: 0.85rem 0.9rem;
  display: grid;
  gap: 0.45rem;
  box-shadow: 0 10px 22px rgba(17, 36, 64, 0.06);
}

.service-highlight-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: inline-grid;
  place-items: center;
  background: rgba(31, 111, 185, 0.14);
  color: #1f5c9d;
  font-weight: 700;
}

.service-highlight-card p {
  margin: 0;
  color: #38516e;
  font-weight: 600;
}

.service-detail-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(260px, 0.85fr);
  gap: 1rem;
}

.service-detail-layout.is-centered {
  grid-template-columns: 1fr;
}

.service-main-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: #ffffff;
  box-shadow: var(--shadow);
  padding: clamp(1.2rem, 2vw, 2rem);
}

.service-detail-layout.is-centered .service-main-card {
  max-width: 920px;
  margin: 0 auto;
}

.service-main-card :deep(h2),
.service-main-card :deep(h3) {
  margin-top: 1.4rem;
  color: #142f4b;
  letter-spacing: 0.01em;
  font-family: "Space Grotesk", sans-serif;
}

.service-main-card :deep(h2) {
  font-size: clamp(1.3rem, 2.2vw, 1.7rem);
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
}

.service-main-card :deep(h2)::before {
  content: "";
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background: linear-gradient(135deg, #1f6fb9 0%, #8bb6e2 100%);
  display: inline-block;
}

.service-main-card :deep(h2:first-child),
.service-main-card :deep(h3:first-child) {
  margin-top: 0;
}

.service-main-card :deep(p),
.service-main-card :deep(li) {
  color: var(--muted);
  line-height: 1.78;
}

.service-main-card :deep(ul),
.service-main-card :deep(ol) {
  display: grid;
  gap: 0.45rem;
}

.service-main-card :deep(.service-faq-list) {
  margin-top: 0.8rem;
  display: grid;
  gap: 0.6rem;
}

.service-main-card :deep(.service-faq-item) {
  border: 1px solid #d7e5f4;
  border-radius: 12px;
  background: #f8fbff;
  padding: 0.65rem 0.8rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.service-main-card :deep(.service-faq-item[open]) {
  border-color: #8fb6e2;
  box-shadow: 0 10px 18px rgba(17, 36, 64, 0.08);
  background: #ffffff;
}

.service-main-card :deep(.service-faq-item summary) {
  cursor: pointer;
  font-weight: 700;
  color: #193b5f;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
}

.service-main-card :deep(.service-faq-item summary::-webkit-details-marker) {
  display: none;
}

.service-main-card :deep(.service-faq-item summary::after) {
  content: "+";
  font-size: 1.1rem;
  font-weight: 700;
  color: #1f6fb9;
  transition: transform 0.2s ease;
}

.service-main-card :deep(.service-faq-item[open] summary::after) {
  transform: rotate(45deg);
}

.service-main-card :deep(.service-faq-item p) {
  margin: 0.6rem 0 0;
  color: #4a617a;
}

.service-side-column {
  display: grid;
  align-content: start;
  gap: 1rem;
}

.service-side-card {
  border: 1px solid var(--border);
  border-radius: 14px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  box-shadow: var(--shadow);
  padding: 1rem;
  display: grid;
  gap: 0.65rem;
}

.service-side-card h2 {
  margin: 0;
  font-size: 1.1rem;
}

.service-side-card p {
  margin: 0;
  color: var(--muted);
}

.service-side-card ul {
  margin: 0;
  padding-left: 1.05rem;
  display: grid;
  gap: 0.38rem;
  color: var(--muted);
}

.service-side-card .btn {
  text-align: center;
}

@media (max-width: 980px) {
  .service-highlight-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .service-detail-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .service-highlight-grid {
    grid-template-columns: 1fr;
  }
}
</style>
