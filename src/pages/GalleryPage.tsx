import { useEffect, useState } from "react";
import { Image } from "@/components/ui/Image";
import { GalleryLightbox } from "@/components/ui/GalleryLightbox";
import { PageBackLink, PageShell } from "@/components/ui/PageShell";
import { GALLERY_IMAGES } from "@/lib/data";

export function GalleryPage() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Gallery | Dynamic Pictures Media Ltd";
  }, []);

  return (
    <PageShell>
      <PageBackLink href="/#gallery">Back to home</PageBackLink>

      <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 md:mb-16">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold-dark">
          Full Gallery
        </p>
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink text-balance sm:text-4xl md:text-5xl">
          All creative work
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60 sm:text-base">
          Browse every portfolio photograph from Dynamic Pictures Media —
          tap any image to view it larger.
        </p>
        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-gold to-gold-dark" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {GALLERY_IMAGES.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(image.src)}
            className="group relative aspect-[4/3] overflow-hidden bg-white text-left shadow-soft outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <span className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/25" />
            <span className="absolute left-3 top-3 font-display text-[11px] font-bold tracking-[0.18em] text-white opacity-0 drop-shadow transition group-hover:opacity-100">
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      <GalleryLightbox
        images={GALLERY_IMAGES}
        activeSrc={active}
        onClose={() => setActive(null)}
        onSelect={setActive}
      />
    </PageShell>
  );
}
