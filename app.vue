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
        <NuxtLink to="/support" @click="menuOpen = false">Support</NuxtLink>
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
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/diensten">Diensten</NuxtLink></li>
            <li><NuxtLink to="/kennisbank">Kennisbank</NuxtLink></li>
            <li><NuxtLink to="/support">Support</NuxtLink></li>
            <li><NuxtLink to="/over-ons">Over ons</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </section>

        <section>
          <h3>Legal & Security</h3>
          <ul>
            <li><NuxtLink to="/algemene-voorwaarden">Algemene voorwaarden</NuxtLink></li>
            <li><NuxtLink to="/privacy-policy">Privacy policy</NuxtLink></li>
            <li><NuxtLink to="/cookie-policy">Cookie policy</NuxtLink></li>
            <li><NuxtLink to="/security">Security</NuxtLink></li>
            <li><NuxtLink to="/sla">SLA</NuxtLink></li>
          </ul>
        </section>

        <section>
          <h3>Contact</h3>
          <ul>
            <li><a href="mailto:hello@turinguard.io">hello@turinguard.io</a></li>
            <li>Reactie binnen 1 werkdag</li>
            <li>Remote en on-site audits</li>
          </ul>
        </section>
      </div>

      <div class="footer-bottom">
        <p>© 2026 Turinguard. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  </div>
</template>
