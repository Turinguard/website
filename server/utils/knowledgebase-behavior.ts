type BehaviorPayload = {
  profileId: string
  event: "search" | "filter" | "open"
  path?: string
  query?: string
  category?: string
  title?: string
  timestamp: number
}

type BehaviorProfile = {
  searches: number
  opens: number
  filters: number
  categoryScores: Map<string, number>
  keywordScores: Map<string, number>
  recentPaths: string[]
  updatedAt: number
}

const profileStore = new Map<string, BehaviorProfile>()

function normalizeProfileId(profileId: string): string {
  const clean = String(profileId || "").trim().toLowerCase()
  if (!/^[a-z0-9_-]{10,80}$/.test(clean)) {
    return ""
  }
  return clean
}

function normalizeCategory(category: string): string {
  return String(category || "")
    .trim()
    .toLowerCase()
    .slice(0, 60)
}

function splitKeywords(value: string): string[] {
  return String(value || "")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .map((part) => part.trim())
    .filter((part) => part.length >= 3)
    .slice(0, 8)
}

function getOrCreateProfile(profileId: string): BehaviorProfile | null {
  const id = normalizeProfileId(profileId)
  if (!id) {
    return null
  }

  const existing = profileStore.get(id)
  if (existing) {
    return existing
  }

  const profile: BehaviorProfile = {
    searches: 0,
    opens: 0,
    filters: 0,
    categoryScores: new Map<string, number>(),
    keywordScores: new Map<string, number>(),
    recentPaths: [],
    updatedAt: Date.now(),
  }
  profileStore.set(id, profile)
  return profile
}

function addScore(map: Map<string, number>, key: string, value: number): void {
  if (!key) {
    return
  }
  map.set(key, (map.get(key) || 0) + value)
}

export function recordKnowledgebaseBehavior(payload: BehaviorPayload): void {
  const profile = getOrCreateProfile(payload.profileId)
  if (!profile) {
    return
  }

  profile.updatedAt = payload.timestamp || Date.now()

  if (payload.event === "search") {
    profile.searches += 1
    for (const keyword of splitKeywords(payload.query || "")) {
      addScore(profile.keywordScores, keyword, 3)
    }
  }

  if (payload.event === "filter") {
    profile.filters += 1
    addScore(profile.categoryScores, normalizeCategory(payload.category || ""), 4)
  }

  if (payload.event === "open") {
    profile.opens += 1
    addScore(profile.categoryScores, normalizeCategory(payload.category || ""), 2)
    for (const keyword of splitKeywords(`${payload.title || ""} ${payload.query || ""}`)) {
      addScore(profile.keywordScores, keyword, 1)
    }

    const cleanPath = String(payload.path || "").slice(0, 160)
    if (cleanPath) {
      profile.recentPaths = [cleanPath, ...profile.recentPaths.filter((item) => item !== cleanPath)].slice(0, 8)
    }
  }
}

export function getKnowledgebaseBehaviorProfile(profileId: string): {
  topCategories: string[]
  topKeywords: string[]
  recentPaths: string[]
} {
  const id = normalizeProfileId(profileId)
  if (!id) {
    return { topCategories: [], topKeywords: [], recentPaths: [] }
  }

  const profile = profileStore.get(id)
  if (!profile) {
    return { topCategories: [], topKeywords: [], recentPaths: [] }
  }

  const topCategories = Array.from(profile.categoryScores.entries())
    .filter(([key]) => Boolean(key))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([key]) => key)

  const topKeywords = Array.from(profile.keywordScores.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([key]) => key)

  return {
    topCategories,
    topKeywords,
    recentPaths: [...profile.recentPaths],
  }
}
