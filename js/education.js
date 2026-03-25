// ╔══════════════════════════════════════════════════════════════════╗
// ║  EDUCATION — Render education cards + certifications            ║
// ╚══════════════════════════════════════════════════════════════════╝

function renderEducation() {
  const gridEl = document.getElementById('educationGrid');
  const eduIcons = ['graduation', 'book', 'book', 'book'];
  gridEl.innerHTML = D.education.map((e, i) => `
    <div class="edu-card">
      <div class="edu-icon">${icon(eduIcons[i] || 'book', 32)}</div>
      <h3>${e.degree}</h3>
      <p class="edu-school">${e.school}</p>
      <p class="edu-location">${e.location}</p>
      <p class="edu-year">${e.year}</p>
      <span class="edu-gpa">${e.gpa}</span>
    </div>
  `).join('');

  const certEl = document.getElementById('certList');
  certEl.innerHTML = D.certifications.map(c => `
    <div class="cert-item">
      ${icon('check', 20)}
      <span>${c}</span>
    </div>
  `).join('');
}
