import { createError, defineEventHandler, readBody } from "h3"
import { recordWebVital } from "../../../utils/metrics"

const allowedMetrics = new Set(["ttfb", "fcp", "lcp", "cls", "inp"])

export default defineEventHandler(async (event) => {
  const body = await readBody<{ name?: string; value?: number }>(event)

  const name = String(body?.name || "").toLowerCase().trim()
  const value = Number(body?.value)

  if (!allowedMetrics.has(name)) {
    throw createError({ statusCode: 400, statusMessage: "Unsupported metric" })
  }

  if (!Number.isFinite(value) || value < 0 || value > 60_000) {
    throw createError({ statusCode: 400, statusMessage: "Invalid metric value" })
  }

  recordWebVital(name, value)

  return {
    ok: true,
  }
})
