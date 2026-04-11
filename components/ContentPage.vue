<script setup lang="ts">
const props = defineProps<{
  path: string
}>()

const { data: doc } = await useAsyncData(
  () => `content:${props.path}`,
  () => queryCollection("content").path(props.path).first(),
  { watch: [() => props.path] }
)
</script>

<template>
  <article v-if="doc" class="content-page">
    <section class="hero">
      <div class="hero-brand-strip">
        <img src="/img/turinguard-icon.png" alt="Turinguard logo" class="hero-logo" />
      </div>
      <p class="eyebrow">TURINGUARD SERVICES</p>
      <h1>{{ doc.title }}</h1>
      <p class="lead">{{ doc.lead || doc.description }}</p>
      <div v-if="doc.cta" class="cta-row">
        <NuxtLink class="btn btn-primary" :to="doc.cta.to">{{ doc.cta.label }}</NuxtLink>
      </div>
    </section>

    <section class="content-card">
      <ContentRenderer :value="doc" />

      <QuoteForm v-if="doc.quoteForm" :package-name="doc.quotePackage || doc.title" />

      <div v-if="doc.cta" class="content-cta">
        <p class="content-cta-label">Wil je een voorstel op maat?</p>
        <NuxtLink class="btn btn-primary" :to="doc.cta.to">{{ doc.cta.label }}</NuxtLink>
      </div>
    </section>
  </article>

  <article v-else class="content-page">
    <section class="hero">
      <div class="hero-brand-strip">
        <img src="/img/turinguard-icon.png" alt="Turinguard logo" class="hero-logo" />
      </div>
      <p class="eyebrow">INHOUD NIET BESCHIKBAAR</p>
      <h1>Deze pagina kon niet worden geladen</h1>
      <p class="lead">Probeer het later opnieuw of ga terug naar de homepagina.</p>
      <div class="cta-row">
        <NuxtLink class="btn btn-primary" to="/">Terug naar home</NuxtLink>
      </div>
    </section>
  </article>
</template>
