// ╔══════════════════════════════════════════════════════════════════╗
// ║  PROJECTS — Render project cards                                ║
// ╚══════════════════════════════════════════════════════════════════╝

function renderProjects() {
  const el = document.getElementById('projectsGrid');
  el.innerHTML = D.projects.map(p => `
    <div class="project-card">
      <div class="project-icon">${icon(p.icon || 'default', 40)}</div>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener" class="project-link">${p.linkText} ${icon('arrowUpRight')}</a>` : ''}
    </div>
  `).join('');
}
