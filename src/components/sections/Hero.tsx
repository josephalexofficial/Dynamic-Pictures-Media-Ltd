import { Image } from "@/components/ui/Image";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_OPTIMIZED } from "@/lib/images";
import { cn } from "@/lib/utils";

export function Hero() {
  const [current, setCurrent] = useState(0);
  // Start with slide 0 + 1 only — warm additional slides as the user advances
  const [warm, setWarm] = useState(() => new Set([0, 1]));

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_OPTIMIZED.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const next = (current + 1) % HERO_OPTIMIZED.length;
    setWarm((prev) => {
      if (prev.has(current) && prev.has(next)) return prev;
      const nextSet = new Set(prev);
      nextSet.add(current);
      nextSet.add(next);
      return nextSet;
    });
  }, [current]);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink md:items-center"
    >
      {Array.from(warm).map((index) => {
        const image = HERO_OPTIMIZED[index];
        const isActive = index === current;
        return (
          <div
            key={image.key}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              isActive ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              responsive={image}
              alt="Dynamic Pictures Media Ltd hero"
              fill
              priority={index === 0}
              sizes="100vw"
              className={cn(
                "object-cover brightness-[0.88] contrast-[1.04] transition-transform duration-[6000ms] ease-out",
                isActive ? "scale-105" : "scale-100",
              )}
            />
          </div>
        );
      })}

      {/* Soft left/bottom scrims only — photos stay vivid, text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-transparent md:via-ink/35 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/25" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full max-w-3xl bg-gradient-to-r from-ink/50 to-transparent md:max-w-4xl" />

      <div className="container-site relative z-10 w-full pb-24 pt-32 md:pb-28 md:pt-28">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-4 text-base font-extrabold uppercase tracking-[0.18em] text-gold drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] sm:text-lg md:text-xl lg:text-2xl">
            Dynamic Pictures Media Ltd
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white text-balance drop-shadow-[0_4px_28px_rgba(0,0,0,0.95)] sm:text-5xl md:text-6xl lg:text-7xl">
            Visual stories that move people
          </h1>
          <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)] sm:text-lg md:text-xl">
            Professional photography, videography, and creative media — crafted
            for brands, institutions, and unforgettable moments.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-ink shadow-[0_8px_28px_rgba(0,0,0,0.45)] transition hover:bg-gold-light"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-ink/50 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:bg-ink/70"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() =>
            setCurrent(
              (c) => (c - 1 + HERO_OPTIMIZED.length) % HERO_OPTIMIZED.length,
            )
          }
          className="hidden h-10 w-10 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/55 md:inline-flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {HERO_OPTIMIZED.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrent(index)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                current === index ? "w-8 bg-gold" : "w-2.5 bg-white/45",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() =>
            setCurrent((c) => (c + 1) % HERO_OPTIMIZED.length)
          }
          className="hidden h-10 w-10 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/55 md:inline-flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
