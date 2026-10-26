import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowUp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { profile, companyWork } from "../data/portfolio";
import { scrollToSection as lenisGo, scrollToTop } from "../lib/scroll";

const QUICK = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "company-work", label: "Company Work" },
  { id: "projects", label: "Personal Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const go = (id) => lenisGo(id);
  const top = () => scrollToTop();
  const PINNED = ["Dsquare Consulting Website", "Campus Consulting", "Varnika Insights"];
  const rankOf = (name) => {
    const i = PINNED.indexOf(name);
    return i === -1 ? PINNED.length : i;
  };
  const liveSites = companyWork
    .filter((w) => w.link && !w.marketing)
    .sort((a, b) => rankOf(a.name) - rankOf(b.name))
    .slice(0, 5);

  return (
    <footer className="relative mt-6 bg-gray-950 text-gray-300 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[640px] h-[280px] rounded-full bg-orange-500/15 blur-[70px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <motion.div
          initial={{ y: 50, opacity: 0, filter: "blur(20px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center font-extrabold text-white shadow-lg shadow-orange-500/30">
                JR
              </span>
              <div className="leading-tight">
                <p className="font-bold text-white">{profile.name}</p>
                <p className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold">{profile.role}</p>
              </div>
            </div>
            <p className="text-[13px] text-gray-400 mt-4 leading-relaxed max-w-sm">
              {profile.tagline} Based in {profile.location} — company work at Dsquare Consulting plus independent full-stack projects.
            </p>
            <div className="flex gap-2.5 mt-5">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:border-orange-500/60 hover:text-orange-400 hover:-translate-y-0.5 transition-all">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:border-orange-500/60 hover:text-orange-400 hover:-translate-y-0.5 transition-all">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:border-orange-500/60 hover:text-orange-400 hover:-translate-y-0.5 transition-all">
                <FaEnvelope className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">Explore</p>
            <ul className="mt-4 grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2.5">
              {QUICK.map((q) => (
                <li key={q.id}>
                  <button onClick={() => go(q.id)} className="text-[13px] font-medium text-gray-400 hover:text-orange-400 transition-colors">
                    {q.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">Live client work</p>
            <ul className="mt-4 space-y-2.5">
              {liveSites.map((s) => (
                <li key={s.name}>
                  <a href={s.link} target="_blank" rel="noopener noreferrer"
                    className="text-[13px] font-medium text-gray-400 hover:text-orange-400 transition-colors">
                    {s.linkLabel || s.name} <span className="text-orange-500">↗</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-gray-600 mt-4 flex items-start gap-1.5">
              <FaMapMarkerAlt className="w-3 h-3 mt-0.5 shrink-0" /> {profile.location}
            </p>
          </div>
        </motion.div>

        <div className="mt-10 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-gray-500">
            © {new Date().getFullYear()} <span className="text-orange-400 font-semibold">{profile.name}</span> · All rights reserved
          </p>
          <p className="text-[11px] text-gray-600">Built with React, Tailwind CSS & Three.js</p>
          <button onClick={top} aria-label="Back to top"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white hover:-translate-y-1 transition-all">
            <FaArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
