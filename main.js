// CSS is loaded from index.html for direct browser usage.

const images = {
  hero: 'https://images.pexels.com/photos/16514703/pexels-photo-16514703.jpeg?auto=compress&cs=tinysrgb&w=1800',
  menu: 'https://images.pexels.com/photos/33618578/pexels-photo-33618578.jpeg?auto=compress&cs=tinysrgb&w=1200',
  locationOne: 'https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&w=1200',
  locationTwo: 'https://images.pexels.com/photos/17593509/pexels-photo-17593509.jpeg?auto=compress&cs=tinysrgb&w=1200',
  story: 'https://images.pexels.com/photos/8474151/pexels-photo-8474151.jpeg?auto=compress&cs=tinysrgb&w=1200',
  galleryOne: 'https://images.pexels.com/photos/34104248/pexels-photo-34104248.jpeg?auto=compress&cs=tinysrgb&w=1000',
  galleryTwo: 'https://images.pexels.com/photos/27362267/pexels-photo-27362267.jpeg?auto=compress&cs=tinysrgb&w=1000',
  galleryThree: 'https://images.pexels.com/photos/36737003/pexels-photo-36737003.jpeg?auto=compress&cs=tinysrgb&w=1000',
}

document.querySelector('#app').innerHTML = `
  <header class="site-header" id="top">
    <a class="brand" href="#top" aria-label="Taisha — domů">TAISHA<span class="brand-dot">.</span></a>
    <nav class="desktop-nav" aria-label="Hlavní navigace">
      <a href="menu.html">Menu</a>
      <a href="#locations">Pobočky</a>
      <a href="#about">O nás</a>
      <a href="#space">Prostor</a>
      <a href="https://www.instagram.com/taisha.cafe/" target="_blank" rel="noopener noreferrer">Instagram</a>
    </nav>
    <a class="header-visit" href="#find-us">Navštívit <span>↗</span></a>
    <button class="menu-toggle" type="button" aria-label="Otevřít menu" aria-expanded="false">
      <span></span><span></span>
    </button>
  </header>

  <main>
    <section class="hero section-pad">
      <div class="hero-copy reveal">
        <p class="eyebrow">Matcha · káva · pečivo</p>
        <h1>Taisha<br /><em>kavárna</em></h1>
        <p class="hero-intro">Výběrová káva, japonská matcha a dezerty inspirované Asií. Místo, kam si zajdete na dobrý nápoj i na chvíli klidu.</p>
        <div class="hero-actions">
          <a class="button button-dark" href="menu.html">Zobrazit menu <span>↗</span></a>
          <a class="text-link" href="#locations">Kde nás najdete <span>↘</span></a>
        </div>
      </div>
      <div class="hero-visual reveal reveal-delay">
        <img src="${images.hero}" alt="Interiér kavárny s dřevěným posezením" />
        <div class="hero-stamp" aria-hidden="true"><span>MATCHA<br />KÁVA<br />PEČIVO</span></div>
        <p class="image-caption">Campus<br /><span>Brno</span></p>
      </div>
      <div class="scroll-note"><span class="scroll-line"></span>Posuňte se dolů</div>
    </section>

    <section class="locations section-pad" id="locations">
      <div class="section-heading reveal">
        <p class="eyebrow">Pobočka v Brně — další v Jihlavě</p>
        <h2>Kde nás<br /><em>najdete</em></h2>
      </div>
      <div class="location-grid">
        <article class="location-card reveal">
          <div class="card-image"><img src="${images.locationOne}" alt="Taisha — Campus, Brno" /><span class="card-number">01</span></div>
          <div class="card-content"><div><p class="eyebrow">Brno</p><h3>Campus</h3></div><a class="circle-arrow" href="#find-us" aria-label="Zobrazit pobočku Campus">↗</a><p class="location-meta">Kampus, Brno<br /><span>Po–Pá 8–20 · So–Ne 9–20</span></p></div>
        </article>
        <article class="location-card reveal reveal-delay coming-soon">
          <div class="card-image">
            <img src="${images.locationTwo}" alt="Taisha — Jihlava (coming soon)" />
            <span class="card-number">02</span>
          </div>
          <div class="card-content">
            <div class="card-header">
              <div class="coming-label">JIHLAVA · <span class="coming-badge">PŘIPRAVUJEME</span></div>
              <p class="eyebrow">Jihlava</p>
              <h3>Nová pobočka</h3>
              <p class="coming-note">Otevíráme listopad 2026</p>
            </div>
            <a class="circle-arrow" href="#find-us" aria-label="Plánované otevření Jihlava">↗</a>
            <p class="location-meta">Plánované otevření: listopad 2026<br /><span>Brzy více informací</span></p>
          </div>
        </article>
      </div>
    </section>

    <section class="menu-section section-pad" id="menu">
      <div class="menu-top reveal"><div><p class="eyebrow">Co u nás dostanete</p><h2>Naše<br /><em>menu</em></h2></div><p class="menu-note">Káva, matcha a čerstvé pečivo.<br />Pečeme každé ráno.</p></div>
      <div class="menu-layout">
        <div class="menu-list reveal">
          <div class="menu-row"><div><span class="menu-index">01</span><h3>Matcha</h3></div><p>ceremoniální · latte · ledová</p><span class="menu-plus">+</span></div>
          <div class="menu-row"><div><span class="menu-index">02</span><h3>Káva</h3></div><p>espresso · filtrovaná · ovesné</p><span class="menu-plus">+</span></div>
          <div class="menu-row"><div><span class="menu-index">03</span><h3>Pečivo a sladké</h3></div><p>croissanty · dorty · sušenky</p><span class="menu-plus">+</span></div>
          <a class="button button-outline" href="menu.html">Zobrazit celé menu <span>↗</span></a>
        </div>
        <div class="menu-image reveal reveal-delay"><img src="${images.menu}" alt="Matcha latte a pečivo na stole" /><span>Čerstvé každé<br />ráno.</span></div>
      </div>
    </section>

    <section class="story section-pad" id="about">
      <div class="story-image reveal"><img src="${images.story}" alt="Čajový set na dřevěném stole" /><span class="vertical-label">Taisha</span></div>
      <div class="story-copy reveal reveal-delay"><p class="eyebrow">O nás</p><h2>O<br /><em>Taishe</em></h2><p>Místo, kde se potkává svět výběrové kávy s kouzlem japonské matchy. V Taisha věříme, že na dobrém nápoji záleží stejně jako na okamžiku, ve kterém si ho vychutnáte. Připravujeme výběrovou i filtrovanou kávu, autentické matcha drinky a čerstvé dezerty, které spojují jednoduchost s inspirací z Asie. <br>

Každý šálek i každý dezert připravujeme s důrazem na kvalitní suroviny, vyváženou chuť a poctivé zpracování. Taisha je místo pro ranní kávu, odpolední matchu i chvíle, kdy si jednoduše chcete na chvíli odpočinout od okolního světa.</p><a class="text-link" href="#space">Podívat se na prostor <span>↘</span></a></div>
    </section>

    <section class="space-section" id="space">
      <div class="space-heading section-pad reveal"><p class="eyebrow">Prostor</p><h2>Naše<br /><em>kavárna</em></h2></div>
      <div class="gallery"><div class="gallery-item gallery-wide reveal"><img src="${images.galleryOne}" alt="Posezení v kavárně" /><span>01 — Campus</span></div><div class="gallery-item gallery-tall reveal reveal-delay"><img src="${images.galleryTwo}" alt="Kávový bar" /><span>02 — Jihlava (coming)</span></div><div class="gallery-item gallery-small reveal"><img src="${images.galleryThree}" alt="Matcha a pečivo" /><span>03 — matcha</span></div></div>
    </section>

    <section class="find-us section-pad" id="find-us">
      <div class="find-heading reveal"><p class="eyebrow">Otevírací doba a adresa</p><h2>Najdete nás<br /><em>tady</em></h2><p>Přijďte se podívat na některou z poboček.</p></div>
      <div class="find-list reveal reveal-delay">
        <div class="find-row"><span class="find-number">01</span><div><h3>Campus, Brno</h3><p>Kampus<br />Brno</p></div><div class="find-hours"><span>Otevírací doba</span><p>Po–Pá 8–20<br />So–Ne 9–20</p></div><a class="circle-arrow" href="https://maps.google.com" target="_blank" rel="noreferrer" aria-label="Otevřít Campus v Google Maps">↗</a></div>
        <div class="find-row coming-soon"><span class="find-number">02</span><div><div class="coming-label">JIHLAVA · <span class="coming-badge">PŘIPRAVUJEME</span></div><h3>Jihlava</h3><p>Plánované otevření<br />listopad 2026</p></div><div class="find-hours"><span>Stav</span><p>Plánované otevření — sledujte nás</p></div><a class="circle-arrow" href="#" aria-label="Informace o otevření Jihlava">↗</a></div>
      </div>
    </section>
  </main>

  <footer class="site-footer" id="instagram">
    <div class="footer-top">
      <a class="brand footer-brand" href="#top">TAISHA<span class="brand-dot">.</span></a>

      <div class="footer-meta">
        <div class="footer-contact">
          <h4>Kontakt</h4>
          <ul>
            <li class="contact-item contact-phone">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 4.5a2.5 2.5 0 0 1 2.5-2.5h5A2.5 2.5 0 0 1 17 4.5v15A2.5 2.5 0 0 1 14.5 22h-5A2.5 2.5 0 0 1 7 19.5v-15Z"/><path d="M9.5 2.8h5"/><path d="M11 18.5h2"/><path d="M10.5 7.2h3"/><path d="M10.5 10.2h3"/></svg>
              <a href="tel:704533333">704 533 333</a>
            </li>
            <li class="contact-item contact-email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h12a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5v-9Z"/><path d="m4.5 7 7.5 6 7.5-6"/></svg>
              <a href="mailto:info@taisha.cz">info@taisha.cz</a>
            </li>
          </ul>
        </div>

        <div class="footer-socials">
          <h4>Sledujte nás</h4>
          <div class="footer-social-grid">
            <div class="social-branch">

              <div class="social-links">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" class="social-link social-facebook" aria-label="Facebook OC Campus">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 8.5V6.8c0-.9.6-1.3 1.3-1.3h1.6V2.8h-2.8c-2.7 0-3.9 1.7-3.9 3.9v1.8H7.5v3.4h2.4V21h3.6v-9.1h2.7l.4-3.4h-3.1Z" fill="currentColor"/></svg>
                </a>
                <a href="https://www.instagram.com/taisha.cafe" target="_blank" rel="noreferrer" class="social-link social-instagram" aria-label="Instagram OC Campus">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor"/></svg>
                </a>
                <a href="https://www.tiktok.com/@taisha.cafe" target="_blank" rel="noreferrer" class="social-link social-tiktok" aria-label="TikTok OC Campus">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 3.2c.8 2 2.2 3.1 4.4 3.4v2.7c-1.7-.1-3.2-.7-4.4-1.8v7.1a5.2 5.2 0 1 1-5.2-5.2c.5 0 .9.1 1.3.2v2.8a2.7 2.7 0 1 0 2.6 2.7V3.2h1.3Z" fill="currentColor"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="footer-tagline">Matcha, káva<br />a pečivo.</p>
    </div>
    <div class="footer-bottom"><span>© 2026 Taisha</span><a href="#top">Nahoru ↑</a></div>
  </footer>

  <div class="mobile-menu" aria-hidden="true"><nav><a href="#menu">Menu</a><a href="#locations">Pobočky</a><a href="#about">O nás</a><a href="#space">Prostor</a><a href="#instagram">Instagram</a></nav></div>
`

const header = document.querySelector('.site-header')
const menuToggle = document.querySelector('.menu-toggle')
const mobileMenu = document.querySelector('.mobile-menu')

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 24))
menuToggle.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('menu-open')
  menuToggle.setAttribute('aria-expanded', isOpen)
  mobileMenu.setAttribute('aria-hidden', !isOpen)
})
document.querySelectorAll('.mobile-menu a').forEach((link) => link.addEventListener('click', () => {
  document.body.classList.remove('menu-open')
  menuToggle.setAttribute('aria-expanded', 'false')
  mobileMenu.setAttribute('aria-hidden', 'true')
}))

const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target) }
}), { threshold: 0.12 })
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))
