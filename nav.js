(function () {
  document.body.insertAdjacentHTML('afterbegin', `
    <button class="menu-btn" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
    <a class="site-title" href="/">b0nd0.com</a>
    <div class="lang-toggle">
      <button data-lang="ja">JA</button>
      <span>/</span>
      <button data-lang="en">EN</button>
    </div>
    <div class="overlay" id="overlay"></div>
    <aside class="side-panel" id="sidePanel">
      <nav>
        <a href="/about">About</a>
        <a href="/playground">Playground</a>
        <a href="/contact">Contact</a>
      </nav>
    </aside>
  `);

  const btn   = document.querySelector('.menu-btn');
  const panel = document.getElementById('sidePanel');
  const overlay = document.getElementById('overlay');

  // Highlight current page
  const path = location.pathname.replace(/\/$/, '') || '/';
  panel.querySelectorAll('a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  function open()  { panel.classList.add('open'); overlay.classList.add('open'); btn.classList.add('open'); }
  function close() { panel.classList.remove('open'); overlay.classList.remove('open'); btn.classList.remove('open'); }

  btn.addEventListener('click', () => panel.classList.contains('open') ? close() : open());
  overlay.addEventListener('click', close);
  panel.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

  // Language toggle
  const lang = localStorage.getItem('lang') || 'en';
  function setLang(l) {
    document.documentElement.setAttribute('data-lang', l);
    localStorage.setItem('lang', l);
    document.querySelectorAll('.lang-toggle button').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === l);
    });
  }
  setLang(lang);
  document.querySelectorAll('.lang-toggle button').forEach(b => {
    b.addEventListener('click', () => setLang(b.dataset.lang));
  });
})();
