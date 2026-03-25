// ╔══════════════════════════════════════════════════════════════════╗
// ║  PORTFOLIO DATA — Edit this section to customize your website  ║
// ╚══════════════════════════════════════════════════════════════════╝

const PORTFOLIO_DATA = {

  // ── Personal Info ──────────────────────────────────────────────
  name: 'Aravind Barri',
  initials: 'AB',
  email: 'aravindbarri@icloud.com',
  phone: '+917989426182',
  phoneDisplay: '+91 7989426182',
  location: 'Hyderabad, India 500049',
  github: 'https://github.com/AravindBarri',
  githubUsername: 'AravindBarri',
  // Add more social links here (linkedin, twitter, etc.)
  linkedin: '',   // e.g. 'https://linkedin.com/in/yourname'
  twitter: '',    // e.g. 'https://twitter.com/yourhandle'

  // ── Hero Section ───────────────────────────────────────────────
  heroGreeting: "Hi, I'm",
  // These titles rotate with a typing animation
  heroTitles: [
    'React Native Developer',
    'Game Engineer',
    'Mobile App Developer',
    'Blockchain Enthusiast',
  ],
  heroDescription:
    'Building intuitive, high-performance mobile applications for Android & iOS. Crafting interactive game experiences with creativity and technical precision.',
  heroCTAPrimary: 'Get In Touch',
  heroCTASecondary: 'View My Work',

  // ── About Section ──────────────────────────────────────────────
  aboutParagraphs: [
    "I'm a <strong>React Native Developer</strong> and <strong>Game Engineer</strong> with 4.3+ years of experience building intuitive, high-performance mobile applications for both Android and iOS.",
    'I specialize in developing cross-platform apps using React Native, with a strong focus on smooth user experiences, clean architecture, and seamless integration with backend services.',
    "From concept and design to deployment and optimization, I've led and contributed to all stages of app development. My experience spans blockchain integration with Solana, interactive game prototypes, and production-ready gameplay features.",
    "I'm always eager to build innovative mobile experiences that scale.",
  ],
  aboutStats: [
    { value: 4, suffix: '+', label: 'Years Experience' },
    { value: 6, suffix: '+', label: 'Apps Shipped' },
    { value: 2, suffix: '',  label: 'Platforms' },
    { value: 3, suffix: '+', label: 'Game Titles' },
  ],

  // ── Experience Section ─────────────────────────────────────────
  experience: [
    {
      title: 'Associate Game Engineer & Game Engineer',
      company: 'PurpleTalk',
      location: 'Hyderabad',
      date: 'Nov 2022 — Present',
      details: [
        'Enhanced stability and user experience in <strong>Crash Arena Turbo Stars</strong> and <strong>King of Thieves</strong> by designing new features and resolving bugs using C++.',
        'Developed and deployed cross-platform mobile apps using <strong>React Native</strong>, delivering smooth performance and consistent UI across Android and iOS.',
        'Collaborated with backend and frontend teams to deliver features across projects.',
        'Handled blockchain transactions using <strong>Solana</strong>.',
        'Built and optimized 4+ high-performing applications, delivering seamless user experiences across multiple devices and platforms.',
        'Served as a core frontend contributor for major production apps.',
      ],
      tags: ['React Native', 'C++', 'Solana', 'TypeScript', 'Android', 'iOS'],
    },
    {
      title: 'Trainee Game Engineer',
      company: 'PurpleTalk',
      location: 'Hyderabad',
      date: 'Dec 2021 — Oct 2022',
      details: [
        'Accomplished project objectives in technical and design areas to facilitate smooth, customer-focused gameplay.',
        'Developed gameplay logic and design based on game type and requirements.',
      ],
      tags: ['Game Design', 'Gameplay Logic'],
    },
    {
      title: 'Software Intern',
      company: 'PurpleTalk',
      location: 'Hyderabad',
      date: 'Apr 2021 — Nov 2021',
      details: [
        'Learned and developed various 2D and 3D games using Unity Engine.',
      ],
      tags: ['Unity', '2D/3D Games'],
    },
    {
      title: 'Software Intern',
      company: 'Edyst',
      location: 'Hyderabad',
      date: 'Jul 2020 — Jul 2021',
      details: [
        'Connected with students across India on the Edyst platform, helping them resolve programming doubts and accelerate their learning progress.',
      ],
      tags: ['Mentoring', 'Programming'],
    },
  ],

  // ── Projects Section ───────────────────────────────────────────
  // icon: use any name from the ICONS object below, or 'default'
  projects: [
    {
      title: 'Crash Arena Turbo Stars',
      description: 'Enhanced stability and user experience by designing new features and resolving bugs and crashes using C++. A top-rated action game on the Play Store.',
      tags: ['C++', 'Game Engine', 'Bug Fixes'],
      link: 'https://play.google.com/store/search?q=Crash+Arena+Turbo+Stars',
      linkText: 'View on Play Store',
      icon: 'gamepad',
    },
    {
      title: 'King of Thieves',
      description: 'Contributed to feature development and crash resolution for this popular mobile game, improving overall stability and player experience.',
      tags: ['C++', 'Feature Dev', 'Optimization'],
      link: 'https://play.google.com/store/search?q=King+of+Thieves',
      linkText: 'View on Play Store',
      icon: 'lock',
    },
    {
      title: 'Clash',
      description: 'Core frontend contributor for this cross-platform mobile app built with React Native, delivering smooth performance across Android and iOS.',
      tags: ['React Native', 'TypeScript', 'Cross-Platform'],
      link: 'https://play.google.com/store/search?q=Clash+PurpleTalk',
      linkText: 'View on Play Store',
      icon: 'phone',
    },
    {
      title: 'Slot Stream',
      description: 'Built and optimized this high-performing application with seamless user experiences across multiple devices and platforms.',
      tags: ['React Native', 'Performance', 'UI/UX'],
      link: 'https://play.google.com/store/search?q=Slot+Stream',
      linkText: 'View on Play Store',
      icon: 'bolt',
    },
    {
      title: 'Masala Chat',
      description: 'Served as a core frontend contributor for this production mobile application, ensuring consistent UI and smooth cross-platform experience.',
      tags: ['React Native', 'Firebase', 'Frontend'],
      link: 'https://play.google.com/store/search?q=Masala+Chat',
      linkText: 'View on Play Store',
      icon: 'chat',
    },
    {
      title: 'Blockchain Integration',
      description: 'Handled blockchain transactions using Solana, integrating decentralized features into mobile applications.',
      tags: ['Solana', 'Blockchain', 'Web3'],
      link: '',
      linkText: '',
      icon: 'layers',
    },
  ],

  // ── Skills Section ─────────────────────────────────────────────
  // icon: use any name from the ICONS object below
  skills: [
    {
      category: 'Languages & Frameworks',
      icon: 'code',
      items: ['React Native', 'React.js', 'TypeScript', 'JavaScript', 'Node.js', 'C++', 'Python', 'HTML', 'CSS'],
    },
    {
      category: 'Mobile & Platforms',
      icon: 'phone',
      items: ['Android Studio', 'Xcode', 'Firebase', 'Solana'],
    },
    {
      category: 'Game Engines',
      icon: 'play',
      items: ['Unity', 'Unreal Engine'],
    },
    {
      category: 'Tools & Workflow',
      icon: 'wrench',
      items: ['Visual Studio', 'Git', 'Jira', 'Postman', 'Photoshop', 'Illustrator'],
    },
    {
      category: 'Soft Skills',
      icon: 'users',
      items: ['Agile Development', 'Team Collaboration', 'Communication', 'Problem Solving', 'Fast Learning'],
    },
  ],

  // ── Education Section ──────────────────────────────────────────
  education: [
    {
      degree: 'B.Tech in Computer Science',
      school: 'Lendi Institute of Engineering and Technology',
      location: 'Vizianagaram, Andhra Pradesh',
      year: 'Graduated October 2021',
      gpa: 'GPA: 7.5',
    },
    {
      degree: 'Intermediate (MPC)',
      school: 'Narayana Junior College',
      location: 'Visakhapatnam, Andhra Pradesh',
      year: 'May 2017',
      gpa: 'GPA: 75%',
    },
  ],

  // ── Certifications ─────────────────────────────────────────────
  certifications: [
    'Business English Communication — Business English Certificate Preliminary (BEC)',
    'CPA: Programming Essentials in C++ & PCAP: Python — Cisco Networking Academy',
    'NPTEL — Problem Solving Through Programming in C & Multivariable Calculus',
  ],

  // ── Contact Section ────────────────────────────────────────────
  contactHeading: 'Get In Touch',
  contactText:
    "I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi — my inbox is always open!",

  // ── Footer ─────────────────────────────────────────────────────
  footerText: '© 2026 Aravind Barri. Built with passion.',
};


