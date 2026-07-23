import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Image } from "@/components/ui/Image";
import { TESTIMONIALS } from "@/lib/data";
import { cn } from "@/lib/utils";

const AUTO_MS = 7000;
const FADE_MS = 220;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const paused = useRef(false);
  const fadeTimer = useRef<number | null>(null);
  const active = TESTIMONIALS[index];

  useEffect(() => {
    const id = window.setInterval(() => {
      if (paused.current) return;
      goTo((index + 1) % TESTIMONIALS.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [index]);

  useEffect(() => {
    return () => {
      if (fadeTimer.current) window.clearTimeout(fadeTimer.current);
    };
  }, []);

  function goTo(next: number) {
    if (next === index) return;
    setVisible(false);
    if (fadeTimer.current) window.clearTimeout(fadeTimer.current);
    fadeTimer.current = window.setTimeout(() => {
      setIndex(next);
      setVisible(true);
    }, FADE_MS);
  }

  function prev() {
    goTo((index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  function next() {
    goTo((index + 1) % TESTIMONIALS.length);
  }

  return (
    <section
      id="testimonials"
      className="section-pad relative overflow-hidden bg-sand"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
      onFocusCapture={() => {
        paused.current = true;
      }}
      onBlurCapture={() => {
        paused.current = false;
      }}
    >
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-gold/12 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-ink/[0.04] blur-3xl" />

      <div className="container-site relative">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold-dark">
            Testimonials
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink text-balance md:text-5xl">
            What our clients say
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/60 md:text-lg">
            Real feedback from people who trusted us with their stories.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-gold to-gold-dark" />
        </div>

        <div className="mx-auto max-w-5xl">
          <div
            className={cn(
              "grid items-center gap-8 transition-all duration-300 ease-out md:grid-cols-[auto_1fr] md:gap-12 lg:gap-16",
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0",
            )}
          >
            <div className="mx-auto shrink-0 md:mx-0">
              <div className="relative">
                <div className="absolute -inset-3 rounded-full border border-gold/35" />
                <div className="absolute -inset-6 rounded-full border border-gold/15" />
                <div className="relative h-36 w-36 overflow-hidden rounded-full bg-gold/20 shadow-lift ring-4 ring-gold/30 sm:h-44 sm:w-44 md:h-52 md:w-52">
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    className="object-cover object-top"
                    sizes="208px"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-gold shadow-soft sm:h-12 sm:w-12">
                  <Quote className="h-5 w-5 fill-current" aria-hidden />
                </div>
              </div>
            </div>

            <div className="min-w-0 text-center md:text-left">
              <div className="mb-4 flex justify-center gap-1 text-gold md:justify-start">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>

              <blockquote className="font-display text-xl font-medium leading-relaxed tracking-tight text-ink text-balance sm:text-2xl md:text-[1.65rem] md:leading-[1.45]">
                “{active.quote}”
              </blockquote>

              <div className="mt-6 flex flex-col items-center gap-1 md:items-start">
                <div className="h-0.5 w-10 rounded-full bg-gold" />
                <h3 className="mt-3 font-display text-lg font-extrabold text-ink">
                  {active.name}
                </h3>
                <p className="text-sm font-semibold text-gold-dark">
                  {active.role}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 sm:gap-4 md:mt-12">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={prev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink/70 transition hover:border-ink/20 hover:text-ink hover:shadow-soft"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-end gap-3 sm:gap-4">
              {TESTIMONIALS.map((t, i) => {
                const isActive = i === index;
                return (
                  <button
                    key={t.name}
                    type="button"
                    aria-label={`Show testimonial from ${t.name}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => goTo(i)}
                    className={cn(
                      "relative overflow-hidden rounded-full bg-gold/20 transition duration-300",
                      isActive
                        ? "h-14 w-14 ring-2 ring-gold ring-offset-2 ring-offset-sand sm:h-16 sm:w-16"
                        : "h-11 w-11 opacity-55 grayscale hover:opacity-90 hover:grayscale-0 sm:h-12 sm:w-12",
                    )}
                  >
                    <Image
                      src={t.image}
                      alt=""
                      fill
                      className="object-cover object-top"
                      sizes="64px"
                    />
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={next}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink/70 transition hover:border-ink/20 hover:text-ink hover:shadow-soft"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
