<template>
  <div class="page-wrap">
    <header class="topbar">
      <NuxtLink class="brand" to="/">
        <img src="/img/turinguard-icon.png" alt="Turinguard shield logo" class="brand-icon" />
        <span>Turinguard</span>
      </NuxtLink>
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/diensten">Diensten</NuxtLink>
        <NuxtLink to="/over-ons">Over ons</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
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
            <li><NuxtLink to="/over-ons">Over ons</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
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
