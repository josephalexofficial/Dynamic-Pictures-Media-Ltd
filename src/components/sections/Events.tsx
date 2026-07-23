import { Image } from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { EVENTS } from "@/lib/data";

export function Events() {
  return (
    <section id="events" className="section-pad bg-ink text-white">
      <div className="container-site">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Recent Events
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            Moments we recently covered
          </h2>
          <p className="mt-4 text-white/60">
            Two standout productions — each with its own energy, story, and
            gallery.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {EVENTS.map((event, index) => (
            <article
              key={event.slug}
              className={
                index === 0
                  ? "overflow-hidden border border-white/10 bg-ink-soft"
                  : "overflow-hidden border border-gold/30 bg-gradient-to-b from-ink-soft to-ink"
              }
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={event.cover}
                  alt={event.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
                  {event.tag}
                </span>
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-3 flex flex-wrap gap-4 text-xs text-white/55">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-gold" />
                    {event.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-gold" />
                    {event.location}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                  {event.shortTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {event.excerpt}
                </p>

                <div className="mt-5 grid grid-cols-4 gap-2">
                  {event.preview.map((src) => (
                    <div
                      key={src}
                      className="relative aspect-square overflow-hidden"
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  ))}
                </div>

                <Link
                  href={`/events/${event.slug}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-gold"
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
