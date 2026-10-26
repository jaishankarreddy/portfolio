# Portfolio — Project Context (`context.md`)

> Single source of truth for AI agents and humans working on this portfolio.
> Read this file first before changing anything.

## 1. What this is

Personal portfolio website of **Jaishankar Reddy**, Full-Stack Developer based in
Bangalore, Karnataka, India. Built with **React 18 + Vite + Tailwind CSS**.
Deployed as a static single-page site with smooth-scroll section navigation
(no router — one page, anchor sections).

- Live portfolio: (add URL here when deployed)
- GitHub: https://github.com/jaishankarreddy
- LinkedIn: https://www.linkedin.com/in/jaishankar-reddy-9a65ab314
- Email: jaishankar63663@gmail.com · Phone: +91 9986535860

## 2. How to run

```bash
npm install
npm run dev     # local dev
npm run build   # production build (verified green)
```

## 3. Tech stack (installed = used, nothing extra)

| Package | Used for |
|---|---|
| react, react-dom | UI |
| vite, @vitejs/plugin-react | Build |
| tailwindcss, postcss, autoprefixer | Styling |
| framer-motion | **The** animation system: scroll reveals, hero entrance, tilt, menus, progress bar |
| three, @react-three/fiber, @react-three/drei | Hero 3D background blob |
| lenis (+ `lenis/dist/lenis.css`) | Smooth scrolling (`ReactLenis` in `App.jsx`) |
| react-icons, lucide-react | All icons (FontAwesome packages were removed) |
| @emailjs/browser | Contact form delivery |
| react-toastify | Contact form toasts |

