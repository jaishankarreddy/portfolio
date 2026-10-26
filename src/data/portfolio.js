export const profile = {
  name: "Jaishankar Reddy",
  role: "Full-Stack Developer",
  tagline:
    "I build modern, scalable web applications using Angular, React, Next.js and Node.js.",
  location: "Bangalore, Karnataka, India",
  email: "jaishankar63663@gmail.com",
  phone: "+91 9986535860",
  github: "https://github.com/jaishankarreddy",
  linkedin: "https://www.linkedin.com/in/jaishankar-reddy-9a65ab314",
  resume: "/resume.pdf",
};

export const skillGroups = [
  {
    title: "Used at Dsquare — company work",
    subtitle: "Revamped client sites, school platforms and products",
    skills: [
      "Angular",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "PrimeNG",
      "Swiper.js",
      "Sanity CMS",
      "REST APIs",
      "JWT Authentication",
      "Git",
      "GitHub",
      "Hostinger",
    ],
  },
  {
    title: "Used in personal projects",
    subtitle: "Marketplace, e-commerce, dashboards and APIs I built myself",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Cloudinary",
      "Vercel",
      "Render",
      "Hostinger",
    ],
  },
  {
    title: "Learning now",
    subtitle: "Honest status — not strengths yet",
    learning: true,
    skills: ["Docker", "Java", "Spring Boot"],
  },
  {
    title: "Also touched",
    subtitle: "Small or one-off use",
    muted: true,
    skills: [
      "Framer Motion",
      "GSAP",
      "Three.js / React Three Fiber",
      "Lenis",
      "OData",
    ],
  },
];

export const companyProfile = {
  name: "Dsquare Consulting Services Pvt Ltd",
  location: "Bangalore, India",
  role: "Full-Stack Developer",
  period: "Nov 14, 2025 — Present",
  summary:
    "Bengaluru-based consulting firm (founded 2021, India / USA / UK) working across IT services, talent, digital and business consulting. Worked on client revamped websites and company-owned products — school/education platforms, consulting websites and enterprise modules — using Angular and Next.js with Tailwind, reusable components and API-driven UI.",
};

