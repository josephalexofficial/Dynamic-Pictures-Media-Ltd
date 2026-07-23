import { Image } from "@/components/ui/Image";
import { useState } from "react";
import { X } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/data";

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-pad bg-white">
      <div className="container-site">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
            Portfolio
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Our creative work
          </h2>
          <p className="mt-4 text-ink/60">
            A selection of recent photography and production highlights.
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {GALLERY_IMAGES.map((image) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActive(image.src)}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={1000}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/25" />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 text-white"
            onClick={() => setActive(null)}
          >
            <X className="h-7 w-7" />
          </button>
          <div
            className="relative max-h-[85vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active}
              alt="Gallery preview"
              width={1400}
              height={1000}
              className="max-h-[85vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
