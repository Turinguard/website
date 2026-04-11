import { defineEventHandler, getQuery } from "h3"

type KbArticle = {
  path: string
  title: string
  description: string
  searchable: string
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const q = typeof query.q === "string" ? query.q.trim().toLowerCase() : ""
  const pageRaw = Number(query.page || 1)
  const limitRaw = Number(query.limit || 20)

  const page = Number.isFinite(pageRaw) && pageRaw > 0 ? Math.floor(pageRaw) : 1
  const limit = Number.isFinite(limitRaw) && limitRaw > 0 ? Math.min(Math.floor(limitRaw), 50) : 20

  const docs = await queryCollection(event, "content").all()

  const kbArticles: KbArticle[] = docs
    .filter((doc: any) => typeof doc.path === "string" && doc.path.startsWith("/kennisbank/"))
    .map((doc: any) => {
      const slug = doc.path.replace("/kennisbank/", "")
      const searchable = [doc.title, doc.description, doc.lead, slug.replace(/-/g, " ")]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()

      return {
        path: doc.path,
        title: doc.title || slug,
        description: doc.description || doc.lead || "Geen omschrijving beschikbaar.",
        searchable,
      }
    })
    .filter((article: KbArticle) => (q ? article.searchable.includes(q) : true))
    .sort((a: KbArticle, b: KbArticle) => a.title.localeCompare(b.title, "nl"))

  const total = kbArticles.length
  const totalPages = Math.max(1, Math.ceil(total / limit))
  const currentPage = Math.min(page, totalPages)
  const start = (currentPage - 1) * limit

  return {
    items: kbArticles.slice(start, start + limit).map(({ searchable, ...item }: KbArticle) => item),
    total,
    page: currentPage,
    limit,
    totalPages,
  }
})
