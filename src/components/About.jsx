import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";

const About = () => {
  return (
    <section
      className="mx-auto max-w-6xl py-14 px-4 sm:px-6 lg:px-8"
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
        <motion.div
          initial={{ x: "-10vw", opacity: 0, filter: "blur(10px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 90, damping: 9, mass: 1 }}
          className="relative hidden sm:block"
        >
          <div className="absolute -inset-6 bg-gradient-to-tr from-orange-200/50 to-amber-100/30 rounded-[2.5rem] blur-2xl" />
          <img
            src="images/about_me.webp"
            alt="About illustration"
            loading="lazy"
            decoding="async"
            className="relative mx-auto w-full max-w-xs hover:scale-[1.03] hover:-rotate-1 transition-transform duration-500"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-gray-700 border border-gray-200 text-[11px] font-bold px-4 py-2 rounded-full shadow-xl whitespace-nowrap">
            01 — About
          </div>
        </motion.div>

        <motion.div
          initial={{ x: "10vw", opacity: 0, filter: "blur(10px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 80, damping: 7, mass: 1 }}
          className="space-y-5"
        >
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-600">
              01 — About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              About <span className="text-orange-500">Me</span>
            </h2>
            <div className="flex items-center gap-2 mt-2 text-gray-600 font-medium">
              <Briefcase className="w-4 h-4 text-orange-500" />
              <span className="text-sm">{profile.role}</span>
            </div>
          </div>

          <div className="group bg-white border border-gray-200 border-l-4 border-l-orange-500 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:shadow-orange-500/10 transition-shadow">
            <p className="text-sm text-gray-700 leading-relaxed">
              Computer Science Engineering graduate working as a{" "}
              <span className="font-semibold">Full-Stack Developer</span> at{" "}
              <span className="font-semibold">
                Dsquare Consulting Services, Bangalore
              </span>
              . Hands-on with{" "}
              <span className="font-semibold">
                Angular, Next.js, Node.js / Express / MongoDB
              </span>{" "}
              — school/education websites, revamped client sites and
              company-owned products with reusable components and API-driven
              UI. Currently expanding backend expertise with Java / Spring
              Boot.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 bg-gray-50 hover:bg-white border border-gray-100 hover:border-orange-200 rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-gray-500 uppercase tracking-wide font-bold">Email</p>
                <p className="text-xs font-semibold truncate">{profile.email}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 ml-auto text-gray-400" />
            </a>
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl p-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-[11px] text-gray-500 uppercase tracking-wide font-bold">Location</p>
                <p className="text-xs font-semibold">{profile.location}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
