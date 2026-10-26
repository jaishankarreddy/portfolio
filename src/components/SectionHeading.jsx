import { motion } from "framer-motion";

export default function SectionHeading({ index, title, accent, sub }) {
  return (
    <div className="text-center mb-8">
      <motion.p
        initial={{ y: 50, opacity: 0, filter: "blur(20px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-600"
      >
        {index}
      </motion.p>
      <motion.h2
        initial={{ y: 50, opacity: 0, filter: "blur(20px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2"
      >
        {title} {accent && <span className="text-orange-500">{accent}</span>}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ y: 50, opacity: 0, filter: "blur(20px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-sm text-gray-600 mt-3 max-w-2xl mx-auto"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
