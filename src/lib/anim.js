// Shared animation language — restored from the pre-redesign site (HEAD).
// Old system:
//  - Hero: spring slide (text from left x:-10vw, image from right x:10vw,
//    icons from bottom y:7vw), all with blur(10px) -> blur(0), stagger 0.2.
//  - Everything else (.animation -> .active): translateY(50px) + blur(20px) +
//    opacity 0 -> translateY(0) + blur(0) + opacity 1, transition 0.5s,
//    triggered when scrollY >= offsetTop - innerHeight/1.2.
//  - Projects (.scroll-up via GSAP scrub): odd items x:-100 -> x:0 with
//    blur + opacity, duration 1, ease power1.inOut.
// Re-expressed here as Framer variants (no new deps, no redux).

export const container = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2 } },
};

export const springLeft = {
  initial: { x: "-10vw", opacity: 0, filter: "blur(10px)" },
  animate: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 90, damping: 9, mass: 1 },
  },
};

export const springRight = {
  initial: { x: "10vw", opacity: 0, filter: "blur(10px)" },
  animate: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 80, damping: 7, mass: 1 },
  },
};

export const iconUp = {
  initial: { y: "7vw", opacity: 0, filter: "blur(10px)" },
  animate: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 80, damping: 10, mass: 2 },
  },
};

// General scroll reveal = old `.animation` block.
export const reveal = {
  initial: { y: 50, opacity: 0, filter: "blur(20px)" },
  whileInView: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Card entrances (CompanyWork + Projects), rebuilt to never flash blank:
//  1. No `content-visibility` anywhere (it suppresses rendering, so the
//     observer fires late and cards sat at opacity 0 = blank flash).
//  2. Positive root margin triggers ~one viewport early, so the 0.4s
//     fade-up + stagger finishes BEFORE the cards scroll into sight.
// Hover lift is Framer `whileHover` on the same element (CSS
// hover-translate would fight Framer's inline transform).
export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const cardItem = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export const cardViewport = { once: true, margin: "400px" };
