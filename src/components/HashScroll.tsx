import { useEffect } from "react";

/** Handles /#section links when landing from other pages */
export function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const scroll = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Wait for layout/images
    const t = window.setTimeout(scroll, 80);
    return () => window.clearTimeout(t);
  }, []);

  return null;
}
