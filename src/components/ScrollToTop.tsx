import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "@/lib/scroll";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const t = window.setTimeout(() => {
        scrollToSection(hash, "smooth");
      }, 60);
      return () => window.clearTimeout(t);
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
