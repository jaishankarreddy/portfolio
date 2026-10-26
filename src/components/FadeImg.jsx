import { useState } from "react";

// Image wrapper: reserves space (no layout jump) + fades in on load
// instead of popping in mid-scroll.
export default function FadeImg({ src, alt, wrapClassName = "", imgClassName = "" }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`bg-gray-200/70 ${wrapClassName}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${imgClassName}`}
      />
    </div>
  );
}
