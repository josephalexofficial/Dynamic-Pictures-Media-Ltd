import { useEffect, useMemo, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Calendar, Expand, MapPin } from "lucide-react";
import { Image } from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { PageBackLink, PageShell } from "@/components/ui/PageShell";
import { GalleryLightbox } from "@/components/ui/GalleryLightbox";
import { getEventBySlug } from "@/lib/data";

export function EventPage() {
  const { slug = "" } = useParams();
  const event = getEventBySlug(slug);
  const [active, setActive] = useState<string | null>(null);

  const galleryImages = useMemo(
    () =>
      (event?.gallery ?? []).map((src, i) => ({
        src,
        alt: `${event?.shortTitle ?? "Event"} photo ${i + 1}`,
      })),
    [event],
  );

  useEffect(() => {
    if (event) {
      document.title = `${event.title} | Dynamic Pictures Media Ltd`;
    }
  }, [event]);

  if (!event) {
    return <Navigate to="/#events" replace />;
  }

  return (
    <PageShell>
      <PageBackLink href="/#events">Back to events</PageBackLink>

      {/* Hero — taller on mobile for title room + stronger overlay */}
      <div className="relative mb-8 overflow-hidden bg-ink/5 sm:mb-10 md:mb-12">
        <div className="relative aspect-[4/5] min-h-[300px] w-full sm:aspect-[16/10] sm:min-h-[340px] md:aspect-[21/9] md:min-h-[360px]">
          <Image
            src={event.cover}
            alt={event.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 md:p-10">
            <span className="mb-3 inline-block rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink sm:text-xs">
              {event.tag}
            </span>
            <h1 className="max-w-3xl font-display text-[1.65rem] font-extrabold leading-tight tracking-tight text-white text-balance sm:text-4xl md:text-5xl">
              {event.title}
            </h1>
            <div className="mt-3 flex flex-col gap-2 text-sm text-white/85 sm:mt-4 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 shrink-0 text-gold" />
                {event.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                {event.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      <article className="mx-auto mb-12 max-w-3xl sm:mb-14 md:mb-16">
        <div className="mb-5">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-[1.75rem]">
            The story
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-gold to-gold-dark" />
        </div>
        <div className="space-y-5">
          {event.story.split("\n\n").map((para) => (
            <p
              key={para.slice(0, 24)}
              className="text-[15px] leading-[1.75] text-ink/70 sm:text-base sm:leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>
      </article>

      <section>
        <div className="mb-5 sm:mb-6">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-[1.75rem]">
            Full gallery
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-gold to-gold-dark" />
        </div>
        <div className="columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3">
          {galleryImages.map((image, i) => (
            <button
              type="button"
              key={image.src}
              onClick={() => setActive(image.src)}
              aria-label={`View ${image.alt}`}
              className="group mb-3 block w-full break-inside-avoid overflow-hidden bg-white shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:mb-4"
            >
              <div className="relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={700}
                  className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition duration-300 group-hover:bg-ink/30 group-hover:opacity-100">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-soft">
                    <Expand className="h-4 w-4" />
                  </span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <div className="mt-12 text-center sm:mt-14">
        <Link
          href="/#contact"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white transition hover:bg-ink-soft"
        >
          Book similar coverage
        </Link>
      </div>

      <GalleryLightbox
        images={galleryImages}
        activeSrc={active}
        onClose={() => setActive(null)}
        onSelect={setActive}
      />
    </PageShell>
  );
}
