import { COMPANY_SOCIALS } from "@/lib/data";
import { cn } from "@/lib/utils";

type SocialId = (typeof COMPANY_SOCIALS)[number]["id"];

export function BrandSocials({
  className,
  size = "md",
  showLabels = false,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  showLabels?: boolean;
}) {
  const dim =
    size === "sm"
      ? "h-10 w-10"
      : size === "lg"
        ? "h-12 w-12"
        : "h-11 w-11";
  const icon = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {COMPANY_SOCIALS.map((social) => (
        <a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={cn(
            "group inline-flex flex-col items-center gap-2",
            !showLabels && "inline-flex",
          )}
        >
          <span
            className={cn(
              "inline-flex items-center justify-center rounded-full text-white shadow-soft transition duration-300 group-hover:-translate-y-0.5 group-hover:brightness-110 group-hover:shadow-lift",
              dim,
            )}
            style={{ backgroundColor: social.color }}
          >
            <BrandGlyph id={social.id} className={icon} />
          </span>
          {showLabels && (
            <span className="text-[11px] font-semibold tracking-wide text-current opacity-70 transition group-hover:opacity-100">
              {social.label}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}

export function BrandGlyph({
  id,
  className,
}: {
  id: SocialId;
  className?: string;
}) {
  if (id === "facebook") {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.5V12H17l-.4 3h-2.4v7A10 10 0 0 0 22 12z" />
      </svg>
    );
  }

  if (id === "youtube") {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.8 15.5v-7l6.2 3.5-6.2 3.5z" />
      </svg>
    );
  }

  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.5 3.5A10 10 0 0 0 3.3 17.8L2 22l4.3-1.1A10 10 0 1 0 20.5 3.5zm-8.5 16a8.3 8.3 0 0 1-4.2-1.2l-.3-.2-2.5.7.7-2.4-.2-.3a8.3 8.3 0 1 1 6.5 3.4zm4.6-6.2c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.8 6.8 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.7c-.1-.3 0-.4.1-.5l.4-.4.2-.3a.4.4 0 0 0 0-.4c0-.1-.5-1.3-.7-1.8s-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.7 11.5 11.5 0 0 0 4.4 3.9c.6.3 1 .4 1.4.5a3.4 3.4 0 0 0 1.6.1 2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c-.1-.1-.2-.1-.4-.2z" />
    </svg>
  );
}
