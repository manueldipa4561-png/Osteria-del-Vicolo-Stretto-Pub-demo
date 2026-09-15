(() => {
  const root = document.documentElement;
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  const progress = document.querySelector('[data-progress]');
  const hero = document.querySelector('.hero');
  const alley = document.querySelector('[data-alley]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover:hover) and (pointer:fine)').matches;

  const closeMenu = () => {
    if (!toggle || !nav) return;
    toggle.classList.remove('is-open');
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.classList.toggle('is-open', !open);
      nav.classList.toggle('is-open', !open);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  const updateScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle('is-scrolled', y > 20);
    if (progress) {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      progress.style.transform = `scaleX(${Math.min(1, y / max)})`;
    }
    if (hero && !reducedMotion) hero.classList.toggle('is-open', y > Math.min(260, window.innerHeight * .28));
  };
  updateScroll();
  window.addEventListener('scroll', updateScroll, { passive: true });

  const reveals = [...document.querySelectorAll('.reveal')];
  if (!reducedMotion && 'IntersectionObserver' in window) {
    root.classList.add('motion-ready');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: .11, rootMargin: '0px 0px -5% 0px' });
    reveals.forEach((el) => observer.observe(el));
    requestAnimationFrame(() => reveals.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight * .95 && r.bottom > 0) el.classList.add('is-visible');
    }));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  if (hero && alley && finePointer && !reducedMotion) {
    hero.addEventListener('pointermove', (event) => {
      const r = hero.getBoundingClientRect();
      const x = (event.clientX - r.left) / r.width - .5;
      const y = (event.clientY - r.top) / r.height - .5;
      alley.style.transform = `translate3d(${x * 10}px,${y * 5}px,0) skewX(${x * 1.2}deg)`;
    });
    hero.addEventListener('pointerleave', () => { alley.style.transform = ''; });
  }
})();
