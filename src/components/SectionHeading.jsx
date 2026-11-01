import { motion } from "framer-motion";

export default function SectionHeading({ index, title, accent, sub }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
      <motion.p
        initial={{ y: 50, opacity: 0, filter: "blur(20px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="text-[10px] font-bold uppercase tracking-[0.28em] text-orange-600 sm:text-[11px]"
      >
        {index}
      </motion.p>
      <motion.h2
        initial={{ y: 50, opacity: 0, filter: "blur(20px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-2.5 text-balance text-[26px] font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl md:text-4xl"
      >
        {title} {accent && <span className="text-orange-500">{accent}</span>}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ y: 50, opacity: 0, filter: "blur(20px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mx-auto mt-3 max-w-xl text-[13px] leading-relaxed text-gray-600 sm:text-sm"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
