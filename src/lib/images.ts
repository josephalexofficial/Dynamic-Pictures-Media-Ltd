import { IMAGE_MANIFEST } from "@/lib/image-manifest";

export type OptimizedImageKey = keyof typeof IMAGE_MANIFEST;

export type ResponsiveImage = {
  key: OptimizedImageKey;
  /** Fallback JPEG (largest variant) */
  src: string;
  webpSrcSet: string;
  jpgSrcSet: string;
  sizes: string;
  lqip: string;
};

function buildSrcSet(
  variants: (typeof IMAGE_MANIFEST)[OptimizedImageKey]["variants"],
  format: "webp" | "jpg",
) {
  return variants.map((v) => `${v[format]} ${v.width}w`).join(", ");
}

export function getResponsiveImage(
  key: OptimizedImageKey,
  sizes: string,
): ResponsiveImage {
  const entry = IMAGE_MANIFEST[key];
  const largest = entry.variants[entry.variants.length - 1];
  return {
    key,
    src: largest.jpg,
    webpSrcSet: buildSrcSet(entry.variants, "webp"),
    jpgSrcSet: buildSrcSet(entry.variants, "jpg"),
    sizes,
    lqip: entry.lqip,
  };
}

export const HERO_OPTIMIZED = [
  getResponsiveImage("hero-1", "100vw"),
  getResponsiveImage("hero-2", "100vw"),
  getResponsiveImage("hero-3", "100vw"),
] as const;

export const ABOUT_OPTIMIZED = getResponsiveImage(
  "about",
  "(max-width: 1024px) 100vw, 42vw",
);
