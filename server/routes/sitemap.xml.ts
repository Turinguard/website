export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const siteUrl = (config.public.siteUrl as string) || "https://www.turinguard.nl"

  const pages = [
    "/",
    "/diensten",
    "/over-ons",
    "/contact",
    "/support",
    "/kennisbank",
    "/kennisbank/phishing-herkennen",
    "/kennisbank/incident-response-checklist",
    "/kennisbank/wachtwoordbeleid",
    "/algemene-voorwaarden",
    "/privacy-policy",
    "/cookie-policy",
    "/security",
    "/sla",
  ]

  const now = new Date().toISOString()

  const urls = pages
    .map((path) => {
      return `\n  <url>\n    <loc>${siteUrl}${path}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${path === "/" ? "1.0" : "0.7"}</priority>\n  </url>`
    })
    .join("")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}\n</urlset>`

  setHeader(event, "content-type", "application/xml; charset=utf-8")
  return xml
})
