export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("afterResponse", (event) => {
    const statusCode = event.node.res.statusCode

    if (statusCode !== 404) {
      return
    }

    const req = event.node.req
    const method = event.method || req.method || "GET"
    const path = event.path || req.url || ""
    const host = req.headers.host || "-"
    const referer = req.headers.referer || req.headers.referrer || "-"
    const userAgent = req.headers["user-agent"] || "-"

    const forwardedFor = req.headers["x-forwarded-for"]
    const realIp = req.headers["x-real-ip"]
    const remoteAddress = req.socket?.remoteAddress || "-"

    const ip =
      (Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor)?.split(",")[0]?.trim() ||
      (Array.isArray(realIp) ? realIp[0] : realIp) ||
      remoteAddress

    const requestStart = Number(req.headers["x-request-start"]) || 0
    const durationMs = requestStart > 0 ? Date.now() - requestStart : 0

    // Skip static and internal assets to keep logs focused on real page/API misses.
    if (path.startsWith("/_nuxt/") || path.startsWith("/__nuxt") || path === "/favicon.ico") {
      return
    }

    console.info(
      `[404] ip=${ip} method=${method} host=${host} path=${path} referer=${referer} ua="${userAgent}" durationMs=${durationMs}`
    )
  })
})
