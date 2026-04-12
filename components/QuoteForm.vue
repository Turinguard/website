<script setup lang="ts">
import { reactive, ref } from "vue"

const props = defineProps<{
  packageName?: string
}>()

const form = reactive({
  name: "",
  company: "",
  email: "",
  phone: "",
  packageName: props.packageName || "Algemene aanvraag",
  budget: "",
  timeline: "",
  message: "",
  website: "",
})

const loading = ref(false)
const sent = ref(false)
const error = ref("")
const formStartedAt = ref(Date.now())

async function submitQuote() {
  if (loading.value) {
    return
  }

  error.value = ""

  if (!form.name.trim() || !form.company.trim() || !form.email.trim() || !form.message.trim()) {
    error.value = "Vul naam, bedrijf, e-mail en je aanvraag in."
    return
  }

  loading.value = true

  try {
    await $fetch("/api/offerte", {
      method: "POST",
      body: {
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        packageName: form.packageName,
        budget: form.budget,
        timeline: form.timeline,
        message: form.message,
        website: form.website,
        formStartedAt: formStartedAt.value,
      },
    })

    sent.value = true
    form.name = ""
    form.company = ""
    form.email = ""
    form.phone = ""
    form.budget = ""
    form.timeline = ""
    form.message = ""
    form.website = ""
    formStartedAt.value = Date.now()
  } catch {
    error.value = "Verzenden lukt nu niet. Probeer het opnieuw of neem contact op via support."
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="offerte-form" class="quote-card">
    <h2>Offerte aanvragen</h2>
    <p class="support-note">Vul het formulier in. We reageren binnen 1 werkdag met een voorstel.</p>

    <form class="support-form" @submit.prevent="submitQuote">
      <div class="support-grid">
        <label>
          Naam
          <input v-model="form.name" type="text" placeholder="Jouw naam" required />
        </label>
        <label>
          Bedrijf
          <input v-model="form.company" type="text" placeholder="Bedrijfsnaam" required />
        </label>
      </div>

      <div class="support-grid">
        <label>
          E-mail
          <input v-model="form.email" type="email" placeholder="naam@bedrijf.nl" required />
        </label>
        <label>
          Telefoon (optioneel)
          <input v-model="form.phone" type="tel" placeholder="06 of vast nummer" />
        </label>
      </div>

      <div class="support-grid">
        <label>
          Pakket
          <input v-model="form.packageName" type="text" placeholder="Bijv. Security Consultancy" />
        </label>
        <label>
          Gewenste start
          <select v-model="form.timeline">
            <option value="">Kies een periode</option>
            <option>Binnen 2 weken</option>
            <option>Binnen 1 maand</option>
            <option>Binnen 3 maanden</option>
            <option>Nog te bepalen</option>
          </select>
        </label>
      </div>

      <label>
        Budgetindicatie (optioneel)
        <input v-model="form.budget" type="text" placeholder="Bijv. 1500-3000 euro per maand" />
      </label>

      <label>
        Omschrijving
        <textarea
          v-model="form.message"
          placeholder="Vertel kort wat je nodig hebt, welke omgeving je hebt en wat de prioriteit is."
          required
        ></textarea>
      </label>

      <label class="quote-hp" aria-hidden="true">
        Website
        <input v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
      </label>

      <button class="btn btn-primary" type="submit" :disabled="loading">
        {{ loading ? "Bezig met verzenden..." : "Verstuur offerteaanvraag" }}
      </button>

      <p v-if="sent" class="quote-success">Bedankt. Je aanvraag is ontvangen. We nemen snel contact op.</p>
      <p v-else-if="error" class="quote-error">{{ error }}</p>
    </form>
  </section>
</template>
