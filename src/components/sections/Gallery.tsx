import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { GalleryLightbox } from "@/components/ui/GalleryLightbox";
import { GALLERY_IMAGES, GALLERY_PREVIEW_COUNT } from "@/lib/data";

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  const preview = GALLERY_IMAGES.slice(0, GALLERY_PREVIEW_COUNT);

  return (
    <section id="gallery" className="section-pad bg-white">
      <div className="container-site">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold-dark">
            Portfolio
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink text-balance md:text-5xl">
            Our creative work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/60 md:text-lg">
            A selection of recent photography and production highlights from
            Dynamic Pictures Media.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-gold to-gold-dark" />
        </div>

        {/* 3 columns × 3 rows on desktop */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {preview.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActive(image.src)}
              className="group relative aspect-[4/3] overflow-hidden bg-ink/5 text-left outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <span className="absolute inset-0 bg-ink/0 transition duration-500 group-hover:bg-ink/30" />
              <span className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-sm font-semibold text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                View photo
              </span>
              <span className="absolute left-3 top-3 font-display text-[11px] font-bold tracking-[0.18em] text-white/90 opacity-0 drop-shadow transition group-hover:opacity-100">
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white transition hover:bg-ink-soft"
          >
            View all photos
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <GalleryLightbox
        images={preview}
        activeSrc={active}
        onClose={() => setActive(null)}
        onSelect={setActive}
      />
    </section>
  );
}