// ╔══════════════════════════════════════════════════════════════════╗
// ║  SVG ICONS — Reusable icon library (add more as needed)        ║
// ╚══════════════════════════════════════════════════════════════════╝

const ICONS = {
  github: (s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  email: (s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  phoneIcon: (s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  location: (s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  linkedin: (s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  twitter: (s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>`,
  arrowUpRight: (s = 16) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
  check: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  graduation: (s = 32) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></svg>`,
  book: (s = 32) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  // Project icons
  gamepad: (s = 40) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
  lock: (s = 40) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  phone: (s = 40) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  bolt: (s = 40) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  chat: (s = 40) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  layers: (s = 40) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  default: (s = 40) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>`,
  // Skill category icons
  code: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  play: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>`,
  wrench: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  users: (s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
};

function icon(name, size) {
  return (ICONS[name] || ICONS.default)(size);
}


// ╔══════════════════════════════════════════════════════════════════╗
// ║  RENDER FUNCTIONS — Generate HTML from PORTFOLIO_DATA          ║
// ║  (You should NOT need to edit anything below this line)        ║
// ╚══════════════════════════════════════════════════════════════════╝

const D = PORTFOLIO_DATA;

function renderNav() {
  document.getElementById('navLogo').innerHTML = `${D.name}<span class="accent">.</span>`;
}

function renderHero() {
  document.getElementById('heroGreeting').textContent = D.heroGreeting;
  document.getElementById('heroName').textContent = D.name;
  document.getElementById('heroDescription').textContent = D.heroDescription;
  document.getElementById('heroCTAPrimary').textContent = D.heroCTAPrimary;
  document.getElementById('heroCTASecondary').textContent = D.heroCTASecondary;

  // Social links
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

function renderPageMeta() {
  document.title = D.name;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.content = `Portfolio of ${D.name} — ${D.heroTitles.join(', ')}. ${D.heroDescription}`;
  }
}


// ╔══════════════════════════════════════════════════════════════════╗
// ║  INITIALIZE — Render all sections + set up interactions        ║
// ╚══════════════════════════════════════════════════════════════════╝

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
}

// ── Typed text animation ─────────────────────────────────────────
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

// ── Navbar scroll & mobile toggle ────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (link) {
        link.classList.toggle('active', scrollY >= top && scrollY < top + height);
      }
    });
  });
}

