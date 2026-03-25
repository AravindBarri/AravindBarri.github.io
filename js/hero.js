// ╔══════════════════════════════════════════════════════════════════╗
// ║  HERO — Render + Typed text animation                          ║
// ╚══════════════════════════════════════════════════════════════════╝

function renderHero() {
  document.getElementById('heroGreeting').textContent = D.heroGreeting;
  document.getElementById('heroName').textContent = D.name;
  document.getElementById('heroDescription').textContent = D.heroDescription;
  document.getElementById('heroCTAPrimary').textContent = D.heroCTAPrimary;
  document.getElementById('heroCTASecondary').textContent = D.heroCTASecondary;

  const socialHTML = [];
  if (D.github) {
    socialHTML.push(`<a href="${D.github}" target="_blank" rel="noopener" aria-label="GitHub">${icon('github')}</a>`);
  }
  if (D.linkedin) {
    socialHTML.push(`<a href="${D.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon('linkedin')}</a>`);
  }
  if (D.twitter) {
    socialHTML.push(`<a href="${D.twitter}" target="_blank" rel="noopener" aria-label="Twitter">${icon('twitter')}</a>`);
  }
  if (D.email) {
    socialHTML.push(`<a href="mailto:${D.email}" aria-label="Email">${icon('email')}</a>`);
  }
  if (D.phone) {
    socialHTML.push(`<a href="tel:${D.phone}" aria-label="Phone">${icon('phoneIcon')}</a>`);
  }
  document.getElementById('heroSocial').innerHTML = socialHTML.join('');
}

function initTypedText() {
  const typedEl = document.getElementById('typedText');
  const titles = D.heroTitles;
  let titleIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tick() {
    const current = titles[titleIdx];
    if (deleting) {
      charIdx--;
      typedEl.textContent = current.substring(0, charIdx);
    } else {
      charIdx++;
      typedEl.textContent = current.substring(0, charIdx);
    }

    let speed = deleting ? 40 : 80;

    if (!deleting && charIdx === current.length) {
      speed = 2000;
      deleting = true;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      titleIdx = (titleIdx + 1) % titles.length;
      speed = 400;
    }
    setTimeout(tick, speed);
  }
  tick();
}
