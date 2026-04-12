import { defineEventHandler, setHeader } from "h3"

export default defineEventHandler((event) => {
  const siteUrl = "https://www.turinguard.nl"

  const pages = [
    "/",
    "/diensten",
    "/nieuws",
    "/nieuws/lancering-netwerk-totaal",
    "/business-basis",
    "/netwerk-totaal",
    "/hosting",
    "/security-consultancy",
    "/security-pakketten",
    "/webhosting",
    "/vps-hosting",
    "/zakelijke-mail",
    "/over-ons",
    "/contact",
    "/kennisbank",
    "/kennisbank/phishing-herkennen",
    "/kennisbank/incident-response-checklist",
    "/kennisbank/wachtwoordbeleid",
    "/kennisbank/beleid-security-audits",
    "/algemene-voorwaarden",
    "/terms-and-conditions",
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
