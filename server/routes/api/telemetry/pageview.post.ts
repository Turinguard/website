import { createError, defineEventHandler, readBody } from "h3"
import { recordPageview } from "../../../utils/metrics"

export default defineEventHandler(async (event) => {
  const body = await readBody<{ path?: string }>(event)
  const path = String(body?.path || "").trim().slice(0, 120)

  if (!path || !path.startsWith("/")) {
    throw createError({ statusCode: 400, statusMessage: "Invalid path" })
  }

  recordPageview(path)

  return {
    ok: true,
  }
})
