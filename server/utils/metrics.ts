type Labels = Record<string, string>

type HistogramStore = {
  buckets: number[]
  bucketCounts: number[]
  sum: number
  count: number
}

const httpRequests = new Map<string, number>()
const quoteEvents = new Map<string, number>()
const pageviews = new Map<string, number>()
const webVitals = new Map<string, { count: number; sum: number }>()
const httpDurations = new Map<string, HistogramStore>()

function makeKey(labels: Labels): string {
  return Object.keys(labels)
    .sort()
    .map((k) => `${k}=${labels[k]}`)
    .join("|")
}

function parseKey(key: string): Labels {
  if (!key) {
    return {}
  }

  return key.split("|").reduce<Labels>((acc, item) => {
    const splitAt = item.indexOf("=")
    if (splitAt === -1) {
      return acc
    }

    const label = item.slice(0, splitAt)
    const value = item.slice(splitAt + 1)
    acc[label] = value
    return acc
  }, {})
}

function escapeLabel(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\"/g, '\\"')
}

function metricLine(name: string, labels: Labels, value: number): string {
  const labelPairs = Object.entries(labels).map(([k, v]) => `${k}="${escapeLabel(v)}"`)
  const labelPart = labelPairs.length ? `{${labelPairs.join(",")}}` : ""
  return `${name}${labelPart} ${value}`
}

function normalizePath(path: string): string {
  const clean = path.split("?")[0] || "/"
  if (clean.length > 100) {
    return clean.slice(0, 100)
  }

  return clean
}

function getRouteType(path: string): string {
  if (path.startsWith("/api/")) {
    return "api"
  }
  if (path.startsWith("/_nuxt/") || path.startsWith("/__nuxt")) {
    return "asset"
  }
  if (path.startsWith("/img/") || path.includes(".")) {
    return "asset"
  }
  return "page"
}

function incrementMap(map: Map<string, number>, labels: Labels, amount = 1): void {
  const key = makeKey(labels)
  map.set(key, (map.get(key) || 0) + amount)
}

export function recordHttpRequest(input: {
  path: string
  method: string
  statusCode: number
  durationMs: number
}): void {
  const path = normalizePath(input.path)
  if (path === "/metrics") {
    return
  }

  const routeType = getRouteType(path)

  incrementMap(httpRequests, {
    method: (input.method || "GET").toUpperCase(),
    route_type: routeType,
    status: String(input.statusCode || 200),
  })

  const histogramKey = makeKey({ route_type: routeType })
  const existing =
    httpDurations.get(histogramKey) ||
    ({
      buckets: [50, 100, 250, 500, 1000, 2000, 5000],
      bucketCounts: [0, 0, 0, 0, 0, 0, 0],
      sum: 0,
      count: 0,
    } satisfies HistogramStore)

  const duration = Math.max(0, Number(input.durationMs) || 0)

  existing.sum += duration
  existing.count += 1

  for (let i = 0; i < existing.buckets.length; i++) {
    if (duration <= existing.buckets[i]) {
      existing.bucketCounts[i] += 1
    }
  }

  httpDurations.set(histogramKey, existing)
}

export function recordQuoteEvent(type: "accepted" | "rate_limited" | "blocked"): void {
  incrementMap(quoteEvents, { type })
}

export function recordPageview(path: string): void {
  incrementMap(pageviews, { path: normalizePath(path || "/") })
}

export function recordWebVital(metric: string, value: number): void {
  const normalizedMetric = (metric || "unknown").toLowerCase().slice(0, 30)
  const current = webVitals.get(normalizedMetric) || { count: 0, sum: 0 }
  current.count += 1
  current.sum += Math.max(0, Number(value) || 0)
  webVitals.set(normalizedMetric, current)
}

export function renderPrometheusMetrics(): string {
  const lines: string[] = []

  lines.push("# HELP tg_http_requests_total Total HTTP requests processed by route type.")
  lines.push("# TYPE tg_http_requests_total counter")
  for (const [key, value] of httpRequests.entries()) {
    lines.push(metricLine("tg_http_requests_total", parseKey(key), value))
  }

  lines.push("# HELP tg_http_request_duration_ms Request duration in milliseconds.")
  lines.push("# TYPE tg_http_request_duration_ms histogram")
  for (const [key, histogram] of httpDurations.entries()) {
    const labels = parseKey(key)

    for (let i = 0; i < histogram.buckets.length; i++) {
      lines.push(
        metricLine(
          "tg_http_request_duration_ms_bucket",
          { ...labels, le: String(histogram.buckets[i]) },
          histogram.bucketCounts[i]
        )
      )
    }

    lines.push(metricLine("tg_http_request_duration_ms_bucket", { ...labels, le: "+Inf" }, histogram.count))
    lines.push(metricLine("tg_http_request_duration_ms_sum", labels, Number(histogram.sum.toFixed(2))))
    lines.push(metricLine("tg_http_request_duration_ms_count", labels, histogram.count))
  }

  lines.push("# HELP tg_quote_requests_total Quote request outcomes.")
  lines.push("# TYPE tg_quote_requests_total counter")
  for (const [key, value] of quoteEvents.entries()) {
    lines.push(metricLine("tg_quote_requests_total", parseKey(key), value))
  }

  lines.push("# HELP tg_pageviews_total Page views captured with analytics consent.")
  lines.push("# TYPE tg_pageviews_total counter")
  for (const [key, value] of pageviews.entries()) {
    lines.push(metricLine("tg_pageviews_total", parseKey(key), value))
  }

  lines.push("# HELP tg_web_vitals_count Frontend web vitals event count.")
  lines.push("# TYPE tg_web_vitals_count counter")
  lines.push("# HELP tg_web_vitals_sum Frontend web vitals value sum.")
  lines.push("# TYPE tg_web_vitals_sum counter")
  for (const [metric, value] of webVitals.entries()) {
    lines.push(metricLine("tg_web_vitals_count", { metric }, value.count))
    lines.push(metricLine("tg_web_vitals_sum", { metric }, Number(value.sum.toFixed(3))))
  }

  return `${lines.join("\n")}\n`
}
