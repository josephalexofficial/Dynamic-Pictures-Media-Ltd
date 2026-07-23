import Image from "next/image";
import { SERVICES } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-site">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
            Our Services
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Creative solutions for your vision
          </h2>
          <p className="mt-4 text-ink/60">
            From stills to motion and digital craft — one team covering the full
            creative spectrum.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group overflow-hidden border border-ink/5 bg-sand transition duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <div className="mb-3 h-1 w-10 bg-gold" />
                <h3 className="font-display text-xl font-bold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex text-sm font-semibold text-gold-dark transition hover:text-ink"
                >
                  Book this service →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
