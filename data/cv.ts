export interface CvEntry {
  title: string;
  org?: string;
  meta?: string;
  period: string;
  link?: string;
  points: string[];
}

export const cvProfile = {
  name: "Ahmed Ayman Ahmed Abdelgalel",
  headline:
    "Software Engineer | Full Stack Developer — React.js / Next.js · Node.js / NestJS",
  location: "Benha, Qalyubia, Egypt",
  phone: "01284959694",
  email: "info@ahmed15ayman7.com",
  site: "ahmed15ayman7.vercel.app",
  linkedin: "linkedin.com/in/ahmed15ayman7",
  github: "github.com/ahmed15ayman7",
  summary:
    "Software Engineer and Full Stack Developer with a strong eye for design and a track record of taking products from concept to production. Proficient across modern front-end work (React.js, Next.js, TypeScript) and back-end frameworks (Node.js, NestJS), with experience leading small engineering teams, structuring mono-repos, and shipping multi-role platforms used across education, publishing, sports and hospitality.",
};

export const cvExperience: CvEntry[] = [
  {
    title: "Software Engineer",
    org: "Target for General Contracting",
    meta: "Cairo, Egypt",
    period: "Sep 2026 – Present",
    points: [
      "Building internal systems for a general contracting and supplies company, including an attendance and weekly payroll platform.",
      "Working across the stack on Next.js and TypeScript services backed by PostgreSQL.",
      "Currently expanding into .NET as part of the company's backend stack (beginner level).",
    ],
  },
  {
    title: "CTO",
    org: "SPORTON",
    meta: "Sheraton Residences, Cairo · Creativa, Benha — incubated by Creativa Egypt",
    period: "Apr 2024 – Sep 2026",
    link: "sporton.club",
    points: [
      "Co-founded Sporton, a professional networking and career platform for athletes — a “LinkedIn for athletes” with AI features built for the sports industry.",
      "Led full-stack development from the ground up with Next.js, React.js, TypeScript, Tailwind CSS, Framer Motion, NestJS, PostgreSQL, Prisma and Socket.io.",
      "Structured the product as a mono-repo of 8 apps plus a shared backend of 140+ modules.",
      "Shipped athlete profiles as digital CVs, AI match analysis from uploaded footage, real-time chat and notifications, advanced search, AI moderation and a sports marketplace.",
      "Hired, mentored and managed the development team: code review, task assignment and delivery quality.",
      "Defined and executed the technical roadmap alongside the business strategy, and ran the platform on a performance-tuned VPS.",
    ],
  },
  {
    title: "Frontend / Full Stack Developer",
    org: "Freelance / Self-employed",
    meta: "Remote",
    period: "Jul 2023 – Present",
    points: [
      "Delivered responsive, high-performance web applications for clients across education, publishing, hospitality and services.",
      "Built full-stack products with Next.js, React, TypeScript, Node.js, NestJS, PostgreSQL, Prisma, MongoDB and Tailwind CSS.",
      "Shipped custom dashboards, e-commerce platforms, landing pages and admin panels with authentication, payments and real-time features.",
      "Handled requirements gathering, deadlines, ongoing support, SEO, accessibility and mobile responsiveness.",
    ],
  },
  {
    title: "Core Team Front End Developer",
    org: "GDSC — Google Developer Student Clubs",
    meta: "Benha University",
    period: "Sep 2023 – Oct 2024",
    points: [
      "Taught HTML, CSS, JavaScript and React.js to engineering students in the GDSC community.",
      "Ranked 1st globally in my season with the chapter.",
    ],
  },
];

