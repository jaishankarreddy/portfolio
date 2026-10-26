// Single smooth-scroll driver. Lenis owns wheel/programmatic scrolling, so all
// anchor navigation goes through the live Lenis instance instead of fighting
// it with native smooth scrollIntoView (the old source of scroll judder).

let lenisInstance = null;

export function setLenisInstance(instance) {
  lenisInstance = instance;
}

export function scrollToSection(id) {
  const runNative = () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  if (!lenisInstance) {
    runNative();
    return;
  }
  try {
    lenisInstance.scrollTo(`#${id}`, {
      offset: -84,
      duration: 1.3,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });
  } catch {
    runNative();
  }
}

export function scrollToTop() {
  if (!lenisInstance) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  try {
    lenisInstance.scrollTo(0, { duration: 1.3 });
  } catch {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
