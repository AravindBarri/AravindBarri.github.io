// ╔══════════════════════════════════════════════════════════════════╗
// ║  CONTACT — Render contact cards + footer                        ║
// ╚══════════════════════════════════════════════════════════════════╝

function renderContact() {
  document.getElementById('contactHeading').textContent = D.contactHeading;
  document.getElementById('contactText').textContent = D.contactText;

  const cards = [];
  if (D.email) {
    cards.push(`<a href="mailto:${D.email}" class="contact-card">${icon('email', 24)}<span class="contact-label">Email</span><span class="contact-value">${D.email}</span></a>`);
  }
  if (D.phone) {
    cards.push(`<a href="tel:${D.phone}" class="contact-card">${icon('phoneIcon', 24)}<span class="contact-label">Phone</span><span class="contact-value">${D.phoneDisplay || D.phone}</span></a>`);
  }
  if (D.github) {
    cards.push(`<a href="${D.github}" target="_blank" rel="noopener" class="contact-card">${icon('github', 24)}<span class="contact-label">GitHub</span><span class="contact-value">${D.githubUsername}</span></a>`);
  }
  if (D.linkedin) {
    cards.push(`<a href="${D.linkedin}" target="_blank" rel="noopener" class="contact-card">${icon('linkedin', 24)}<span class="contact-label">LinkedIn</span><span class="contact-value">LinkedIn Profile</span></a>`);
  }
  if (D.location) {
    cards.push(`<div class="contact-card">${icon('location', 24)}<span class="contact-label">Location</span><span class="contact-value">${D.location}</span></div>`);
  }
  document.getElementById('contactCards').innerHTML = cards.join('');
}

function renderFooter() {
  document.getElementById('footerText').textContent = D.footerText;
}
