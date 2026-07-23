import { Image } from "@/components/ui/Image";

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-sand">
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
      <div className="container-site relative">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
            About Us
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Crafting visual stories that inspire
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden shadow-lift">
              <Image
                src="/images/brand/about.jpg"
                alt="About Dynamic Pictures Media"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 -right-2 bg-ink px-6 py-5 text-white shadow-lift sm:-right-5">
              <p className="font-display text-3xl font-bold text-gold">10+</p>
              <p className="text-xs uppercase tracking-wider text-white/70">
                Years experience
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">
              Who we are
            </h3>
            <p className="mt-5 text-base leading-relaxed text-ink/65 md:text-lg">
              Dynamic Pictures Media Ltd is a multimedia creative studio
              dedicated to exceptional visual content. From Kitengela, we help
              brands, schools, and communities tell stories through photography,
              videography, design, and digital craft — with care at every frame.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="border border-ink/10 bg-white p-5">
                <p className="font-display text-3xl font-bold text-ink">500+</p>
                <p className="mt-1 text-sm text-ink/55">Projects completed</p>
              </div>
              <div className="border border-ink/10 bg-white p-5">
                <p className="font-display text-3xl font-bold text-gold-dark">
                  95%
                </p>
                <p className="mt-1 text-sm text-ink/55">Client satisfaction</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-sand-dark">
                  <div className="h-full w-[95%] bg-gradient-to-r from-gold to-gold-dark" />
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-soft"
              >
                Get in touch
              </a>
              <a
                href="#gallery"
                className="inline-flex rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/30"
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
