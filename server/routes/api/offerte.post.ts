import { createError, defineEventHandler, readBody } from "h3"

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    name?: string
    company?: string
    email?: string
    phone?: string
    packageName?: string
    budget?: string
    timeline?: string
    message?: string
  }>(event)

  const requiredFields = ["name", "company", "email", "message"] as const

  for (const field of requiredFields) {
    const value = body?.[field]
    if (!value || !String(value).trim()) {
      throw createError({
        statusCode: 400,
        statusMessage: `Field '${field}' is verplicht.`,
      })
    }
  }

  const payload = {
    name: String(body.name).trim(),
    company: String(body.company).trim(),
    email: String(body.email).trim(),
    phone: String(body.phone || "").trim(),
    packageName: String(body.packageName || "Algemene aanvraag").trim(),
    budget: String(body.budget || "").trim(),
    timeline: String(body.timeline || "").trim(),
    message: String(body.message).trim(),
    createdAt: new Date().toISOString(),
  }

  console.info("[offerte-aanvraag]", payload)

  return {
    ok: true,
    message: "Offerteaanvraag ontvangen",
  }
})
