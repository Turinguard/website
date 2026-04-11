<script setup lang="ts">
useSeoMeta({
  title: "Diensten | Turinguard",
  description: "Business Basis, Business Complete, Hosting en Security pakketten van Turinguard.",
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
    title: "Business Complete",
    kicker: "Beheer voor groeiende organisaties",
    description: "Cloud-, netwerk- en systeembeheer voor omgevingen met meerdere locaties en hogere beheerdruk.",
    items: [
      "Microsoft/Google cloud beheer",
      "Netwerken met meerdere sites",
      "Routers, switches, access points en camera's",
      "Systeembeheer, monitoring en offsite back-uping",
    ],
    to: "/business-complete",
  },
  {
    title: "Hosting",
    kicker: "Flexibele infrastructuur",
    description: "VPS, service hosting en beheer voor omgevingen die schaalbaar en stabiel moeten draaien.",
    items: ["VPS hosting", "Service hosting", "Monitoring", "Patch- en back-upbeheer"],
    to: "/hosting",
  },
  {
    title: "Security pakketten",
    kicker: "De core business",
    description: "Security moet het uitgangspunt zijn. Van audit tot hardening en incident readiness.",
    items: ["Security baseline audit", "Cloud en endpoint review", "Compliance readiness", "Incident response support"],
    to: "/security-pakketten",
    featured: true,
  },
]
</script>

<template>
  <article class="content-page">
    <section class="hero">
      <div class="hero-brand-strip">
        <img src="/img/turinguard-icon.png" alt="Turinguard logo" class="hero-logo" />
      </div>
      <p class="eyebrow">DIENSTEN</p>
      <h1>Onze pakketten</h1>
      <p class="lead">Vier duidelijke pakketten voor groei, beheer, stabiliteit en veiligheid. Security is onze kern.</p>
    </section>

    <section class="package-grid">
      <article
        v-for="service in packages"
        :key="service.title"
        class="package-card"
        :class="{ 'package-card-featured': service.featured }"
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
.package-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1rem;
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
}

.package-kicker {
  margin: 0 0 0.4rem;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #4e6f93;
  font-weight: 700;
}

.package-card h2 {
  margin: 0 0 0.5rem;
}

.package-description {
  margin: 0 0 0.9rem;
  color: var(--muted);
}

.package-card ul {
  margin: 0 0 1rem;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.45rem;
  color: var(--muted);
}

@media (max-width: 900px) {
  .package-grid {
    grid-template-columns: 1fr;
  }
}
</style>
