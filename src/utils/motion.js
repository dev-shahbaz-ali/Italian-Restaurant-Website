export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export const hoverLift = {
  whileHover: { y: -6, boxShadow: "0 20px 45px rgba(0,0,0,0.12)" },
  transition: { duration: 0.25, ease: "easeOut" },
};

export const isScreenshotMode = () => {
  if (typeof window === "undefined") return false;
  return window.location.search.includes("screenshot=1");
};

export const getInViewProps = () => {
  if (isScreenshotMode()) {
    return { initial: false, animate: "show" };
  }

  return { initial: "hidden", whileInView: "show", viewport: { once: false, amount: 0.2 } };
};

