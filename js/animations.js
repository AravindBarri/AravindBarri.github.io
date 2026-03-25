// ╔══════════════════════════════════════════════════════════════════╗
// ║  ANIMATIONS — Scroll reveals, sticky scroll, tilt, magnetic     ║
// ╚══════════════════════════════════════════════════════════════════╝

// ── Scroll reveal ────────────────────────────────────────────────
function initScrollReveal() {
  // About text slides from left, stats from right
  document.querySelectorAll('.about-text').forEach(el => el.classList.add('reveal-left'));
  document.querySelectorAll('.about-stats').forEach(el => el.classList.add('reveal-right'));

  // Timeline items alternate left/right
  document.querySelectorAll('.timeline-item').forEach((el, i) => {
    el.classList.add(i % 2 === 0 ? 'reveal-left' : 'reveal-right');
  });

  // Grid items scale up
  document.querySelectorAll('.project-card, .skill-category, .edu-card, .stat-card, .contact-card').forEach(el => {
    el.classList.add('reveal');
  });

  // Certs slide from right
  document.querySelectorAll('.cert-item').forEach(el => el.classList.add('reveal-right'));

  // Subsection title
  document.querySelectorAll('.subsection-title').forEach(el => el.classList.add('reveal'));

  function check() {
    const wh = window.innerHeight;
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .section-title').forEach(el => {
      if (el.getBoundingClientRect().top < wh - 60) {
        el.classList.add('visible');
      }
    });

    // Timeline line grow
    const timeline = document.querySelector('.timeline');
    if (timeline && timeline.getBoundingClientRect().top < wh - 100) {
      timeline.classList.add('line-visible');
    }
  }

  window.addEventListener('scroll', check);
  window.addEventListener('load', check);
  check();
}

// ── Apple-style scroll animations ────────────────────────────────
function initScrollAnimations() {
  // Disable on small/old devices (720p, 5.5" screens ≤ 375px)
  if (window.innerWidth <= 375) return;

  const heroContent = document.querySelector('.hero-content');
  const heroGrid = document.querySelector('.hero-bg-grid');
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const sections = document.querySelectorAll('.section');

  // ── Calculate sticky top for each section ──
  function setStickyTops() {
    const wh = window.innerHeight;
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      if (sectionHeight > wh) {
        section.style.top = -(sectionHeight - wh) + 'px';
      } else {
        section.style.top = '0px';
      }
    });
  }

  setStickyTops();
  window.addEventListener('resize', setStickyTops);

  let ticking = false;

  function update() {
    ticking = false;
    const scrollY = window.scrollY;
    const wh = window.innerHeight;

    // ── Hero parallax ──
    if (heroContent) {
      const progress = Math.min(scrollY / (wh * 0.65), 1);
      const translateY = scrollY * 0.35;
      const scale = 1 - progress * 0.15;
      const opacity = Math.max(1 - progress * 1.5, 0);
      heroContent.style.transform = `translateY(${translateY}px) scale(${scale})`;
      heroContent.style.opacity = opacity;
    }

    if (heroGrid) {
      heroGrid.style.transform = `translateY(${scrollY * 0.15}px)`;
    }

    if (scrollIndicator) {
      scrollIndicator.style.opacity = Math.max(1 - scrollY / 150, 0);
    }

    // ── Section content entrance ──
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const container = section.querySelector('.container');
      if (!container) return;

      if (rect.top < wh && rect.bottom > 0) {
        const enterProgress = Math.min(Math.max((wh - rect.top) / (wh * 0.45), 0), 1);
        const eased = 1 - Math.pow(1 - enterProgress, 3);
        const scale = 0.92 + eased * 0.08;
        const opacity = eased;
        const translateY = (1 - eased) * 40;
        container.style.transform = `scale(${scale}) translateY(${translateY}px)`;
        container.style.opacity = opacity;
      }
    });
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  update();
}

// ── 3D tilt effect on cards (desktop only) ──────────────────────
function initCardTilt() {
  if (window.innerWidth <= 768) return;

  const cards = document.querySelectorAll('.project-card, .edu-card, .stat-card, .skill-category');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * -6;
      const rotateY = (x - centerX) / centerX * 6;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

// ── Magnetic hover on buttons ───────────────────────────────────
function initMagneticButtons() {
  if (window.innerWidth <= 768) return;

  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}
