import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Image } from "@/components/ui/Image";
import type { GalleryImage } from "@/lib/data";

type Props = {
  images: GalleryImage[];
  activeSrc: string | null;
  onClose: () => void;
  onSelect: (src: string) => void;
};

export function GalleryLightbox({
  images,
  activeSrc,
  onClose,
  onSelect,
}: Props) {
  const index = images.findIndex((img) => img.src === activeSrc);
  const active = index >= 0 ? images[index] : null;

  useEffect(() => {
    if (!activeSrc) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index < images.length - 1) {
        onSelect(images[index + 1].src);
      }
      if (e.key === "ArrowLeft" && index > 0) {
        onSelect(images[index - 1].src);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeSrc, index, images, onClose, onSelect]);

  if (!active) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute right-5 top-5 z-10 text-white/80 transition hover:text-white"
        onClick={onClose}
      >
        <X className="h-7 w-7" />
      </button>

      {index > 0 && (
        <button
          type="button"
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 md:left-6"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(images[index - 1].src);
          }}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {index < images.length - 1 && (
        <button
          type="button"
          aria-label="Next photo"
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 md:right-6"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(images[index + 1].src);
          }}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}

      <div
        className="relative flex max-h-[85vh] max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={active.src}
          alt={active.alt}
          width={1400}
          height={1000}
          className="max-h-[80vh] w-auto object-contain"
        />
        <p className="mt-3 text-sm text-white/60">
          {index + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}
