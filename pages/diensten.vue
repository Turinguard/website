<script setup lang="ts">
import { computed } from "vue"

useSeoMeta({
  title: "Diensten | Turinguard",
  description: "Overzicht van security en hostingdiensten van Turinguard.",
})

const services = [
  {
    title: "Security Baseline Audit",
    description: "Een complete nulmeting van je technische en organisatorische beveiliging.",
    to: "/contact",
    visible: false,
  },
  {
    title: "Cloud Security Review",
    description: "Analyse van identity, netwerksegmentatie, secrets en detectie in je cloudomgeving.",
    to: "/contact",
    visible: false,
  },
  {
    title: "Compliance Readiness",
    description: "Toetsing op kaders zoals ISO 27001 en NIS2, inclusief gap-analyse.",
    to: "/contact",
    visible: false,
  },
  {
    title: "Executive Risk Briefing",
    description: "Compacte board-level samenvatting van de grootste risico's en benodigde besluiten.",
    to: "/contact",
    visible: false,
  },
  {
    title: "Webhosting (reseller)",
    description: "Stabiele webhosting met security baseline en beheerondersteuning.",
    to: "/webhosting",
    visible: false,
  },
  {
    title: "VPS Hosting (reseller)",
    description:
      "Flexibele VPS-capaciteit voor maatwerkomgevingen met hardening, patchbeleid en monitoring.",
    to: "/vps-hosting",
    visible: true,
  },
  {
    title: "Zakelijke mail (reseller)",
    description: "Professionele e-maildienst inclusief SPF, DKIM en DMARC inrichting.",
    to: "/zakelijke-mail",
    visible: false,
  },
]

const visibleServices = computed(() => services.filter((service) => service.visible))
</script>

<template>
  <article class="content-page diensten-page">
    <section class="hero">
      <div class="hero-brand-strip">
        <img src="/img/turinguard-logo.png" alt="Turinguard logo" class="hero-logo" />
      </div>
      <p class="eyebrow">DIENSTEN</p>
      <h1>Onze diensten</h1>
      <p class="lead">
        Op dit moment tonen we gericht onze VPS Hosting dienst. Overige diensten staan intern klaar maar zijn
        tijdelijk niet zichtbaar op de pagina.
      </p>
    </section>

    <section class="content-card services-cards reveal in-view">
      <article v-for="service in visibleServices" :key="service.title" class="service-card service-card-full">
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
        <NuxtLink class="btn btn-primary" :to="service.to">Bekijk dienst</NuxtLink>
      </article>
    </section>
  </article>
</template>

<style scoped>
.services-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.service-card {
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-soft);
  padding: 1.2rem;
}

.service-card h2 {
  margin: 0 0 0.45rem;
}

.service-card p {
  margin: 0 0 1rem;
  color: var(--muted);
  max-width: 72ch;
}

.service-card-full {
  width: 100%;
}
</style>
