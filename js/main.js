// ╔══════════════════════════════════════════════════════════════════╗
// ║  MAIN — Initialize everything                                   ║
// ╚══════════════════════════════════════════════════════════════════╝

const D = PORTFOLIO_DATA;

function renderPageMeta() {
  document.title = D.name;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.content = `Portfolio of ${D.name} — ${D.heroTitles.join(', ')}. ${D.heroDescription}`;
  }
}

function initPortfolio() {
  renderPageMeta();
  renderNav();
  renderHero();
  renderAbout();
  renderExperience();
  renderProjects();
  renderSkills();
  renderEducation();
  renderContact();
  renderFooter();

  // After rendering, set up interactions
  initTypedText();
  initNavbar();
  initScrollReveal();
  initStatCounter();
  initSmoothScroll();
  initScrollAnimations();
  initCardTilt();
  initMagneticButtons();
  initMouseEffects();
  initVantaBackground();
}

// ── GO! ──────────────────────────────────────────────────────────
initPortfolio();
