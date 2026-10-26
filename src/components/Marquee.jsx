const items = [
  "Angular",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Swiper.js",
  "Sanity CMS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Docker",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-gray-100 bg-white py-3 select-none">
      <div className="marquee-track flex gap-3 w-max">
        {row.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="text-xs font-semibold px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700 whitespace-nowrap"
          >
            {t} <span className="text-orange-500 ml-1">●</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}
