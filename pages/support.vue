<script setup lang="ts">
import { computed, reactive } from "vue"

useSeoMeta({
  title: "Support | Turinguard",
  description: "Open een supportticket, bekijk prioriteiten en vind antwoorden in de knowledge base.",
})

const form = reactive({
  name: "",
  company: "",
  email: "",
  priority: "Medium",
  subject: "",
  message: "",
})

const mailtoLink = computed(() => {
  const subject = `[${form.priority}] ${form.subject || "Nieuwe supportvraag"}`
  const body = [
    `Naam: ${form.name || "-"}`,
    `Bedrijf: ${form.company || "-"}`,
    `Email: ${form.email || "-"}`,
    `Prioriteit: ${form.priority}`,
    "",
    "Omschrijving:",
    form.message || "-",
  ].join("\n")

  return `mailto:support@turinguard.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
})
</script>

<template>
  <article class="content-page">
    <section class="hero">
      <img src="/img/turinguard-logo.png" alt="Turinguard logo" class="hero-logo" />
      <p class="eyebrow">SUPPORT SYSTEEM</p>
      <h1>Support & Incident Intake</h1>
      <p class="lead">
        Meld incidenten en supportvragen direct bij ons team. Voor kritieke issues starten
        we direct triage en krijg je terugkoppeling volgens SLA.
      </p>
    </section>

    <section class="support-layout reveal">
      <section class="support-card">
        <h2>Open een supportticket</h2>
        <form class="support-form" @submit.prevent>
          <div class="support-grid">
            <label>
              Naam
              <input v-model="form.name" type="text" placeholder="Jouw naam" />
            </label>
            <label>
              Bedrijf
              <input v-model="form.company" type="text" placeholder="Bedrijfsnaam" />
            </label>
          </div>

          <div class="support-grid">
            <label>
              E-mail
              <input v-model="form.email" type="email" placeholder="naam@bedrijf.nl" />
            </label>
            <label>
              Prioriteit
              <select v-model="form.priority">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </label>
          </div>

          <label>
            Onderwerp
            <input v-model="form.subject" type="text" placeholder="Bijv. verdachte login activiteit" />
          </label>

          <label>
            Omschrijving
            <textarea v-model="form.message" placeholder="Beschrijf impact, systemen en urgentie."></textarea>
          </label>

          <a class="btn btn-primary" :href="mailtoLink">Verstuur ticket</a>
          <p class="support-note">Je e-mailclient opent met een ingevulde supportticket-template.</p>
        </form>
      </section>

      <aside class="support-card">
        <h3>SLA responstijden</h3>
        <ul class="list-clean">
          <li>Critical: binnen 1 uur</li>
          <li>High: binnen 4 uur</li>
          <li>Medium: binnen 1 werkdag</li>
          <li>Low: binnen 2 werkdagen</li>
        </ul>

        <h3>Knowledge base</h3>
        <ul class="list-clean">
          <li><NuxtLink to="/kennisbank/phishing-herkennen">Phishing herkennen</NuxtLink></li>
          <li><NuxtLink to="/kennisbank/incident-response-checklist">Incident response checklist</NuxtLink></li>
          <li><NuxtLink to="/kennisbank/wachtwoordbeleid">Wachtwoordbeleid opzetten</NuxtLink></li>
        </ul>
      </aside>
    </section>
  </article>
</template>
