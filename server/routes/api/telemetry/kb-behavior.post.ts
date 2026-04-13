import { createError, defineEventHandler, readBody } from "h3"
import { recordKnowledgebaseBehavior } from "../../../utils/knowledgebase-behavior"

type KbBehaviorBody = {
  profileId?: string
  event?: "search" | "filter" | "open"
  path?: string
  query?: string
  category?: string
  title?: string
}

const allowedEvents = new Set(["search", "filter", "open"])

export default defineEventHandler(async (event) => {
  const body = await readBody<KbBehaviorBody>(event)

  const profileId = String(body?.profileId || "").trim().toLowerCase()
  const eventName = String(body?.event || "").trim().toLowerCase() as KbBehaviorBody["event"]
  const path = String(body?.path || "").trim()
  const query = String(body?.query || "").trim().slice(0, 160)
  const category = String(body?.category || "").trim().slice(0, 80)
  const title = String(body?.title || "").trim().slice(0, 120)

  if (!profileId || !/^[a-z0-9_-]{10,80}$/.test(profileId)) {
    throw createError({ statusCode: 400, statusMessage: "Invalid profile id" })
  }

  if (!eventName || !allowedEvents.has(eventName)) {
    throw createError({ statusCode: 400, statusMessage: "Invalid behavior event" })
  }

  if (path && !path.startsWith("/")) {
    throw createError({ statusCode: 400, statusMessage: "Invalid path" })
  }

  recordKnowledgebaseBehavior({
    profileId,
    event: eventName,
    path,
    query,
    category,
    title,
    timestamp: Date.now(),
  })

  return { ok: true }
})