export const companyWork = [
  {
    name: "Varnika Insights",
    kind: "Client Website — Revamped (Next.js)",
    badge: "Client Revamp",
    tech: ["Next.js", "Tailwind CSS"],
    description:
      "Revamped website for Varnika Insights, an enterprise talent-management / competency-building firm. Services, courses, stats and lead-capture sections.",
    contributions: [
      "Revamped corporate website",
      "Services & courses sections",
      "Responsive layouts",
    ],
    link: "https://www.varnikainsights.com/",
    linkLabel: "varnikainsights.com",
    image: "images/vernika.png",
  },
  {
    name: "Campus Consulting",
    kind: "Client Website — Revamped (Next.js + Sanity CMS)",
    badge: "Client Revamp",
    tech: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    description:
      "Revamped website for Campus Consulting, a study-abroad adviser in Bangalore (since 2014, 20+ countries, 4700+ visas). Services, visa/test-prep flows and CMS-driven content.",
    contributions: [
      "Revamped with Sanity CMS",
      "Visa & test-prep sections",
      "CMS-driven content",
    ],
    link: "https://www.campusconsulting.in/",
    linkLabel: "campusconsulting.in",
    image: "images/campus_consulting.png",
  },
  {
    name: "Dsquare Consulting Website",
    kind: "Company Website — Revamped (Next.js)",
    badge: "Company Revamp",
    tech: ["Next.js", "Tailwind CSS"],
    description:
      "Revamped company website for Dsquare Consulting Services — IT, HR, digital marketing and business consulting, plus products (Analytix, Campus Suite, UniConnect) and client showcase.",
    contributions: [
      "Company revamp",
      "Services & products pages",
      "Client showcase",
      "Responsive UI",
    ],
    link: "https://dsquareconsulting.com/",
    linkLabel: "dsquareconsulting.com",
    image: "images/dsquare.png",
  },
  {
    name: "Shri Ram Global School (SRGS) — School Website UI",
    kind: "Client Website",
    badge: "Client Work",
    tech: ["Angular", "Tailwind CSS", "Swiper.js"],
    description:
      "School website UI for Shri Ram Global School, Whitefield Bangalore (CBSE). Built hero carousel, common carousel, header/footer and responsive content sections.",
    contributions: [
      "School website UI",
      "Hero carousel",
      "Common carousel",
      "Header / footer",
      "Responsive sections",
    ],
    link: "https://srgsbangalore.com/",
    linkLabel: "srgsbangalore.com",
    image: "images/SRGS.png",
  },
  {
    name: "Shalom Group of Institutions",
    kind: "Client Website — Revamped (Next.js)",
    badge: "Client Revamp",
    tech: ["Next.js", "Tailwind CSS", "REST APIs"],
    description:
      "Revamped website for Shalom Group of Institutions, a multidisciplinary education group in Bangalore with 9 colleges across healthcare, nursing, commerce, management and technology. Programs, admissions flow and institution pages.",
    contributions: [
      "Revamped multi-college website",
      "Programs & institution pages",
      "Admissions sections",
      "Responsive UI",
    ],
    link: "https://www.shalom-group.in/",
    linkLabel: "shalom-group.in",
    image: "images/SGI.png",
  },
  {
    name: "Campus Suite",
    kind: "Company-Owned Product",
    badge: "Company Product",
    status: "Under development",
    access: "Full product is live — needs company credentials",
    tech: ["Angular", "TypeScript", "REST APIs"],
    description:
      "Company-owned product — education operations suite. Worked on enterprise UI: reusable components, forms, tables and dashboards.",
    contributions: [
      "Reusable components",
      "Forms & tables",
      "Dashboards",
      "API integration",
    ],
    link: "https://dsquareconsulting.com/products/campus-suite/",
    linkLabel: "campus-suite",
    marketing: true,
  },
  {
    name: "Campus Admissions",
    kind: "Company-Owned Product",
    badge: "Company Product",
    status: "Completed",
    access: "Live — needs company credentials",
    tech: ["Angular", "TypeScript", "REST APIs"],
    description:
      "Company-owned admissions product. Worked on application/admissions flows, forms, filtering and responsive layouts.",
    contributions: [
      "Admissions flows",
      "Forms & filtering",
      "Responsive layouts",
    ],
    link: null,
  },
  {
    name: "UniConnect",
    kind: "Company-Owned Product",
    badge: "Company Product",
    access: "Full product is live — needs company credentials",
    tech: ["Angular", "TypeScript", "REST APIs"],
    description:
      "Customer communication platform bringing WhatsApp, RCS, SMS, Email and Voice into one place — so teams send the right message, on the right channel, at the right time.",
    contributions: [
      "Messaging-channel UI",
      "Reusable components",
      "API integration",
      "Responsive layouts",
    ],
    link: "https://dsquareconsulting.com/products/uni-connect/",
    linkLabel: "uni-connect",
    marketing: true,
  }
];

// Kept for backwards-compat (Projects section no longer uses this)
export const professionalWork = companyWork.map((w) => ({
  name: w.name,
  type: w.kind,
  tech: w.tech,
  description: w.description,
  contributions: w.contributions,
  note: w.link
    ? `Live: ${w.linkLabel}`
    : `Live — needs company credentials${w.status ? ` (${w.status})` : ""}.`,
  link: w.link,
}));

