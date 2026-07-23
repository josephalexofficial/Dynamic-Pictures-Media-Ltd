import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
};

/** Drop-in replacement for next/image in this Vite app */
export function Image({
  fill,
  priority,
  className,
  alt = "",
  sizes,
  ...props
}: ImageProps) {
  return (
    <img
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      sizes={sizes}
      className={cn(fill && "absolute inset-0 h-full w-full", className)}
      {...props}
    />
  );
}
