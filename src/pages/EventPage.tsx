import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { Image } from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { getEventBySlug } from "@/lib/data";

export function EventPage() {
  const { slug = "" } = useParams();
  const event = getEventBySlug(slug);

  useEffect(() => {
    if (event) {
      document.title = `${event.title} | Dynamic Pictures Media Ltd`;
    }
  }, [event]);

  if (!event) {
    return <Navigate to="/#events" replace />;
  }

  return (
    <div className="bg-sand pt-28 pb-20">
      <div className="container-site">
        <Link
          href="/#events"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-ink/60 transition hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to events
        </Link>

        <div className="relative mb-10 aspect-[21/9] min-h-[220px] overflow-hidden md:min-h-[320px]">
          <Image
            src={event.cover}
            alt={event.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <span className="mb-3 inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
              {event.tag}
            </span>
            <h1 className="max-w-3xl font-display text-3xl font-bold text-white md:text-5xl">
              {event.title}
            </h1>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-white/75">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-gold" />
                {event.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-gold" />
                {event.location}
              </span>
            </div>
          </div>
        </div>

        <article className="mx-auto mb-14 max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-ink">The story</h2>
          {event.story.split("\n\n").map((para) => (
            <p
              key={para.slice(0, 24)}
              className="mt-4 text-base leading-relaxed text-ink/70"
            >
              {para}
            </p>
          ))}
        </article>

        <h2 className="mb-6 font-display text-2xl font-bold text-ink">
          Full gallery
        </h2>
        <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
          {event.gallery.map((src, i) => (
            <div key={src} className="mb-3 break-inside-avoid overflow-hidden">
              <Image
                src={src}
                alt={`${event.shortTitle} photo ${i + 1}`}
                width={900}
                height={700}
                className="h-auto w-full object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#contact"
            className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-soft"
          >
            Book similar coverage
          </Link>
        </div>
      </div>
    </div>
  );
}
