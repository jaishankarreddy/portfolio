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
      className="group relative overflow-hidden rounded-3xl bg-gray-950 text-white shadow-xl shadow-gray-900/20 grid md:grid-cols-[1.05fr_1fr]"
    >
      <div className="absolute -top-28 -left-28 w-96 h-96 rounded-full bg-orange-500/25 blur-[70px] pointer-events-none" />
      {/* browser-mockup preview: top-anchored landing screenshot in a
          window frame, so the page hero shows instead of a center crop */}
      <div className="relative flex items-center p-4 sm:p-6 md:p-8">
        <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.06] border-b border-white/10">
            <span className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            </span>
            <span className="ml-2 flex-1 truncate text-center text-[11px] font-medium text-gray-400 bg-white/[0.06] rounded-full px-3 py-1">
              {project.linkLabel}
            </span>
          </div>
          <FadeImg
            src={project.image}
            alt={project.name}
            wrapClassName="relative aspect-[2/1] overflow-hidden"
            imgClassName="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
          />
        </div>
      </div>

      <div className="relative p-6 sm:p-8 flex flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider bg-orange-500 px-3 py-1.5 rounded-full">
            <FaStar className="w-3 h-3" /> Freelance client work
          </span>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider bg-green-500/15 text-green-300 border border-green-500/30 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Live
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold mt-4 leading-tight">
          {project.name}
        </h3>
        <p className="text-[13px] text-gray-300 mt-2.5 leading-relaxed">
          {project.description}
        </p>
        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
          {project.features.map((f) => (
            <li key={f} className="text-xs text-gray-200 flex gap-2">
              <span className="text-orange-400 font-bold">→</span> {f}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-gray-100"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold py-3.5 transition-colors shadow-lg shadow-orange-500/30"
        >
          Visit {project.linkLabel} live <FaExternalLinkAlt className="w-3.5 h-3.5" />
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
      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-orange-500/15 hover:border-orange-200 transition-all duration-300 flex flex-col"
    >
      {project.image ? (
        <div className="relative overflow-hidden">
          <FadeImg
            src={project.image}
            alt={project.name}
            wrapClassName="aspect-[2/1] overflow-hidden"
            imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent pointer-events-none" />
          <span className="absolute top-3 left-3 text-[11px] font-extrabold bg-white/95 text-gray-900 w-9 h-9 rounded-full flex items-center justify-center shadow">
            {num}
          </span>
          <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-gray-900/80 text-white px-3 py-1.5 rounded-full">
            Personal project
          </span>
        </div>
      ) : (
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-950 aspect-[2/1] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-30 trading-grid" />
          <span className="absolute top-3 left-3 text-[11px] font-extrabold bg-white/95 text-gray-900 w-9 h-9 rounded-full flex items-center justify-center">
            {num}
          </span>
          <span className="relative text-white/85 text-sm font-bold tracking-wide px-6 text-center">
            {project.name}
          </span>
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        <h4 className="font-bold text-gray-900 text-[15px] leading-snug group-hover:text-orange-600 transition-colors">
          {project.name}
        </h4>
        <p className="text-xs text-gray-600 mt-2 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex-1" />
        <div className="mt-4 pt-4 border-t border-gray-100">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-3 transition-colors shadow-lg shadow-orange-500/25"
            >
              View live demo <FaExternalLinkAlt className="w-3 h-3" />
            </a>
          ) : (
            <button
              onClick={goContact}
              className="inline-flex items-center justify-center gap-2 w-full rounded-xl border border-gray-200 hover:border-orange-400 text-gray-700 hover:text-orange-600 text-xs font-bold py-3 transition-colors"
            >
              Ask me for a walkthrough <FaArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

const Projects = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
      <SectionHeading
        index="04 — Projects"
        title="Projects —"
        accent="Freelance & Personal"
        sub="Independent work outside my company role: a live freelance client build, plus things I built for myself."
      />

      {freelanceWork.map((p) => (
        <FreelanceSpotlight key={p.name} project={p} />
      ))}

      <div className="flex items-center gap-2.5 mt-10 mb-5">
        <h3 className="text-sm font-bold text-gray-900">
          Personal builds <span className="font-medium text-gray-400">— designed, coded & deployed by me</span>
        </h3>
        <span className="flex-1 h-px bg-gray-200" />
      </div>
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={cardViewport}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {personalProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
