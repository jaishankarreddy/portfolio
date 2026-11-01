import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";
import { scrollToSection } from "../lib/scroll";

const About = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <motion.div
          initial={{ x: "-10vw", opacity: 0, filter: "blur(10px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 90, damping: 9, mass: 1 }}
          className="relative mx-auto mb-6 w-full max-w-[17rem] sm:max-w-xs lg:mb-0 lg:max-w-sm"
        >
          <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-tr from-orange-200/60 via-amber-100/40 to-transparent blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-white bg-gradient-to-br from-orange-50 via-white to-amber-50 shadow-xl shadow-orange-500/10">
            <img
              src="images/about_me.webp"
              alt="Illustration of Jaishankar Reddy"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-gray-200 bg-white px-4 py-2 text-[11px] font-bold text-gray-700 shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Currently at Dsquare
          </div>
        </motion.div>

        <motion.div
          initial={{ x: "10vw", opacity: 0, filter: "blur(10px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 80, damping: 7, mass: 1 }}
          className="space-y-5 sm:space-y-6"
        >
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-orange-600">
              01 — About
            </p>
            <h2 className="mt-2 text-[28px] font-bold leading-tight tracking-tight sm:text-4xl">
              About <span className="text-orange-500">Me</span>
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-600">
                <Briefcase className="h-4 w-4 text-orange-500" />
                {profile.role}
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />
              <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-[11px] font-bold text-green-700">
                Nov 2025 — Present
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 border-l-4 border-l-orange-500 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg hover:shadow-orange-500/10 sm:p-6">
            <p className="text-[13px] leading-relaxed text-gray-700 sm:text-sm">
              Computer Science Engineering graduate working as a{" "}
              <span className="font-semibold text-gray-900">Full-Stack Developer</span> at{" "}
              <span className="font-semibold text-gray-900">
                Dsquare Consulting Services, Bangalore
              </span>
              . Hands-on with{" "}
              <span className="font-semibold text-gray-900">
                Angular, Next.js, Node.js / Express / MongoDB
              </span>{" "}
              — school/education websites, revamped client sites and company-owned
              products with reusable components and API-driven UI. Currently
              expanding backend expertise with Java / Spring Boot.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition-all hover:-translate-y-0.5 hover:border-orange-200 hover:bg-white hover:shadow-md"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500">
                <Mail className="h-4 w-4 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                  Email
                </p>
                <p className="break-all text-[11px] font-semibold leading-snug text-gray-900">
                  {profile.email}
                </p>
              </div>
              <ArrowUpRight className="hidden h-4 w-4 shrink-0 text-gray-400 transition-colors group-hover:text-orange-500 sm:block" />
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                  Location
                </p>
                <p className="text-xs font-semibold text-gray-900">
                  {profile.location}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-orange-500"
            >
              Let&apos;s work together
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-xs font-bold text-gray-700 transition-colors hover:border-orange-400 hover:text-orange-600"
            >
              Download résumé
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
