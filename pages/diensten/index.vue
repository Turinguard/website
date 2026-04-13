<script setup lang="ts">
useSeoMeta({
  title: "Diensten | Turinguard",
  description: "Wij ontzorgen organisaties op netwerk, mail, telefonie en hosting zodat teams kunnen doorwerken.",
})

type ServicePackage = {
  title: string
  kicker: string
  description: string
  items: string[]
  to: string
  featured?: boolean
}

const packages: ServicePackage[] = [
  {
    title: "Business Basis",
    kicker: "Online basis zonder gedoe",
    description: "Domein, zakelijke e-mail, website en support beheerd zodat je door kunt werken.",
    items: ["Domeinnaam en DNS", "Zakelijke e-mail", "WordPress of eenvoudige site", "Support en beheer"],
    to: "/diensten/business-basis",
  },
  {
    title: "Netwerk Totaal",
    kicker: "Netwerk, internet en telefonie geregeld",
    description: "Volledig netwerkbeheer met monitoring zodat je team ongestoord kan werken.",
    items: [
      "Netwerken voor alle locaties",
      "Al het netwerkapparatuur van Unifi (routers, switches, access points)",
      "Real-time monitoring",
      "Proactief onderhoud",
    ],
    to: "/diensten/netwerk-totaal",
  },
  {
    title: "Hosting",
    kicker: "Hosting met beheer",
    description: "VPS en managed hosting waarbij wij beheer en continuiteit dragen.",
    items: ["VPS hosting", "Service hosting", "Monitoring", "Patch- en back-upbeheer"],
    to: "/diensten/hosting",
  },
  {
    title: "Security Consultancy",
    kicker: "Risico's uit de weg",
    description: "Baseline audit, risicoanalyse en fix/advies zodat je veilig door kunt werken.",
    items: ["Baseline security audit", "Risicoanalyse met rapport", "Fix op maat", "Juiste nazorg en vervolgadvies"],
    to: "/diensten/security-consultancy",
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
      <h1>Pakketten met duidelijke uitkomst</h1>
      <p class="lead">
        Kies een dienst die past bij je situatie en ga direct door naar de detailpagina via
        <strong>/diensten/&lt;dienst&gt;</strong>.
      </p>
    </section>

    <section v-if="featuredPackage" class="service-featured-wrap">
      <article class="service-card service-card-featured">
        <p class="service-kicker">{{ featuredPackage.kicker }}</p>
        <h2>{{ featuredPackage.title }}</h2>
        <p class="service-description">{{ featuredPackage.description }}</p>
        <ul>
          <li v-for="item in featuredPackage.items" :key="item">{{ item }}</li>
        </ul>
        <div class="service-footer">
          <NuxtLink class="btn btn-primary" :to="featuredPackage.to">Bekijk dienst</NuxtLink>
        </div>
      </article>
    </section>

    <section class="service-grid">
      <article v-for="service in regularPackages" :key="service.title" class="service-card">
        <p class="service-kicker">{{ service.kicker }}</p>
        <h2>{{ service.title }}</h2>
        <p class="service-description">{{ service.description }}</p>
        <ul>
          <li v-for="item in service.items" :key="item">{{ item }}</li>
        </ul>
        <div class="service-footer">
          <NuxtLink class="btn btn-ghost" :to="service.to">Bekijk dienst</NuxtLink>
        </div>
      </article>
    </section>
  </article>
</template>

<style scoped>
.service-featured-wrap {
  margin-top: 1rem;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.service-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  padding: 1.3rem;
  box-shadow: var(--shadow);
  display: grid;
  gap: 0.7rem;
}

.service-card-featured {
  border-color: rgba(31, 111, 185, 0.35);
  background: linear-gradient(180deg, #f8fbff 0%, #eef6ff 100%);
  padding: 1.8rem;
}

.service-kicker {
  margin: 0;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #4e6f93;
  font-weight: 700;
}

.service-card h2 {
  margin: 0;
}

.service-description {
  margin: 0;
  color: var(--muted);
}

.service-card ul {
  margin: 0;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.45rem;
  color: var(--muted);
}

.service-footer {
  margin-top: 0.35rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  flex-wrap: wrap;
}

@media (max-width: 900px) {
  .service-grid {
    grid-template-columns: 1fr;
  }

  .service-card-featured {
    padding: 1.25rem;
  }
}
</style>
