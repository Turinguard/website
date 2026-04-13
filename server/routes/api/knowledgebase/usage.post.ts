import { createError, defineEventHandler, readBody } from "h3"
import { recordKnowledgebaseUsage } from "../../../utils/knowledgebase-usage"

export default defineEventHandler(async (event) => {
  const body = await readBody<{ path?: string }>(event)
  const path = String(body?.path || "").trim()

  if (!path.startsWith("/kennisbank/")) {
    throw createError({ statusCode: 400, statusMessage: "Invalid knowledgebase path" })
  }

  const count = recordKnowledgebaseUsage(path)

  return {
    ok: true,
    count,
  }
})
