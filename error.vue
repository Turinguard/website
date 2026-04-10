<script setup lang="ts">
import { computed } from "vue"
import type { NuxtError } from "#app"
import { clearError } from "#app"

const props = defineProps({
  error: {
    type: Object as () => NuxtError,
    required: true,
  },
})

const statusCode = computed(() => Number(props.error?.statusCode || 500))

const errorMeta = computed(() => {
  const code = statusCode.value

  if (code === 404) {
    return {
      title: "Pagina niet gevonden",
      description: "De opgevraagde pagina bestaat niet of is verplaatst.",
    }
  }

  if (code === 403) {
    return {
      title: "Toegang geweigerd",
      description: "Je hebt geen rechten om deze pagina te bekijken.",
    }
  }

  if (code >= 500) {
    return {
      title: "Serverfout",
      description: "Er ging iets mis aan onze kant. Probeer het zo opnieuw.",
    }
  }

  return {
    title: "Er is iets misgegaan",
    description: "De aanvraag kon niet correct worden verwerkt.",
  }
})

const details = computed(() => props.error?.statusMessage || props.error?.message || "Onbekende fout")

const goHome = () => clearError({ redirect: "/" })
</script>

<template>
  <div class="error-wrap">
    <section class="error-card">
      <img src="/img/turinguard-icon.png" alt="Turinguard" class="error-logo" />
      <p class="error-code">HTTP {{ statusCode }}</p>
      <h1>{{ errorMeta.title }}</h1>
      <p class="error-description">{{ errorMeta.description }}</p>
      <p class="error-details">{{ details }}</p>

      <div class="error-actions">
        <button class="btn btn-primary" type="button" @click="goHome">Terug naar home</button>
        <button class="btn btn-ghost" type="button" @click="clearError()">Opnieuw proberen</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.error-wrap {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 1.2rem;
  background: radial-gradient(circle at 0% 0%, rgba(31, 111, 185, 0.08) 0%, transparent 30%),
    linear-gradient(180deg, #f8fbff 0%, #f3f6fb 65%, #eef3fa 100%);
}

.error-card {
  width: min(680px, 100%);
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  border: 1px solid #d8e2ef;
  border-radius: 18px;
  box-shadow: 0 8px 24px rgba(17, 36, 64, 0.08);
  padding: 2rem;
  text-align: center;
}

.error-logo {
  width: 74px;
  height: 74px;
  object-fit: contain;
  margin-bottom: 0.5rem;
}

.error-code {
  margin: 0;
  color: #4e6f93;
  letter-spacing: 0.12em;
  font-size: 0.78rem;
  font-weight: 700;
}

h1 {
  margin: 0.35rem 0 0.4rem;
  color: #162334;
  font-family: "Space Grotesk", sans-serif;
}

.error-description {
  margin: 0;
  color: #5f7088;
}

.error-details {
  margin: 0.8rem auto 0;
  max-width: 56ch;
  color: #667992;
  font-size: 0.93rem;
}

.error-actions {
  margin-top: 1.2rem;
  display: flex;
  gap: 0.65rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 560px) {
  .error-card {
    padding: 1.25rem;
  }

  .error-actions {
    flex-direction: column;
  }

  .error-actions .btn {
    width: 100%;
  }
}
</style>
