import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { Image } from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { EVENTS } from "@/lib/data";

export function Events() {
  return (
    <section id="events" className="section-pad relative overflow-hidden bg-sand">
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-ink/[0.03] blur-3xl" />

      <div className="container-site relative">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold-dark">
            Recent Events
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink text-balance md:text-5xl">
            Moments we recently covered
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/60 md:text-lg">
            Two standout productions — each with its own energy, story, and
            full gallery.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-gold to-gold-dark" />
        </div>

        <div className="grid gap-7 lg:grid-cols-2 lg:gap-8">
          {EVENTS.map((event, index) => (
            <article
              key={event.slug}
              className="group flex flex-col overflow-hidden border border-ink/8 bg-white transition duration-500 hover:-translate-y-1 hover:border-ink/12 hover:shadow-lift"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-ink/5">
                <Image
                  src={event.cover}
                  alt={event.title}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent" />

                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="font-display text-xs font-bold tracking-[0.18em] text-white drop-shadow">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                    {event.tag}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-8">
                <div className="mb-3 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-ink/50">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-gold-dark" />
                    {event.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-gold-dark" />
                    {event.location}
                  </span>
                </div>

                <div className="mb-3 h-1 w-10 rounded-full bg-gold transition-all duration-500 group-hover:w-14" />

                <h3 className="font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl md:text-[1.75rem]">
                  {event.shortTitle}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/60 sm:text-sm">
                  {event.excerpt}
                </p>

                <div className="mt-5 grid grid-cols-4 gap-1.5 sm:gap-2">
                  {event.preview.map((src) => (
                    <div
                      key={src}
                      className="relative aspect-square overflow-hidden bg-sand"
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="100px"
                      />
                    </div>
                  ))}
                </div>

                <Link
                  href={`/events/${event.slug}`}
                  className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition hover:bg-ink-soft"
                >
                  View event
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
