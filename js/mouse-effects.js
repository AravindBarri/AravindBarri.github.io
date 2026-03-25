// ╔══════════════════════════════════════════════════════════════════╗
// ║  MOUSE EFFECTS — Interactive particle network + cursor glow     ║
// ╚══════════════════════════════════════════════════════════════════╝

function initMouseEffects() {
  // Skip on mobile / touch devices
  if (window.innerWidth <= 768 || 'ontouchstart' in window) return;

  // ── 1. Custom cursor glow ──────────────────────────────────────
  const cursorGlow = document.createElement('div');
  cursorGlow.className = 'cursor-glow';
  document.body.appendChild(cursorGlow);

  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  document.body.appendChild(cursorDot);

  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // Dot follows instantly
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  });

  // Glow follows with smooth lag
  function animateCursor() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    cursorGlow.style.left = glowX + 'px';
    cursorGlow.style.top = glowY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Scale up cursor on interactive elements
  const interactives = document.querySelectorAll('a, button, .btn, .project-card, .stat-card, .skill-category, .edu-card, .contact-card, .skill-tag, .tag');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorGlow.classList.add('cursor-hover');
      cursorDot.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      cursorGlow.classList.remove('cursor-hover');
      cursorDot.classList.remove('cursor-hover');
    });
  });

  // ── 2. Particle network canvas ────────────────────────────────
  const canvas = document.createElement('canvas');
  canvas.className = 'particle-canvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  let w, h;
  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Particles
  const PARTICLE_COUNT = Math.min(Math.floor(window.innerWidth / 15), 80);
  const CONNECT_DIST = 150;
  const MOUSE_DIST = 200;
  const particles = [];

  class Particle {
    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.5 + 0.5;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > w) this.vx *= -1;
      if (this.y < 0 || this.y > h) this.vy *= -1;

      // Mouse repulsion
      const dx = this.x - mouseX;
      const dy = this.y - (mouseY + window.scrollY);
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_DIST) {
        const force = (MOUSE_DIST - dist) / MOUSE_DIST * 0.02;
        this.vx += dx / dist * force;
        this.vy += dy / dist * force;
      }

      // Speed limit
      const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (speed > 1.5) {
        this.vx = (this.vx / speed) * 1.5;
        this.vy = (this.vy / speed) * 1.5;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(79, 70, 229, 0.5)';
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECT_DIST) {
          const opacity = (1 - dist / CONNECT_DIST) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(79, 70, 229, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      // Lines to mouse
      const dx = particles[i].x - mouseX;
      const dy = particles[i].y - (mouseY + window.scrollY);
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_DIST) {
        const opacity = (1 - dist / MOUSE_DIST) * 0.25;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouseX, mouseY + window.scrollY);
        ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);

    // Offset canvas with scroll
    ctx.save();
    ctx.translate(0, -window.scrollY * 0.3);

    particles.forEach(p => {
      p.update();
      p.draw();
    });
    drawConnections();

    ctx.restore();
    requestAnimationFrame(animate);
  }

  animate();
}
