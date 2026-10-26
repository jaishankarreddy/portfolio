import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";
import { MapPin } from "lucide-react";
import { profile } from "../data/portfolio";
import { scrollToSection as lenisGo } from "../lib/scroll";

import { container, springLeft, springRight, iconUp } from "../lib/anim";

function TiltPhoto() {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-12, 12]), { stiffness: 180, damping: 20 });

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      variants={springRight}
      initial="initial"
      animate="animate"
      className="w-full md:w-2/5 flex flex-col items-center [perspective:1000px]"
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-orange-500/30 via-amber-300/20 to-transparent blur-2xl" />
        <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-[2rem] overflow-hidden border border-white/60 shadow-2xl shadow-orange-500/20 rotate-2 hover:rotate-0 transition-transform duration-500">
          <img
            src="images/myImg.jpg"
            alt={profile.name}
            fetchpriority="high"
            decoding="async"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/35 via-transparent to-transparent" />
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/95 text-gray-700 border border-gray-200 text-[11px] font-semibold px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          Open to opportunities
        </div>
      </motion.div>
      <p className="mt-8 text-xs text-gray-500 font-medium flex items-center gap-1">
        <MapPin className="w-3.5 h-3.5 text-orange-500" /> {profile.location}
      </p>
    </motion.div>
  );
}

const Hero = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 60);
    return () => clearTimeout(t);
  }, []);

  const scrollToSection = (id) => {
    lenisGo(id);
  };

  return (
    <section className="relative w-full overflow-hidden" style={{ width: "100%", maxWidth: "100%" }}>
      {/* ambient background — full-bleed */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full bg-orange-200/50 blur-[80px]" />
        <div className="absolute top-32 -right-48 w-[660px] h-[660px] rounded-full bg-amber-200/50 blur-[80px]" />
        <div className="absolute inset-0 hero-grid opacity-[0.5]" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-5 pt-32 pb-14 md:pt-40 md:pb-20 flex flex-col-reverse md:flex-row gap-12 items-center min-h-[92vh]">
        {ready && (
          <motion.div
            className="w-full md:w-3/5 space-y-5 text-center md:text-left"
            variants={container}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={springLeft} className="flex justify-center md:justify-start">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Hi, I&apos;m {profile.name}
              </span>
            </motion.div>

            <motion.h1
              variants={springLeft}
              className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-gray-900"
            >
              Full-Stack
              <span className="block bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Developer
              </span>
            </motion.h1>

            <motion.p
              variants={springLeft}
              className="text-gray-600 max-w-xl text-sm md:text-base mx-auto md:mx-0 leading-relaxed"
            >
              {profile.tagline} Currently at Dsquare Consulting Services,
              Bangalore — Angular and Next.js company/client work.
            </motion.p>

            <motion.div
              variants={springLeft}
              className="flex flex-wrap gap-2 justify-center md:justify-start"
            >
              {["Angular 18", "React", "Next.js", "TypeScript", "Node.js"].map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-white/85 backdrop-blur border border-orange-200 text-gray-700 shadow-sm hover:border-orange-400 hover:text-orange-600 transition-colors cursor-default"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={springLeft}
              className="flex flex-wrap gap-3 justify-center md:justify-start pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("projects")}
                className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full px-7 py-3 text-sm font-semibold transition-colors shadow-lg shadow-orange-500/30"
              >
                View Projects
                <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-orange-500 hover:text-orange-600 text-gray-800 rounded-full px-7 py-3 text-sm font-semibold transition-colors"
              >
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div
              variants={container}
              className="flex items-center gap-5 justify-center md:justify-start pt-3 text-gray-500"
            >
              <motion.a variants={iconUp} href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-orange-500 hover:-translate-y-0.5 transition-all">
                <FaGithub className="h-5 w-5" />
              </motion.a>
              <motion.a variants={iconUp} href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-orange-500 hover:-translate-y-0.5 transition-all">
                <FaLinkedin className="h-5 w-5" />
              </motion.a>
              <motion.span variants={iconUp} className="hidden sm:block w-10 h-px bg-gray-300" />
              <motion.a variants={iconUp} href={profile.resume} target="_blank" rel="noopener noreferrer" className="text-xs font-bold underline underline-offset-4 hover:text-orange-600">
                Resume →
              </motion.a>
            </motion.div>
          </motion.div>
        )}

        {ready && <TiltPhoto />}
      </div>

      <div className="relative z-10 flex justify-center pb-8">
        <motion.button
          onClick={() => scrollToSection("about")}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400 hover:text-orange-500 transition-colors"
        >
          Scroll ↓
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
