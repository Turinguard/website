export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxthq/studio"],
  app: {
    head: {
      viewport: "width=device-width, initial-scale=1",
    },
  },
  css: ["~/assets/css/main.css"],
  studio: {
    enabled: true,
  },
})