export const freelanceWork = [
  {
    name: "Ayra Cars — Buy & Sell Used Cars and Bikes",
    kind: "Freelance Client Project",
    tech: ["Angular", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Google Auth", "Hostinger"],
    description:
      "Live freelance build for Ayra Cars, a verified second-hand cars & bikes brand in Bangalore serving across Karnataka — transparent prices, trusted listings and buying + selling flows, deployed on Hostinger.",
    features: [
      "Buy / sell listings",
      "Search & filtering",
      "Vehicle detail pages",
      "Google sign-in",
      "Image management",
      "Hostinger deployment",
    ],
    image: "images/ayracars.png",
    link: "https://ayracars.in/",
    linkLabel: "ayracars.in",
  },
];

export const personalProjects = [
  {
    name: "Trading Journal",
    tech: ["Angular", "Node.js", "MongoDB"],
    description:
      "Personal productivity / analytics app for logging trades, reviewing history and tracking performance over time with calendar views and dashboards.",
    features: [
      "Trade logging",
      "Trade history",
      "Calendar-based tracking",
      "Dashboard / statistics",
      "Pips / lots calculations",
      "Data visualization",
    ],
    image: null,
  },
  {
    name: "Poster E-Commerce",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Multer"],
    description:
      "E-commerce app for poster sales with product management, authentication, cart functionality, REST APIs, image uploads and MongoDB integration.",
    features: [
      "Product management",
      "Authentication",
      "Cart functionality",
      "REST APIs",
      "Image uploads",
    ],
    image: "images/poster_website.webp",
    link: "https://e-comm-frontend-og8j.onrender.com",
  },
  {
    name: "Farm to Market",
    tech: ["Next.js", "Tailwind CSS", "Spring Boot"],
    description:
      "Full-stack agritech marketplace connecting farmers with consumers. Demonstrates modern frontend / backend integration with listings, role-based views and checkout flow.",
    features: ["Product listings", "Role-based dashboards", "Checkout flow"],
    image: "images/farm_to_market.webp",
    link: "https://farm2market-nu.vercel.app/",
  },
  // Hidden for now — Sundown Studio clone (uncomment to restore)
  // {
  //   name: "Sundown Studio — Clone Website",
  //   tech: ["HTML", "CSS", "JavaScript"],
  //   description:
  //     "Front-end clone of the Sundown Studio site — replicating its immersive layout, rich media sections and interactive details with plain HTML, CSS and JavaScript.",
  //   features: ["Clone layout", "Rich media sections", "Interactive details", "Responsive UI"],
  //   image: null,
  //   link: "https://jaishankarreddy.github.io/sundown/",
  // },
];

export const experienceTimeline = [
  {
    company: "Dsquare Consulting Services Pvt Ltd, Bangalore",
    period: "Nov 14, 2025 — Present",
    role: "Full-Stack Developer",
    current: true,
    description:
      "Company / client delivery across revamped websites and owned products.",
    points: [
      "Revamped 5 client & company websites in Next.js — all live",
      "Built SRGS school website UI in Angular — carousels, header/footer, responsive sections",
      "Contributed to company products Campus Suite & Campus Admissions",
      "CMS-driven content with Sanity; reusable components + API integration",
    ],
    tech: ["Angular", "Next.js", "Tailwind CSS", "Swiper.js", "Sanity CMS", "REST APIs"],
  },
  {
    company: "JSpiders Basavanagudi, Bangalore-04",
    period: "Feb 2025 - Jul 2025",
    role: "MERN Stack",
    description:
      "MERN Stack training, building interactive web applications using MongoDB, Express.js, React.js, and Node.js.",
    takeaway: "Base for my full-stack personal projects",
  },
  {
    company: "Rooman Pvt Limited",
    period: "Oct 2024 - Feb 2025",
    role: "DevOps",
    description: "Training covering DevOps practices and related tooling.",
    takeaway: "CI/CD & hosting basics",
  },
  {
    company: "Colt Assist Pvt Limited, Bangalore-61",
    period: "Oct 2023 - Nov 2023",
    role: "Java Full-Stack",
    description:
      "Training in Java full-stack development: responsive front-end interfaces and back-end solutions with Java.",
    takeaway: "Now extending into Spring Boot",
  },
  {
    company: "IPEC Solutions Pvt Limited, Bangalore-98",
    period: "Oct 2022 - Nov 2022",
    role: "Python with RDBMS",
    description:
      "Training in Python programming with Relational Database Management.",
    takeaway: "First programming foundation",
  },
];
