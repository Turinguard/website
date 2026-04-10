<script setup lang="ts">
import { computed } from "vue"

const route = useRoute()

const path = computed(() => {
  const slugParam = route.params.slug
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam
  return `/kennisbank/${slug}`
})
</script>

<template>
  <ContentPage :path="path" />
</template>