// ── Scroll reveal ────────────────────────────────────────────────
function initScrollReveal() {
  // About text slides from left, stats from right
  document.querySelectorAll('.about-text').forEach(el => el.classList.add('reveal-left'));
  document.querySelectorAll('.about-stats').forEach(el => el.classList.add('reveal-right'));

  // Timeline items alternate left/right
  document.querySelectorAll('.timeline-item').forEach((el, i) => {
    el.classList.add(i % 2 === 0 ? 'reveal-left' : 'reveal-right');
  });

  // Grid items scale up
  document.querySelectorAll('.project-card, .skill-category, .edu-card, .stat-card, .contact-card').forEach(el => {
    el.classList.add('reveal');
  });

  // Certs slide from right
  document.querySelectorAll('.cert-item').forEach(el => el.classList.add('reveal-right'));

  // Subsection title
  document.querySelectorAll('.subsection-title').forEach(el => el.classList.add('reveal'));

  function check() {
    const wh = window.innerHeight;
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .section-title').forEach(el => {
      if (el.getBoundingClientRect().top < wh - 60) {
        el.classList.add('visible');
      }
    });

    // Timeline line grow
    const timeline = document.querySelector('.timeline');
    if (timeline && timeline.getBoundingClientRect().top < wh - 100) {
      timeline.classList.add('line-visible');
    }
  }

  window.addEventListener('scroll', check);
  window.addEventListener('load', check);
  check();
}

