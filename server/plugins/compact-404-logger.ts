export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("afterResponse", (event) => {
    const statusCode = event.node.res.statusCode

    if (statusCode !== 404) {
      return
    }

    const method = event.method || event.node.req.method || "GET"
    const path = event.path || event.node.req.url || ""

    // Skip static and internal assets to keep logs focused on real page/API misses.
    if (path.startsWith("/_nuxt/") || path.startsWith("/__nuxt") || path === "/favicon.ico") {
      return
    }

    console.info(`[404] ${method} ${path}`)
  })
})
