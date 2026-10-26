import { motion } from "framer-motion";
import { FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { experienceTimeline } from "../data/portfolio";

const Work_experience = () => {
  return (
    <section
      className="work_section mx-auto mt-10 max-w-6xl px-4 pt-10 work_exp"
    >
      <div>
        <SectionHeading
          index="05 — Career"
          title="Work"
          accent="Experience"
          sub="What I do now — then how I got here. Most recent first."
        />
      </div>

      <div className="relative">
        {/* gradient spine */}
        <div className="absolute left-4 md:left-1/2 top-1 bottom-1 w-0.5 bg-gradient-to-b from-orange-500 via-orange-200 to-gray-200 md:transform md:-translate-x-1/2 rounded-full" />
        <div className="absolute left-4 md:left-1/2 top-1 md:transform md:-translate-x-1/2 -translate-x-[5px] w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_16px_rgba(249,115,22,0.8)]" />

        {experienceTimeline.map((experience, index) => {
          const featured = index === 0;
          return (
            <div
              key={index}
              className="group relative flex flex-col md:flex-row md:items-center mb-8 md:mb-12 pl-10 md:pl-0"
            >
              {/* left: company */}
              <div className="work_left w-full md:w-1/2 md:pr-8 md:text-right">
                <p
                  className={`inline-block text-[11px] font-bold px-3 py-1 rounded-full border md:mr-5 ${
                    featured
                      ? "bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/30"
                      : "bg-white text-gray-500 border-gray-200"
                  }`}
                >
                  {experience.period}
                </p>
                <h3 className="work_company font-bold text-xl md:text-2xl mt-2 md:mr-5 text-gray-900 leading-snug">
                  {experience.company}
                </h3>
                <p className="work_period hidden md:flex items-center justify-end gap-1 text-gray-400 text-xs mt-1.5 mr-5 font-medium">
                  <FaMapMarkerAlt className="w-3 h-3 text-orange-400" />
                  Bangalore, India
                </p>
              </div>

              {/* dot */}
              <div className="absolute left-4 md:static top-8 md:top-auto -translate-x-1/2 md:translate-x-0 md:ml-0 md:mt-0">
                <span className="relative flex w-4 h-4">
                  {featured && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-60" />
                  )}
                  <span
                    className={`work_dot relative inline-flex w-4 h-4 rounded-full z-10 flex-shrink-0 border-[3px] transition-all group-hover:scale-125 ${
                      featured
                        ? "bg-orange-500 border-orange-200 shadow-[0_0_12px_rgba(249,115,22,0.6)]"
                        : "bg-white border-gray-300 group-hover:border-orange-400 shadow-sm"
                    }`}
                  />
                </span>
              </div>

              {/* right: role card */}
              <div className="work_right w-full md:w-1/2 md:pl-8 mt-3 md:mt-0">
                <motion.div
                  initial={{ y: 50, opacity: 0, filter: "blur(20px)" }}
                  whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -3 }}
                  className={`md:ml-5 rounded-2xl p-4 sm:p-5 border transition-shadow ${
                    featured
                      ? "bg-gray-900 text-white border-gray-900 shadow-xl shadow-gray-900/20 hover:shadow-2xl hover:shadow-orange-500/20"
                      : "bg-white border-gray-200 shadow-sm hover:shadow-lg hover:shadow-orange-500/10 hover:border-orange-200"
                  }`}
                >
                  <h4
                    className={`work_role text-base sm:text-lg font-bold ${
                      featured ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {experience.role}
                  </h4>
                  {featured && experience.points ? (
                    <>
                      <ul className="mt-3 grid gap-2 min-[1100px]:grid-cols-2 min-[1100px]:gap-x-5">
                        {experience.points.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-2 text-xs text-gray-200 leading-relaxed"
                          >
                            <FaCheckCircle className="w-3.5 h-3.5 text-orange-400 mt-0.5 shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {(experience.tech || []).map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-gray-100"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="work_discription text-gray-500 font-medium text-[13px] mt-2 leading-relaxed">
                        {experience.description}
                      </p>
                      {experience.takeaway && (
                        <p className="text-[11px] text-orange-600 font-bold mt-2.5 inline-block bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-full">
                          → {experience.takeaway}
                        </p>
                      )}
                    </>
                  )}
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work_experience;
