import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/Image";
import { SERVICES } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-site">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold-dark">
            Our Services
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink text-balance md:text-5xl">
            Creative solutions for your vision
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/60 md:text-lg">
            From stills to motion and digital craft — one team covering the full
            creative spectrum.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-gold to-gold-dark" />
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col overflow-hidden border border-ink/8 bg-sand/40 transition duration-500 hover:-translate-y-1.5 hover:border-ink/10 hover:bg-white hover:shadow-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-ink/5">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <span className="absolute left-4 top-4 font-display text-xs font-bold tracking-[0.18em] text-white opacity-0 drop-shadow transition duration-500 group-hover:opacity-100">
                  {service.accent}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="mb-4 h-1 w-10 rounded-full bg-gold transition-all duration-500 group-hover:w-14" />
                <h3 className="font-display text-xl font-extrabold tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-gold-dark transition hover:gap-2.5 hover:text-ink"
                >
                  Book this service
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