export const cvProjects: CvEntry[] = [
  {
    title: "Chef Nadia Elsayed Platform",
    meta: "Cooking platform — web, mobile, admin and AI assistant",
    period: "2026",
    link: "nadia-web.booksplatform.net",
    points: [
      "Led the engineering team delivering Phase 1: a mono-repo of four independently governed projects on a shared PostgreSQL and Redis.",
      "Flutter app for iOS and Android, a .NET 10 REST API, a Next.js 16 admin console and a Python/FastAPI RAG service that answers cooking questions in the chef's own Egyptian-Arabic voice.",
      "Built recipe authoring with machine-usable ingredient amounts, serving-based scaling, weekly meal planning, ingredient matching and a step-by-step cooking mode.",
    ],
  },
  {
    title: "iFACE Global Board",
    meta: "Sovereign enterprise OS for an international accreditation board",
    period: "2026",
    link: "ifacegb.net",
    points: [
      "Bilingual (Arabic/English) platform operating across 22+ countries and five strategic sectors, with RTL built in rather than bolted on.",
      "Public site, grants portal, agents map and public certificate verification, plus role-based dashboards for centers, agencies, trainers and students.",
      "Next.js 16, React 19, Prisma, PostgreSQL, Redis + BullMQ, Socket.IO, Stripe, and blockchain-anchored certificates.",
      "Includes a no-signup demo sandbox that provisions a disposable environment with sample data.",
    ],
  },
  {
    title: "Books Platform",
    meta: "Bilingual books discovery and publishing platform",
    period: "2026",
    link: "booksplatform.net",
    points: [
      "A window for Arabic readers onto every new book published worldwide: 4,300+ titles and 700+ publishers, classified as translated, untranslated or nominated for translation.",
      "Next.js 16 web app plus a Flutter mobile app on a shared REST API and PostgreSQL 16.",
      "Editorial series, media episodes, a publisher portal, Cloudflare R2 storage, Upstash rate limiting, JWT with passkeys, and web push plus FCM notifications.",
    ],
  },
  {
    title: "AIAETAR Institute",
    meta: "American Institute of Applied Education for Tourism & Administrative Research",
    period: "2026",
    link: "aiaetar.com",
    points: [
      "Bilingual site for a licensed institute with 50+ internationally accredited programmes across tourism, hospitality, engineering and quality management.",
      "Programme catalogue, trainer profiles, resource library, gallery and public certificate verification, with a full admin console behind it.",
      "Next.js 16, Prisma 7, PostgreSQL, Cloudinary, Zod validation and Excel export.",
    ],
  },
  {
    title: "SPORTON",
    meta: "Sports social platform",
    period: "2024 – 2026",
    link: "sporton.club",
    points: [
      "Mono-repo full-stack platform helping 800K+ Egyptian athletes market themselves to brokers, clubs, institutes and brands.",
      "Athlete profiles as digital athletic CVs, an AI match analyzer, an AI spam filter and a sports marketplace.",
      "Monetised through pro accounts and advertising.",
    ],
  },
  {
    title: "IAFCE Academy System",
    meta: "LMS for a regional academy",
    period: "2025",
    link: "iafce.net",
    points: [
      "Mono-repo of 12 applications covering every academy role, on a central backend of 60+ modules.",
      "Student portal, instructor dashboard, parent access, accounting and HR panels, super admin, public relations and secretariat panels.",
      "Scales across multiple branches, each with its own sub-platform inside one ecosystem, with live classes and real-time events.",
    ],
  },
  {
    title: "Almanafth",
    meta: "Home services marketplace",
    period: "Feb 2025 – Apr 2025",
    link: "manfaz.vercel.app",
    points: [
      "Platform connecting users with verified providers for plumbing, electrical work and cleaning, built around reliability and easy booking.",
    ],
  },
];

export const cvEducation: CvEntry[] = [
  {
    title: "Computers & Artificial Intelligence",
    org: "Benha University",
    meta: "fci.bu.edu.eg",
    period: "Sep 2020 – Jun 2024",
    points: [
      "C++, OOP, Python, JavaScript, Java, Dart/Flutter, Machine Learning, Computer Vision, Data Science and UI/UX.",
    ],
  },
];

export const cvSkills = [
  { group: "Frontend", items: "React.js, Next.js, TypeScript, Tailwind CSS, Framer Motion, HTML/CSS, Bootstrap" },
  { group: "Backend", items: "Node.js, NestJS, REST APIs, Socket.IO, .NET (beginner)" },
  { group: "Data", items: "PostgreSQL, MongoDB, MySQL, Prisma, Redis" },
  { group: "Practices", items: "OOP, mono-repo architecture, Git/GitHub, Docker, code review, team leadership" },
];

export const cvLanguages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
  { name: "French", level: "Basic" },
];
