<script setup lang="ts">
import { ref, watch } from "vue"
import { useRoute } from "vue-router"

const menuOpen = ref(false)
const route = useRoute()

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  }
)
</script>

<template>
  <div class="page-wrap">
    <header class="topbar">
      <NuxtLink class="brand" to="/">
        <img src="/img/turinguard-icon.png" alt="Turinguard shield logo" class="brand-icon" />
        <span>Turinguard</span>
      </NuxtLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="main-menu"
        aria-label="Open of sluit menu"
        @click="menuOpen = !menuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav id="main-menu" :class="{ 'is-open': menuOpen }">
        <NuxtLink to="/" @click="menuOpen = false">Home</NuxtLink>
        <NuxtLink to="/diensten" @click="menuOpen = false">Diensten</NuxtLink>
        <NuxtLink to="/kennisbank" @click="menuOpen = false">Kennisbank</NuxtLink>
        <NuxtLink to="/over-ons" @click="menuOpen = false">Over ons</NuxtLink>
        <NuxtLink to="/contact" @click="menuOpen = false">Contact</NuxtLink>
      </nav>
    </header>

    <main>
      <NuxtPage />
    </main>

    <footer class="site-footer">
      <div class="footer-grid">
        <section>
          <h3 class="footer-brand">
            <img src="/img/turinguard-icon.png" alt="Turinguard icon" class="footer-icon" />
            <span>Turinguard</span>
          </h3>
          <p>
            Onafhankelijke security audits voor bedrijven die risico's willen
            verlagen en compliance willen versterken.
          </p>
        </section>

        <section>
          <h3>Snelle links</h3>
          <ul class="link-list">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/diensten">Diensten</NuxtLink></li>
            <li><NuxtLink to="/kennisbank">Kennisbank</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </section>

        <section>
          <h3>Over Turinguard</h3>
          <ul class="link-list legal-list">
            <li><NuxtLink to="/over-ons">Over Turinguard</NuxtLink></li>
            <li><NuxtLink to="/nieuws">Nieuwspagina</NuxtLink></li>
            <li><a href="https://www.linkedin.com/company/turinguard/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/Turinguard" target="_blank" rel="noopener noreferrer">Open Source</a></li>          
          </ul>
        </section>

        <section>
          <h3>Legal & Security</h3>
          <ul class="link-list legal-list">
            <li><NuxtLink to="/algemene-voorwaarden">Algemene voorwaarden</NuxtLink></li>
            <li><NuxtLink to="/terms-and-conditions">Terms and conditions</NuxtLink></li>
            <li><NuxtLink to="/sla">Beschikbaarheidsregeling</NuxtLink></li>
            <li><NuxtLink to="/privacy-policy">Privacy policy</NuxtLink></li>
            <li><NuxtLink to="/cookie-policy">Cookie policy</NuxtLink></li>
            <li><NuxtLink to="/security">Beveiliging</NuxtLink></li>
            
          </ul>
        </section>
      </div>

      <div class="footer-bottom">
        <p>© 2026 Turinguard. Alle rechten voorbehouden. KvK: 42030744 | BTW-ID: NLXXXXXXXXXB01</p>
      </div>
    </footer>

    <CookieConsentBanner />
  </div>
</template>