**Deliberately removed:** gsap, @gsap/react, redux, react-redux,
react-router-dom, @fortawesome/*, @react-three/postprocessing, postprocessing,
three-mesh-bvh, @studio-freight/lenis, react-intersection-observer,
react-simple-typewriter. Do NOT re-add without a concrete need.

## 4. About the person (ground truth — do not invent beyond this)

- Computer Science Engineering graduate.
- **Full-Stack Developer at Dsquare Consulting Services Pvt Ltd, Bangalore**
  — current full-time role, **Nov 14, 2025 — Present** (on-site).
- Stack in practice: **Angular, Next.js, TypeScript, JavaScript, Tailwind CSS,
  Node.js / Express / MongoDB**. CMS: Sanity. Carousels: Swiper.js.
- Ships live client/company sites; also takes freelance client work
  (Ayra Cars) and builds personal projects.
- Learning (NOT strengths — never present as expertise): **Docker, Java,
  Spring Boot**.
- Positioning rule: say **"Full-Stack Developer"**. NEVER say
  "frontend-focused", "Senior", "expert", or claim metrics/awards/clients
  not listed here.

## 5. Data model — everything content lives in `src/data/portfolio.js`

Edit content there, not in components. Exports:

- `profile` — name, role, tagline, location, email, phone, github, linkedin,
  resume (`/resume.pdf` in `public/`).
- `companyProfile` — Dsquare name/location/role/period/summary. `period` is
  `"Nov 14, 2025 — Present"`.
- `companyWork[8]` — current company work, display order matters:
  1. Dsquare Consulting Website (company revamp, Next.js) → https://dsquareconsulting.com/
  2. Campus Consulting (client revamp, Next.js + Sanity) → https://www.campusconsulting.in/
  3. Varnika Insights (client revamp, Next.js) → https://www.varnikainsights.com/
  4. SRGS school website UI (client, Angular + Tailwind + Swiper) → https://srgsbangalore.com/
  5. Shalom Group (client revamp, Next.js) → https://www.shalom-group.in/
  6. Campus Suite (company product, Angular) — **under development, live but
     needs company credentials** (`link` points to the public
     `/products/campus-suite/` marketing page + `marketing: true`, so it stays
     in the products group with a "View marketing page" button).
  7. Campus Admissions (company product, Angular) — **completed, live but
     needs company credentials** (`link: null`).
  8. UniConnect (company product, Angular) — customer communication platform
     (WhatsApp/RCS/SMS/Email/Voice); same marketing-link treatment
     (`/products/uni-connect/` + `marketing: true`).
  - Card order is enforced by `PINNED_FIRST` in `CompanyWork.jsx` (+ same
    ranking in `Footer.jsx`); footer shows the 5 linkable sites.
  - Wording rule: **"Company Work" / "Current"** — NEVER "previous", "last",
    "former", or "ex" company. He still works there.
- `freelanceWork[1]` — **Ayra Cars** (freelance client project, outside the
  company): verified second-hand cars & bikes marketplace, Bangalore/Karnataka
  (researched from ayracars.in meta: Angular SPA, Google sign-in, transparent
  prices, Konanakunte Bengaluru). MEAN stack, Hostinger-hosted, live →
  https://ayracars.in/ (`linkLabel: "ayracars.in"`).
- `personalProjects[3]` — Trading Journal (Angular/Node/Mongo, no image, no
  link), Poster E-Commerce (React/Node/Mongo, live demo link), Farm to Market
  (Next.js + Spring Boot, live demo link). A 4th entry (Sundown Studio clone)
  exists **commented out** at the end of the array — hidden for now.
- `skillGroups[4]` — skills grouped by **where used** (not by tech layer):
  1. "Used at Dsquare — company work" (Angular, Next.js, TS, JS, Tailwind,
     HTML, CSS, PrimeNG, Swiper.js, Sanity CMS, REST APIs, JWT, Git, GitHub,
     Hostinger). JWT + Hostinger intentionally appear in BOTH groups (used in both).
  2. "Used in personal projects" (React, Node, Express, MongoDB — single
     merged tile covering Atlas/Mongoose, JWT, Cloudinary, Vercel, Render,
     Hostinger).
  3. "Learning now" (`learning: true` — Docker, Java, Spring Boot).
  4. "Also touched" (`muted: true` — Framer Motion, GSAP, Three.js/R3F,
     Lenis, OData). Multer was removed entirely per owner.
- `experienceTimeline[5]` — [0] is the current Dsquare role (`current: true`,
  `points[4]` bullets, `tech[6]` chips); [1..4] are earlier trainings, each
  with a one-line honest `takeaway` (MERN → personal-project base; DevOps →
  CI/CD basics; Java → now Spring Boot; Python → first foundation).

## 6. Page structure (`src/App.jsx` order)

`Hero (#home)` → tech `Marquee` → `About (#about)` → `Skills (#skills)` →
`CompanyWork (#company-work)` → `Projects (#projects`: freelance spotlight +
personal grid) → `Work_experience (#experience)` → `Contact (#contact)` →
`Footer`. Navbar + footer link to these exact ids (`projects` plural).

## 7. Design system

- Font: Poppins (Google Fonts link in `index.html`).
- Colors: white surfaces, `gray-900` dark, `orange-500/600` primary accent,
  green pulse = live/current, amber pulse = in development.
- Dark cards (`CompanyWork` banner, freelance spotlight, featured experience,
  contact info panel, footer) vs light cards elsewhere.
- Section headers: `SectionHeading` (`index` kicker like "03 — Company Work",
  title + orange accent word, one-line sub).
- 3D: removed — no 3D background anywhere (Hero3D deleted, no three.js in use).
- Animation rules: restored pre-redesign language via Framer only
  (`src/lib/anim.js` mirrors old values, no GSAP/redux re-added): hero
  springs from left/right with blur + stagger 0.2, icons from bottom;
  general scroll reveals translateY(50px) + blur(20px) -> clear over 0.5s.
  project/company cards use a staggered fade-up (`y:20 -> 0, 0.4s`) that
  triggers ~one viewport early (`margin: "400px"`) so it finishes before
  cards are seen — never blank. `content-visibility` is NOT used anywhere
  (it suppressed rendering and stalled the observer = blank flash).
  Hover lift via Framer `whileHover`, image fade-in on load. Navbar slide-away +
  GoToTop bounce unchanged.
  Respect `prefers-reduced-motion` where present.

## 8. Key component notes

- `Navbar.jsx` — ORIGINAL dark-pill design (center JS logo, split links),
  slimmed (`py-2.5`, `text-sm`/`text-xl`). Original hide-on-scroll behavior:
  slides away past 60px, hover strip at top reveals, returns at top, 1s
  entrance. Do not "redesign" without asking.
- `Hero.jsx` — Framer `fadeUp` stagger; `TiltPhoto` uses Framer springs
  (keep Framer here — tilt needs motion values).
- `CompanyWork.jsx` — grouped display (live sites grid + internal products),
  NOT filter tabs (tabs were replaced for clarity).
- `Contact.jsx` — dark info panel (copy-on-click rows) + white form;
  EmailJS `service_qwfv9l2 / template_7wl187c`, fields `name/email/message`.
- `Work_experience.jsx` — classic center-spine timeline (company left, role
  card right), desktop + stacked mobile variants.
- `index.css` — old `.nav/.skills/.projects/.work_*` rules coexist with new
  utilities (`hero-grid`, `pro-grid`, `trading-grid`, `work-grid`,
  `spot-card`, `marquee-track`, custom scrollbar/selection).

## 9. Assets (`public/`)

- `images/`: `myImg.jpg` (hero), `about_me.webp`, `ayracars.png` (Ayra
  landing), `campus_consulting.png`, `SGI.png` (Shalom), `SRGS.png`,
  `vernika.png`, `dsquare.png`, `poster_website.webp`, `farm_to_market.webp`
  (`images/` field on company/freelance entries; internal products keep
  lock covers). `cars.webp` kept but unused.
  Everything else was deleted as unused. `resume.pdf` + `portfolio2.png` (favicon) are linked — keep.
- Deleted as unused (do not reference): `background_img.png`, `earth.png`,
  `posters.png`, `spline_3d.png`, `sundown.png`, `vite.svg`, `portfolio.png`,
  `src/assets/react.svg`, `src/assets/background_pic.png`, `Model2.jsx`,
  `Progress.jsx`, `progress.css`, `CompanyWork3D.jsx`, `CustomHook.js`,
  `src/store/*`.

## 10. Rules for future changes

1. Content edits → `src/data/portfolio.js` only.
2. New company links → set `link` + `linkLabel` on the item; ordering is
   automatic via `PINNED_FIRST`.
3. Product detail write-ups for Campus Suite/Admissions are PENDING from the
   owner — expand those two cards when they arrive.
4. Keep the company/personal/freelance separation strict; never mix categories.
5. Keep animations Framer-only, using the restored old language in `src/lib/anim.js` (spring + blur reveals); keep it simple/sweet (portfolio, not showreel).
6. After changes: `npm run build` must stay green; nav ids must match
   `App.jsx` anchors.
