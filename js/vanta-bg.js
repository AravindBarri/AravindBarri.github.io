/* ========================================
   Vanta.js Backgrounds — Per-section effects
   Only active sections render (IntersectionObserver)
   ======================================== */

function initVantaBackground() {
  if (typeof VANTA === 'undefined') return;
  if (window.innerWidth <= 768) return; // skip on mobile for performance

  const T = window.THREE;
  const p5Effects = ['FOG', 'CLOUDS', 'CLOUDS2'];

  // ── Effect configs per section ──
  const sectionEffects = {
    'vanta-bg': {
      effect: 'WAVES',
      config: {
        color: 0x0a0a1a,
        shininess: 35,
        waveHeight: 20,
        waveSpeed: 0.25,
        zoom: 0.75
      }
    },
    'vanta-about': {
      effect: 'NET',
      config: {
        color: 0x4F46E5,
        backgroundColor: 0x0F172A,
        points: 8,
        maxDistance: 20,
        spacing: 18,
        showDots: true
      }
    },
    'vanta-experience': {
      effect: 'DOTS',
      config: {
        color: 0x06B6D4,
        color2: 0x4F46E5,
        backgroundColor: 0x1E293B,
        size: 2.5,
        spacing: 30,
        showLines: false
      }
    },
    'vanta-projects': {
      effect: 'BIRDS',
      config: {
        backgroundColor: 0x0F172A,
        color1: 0x4F46E5,
        color2: 0x06B6D4,
        colorMode: 'lerp',
        birdSize: 1.2,
        wingSpan: 25,
        quantity: 4,
        speedLimit: 4,
        separation: 60,
        alignment: 40,
        cohesion: 30
      }
    },
    'vanta-skills': {
      effect: 'GLOBE',
      config: {
        backgroundColor: 0x1E293B,
        color: 0x4F46E5,
        color2: 0x06B6D4,
        size: 1.2
      }
    },
    'vanta-education': {
      effect: 'RINGS',
      config: {
        backgroundColor: 0x0F172A,
        color: 0x4F46E5
      }
    },
    'vanta-contact': {
      effect: 'FOG',
      config: {
        highlightColor: 0x4F46E5,
        midtoneColor: 0x1E293B,
        lowlightColor: 0x0F172A,
        baseColor: 0x0a0a1a,
        blurFactor: 0.5,
        speed: 1.2,
        zoom: 1.0
      }
    }
  };

  // ── Track active Vanta instances ──
  const activeInstances = {};

  function createEffect(elId) {
    if (activeInstances[elId]) return; // already running
    const el = document.getElementById(elId);
    if (!el) return;

    const cfg = sectionEffects[elId];
    if (!cfg) return;

    const effectFn = VANTA[cfg.effect];
    if (!effectFn) return;

    const usesP5 = p5Effects.includes(cfg.effect);

    try {
      activeInstances[elId] = effectFn({
        el: el,
        ...(usesP5 ? { p5: window.p5 } : { THREE: T }),
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        ...cfg.config
      });
    } catch (e) {
      // Silently fail if WebGL context limit reached
    }
  }

  function destroyEffect(elId) {
    if (activeInstances[elId]) {
      activeInstances[elId].destroy();
      delete activeInstances[elId];
    }
  }

  // ── Hero always active (it's the first thing you see) ──
  createEffect('vanta-bg');

  // ── IntersectionObserver: init when visible, destroy when not ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      if (entry.isIntersecting) {
        createEffect(id);
      } else {
        destroyEffect(id);
      }
    });
  }, {
    threshold: 0.1 // trigger when 10% visible
  });

  // Observe all section Vanta containers
  document.querySelectorAll('.vanta-section-bg').forEach(el => {
    observer.observe(el);
  });
}
