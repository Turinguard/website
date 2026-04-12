import { defineEventHandler, getQuery } from "h3"

type NewsArticle = {
  path: string
  title: string
  description: string
  date: string
  tags: string[]
  searchable: string
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const q = typeof query.q === "string" ? query.q.trim().toLowerCase() : ""
  const pageRaw = Number(query.page || 1)
  const limitRaw = Number(query.limit || 12)

  const page = Number.isFinite(pageRaw) && pageRaw > 0 ? Math.floor(pageRaw) : 1
  const limit = Number.isFinite(limitRaw) && limitRaw > 0 ? Math.min(Math.floor(limitRaw), 50) : 12

  const docs = await queryCollection(event, "content").all()

  const articles: NewsArticle[] = docs
    .filter((doc: any) => typeof doc.path === "string" && doc.path.startsWith("/nieuws/"))
    .filter((doc: any) => !doc.path.endsWith("/_template"))
    .filter((doc: any) => doc.draft !== true)
    .map((doc: any) => {
      const slug = doc.path.replace("/nieuws/", "")
      const tags = Array.isArray(doc.tags) ? doc.tags.map((tag: any) => String(tag)) : []
      const searchable = [doc.title, doc.description, doc.lead, slug.replace(/-/g, " "), tags.join(" ")]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()

      return {
        path: doc.path,
        title: doc.title || slug,
        description: doc.description || doc.lead || "Geen omschrijving beschikbaar.",
        date: typeof doc.date === "string" ? doc.date : "",
        tags,
        searchable,
      }
    })
    .filter((article: NewsArticle) => (q ? article.searchable.includes(q) : true))
    .sort((a: NewsArticle, b: NewsArticle) => {
      const aTime = a.date ? new Date(a.date).getTime() : 0
      const bTime = b.date ? new Date(b.date).getTime() : 0
      return bTime - aTime
    })

  const total = articles.length
  const totalPages = Math.max(1, Math.ceil(total / limit))
  const currentPage = Math.min(page, totalPages)
  const start = (currentPage - 1) * limit

  return {
    items: articles.slice(start, start + limit).map(({ searchable, ...item }: NewsArticle) => item),
    total,
    page: currentPage,
    limit,
    totalPages,
  }
})
