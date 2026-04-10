# Turinguard Website (Nuxt 3)

Basis website voor Turinguard, een cyber security bedrijf dat security audits uitvoert voor bedrijven.

## Stack

- Nuxt 3
- Nuxt Studio (@nuxthq/studio)
- Nuxt Content (@nuxt/content)

## Pagina's

- /
- /diensten
- /over-ons
- /contact
- /support
- /kennisbank
- /kennisbank/phishing-herkennen
- /kennisbank/incident-response-checklist
- /kennisbank/wachtwoordbeleid
- /algemene-voorwaarden
- /privacy-policy
- /cookie-policy
- /security
- /sla

Alle pagina-content staat in de map content als markdown-bestanden.

## SEO & Crawling

- Sitemap route: /sitemap.xml
- Robots bestand: public/robots.txt

## Project starten

1. Installeer Node.js LTS (18.20+ of 20+).
2. Installeer dependencies met npm install.
3. Start de development server met npm run dev.
4. Open de lokale URL die in de terminal verschijnt.

## Nuxt Studio

Nuxt Studio is geconfigureerd via @nuxthq/studio en @nuxt/content.

- Start de app met npm run dev.
- De Studio module exposeert metadata via /__studio.json.
- Beheer content visueel via nuxt.studio door je repository te koppelen.
- Wijzigingen worden opgeslagen in de markdown-bestanden in content.

## Belangrijke bestanden

- nuxt.config.ts: Nuxt configuratie en Studio module.
- pages/[[...slug]].vue: Dynamische pagina-rendering via Nuxt Content.
- assets/css/main.css: Styling en responsive layout.
- content/*.md: Bewerkbare pagina-inhoud voor Nuxt Studio.