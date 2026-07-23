import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/Image";
import { ABOUT_OPTIMIZED } from "@/lib/images";

const STATS = [
  { value: "10+", label: "Years of experience" },
  { value: "500+", label: "Projects delivered" },
  { value: "95%", label: "Client satisfaction" },
] as const;

const PILLARS = [
  {
    title: "Creative excellence",
    text: "Every frame is composed with intention, clarity, and craft.",
  },
  {
    title: "Reliable delivery",
    text: "From brief to final cut, we stay on time and on brand.",
  },
  {
    title: "Human stories",
    text: "We capture real moments that feel lasting and true.",
  },
] as const;

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-sand">
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-ink/[0.04] blur-3xl" />

      <div className="container-site relative">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold-dark">
            About Us
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink text-balance md:text-5xl">
            Crafting visual stories that inspire
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/60 md:text-lg">
            A multimedia studio built on craft, consistency, and the belief that
            every client story deserves to look exceptional.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-gold to-gold-dark" />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Visual */}
          <div className="relative lg:col-span-5">
            <div className="absolute -inset-3 hidden border border-gold/30 lg:block" />
            <div className="relative aspect-[4/5] overflow-hidden bg-ink/5 shadow-lift">
              <Image
                responsive={ABOUT_OPTIMIZED}
                alt="Dynamic Pictures Media coverage"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <p className="font-display text-3xl font-extrabold text-gold md:text-4xl">
                  10+
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                  Years behind the lens
                </p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7">
            <div className="mb-4 h-1 w-10 rounded-full bg-gold" />
            <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
              Who we are
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/65 md:text-lg">
              Dynamic Pictures Media Ltd is a multimedia creative studio
              dedicated to exceptional visual content. We help brands, schools,
              and communities tell stories through photography, videography,
              design, and digital craft — with care at every frame.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {PILLARS.map((pillar) => (
                <div key={pillar.title} className="border-t border-ink/10 pt-4">
                  <h4 className="font-display text-sm font-bold tracking-tight text-ink">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 border-y border-ink/10 py-6 sm:gap-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-ink/50 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition hover:bg-ink-soft"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#gallery"
                className="inline-flex rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-bold text-ink transition hover:border-ink/30 hover:bg-sand"
              >
                View our work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
