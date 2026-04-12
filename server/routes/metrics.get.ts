import { createError, defineEventHandler, getHeader, setHeader } from "h3"
import { renderPrometheusMetrics } from "../utils/metrics"

export default defineEventHandler((event) => {
  const env = (globalThis as any).process?.env || {}
  const expectedToken = String(env.NUXT_METRICS_TOKEN || env.METRICS_TOKEN || "").trim()

  if (expectedToken) {
    const authHeader = getHeader(event, "authorization") || ""
    if (authHeader !== `Bearer ${expectedToken}`) {
      throw createError({ statusCode: 401, statusMessage: "Unauthorized" })
    }
  }

  setHeader(event, "content-type", "text/plain; version=0.0.4; charset=utf-8")
  setHeader(event, "cache-control", "no-store")
  return renderPrometheusMetrics()
})
