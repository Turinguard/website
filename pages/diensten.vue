<script setup lang="ts">
useSeoMeta({
  title: "Diensten | Turinguard",
  description: "Business Basis, Netwerk Totaal, Hosting en Security Consultancy van Turinguard.",
})

const packages = [
  {
    title: "Business Basis",
    kicker: "Startpunt voor je online aanwezigheid",
    description: "Domainnaam, zakelijk e-mail, website en support in één helder pakket.",
    items: ["Domainnaam en DNS", "Zakelijke e-mail", "Website of eenvoudige site", "Support en beheer"],
    to: "/business-basis",
  },
  {
    title: "Netwerk Totaal",
    kicker: "Netwerken en beheer",
    description: "Netwerkbeheer, monitoring en onderhoud voor omgevingen met meerdere locaties en apparaten.",
    items: [
      "Netwerken met meerdere sites",
      "Routers, switches, access points en camera's",
      "Monitoring en onderhoud",
    ],
    to: "/netwerk-totaal",
  },
  {
    title: "Hosting",
    kicker: "Flexibele infrastructuur",
    description: "VPS, service hosting en beheer voor omgevingen die schaalbaar en stabiel moeten draaien.",
    items: ["VPS hosting", "Service hosting", "Monitoring", "Patch- en back-upbeheer"],
    to: "/hosting",
  },
  {
    title: "Security Consultancy",
    kicker: "De core business",
    description: "Baseline security audit, risicoanalyse-rapport en daarna fix op maat voor jouw omgeving.",
    items: ["Baseline security audit", "Risicoanalyse met rapport", "Fix/advies op maat", "Nazorg en vervolgadvies"],
    to: "/security-consultancy",
    featured: true,
  },
]

const featuredPackage = packages.find((service) => service.featured)
const regularPackages = packages.filter((service) => !service.featured)
</script>

<template>
  <article class="content-page">
    <section class="hero">
      <div class="hero-brand-strip">
        <img src="/img/turinguard-icon.png" alt="Turinguard logo" class="hero-logo" />
      </div>
      <p class="eyebrow">DIENSTEN</p>
      <h1>Onze pakketten</h1>
      <p class="lead">Vier duidelijke pakketten voor groei, netwerkbeheer, stabiliteit en veiligheid. Security is onze kern.</p>
    </section>

    <section v-if="featuredPackage" class="package-featured-wrap">
      <article class="package-card package-card-featured package-card-full">
        <p class="package-kicker">{{ featuredPackage.kicker }}</p>
        <h2>{{ featuredPackage.title }}</h2>
        <p class="package-description">{{ featuredPackage.description }}</p>
        <ul>
          <li v-for="item in featuredPackage.items" :key="item">{{ item }}</li>
        </ul>
        <NuxtLink class="btn btn-primary" :to="featuredPackage.to">Bekijk details</NuxtLink>
      </article>
    </section>

    <section class="package-grid">
      <article
        v-for="service in regularPackages"
        :key="service.title"
        class="package-card"
      >
        <p class="package-kicker">{{ service.kicker }}</p>
        <h2>{{ service.title }}</h2>
        <p class="package-description">{{ service.description }}</p>
        <ul>
          <li v-for="item in service.items" :key="item">{{ item }}</li>
        </ul>
        <NuxtLink class="btn" :class="service.featured ? 'btn-primary' : 'btn-ghost'" :to="service.to">
          Bekijk details
        </NuxtLink>
      </article>
    </section>
  </article>
</template>

<style scoped>
.package-featured-wrap {
  margin-top: 1rem;
}

.package-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.package-card-full {
  width: 100%;
}

.package-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  padding: 1.3rem;
  box-shadow: var(--shadow);
}

.package-card-featured {
  border-color: rgba(31, 111, 185, 0.35);
  background: linear-gradient(180deg, #f8fbff 0%, #eef6ff 100%);
  padding: 1.8rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.package-card-featured::after {
  content: "";
  position: absolute;
  inset: auto -12% -38% auto;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(31, 111, 185, 0.12) 0%, transparent 72%);
  pointer-events: none;
}

.package-kicker {
  margin: 0 0 0.4rem;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #4e6f93;
  font-weight: 700;
}

.package-card-featured .package-kicker {
  margin-bottom: 0.55rem;
}

.package-card h2 {
  margin: 0 0 0.5rem;
}

.package-card-featured h2 {
  font-size: clamp(1.55rem, 2.6vw, 2rem);
}

.package-description {
  margin: 0 0 0.9rem;
  color: var(--muted);
}

.package-card-featured .package-description {
  max-width: 72ch;
  margin: 0 auto 1rem;
}

.package-card ul {
  margin: 0 0 1rem;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.45rem;
  color: var(--muted);
}

.package-card-featured ul {
  list-style: none;
  padding: 0;
  margin: 0 auto 1.2rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.6rem 1rem;
  max-width: 820px;
}

.package-card-featured li {
  border: 1px solid rgba(31, 111, 185, 0.18);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.76);
  padding: 0.62rem 0.7rem;
  font-weight: 600;
  color: #294867;
}

.package-card-featured .btn {
  min-width: 210px;
}

@media (max-width: 900px) {
  .package-grid {
    grid-template-columns: 1fr;
  }

  .package-card-featured {
    padding: 1.25rem;
  }

  .package-card-featured ul {
    grid-template-columns: 1fr;
  }
}
</style>
