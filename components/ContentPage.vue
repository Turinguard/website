<script setup lang="ts">
import { onMounted } from "vue"

defineProps<{
  path: string
}>()

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view")
        }
      }
    },
    { threshold: 0.15 }
  )

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element)
  })
})
</script>

<template>
  <ContentDoc :path="path" v-slot="{ doc }">
    <article class="content-page">
      <section class="hero">
        <img src="/img/turinguard-logo.png" alt="Turinguard logo" class="hero-logo" />
        <p class="eyebrow">CYBER SECURITY AUDITS</p>
        <h1>{{ doc.title }}</h1>
        <p class="lead">{{ doc.lead || doc.description }}</p>
        <div v-if="doc.cta" class="cta-row">
          <NuxtLink class="btn btn-primary" :to="doc.cta.to">{{ doc.cta.label }}</NuxtLink>
        </div>
      </section>

      <section class="content-card reveal">
        <ContentRenderer :value="doc" />
      </section>
    </article>
  </ContentDoc>
</template>
