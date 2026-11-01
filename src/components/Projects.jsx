import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaArrowRight, FaStar } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import FadeImg from "./FadeImg";
import { staggerParent, cardItem, cardViewport } from "../lib/anim";
import { freelanceWork, personalProjects } from "../data/portfolio";
import { scrollToSection as lenisGo } from "../lib/scroll";

function FreelanceSpotlight({ project }) {
  return (
    <motion.article
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={cardViewport}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[1.75rem] bg-gray-950 text-white shadow-xl shadow-gray-900/20 sm:rounded-3xl lg:grid lg:grid-cols-[1.05fr_1fr]"
    >
      <div className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full bg-orange-500/25 blur-[70px]" />
      {/* browser-mockup preview: top-anchored landing screenshot in a
          window frame, so the page hero shows instead of a center crop */}
      <div className="relative flex items-center p-3 sm:p-6 md:p-8">
        <div className="flex w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-gray-900 shadow-2xl shadow-black/40 sm:rounded-2xl">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.06] px-3 py-2 sm:px-4 sm:py-2.5">
            <span className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400/80 sm:h-2.5 sm:w-2.5" />
              <span className="h-2 w-2 rounded-full bg-amber-400/80 sm:h-2.5 sm:w-2.5" />
              <span className="h-2 w-2 rounded-full bg-green-400/80 sm:h-2.5 sm:w-2.5" />
            </span>
            <span className="ml-2 flex-1 truncate rounded-full bg-white/[0.06] px-3 py-1 text-center text-[10px] font-medium text-gray-400 sm:text-[11px]">
              {project.linkLabel}
            </span>
          </div>
          <FadeImg
            src={project.image}
            alt={project.name}
            wrapClassName="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9] lg:aspect-[4/3]"
            imgClassName="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="relative flex flex-col p-5 pt-1 sm:p-8 md:pt-8 lg:pt-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider">
            <FaStar className="h-3 w-3" /> Freelance client work
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-green-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" /> Live
          </span>
        </div>
        <h3 className="mt-4 text-xl font-extrabold leading-tight tracking-tight sm:text-2xl">
          {project.name}
        </h3>
        <p className="mt-2.5 text-[13px] leading-relaxed text-gray-300">
          {project.description}
        </p>
        <ul className="mt-4 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2 text-xs text-gray-200">
              <span className="font-bold text-orange-400">→</span> {f}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-gray-100"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-colors hover:bg-orange-400"
        >
          Visit {project.linkLabel} live <FaExternalLinkAlt className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project, index }) {
  const num = `0${index + 1}`;
  const goContact = () => lenisGo("contact");

  return (
    <motion.article
      variants={cardItem}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-500/15"
    >
      {project.image ? (
        <div className="relative overflow-hidden">
          <FadeImg
            src={project.image}
            alt={project.name}
            wrapClassName="aspect-[16/10] overflow-hidden"
            imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[11px] font-extrabold text-gray-900 shadow">
            {num}
          </span>
          <span className="absolute bottom-3 left-3 rounded-full bg-gray-900/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
            Personal project
          </span>
        </div>
      ) : (
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-orange-950">
          <div className="trading-grid absolute inset-0 opacity-30" />
          <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[11px] font-extrabold text-gray-900">
            {num}
          </span>
          <span className="relative px-6 text-center text-sm font-bold tracking-wide text-white/85">
            {project.name}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <h4 className="text-[15px] font-bold leading-snug text-gray-900 transition-colors group-hover:text-orange-600">
          {project.name}
        </h4>
        <p className="mt-2 text-xs leading-relaxed text-gray-600">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex-1" />
        <div className="mt-4 border-t border-gray-100 pt-4">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 text-xs font-bold text-white shadow-lg shadow-orange-500/25 transition-colors hover:bg-orange-600"
            >
              View live demo <FaExternalLinkAlt className="h-3 w-3" />
            </a>
          ) : (
            <button
              onClick={goContact}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-xs font-bold text-gray-700 transition-colors hover:border-orange-400 hover:text-orange-600"
            >
              Ask me for a walkthrough <FaArrowRight className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

const Projects = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        index="04 — Projects"
        title="Projects —"
        accent="Freelance & Personal"
        sub="Independent work outside my company role: a live freelance client build, plus things I built for myself."
      />

      {freelanceWork.map((p) => (
        <FreelanceSpotlight key={p.name} project={p} />
      ))}

      <div className="mt-10 mb-5">
        <div className="flex items-center gap-2.5">
          <h3 className="text-sm font-bold text-gray-900">Personal builds</h3>
          <span className="h-px flex-1 bg-gray-200" />
        </div>
        <p className="mt-1.5 text-xs text-gray-400">
          Designed, coded &amp; deployed by me
        </p>
      </div>
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={cardViewport}
        className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {personalProjects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
