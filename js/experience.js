// ╔══════════════════════════════════════════════════════════════════╗
// ║  EXPERIENCE — Render timeline                                   ║
// ╚══════════════════════════════════════════════════════════════════╝

function renderExperience() {
  const el = document.getElementById('timeline');
  el.innerHTML = D.experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div>
            <h3>${exp.title}</h3>
            <p class="timeline-company">${exp.company} — ${exp.location}</p>
          </div>
          <span class="timeline-date">${exp.date}</span>
        </div>
        <ul class="timeline-details">
          ${exp.details.map(d => `<li>${d}</li>`).join('')}
        </ul>
        <div class="timeline-tags">
          ${exp.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}
