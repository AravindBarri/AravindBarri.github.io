// ╔══════════════════════════════════════════════════════════════════╗
// ║  SKILLS — Render skill categories                               ║
// ╚══════════════════════════════════════════════════════════════════╝

function renderSkills() {
  const el = document.getElementById('skillsGrid');
  el.innerHTML = D.skills.map(s => `
    <div class="skill-category">
      <h3>${icon(s.icon || 'code', 20)} ${s.category}</h3>
      <div class="skill-tags">
        ${s.items.map(i => `<span class="skill-tag">${i}</span>`).join('')}
      </div>
    </div>
  `).join('');
}
