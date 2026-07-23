import type { ReactNode } from "react";
import type { TeamSocials } from "@/lib/data";

function isLiveUrl(url?: string) {
  return Boolean(url && url !== "#");
}

function SocialIcon({
  href,
  label,
  className,
  children,
}: {
  href?: string;
  label: string;
  className: string;
  children: ReactNode;
}) {
  if (!href) return null;

  if (!isLiveUrl(href)) {
    return (
      <span aria-label={`${label} (coming soon)`} className={className}>
        {children}
      </span>
    );
  }

  const isEmail = href.startsWith("mailto:") || href.includes("@");
  const resolvedHref = isEmail && !href.startsWith("mailto:")
    ? `mailto:${href}`
    : href;

  return (
    <a
      href={resolvedHref}
      {...(isEmail
        ? {}
        : { target: "_blank", rel: "noopener noreferrer" })}
      aria-label={label}
      className={className}
    >
      {children}
    </a>
  );
}

export function SocialLinks({
  socials,
  className = "mt-4 flex justify-center gap-3",
  iconClassName = "text-ink/35 transition hover:text-ink",
  size = "h-4 w-4",
}: {
  socials?: TeamSocials;
  className?: string;
  iconClassName?: string;
  size?: string;
}) {
  if (!socials) return null;

  const hasAny =
    socials.x || socials.github || socials.linkedin || socials.email;
  if (!hasAny) return null;

  return (
    <div className={className}>
      <SocialIcon href={socials.x} label="X" className={iconClassName}>
        <svg className={size} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.9 2H22l-6.8 7.8L23 22h-6.5l-5.1-6.7L5.8 22H2.7l7.3-8.3L1 2h6.7l4.6 6.1L18.9 2zm-1.1 18h1.8L6.3 3.9H4.4L17.8 20z" />
        </svg>
      </SocialIcon>
      <SocialIcon href={socials.github} label="GitHub" className={iconClassName}>
        <svg className={size} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.48A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
        </svg>
      </SocialIcon>
      <SocialIcon
        href={socials.linkedin}
        label="LinkedIn"
        className={iconClassName}
      >
        <svg className={size} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22 2H2v20h20V2z" />
        </svg>
      </SocialIcon>
      <SocialIcon href={socials.email} label="Email" className={iconClassName}>
        <svg
          className={size}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </SocialIcon>
    </div>
  );
}
