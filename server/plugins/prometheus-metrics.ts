import { recordHttpRequest } from "../utils/metrics"

export default (nitroApp: any) => {
  nitroApp.hooks.hook("request", (event: any) => {
    ;(event.context as any).__requestStart = Date.now()
  })

  nitroApp.hooks.hook("afterResponse", (event: any) => {
    const startedAt = Number((event.context as any).__requestStart || Date.now())
    const durationMs = Date.now() - startedAt

    recordHttpRequest({
      path: event.path || event.node.req.url || "/",
      method: event.method || event.node.req.method || "GET",
      statusCode: event.node.res.statusCode || 200,
      durationMs,
    })
  })
}
