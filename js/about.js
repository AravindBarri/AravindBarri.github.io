// ╔══════════════════════════════════════════════════════════════════╗
// ║  ABOUT — Render + stat counter animation                       ║
// ╚══════════════════════════════════════════════════════════════════╝

function renderAbout() {
  const textEl = document.getElementById('aboutText');
  textEl.innerHTML = D.aboutParagraphs.map(p => `<p>${p}</p>`).join('');

  const statsEl = document.getElementById('aboutStats');
  statsEl.innerHTML = D.aboutStats.map(s => `
    <div class="stat-card">
      <span class="stat-number" data-target="${s.value}">0</span>${s.suffix ? `<span class="stat-suffix">${s.suffix}</span>` : ''}
      <span class="stat-label">${s.label}</span>
    </div>
  `).join('');
}

function initStatCounter() {
  let counted = false;

  function check() {
    if (counted) return;
    const section = document.querySelector('.about-stats');
    if (!section) return;
    if (section.getBoundingClientRect().top > window.innerHeight - 100) return;
    counted = true;

    document.querySelectorAll('.stat-number').forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      let count = 0;
      const step = Math.ceil(1500 / target);
      const timer = setInterval(() => {
        count++;
        el.textContent = count;
        if (count >= target) {
          clearInterval(timer);
          el.textContent = target;
        }
      }, step);
    });
  }

  window.addEventListener('scroll', check);
  window.addEventListener('load', check);
  check();
}
