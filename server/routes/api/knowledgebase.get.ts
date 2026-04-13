import { defineEventHandler, getQuery } from "h3"
import { getKnowledgebaseBehaviorProfile } from "../../utils/knowledgebase-behavior"
import { getKnowledgebaseUsage } from "../../utils/knowledgebase-usage"

type KbArticle = {
  path: string
  title: string
  description: string
  lead: string
  category: string
  tags: string[]
  date: string
  uses: number
  searchable: {
    title: string
    description: string
    lead: string
    slug: string
    category: string
    tags: string
    full: string
  }
}

function inferCategoryFromText(text: string): string {
  if (/(phishing|mail|awareness|social)/i.test(text)) {
    return "Awareness"
  }
  if (/(incident|response|forensic|breach)/i.test(text)) {
    return "Incident Response"
  }
  if (/(wachtwoord|password|auth|mfa|identity|account)/i.test(text)) {
    return "Identity & Access"
  }
  if (/(beleid|policy|governance|audit|compliance|security)/i.test(text)) {
    return "Governance"
  }
  return "Algemeen"
}

function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .split(/\s+/)
    .map((part) => part.trim())
    .filter((part) => part.length >= 2)
}

function toSlug(value: string): string {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function scoreArticle(article: KbArticle, q: string, tokens: string[]): number {
  let score = 0

  if (!q) {
    return Math.log1p(article.uses) * 20
  }

  if (article.searchable.title.includes(q)) {
    score += 52
  }
  if (article.searchable.description.includes(q)) {
    score += 22
  }
  if (article.searchable.lead.includes(q)) {
    score += 18
  }
  if (article.searchable.category.includes(q)) {
    score += 16
  }
  if (article.searchable.tags.includes(q)) {
    score += 14
  }
  if (article.searchable.slug.includes(q)) {
    score += 12
  }

  for (const token of tokens) {
    if (article.searchable.title.includes(token)) {
      score += 14
    }
    if (article.searchable.description.includes(token)) {
      score += 7
    }
    if (article.searchable.lead.includes(token)) {
      score += 7
    }
    if (article.searchable.category.includes(token)) {
      score += 9
    }
    if (article.searchable.tags.includes(token)) {
      score += 8
    }
    if (article.searchable.slug.includes(token)) {
      score += 6
    }
  }

  score += Math.log1p(article.uses) * 4
  return score
}

function applyPersonalizationBoost(
  article: KbArticle,
  profile: { topCategories: string[]; topKeywords: string[]; recentPaths: string[] }
): number {
  let boost = 0

  if (profile.topCategories.includes(article.category.toLowerCase())) {
    boost += 14
  }

  if (profile.recentPaths.includes(article.path)) {
    boost -= 6
  }

  for (const keyword of profile.topKeywords) {
    if (
      article.searchable.title.includes(keyword) ||
      article.searchable.description.includes(keyword) ||
      article.searchable.tags.includes(keyword)
    ) {
      boost += 2
    }
  }

  return boost
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const q = typeof query.q === "string" ? query.q.trim().toLowerCase() : ""
  const category = typeof query.category === "string" ? query.category.trim() : "all"
  const sort = typeof query.sort === "string" ? query.sort.trim().toLowerCase() : q ? "relevance" : "popular"
  const profileId = typeof query.profile === "string" ? query.profile.trim().toLowerCase() : ""

  const pageRaw = Number(query.page || 1)
  const limitRaw = Number(query.limit || 20)

  const page = Number.isFinite(pageRaw) && pageRaw > 0 ? Math.floor(pageRaw) : 1
  const limit = Number.isFinite(limitRaw) && limitRaw > 0 ? Math.min(Math.floor(limitRaw), 50) : 20
  const qTokens = tokenize(q)
  const behaviorProfile = getKnowledgebaseBehaviorProfile(profileId)

  const docs = await queryCollection(event, "content").all()

  const kbArticles = docs
    .filter((doc: any) => typeof doc.path === "string" && doc.path.startsWith("/kennisbank/"))
    .map((doc: any) => {
      const slug = doc.path.replace("/kennisbank/", "")
      const tags = Array.isArray(doc.tags)
        ? doc.tags.filter((item: unknown) => typeof item === "string").map((item: string) => item.trim())
        : []
      const detectedCategory =
        (typeof doc.category === "string" && doc.category.trim()) ||
        (tags.length ? tags[0] : "") ||
        inferCategoryFromText([doc.title, doc.description, doc.lead, slug].filter(Boolean).join(" "))
      const normalizedCategory = String(detectedCategory || "Algemeen").trim()

      const searchableTitle = String(doc.title || slug).toLowerCase()
      const searchableDescription = String(doc.description || doc.lead || "").toLowerCase()
      const searchableLead = String(doc.lead || "").toLowerCase()
      const searchableSlug = slug.replace(/-/g, " ").toLowerCase()
      const searchableCategory = normalizedCategory.toLowerCase()
      const searchableTags = tags.join(" ").toLowerCase()
      const full = [
        searchableTitle,
        searchableDescription,
        searchableLead,
        searchableSlug,
        searchableCategory,
        searchableTags,
      ]
        .filter(Boolean)
        .join(" ")

      return {
        path: doc.path,
        title: doc.title || slug,
        description: doc.description || doc.lead || "Geen omschrijving beschikbaar.",
        lead: doc.lead || "",
        category: normalizedCategory,
        tags,
        date: typeof doc.date === "string" ? doc.date : "",
        uses: getKnowledgebaseUsage(doc.path),
        searchable: {
          title: searchableTitle,
          description: searchableDescription,
          lead: searchableLead,
          slug: searchableSlug,
          category: searchableCategory,
          tags: searchableTags,
          full,
        },
      }
    })

  const queryMatched = kbArticles.filter((article: KbArticle) => {
    if (!q) {
      return true
    }

    if (article.searchable.full.includes(q)) {
      return true
    }

    return qTokens.every((token) => article.searchable.full.includes(token))
  })

  const categoriesMap = new Map<string, number>()
  for (const article of queryMatched) {
    categoriesMap.set(article.category, (categoriesMap.get(article.category) || 0) + 1)
  }

  const filteredArticles =
    category && category !== "all"
      ? queryMatched.filter((article: KbArticle) => toSlug(article.category) === toSlug(category))
      : queryMatched

  filteredArticles.sort((a: KbArticle, b: KbArticle) => {
    if (sort === "popular") {
      return b.uses - a.uses || a.title.localeCompare(b.title, "nl")
    }

    if (sort === "newest") {
      return b.date.localeCompare(a.date) || b.uses - a.uses || a.title.localeCompare(b.title, "nl")
    }

    const scoreA = scoreArticle(a, q, qTokens)
    const scoreB = scoreArticle(b, q, qTokens)
    const personalizedA = scoreA + applyPersonalizationBoost(a, behaviorProfile)
    const personalizedB = scoreB + applyPersonalizationBoost(b, behaviorProfile)

    return personalizedB - personalizedA || b.uses - a.uses || a.title.localeCompare(b.title, "nl")
  })

  const total = filteredArticles.length
  const totalPages = Math.max(1, Math.ceil(total / limit))
  const currentPage = Math.min(page, totalPages)
  const start = (currentPage - 1) * limit

  return {
    items: filteredArticles.slice(start, start + limit).map(({ searchable, ...item }: KbArticle) => item),
    categories: [
      { slug: "all", label: "Alle categorieen", count: queryMatched.length },
      ...Array.from(categoriesMap.entries())
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "nl"))
        .map(([label, count]) => ({
          slug: toSlug(label),
          label,
          count,
        })),
    ],
    sort,
    category,
    total,
    page: currentPage,
    limit,
    totalPages,
  }
})
