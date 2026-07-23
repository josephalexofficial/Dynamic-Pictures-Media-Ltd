import { useEffect } from "react";
import { scrollToSection } from "@/lib/scroll";

/** Handles /#section links when landing from other pages */
export function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const t = window.setTimeout(() => {
      scrollToSection(hash, "smooth");
    }, 80);

    return () => window.clearTimeout(t);
  }, []);

  return null;
}
