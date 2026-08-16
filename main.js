import './style.css'

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
      <a href="#menu">Menu</a>
      <a href="#locations">Pobočky</a>
      <a href="#about">O nás</a>
      <a href="#space">Prostor</a>
      <a href="#instagram">Instagram</a>
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
        <p class="hero-intro">Kavárna v Brně. Dvě pobočky — v Černých Polích a na Veveří. Přijďte si na matchu, kávu nebo croissant.</p>
        <div class="hero-actions">
          <a class="button button-dark" href="#menu">Zobrazit menu <span>↗</span></a>
          <a class="text-link" href="#locations">Kde nás najdete <span>↘</span></a>
        </div>
      </div>
      <div class="hero-visual reveal reveal-delay">
        <img src="${images.hero}" alt="Interiér kavárny s dřevěným posezením" />
        <div class="hero-stamp" aria-hidden="true"><span>MATCHA<br />KÁVA<br />PEČIVO</span></div>
        <p class="image-caption">Černá Pole<br /><span>Brno 616</span></p>
      </div>
      <div class="scroll-note"><span class="scroll-line"></span>Posuňte se dolů</div>
    </section>

    <section class="locations section-pad" id="locations">
      <div class="section-heading reveal">
        <p class="eyebrow">Dvě pobočky v Brně</p>
        <h2>Kde nás<br /><em>najdete</em></h2>
      </div>
      <div class="location-grid">
        <article class="location-card reveal">
          <div class="card-image"><img src="${images.locationOne}" alt="Kavárna na Vinohradech" /><span class="card-number">01</span></div>
          <div class="card-content"><div><p class="eyebrow">Brno 616</p><h3>Černá Pole</h3></div><a class="circle-arrow" href="#find-us" aria-label="Zobrazit pobočku Černá Pole">↗</a><p class="location-meta">tř. Kpt. Jaroše 12, Brno 616<br /><span>Po–Pá 8–20 · So–Ne 9–20</span></p></div>
        </article>
        <article class="location-card reveal reveal-delay">
          <div class="card-image"><img src="${images.locationTwo}" alt="Kavárna na Veveří" /><span class="card-number">02</span></div>
          <div class="card-content"><div><p class="eyebrow">Brno 602</p><h3>Veveří</h3></div><a class="circle-arrow" href="#find-us" aria-label="Zobrazit pobočku Veveří">↗</a><p class="location-meta">Veveří 51, Brno 602<br /><span>Po–Pá 8–19 · So–Ne 9–19</span></p></div>
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
          <a class="button button-outline" href="#find-us">Přijďte ochutnat <span>↗</span></a>
        </div>
        <div class="menu-image reveal reveal-delay"><img src="${images.menu}" alt="Matcha latte a pečivo na stole" /><span>Čerstvé každé<br />ráno.</span></div>
      </div>
    </section>

    <section class="story section-pad" id="about">
      <div class="story-image reveal"><img src="${images.story}" alt="Čajový set na dřevěném stole" /><span class="vertical-label">Taisha</span></div>
      <div class="story-copy reveal reveal-delay"><p class="eyebrow">O nás</p><h2>O<br /><em>Taishe</em></h2><p>Taisha je brněnská kavárna. Začali jsme s jednou pobočkou v Černých Polích, druhá přibyla na Veveří. Děláme matchu, výběrovou kávu a pečeme vlastní pečivo.</p><a class="text-link" href="#space">Podívat se na prostor <span>↘</span></a></div>
    </section>

    <section class="space-section" id="space">
      <div class="space-heading section-pad reveal"><p class="eyebrow">Prostor</p><h2>Naše<br /><em>kavárna</em></h2></div>
      <div class="gallery"><div class="gallery-item gallery-wide reveal"><img src="${images.galleryOne}" alt="Posezení v kavárně" /><span>01 — Černá Pole</span></div><div class="gallery-item gallery-tall reveal reveal-delay"><img src="${images.galleryTwo}" alt="Kávový bar" /><span>02 — Veveří</span></div><div class="gallery-item gallery-small reveal"><img src="${images.galleryThree}" alt="Matcha a pečivo" /><span>03 — matcha</span></div></div>
    </section>

    <section class="find-us section-pad" id="find-us">
      <div class="find-heading reveal"><p class="eyebrow">Otevírací doba a adresa</p><h2>Najdete nás<br /><em>tady</em></h2><p>Přijďte se podívat na některou z poboček.</p></div>
      <div class="find-list reveal reveal-delay">
        <div class="find-row"><span class="find-number">01</span><div><h3>Černá Pole</h3><p>tř. Kpt. Jaroše 12<br />Brno 616</p></div><div class="find-hours"><span>Otevírací doba</span><p>Po–Pá 8–20<br />So–Ne 9–20</p></div><a class="circle-arrow" href="https://maps.google.com" target="_blank" rel="noreferrer" aria-label="Otevřít Černá Pole v Google Maps">↗</a></div>
        <div class="find-row"><span class="find-number">02</span><div><h3>Veveří</h3><p>Veveří 51<br />Brno 602</p></div><div class="find-hours"><span>Otevírací doba</span><p>Po–Pá 8–19<br />So–Ne 9–19</p></div><a class="circle-arrow" href="https://maps.google.com" target="_blank" rel="noreferrer" aria-label="Otevřít Veveří v Google Maps">↗</a></div>
      </div>
    </section>
  </main>

  <footer class="site-footer" id="instagram"><div class="footer-top"><a class="brand footer-brand" href="#top">TAISHA<span class="brand-dot">.</span></a><p>Matcha, káva<br />a pečivo.</p><a class="footer-social" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram <span>↗</span></a></div><div class="footer-bottom"><span>© 2024 Taisha</span><span>Brno</span><a href="#top">Nahoru ↑</a></div></footer>

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
