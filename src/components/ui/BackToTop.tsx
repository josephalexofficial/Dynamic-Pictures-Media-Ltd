import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Floating scroll-to-top button.
 * - Hidden while the visitor is still within the hero (#home).
 * - On pages without a hero, appears after a short scroll.
 * - Mobile: bottom-left · Desktop: bottom-right · Brand gold styling.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("home");
      const threshold = hero
        ? hero.offsetTop + hero.offsetHeight - 120
        : 320;
      setVisible(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 left-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink shadow-lift ring-1 ring-ink/10 transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark sm:left-auto sm:right-6 sm:h-14 sm:w-14",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />
    </button>
  );
}
