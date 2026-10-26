import { motion } from "framer-motion";
import {
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSanity,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiSwiper,
  SiSpringboot,
} from "react-icons/si";
import { FaCube, FaJava, FaCloud, FaServer, FaGlobe } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/portfolio";

const ICONS = {
  Angular: SiAngular,
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  HTML: SiHtml5,
  CSS: SiCss3,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  "MongoDB Atlas": SiMongodb,
  "Sanity CMS": SiSanity,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  Vercel: SiVercel,
  "Swiper.js": SiSwiper,
  Java: FaJava,
  "Spring Boot": SiSpringboot,
  Mongoose: SiMongodb,
  Cloudinary: FaCloud,
  Render: FaServer,
  Hostinger: FaGlobe,
};

function SkillTile({ skill, muted }) {
  const Icon = ICONS[skill] || FaCube;
  return (
    <motion.div
      initial={{ y: 50, opacity: 0, filter: "blur(20px)" }}
      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -3 }}
      className={`flex items-center gap-2.5 rounded-xl border px-3.5 py-3 transition-shadow hover:shadow-md ${
        muted
          ? "bg-white border-gray-200"
          : "bg-gray-50 border-gray-200 hover:border-orange-300"
      }`}
    >
      <Icon className="w-5 h-5 text-orange-600 shrink-0" />
      <span className="text-[13px] font-semibold text-gray-800">{skill}</span>
    </motion.div>
  );
}

const Skills = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
      <SectionHeading
        index="02 — Stack"
        title="Skills &"
        accent="Tech Stack"
        sub="Grouped by where I've actually used them — no padding, no expert claims."
      />

      <div className="grid lg:grid-cols-2 gap-4">
        {skillGroups
          .filter((g) => !g.learning && !g.muted)
          .map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ y: 50, opacity: 0, filter: "blur(20px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    gi === 0 ? "bg-orange-500 text-white" : "bg-white text-gray-600 border border-gray-200"
                  }`}
                >
                  {gi === 0 ? "Company" : "Personal"}
                </span>
                <h3 className="text-[15px] font-bold text-gray-900">{group.title}</h3>
              </div>
              <p className="text-xs text-gray-500 mt-1.5">{group.subtitle}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-4">
                {group.skills.map((s) => (
                  <SkillTile key={s} skill={s} />
                ))}
              </div>
            </motion.div>
          ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {skillGroups
          .filter((g) => g.learning || g.muted)
          .map((group) => (
            <motion.div
              key={group.title}
              initial={{ y: 50, opacity: 0, filter: "blur(20px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl p-5 ${
                group.learning
                  ? "border-2 border-dashed border-orange-300 bg-orange-50/60"
                  : "border border-gray-100 bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <h3
                  className={`text-[13px] font-bold uppercase tracking-wider ${
                    group.learning ? "text-orange-700" : "text-gray-400"
                  }`}
                >
                  {group.learning ? "🌱 " : ""}
                  {group.title}
                </h3>
              </div>
              <p className="text-xs text-gray-500 mt-1">{group.subtitle}</p>
              <div className="flex flex-wrap gap-2 mt-3.5">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full border ${
                      group.learning
                        ? "bg-white text-gray-700 border-orange-200"
                        : "bg-white text-gray-400 border-gray-200"
                    }`}
                  >
                    {(() => {
                      const Icon = ICONS[s] || FaCube;
                      return <Icon className="w-3.5 h-3.5 text-orange-500" />;
                    })()}
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default Skills;
