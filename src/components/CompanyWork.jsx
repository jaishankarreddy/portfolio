import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaBuilding, FaMapMarkerAlt, FaLock } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import FadeImg from "./FadeImg";
import { staggerParent, cardItem, cardViewport } from "../lib/anim";
import { companyProfile, companyWork } from "../data/portfolio";

const PINNED_FIRST = [
  "Dsquare Consulting Website",
  "Campus Consulting",
  "Varnika Insights",
];

const rankOf = (name) => {
  const i = PINNED_FIRST.indexOf(name);
  return i === -1 ? PINNED_FIRST.length : i;
};

const liveSites = companyWork
  .filter((w) => w.link && !w.marketing)
  .sort((a, b) => rankOf(a.name) - rankOf(b.name));
// Products stay in this section even with a link: `marketing` links point
// to the public product page since the live product needs credentials.
const products = companyWork.filter((w) => !w.link || w.marketing);

const coverByBadge = {
  "Client Work": "from-red-600 via-orange-600 to-amber-500",
  "Client Revamp": "from-gray-900 via-gray-800 to-orange-800",
  "Company Revamp": "from-orange-600 via-amber-500 to-yellow-400",
  "Company Product": "from-slate-800 via-slate-900 to-black",
};

function LiveCard({ w, index }) {
  const cover = coverByBadge[w.badge] || "from-gray-900 to-orange-900";
  return (
    <motion.article
      variants={cardItem}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-orange-500/15 hover:border-orange-200 transition-all duration-300 flex flex-col"
    >
      {w.image ? (
        <div className="relative overflow-hidden">
          <FadeImg
            src={w.image}
            alt={`${w.name} homepage`}
            wrapClassName="aspect-[2/1] overflow-hidden"
            imgClassName="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/45 via-transparent to-transparent pointer-events-none" />
          <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-white/95 text-gray-900 px-3 py-1.5 rounded-full shadow">
            {w.badge}
          </span>
          <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-green-500 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-full shadow">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Live
          </span>
        </div>
      ) : (
        <div className={`relative h-28 bg-gradient-to-br ${cover} overflow-hidden`}>
          <div className="absolute inset-0 opacity-25 work-grid" />
          <span className="absolute -bottom-6 -right-1 text-[88px] font-extrabold text-white/15 leading-none select-none">
            {w.name.charAt(0)}
          </span>
          <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-white/95 text-gray-900 px-3 py-1.5 rounded-full">
            {w.badge}
          </span>
          <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-green-500 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-full shadow">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Live
          </span>
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        <p className="text-[11px] font-semibold text-gray-400">{w.kind}</p>
        <h3 className="font-bold text-gray-900 text-[15px] leading-snug mt-1 group-hover:text-orange-600 transition-colors">
          {w.name}
        </h3>
        <p className="text-xs text-gray-600 mt-2 leading-relaxed">{w.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {w.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex-1" />
        <a
          href={w.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-3 transition-colors shadow-lg shadow-orange-500/25"
        >
          Visit {w.linkLabel || "live site"} <FaExternalLinkAlt className="w-3 h-3" />
        </a>
      </div>
    </motion.article>
  );
}

function ProductCard({ w, index }) {
  const developing = (w.status || "").toLowerCase().includes("develop");
  return (
    <motion.div
      variants={cardItem}
      className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 hover:border-orange-200 hover:shadow-md transition-all"
    >
      <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/25">
        <FaLock className="w-4 h-4" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-bold text-gray-900 text-sm">{w.name}</h3>
          {w.status && (
            <span
              className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                developing
                  ? "bg-amber-100 text-amber-700 border border-amber-200"
                  : "bg-green-100 text-green-700 border border-green-200"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  developing ? "bg-amber-500 animate-pulse" : "bg-green-500"
                }`}
              />
              {w.status}
            </span>
          )}
        </div>
        <p className="text-xs text-gray-600 mt-1 leading-relaxed">{w.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-2.5">
          {w.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="text-[11px] font-semibold text-gray-400 mt-3">
          {w.access || "Live — needs company credentials"}
        </p>
        {w.link && (
          <a
            href={w.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 hover:border-orange-400 text-gray-700 hover:text-orange-600 text-xs font-bold py-2.5 transition-colors"
          >
            View marketing page <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function CompanyWork() {
  return (
    <section id="company-work" className="relative overflow-hidden py-14 bg-gradient-to-b from-white via-orange-50/50 to-white">
      <div className="absolute inset-0 hero-grid opacity-40" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03 — Company Work"
          title="Company"
          accent="Work"
          sub="What I ship at Dsquare Consulting Services — my current full-time role since Nov 2025."
        />

        {/* company banner */}
        <motion.div
          initial={{ y: 50, opacity: 0, filter: "blur(20px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden bg-gray-900 text-white rounded-2xl p-6 md:p-8 mb-10"
        >
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-orange-500/30 blur-[60px]" />
          <div className="absolute inset-0 pro-grid opacity-40" />
          <div className="relative flex flex-col md:flex-row md:items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-xl font-extrabold shrink-0 shadow-lg shadow-orange-500/40">
              D²
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg md:text-xl font-bold">{companyProfile.name}</h3>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider bg-green-500/15 text-green-300 border border-green-500/30 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Current · {companyProfile.period}
                </span>
              </div>
              <p className="text-xs text-gray-300 mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="inline-flex items-center gap-1">
                  <FaBuilding className="w-3 h-3 text-orange-400" /> {companyProfile.role} · Full-time
                </span>
                <span className="inline-flex items-center gap-1">
                  <FaMapMarkerAlt className="w-3 h-3 text-orange-400" /> {companyProfile.location}
                </span>
              </p>
              <p className="text-xs text-gray-300/90 mt-3 leading-relaxed max-w-3xl">
                {companyProfile.summary}
              </p>
            </div>
            <div className="flex md:flex-col gap-5 md:text-center shrink-0">
              <div>
                <p className="text-2xl font-extrabold text-orange-400">{liveSites.length}</p>
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Live sites</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-white">{products.length}</p>
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Products</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* live websites */}
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <h3 className="text-sm font-bold text-gray-900">
            Live websites <span className="font-medium text-gray-400">— click through, all online</span>
          </h3>
          <span className="flex-1 h-px bg-gray-200" />
        </div>
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={cardViewport}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {liveSites.map((w) => (
            <LiveCard key={w.name} w={w} />
          ))}
        </motion.div>

        {/* internal products */}
        <div className="flex items-center gap-2.5 mt-10 mb-5">
          <FaLock className="w-3.5 h-3.5 text-gray-400" />
          <h3 className="text-sm font-bold text-gray-900">
            Company products <span className="font-medium text-gray-400">— all live, login with company credentials</span>
          </h3>
          <span className="flex-1 h-px bg-gray-200" />
        </div>
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={cardViewport}
          className="grid md:grid-cols-2 gap-4"
        >
          {products.map((w) => (
            <ProductCard key={w.name} w={w} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
