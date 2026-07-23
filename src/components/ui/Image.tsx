import {
  type ImgHTMLAttributes,
  type SyntheticEvent,
  useState,
  useCallback,
} from "react";
import { cn } from "@/lib/utils";
import type { ResponsiveImage } from "@/lib/images";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  /** Optional responsive WebP/JPEG set from image-manifest */
  responsive?: ResponsiveImage;
};

/** Drop-in replacement for next/image — supports lazy load, LCP priority, and fade-in */
export function Image({
  fill,
  priority,
  className,
  alt = "",
  sizes,
  responsive,
  src,
  onLoad,
  ...props
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(
    (e: SyntheticEvent<HTMLImageElement>) => {
      setLoaded(true);
      onLoad?.(e);
    },
    [onLoad],
  );

  const imgClass = cn(
    fill && "absolute inset-0 h-full w-full",
    "transition-opacity duration-500 ease-out",
    loaded || priority ? "opacity-100" : "opacity-0",
    className,
  );

  const common = {
    alt,
    decoding: "async" as const,
    loading: (priority ? "eager" : "lazy") as "eager" | "lazy",
    fetchPriority: (priority ? "high" : "auto") as "high" | "auto" | "low",
    onLoad: handleLoad,
    className: imgClass,
    ...props,
  };

  if (responsive) {
    return (
      <>
        {responsive.lqip && (
          <img
            src={responsive.lqip}
            alt=""
            aria-hidden
            className={cn(
              fill && "absolute inset-0 h-full w-full",
              "scale-110 object-cover blur-xl transition-opacity duration-500",
              loaded ? "opacity-0" : "opacity-100",
            )}
          />
        )}
        <picture>
          <source
            type="image/webp"
            srcSet={responsive.webpSrcSet}
            sizes={sizes ?? responsive.sizes}
          />
          <source
            type="image/jpeg"
            srcSet={responsive.jpgSrcSet}
            sizes={sizes ?? responsive.sizes}
          />
          <img
            src={responsive.src}
            sizes={sizes ?? responsive.sizes}
            {...common}
          />
        </picture>
      </>
    );
  }

  return <img src={src} sizes={sizes} {...common} />;
}
