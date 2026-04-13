const usageByPath = new Map<string, number>()

function normalizeKbPath(path: string): string {
  const cleanPath = String(path || "").trim().split("?")[0]
  if (!cleanPath.startsWith("/kennisbank/")) {
    return ""
  }

  return cleanPath.slice(0, 180)
}

export function recordKnowledgebaseUsage(path: string): number {
  const normalizedPath = normalizeKbPath(path)
  if (!normalizedPath) {
    return 0
  }

  const next = (usageByPath.get(normalizedPath) || 0) + 1
  usageByPath.set(normalizedPath, next)
  return next
}

export function getKnowledgebaseUsage(path: string): number {
  const normalizedPath = normalizeKbPath(path)
  if (!normalizedPath) {
    return 0
  }

  return usageByPath.get(normalizedPath) || 0
}

export function getKnowledgebaseUsageMap(): Map<string, number> {
  return usageByPath
}
