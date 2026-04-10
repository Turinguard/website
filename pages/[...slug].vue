<script setup lang="ts">
import { computed } from "vue"

const route = useRoute()

if (import.meta.server) {
  const event = useRequestEvent()
  if (event) {
    setResponseStatus(event, 404, "Page not found")
  }
}

const missingPath = computed(() => route.path)
</script>

<template>
  <article class="content-page">
    <section class="hero">
      <div class="hero-brand-strip">
        <img src="/img/turinguard-logo.png" alt="Turinguard logo" class="hero-logo" />
      </div>
      <p class="eyebrow">HTTP 404</p>
      <h1>Pagina niet gevonden</h1>
      <p class="lead">
        De opgevraagde pagina {{ missingPath }} bestaat niet of is verplaatst.
      </p>
      <div class="cta-row">
        <NuxtLink class="btn btn-primary" to="/">Terug naar home</NuxtLink>
        <NuxtLink class="btn btn-ghost" to="/support">Support</NuxtLink>
      </div>
    </section>
  </article>
</template>
