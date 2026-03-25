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
