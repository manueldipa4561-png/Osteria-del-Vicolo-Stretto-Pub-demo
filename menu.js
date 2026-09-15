(() => {
  const root = document.documentElement;
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  const progress = document.querySelector('[data-progress]');
  const categoryNav = document.querySelector('[data-category-nav]');
  const categoryLinks = [...document.querySelectorAll('[data-category-link]')];
  const categories = [...document.querySelectorAll('[data-category]')];
  const reveals = [...document.querySelectorAll('.reveal')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
  }

  const setActiveCategory = (id) => {
    categoryLinks.forEach((link) => {
      const active = link.dataset.categoryLink === id;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'true'); else link.removeAttribute('aria-current');
    });
    const activeLink = categoryLinks.find((link) => link.dataset.categoryLink === id);
    if (activeLink && categoryNav && window.innerWidth <= 900) {
      activeLink.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const updateScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle('is-scrolled', y > 20);
    if (progress) {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      progress.style.transform = `scaleX(${Math.min(1, y / max)})`;
    }
  };
  updateScroll();
  window.addEventListener('scroll', updateScroll, { passive: true });

  categoryLinks.forEach((link) => link.addEventListener('click', () => {
    const id = link.dataset.categoryLink;
    setActiveCategory(id);
    setTimeout(() => setActiveCategory(id), 500);
  }));

  if ('IntersectionObserver' in window && categories.length) {
    const categoryObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveCategory(visible.target.dataset.category);
    }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, .1, .25, .5] });
    categories.forEach((section) => categoryObserver.observe(section));
  } else if (categories[0]) setActiveCategory(categories[0].dataset.category);

  if (!reducedMotion && 'IntersectionObserver' in window) {
    root.classList.add('motion-ready');
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: .08, rootMargin: '0px 0px -4% 0px' });
    reveals.forEach((el) => revealObserver.observe(el));
    requestAnimationFrame(() => reveals.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight * .95 && r.bottom > 0) el.classList.add('is-visible');
    }));
    setTimeout(() => reveals.forEach((el) => el.classList.add('is-visible')), 1200);
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }
})();