// ── Stat counter ─────────────────────────────────────────────────
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

// ── Apple-style scroll animations ────────────────────────────────
function initScrollAnimations() {
  // Disable on small/old devices (720p, 5.5" screens ≤ 375px)
  if (window.innerWidth <= 375) return;

  const heroContent = document.querySelector('.hero-content');
  const heroGrid = document.querySelector('.hero-bg-grid');
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const sections = document.querySelectorAll('.section');

  // ── Calculate sticky top for each section ──
  // If a section is taller than the viewport, set a negative top
  // so you scroll through ALL its content before the next section covers it.
  function setStickyTops() {
    const wh = window.innerHeight;
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      if (sectionHeight > wh) {
        // Negative top = how far past viewport the section extends
        section.style.top = -(sectionHeight - wh) + 'px';
      } else {
        section.style.top = '0px';
      }
    });
  }

  setStickyTops();
  window.addEventListener('resize', setStickyTops);

  let ticking = false;

  function update() {
    ticking = false;
    const scrollY = window.scrollY;
    const wh = window.innerHeight;

    // ── Hero parallax: fade out + scale down + drift up ──
    if (heroContent) {
      const progress = Math.min(scrollY / (wh * 0.65), 1);
      const translateY = scrollY * 0.35;
      const scale = 1 - progress * 0.15;
      const opacity = Math.max(1 - progress * 1.5, 0);
      heroContent.style.transform = `translateY(${translateY}px) scale(${scale})`;
      heroContent.style.opacity = opacity;
    }

    // ── Hero grid parallax at slower rate for depth ──
    if (heroGrid) {
      heroGrid.style.transform = `translateY(${scrollY * 0.15}px)`;
    }

    // ── Fade out scroll indicator quickly ──
    if (scrollIndicator) {
      scrollIndicator.style.opacity = Math.max(1 - scrollY / 150, 0);
    }

    // ── Section content: scale up from 0.92 as it enters ──
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const container = section.querySelector('.container');
      if (!container) return;

      if (rect.top < wh && rect.bottom > 0) {
        // Section is visible
        const enterProgress = Math.min(Math.max((wh - rect.top) / (wh * 0.45), 0), 1);
        // Ease-out curve for smoother feel
        const eased = 1 - Math.pow(1 - enterProgress, 3);
        const scale = 0.92 + eased * 0.08;
        const opacity = eased;
        const translateY = (1 - eased) * 40;
        container.style.transform = `scale(${scale}) translateY(${translateY}px)`;
        container.style.opacity = opacity;
      }
    });
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  // Run once on load
  update();
}

// ── Smooth scroll ────────────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href === '#' || href === '#hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ── 3D tilt effect on cards (desktop only) ──────────────────────
function initCardTilt() {
  if (window.innerWidth <= 768) return;

  const cards = document.querySelectorAll('.project-card, .edu-card, .stat-card, .skill-category');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * -6;
      const rotateY = (x - centerX) / centerX * 6;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

// ── Magnetic hover on buttons ───────────────────────────────────
function initMagneticButtons() {
  if (window.innerWidth <= 768) return;

  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

// ── GO! ──────────────────────────────────────────────────────────
initPortfolio();
