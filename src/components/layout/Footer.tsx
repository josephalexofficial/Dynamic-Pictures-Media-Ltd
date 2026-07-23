import { type ReactNode } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Image } from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { BrandSocials } from "@/components/ui/BrandSocials";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  NAV_LINKS,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-site relative pt-16 pb-8 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/#home" className="inline-flex items-center gap-3">
              <span className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-gold/55 ring-offset-2 ring-offset-ink">
                <Image
                  src="/images/brand/logo.jpg"
                  alt="Dynamic Pictures Media Ltd"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </span>
              <span>
                <span className="block font-display text-xl font-extrabold leading-tight tracking-tight">
                  Dynamic Pictures
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                  Media Ltd
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Transforming visions into captivating visual stories through
              photography, videography, and creative digital solutions.
            </p>

            <div className="mt-6">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                Follow us
              </p>
              <BrandSocials size="md" />
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-3">
            <FooterHeading>Explore</FooterHeading>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${link.href}`}
                    className="text-sm text-white/60 transition hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <FooterHeading>Contact</FooterHeading>
            <ul className="space-y-4">
              <FooterMeta icon={MapPin}>{CONTACT_ADDRESS}</FooterMeta>
              <FooterMeta icon={Phone}>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="transition hover:text-gold"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </FooterMeta>
              <FooterMeta icon={Mail}>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="break-all transition hover:text-gold"
                >
                  {CONTACT_EMAIL}
                </a>
              </FooterMeta>
            </ul>
          </div>

          {/* Hours */}
          <div className="lg:col-span-2">
            <FooterHeading>Hours</FooterHeading>
            <div className="space-y-3 text-sm text-white/60">
              <div>
                <p className="font-semibold text-white/85">Mon – Sun</p>
                <p className="mt-1">8:00 AM – 6:00 PM</p>
              </div>
              <p className="border-t border-white/10 pt-3 text-xs leading-relaxed text-white/40">
                Available for booked events outside regular hours.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/40 sm:flex-row sm:text-left">
          <p>© {year} Dynamic Pictures Media Ltd. All rights reserved.</p>
          <p className="tracking-wide">Kitengela · Kajiado · Kenya</p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-gold">
        {children}
      </h3>
      <div className="mt-2.5 h-0.5 w-8 rounded-full bg-gold/70" />
    </div>
  );
}

function FooterMeta({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: ReactNode;
}) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-white/60">
      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-gold">
        <Icon className="h-3.5 w-3.5" />
      </span>
      <span className="min-w-0 pt-1">{children}</span>
    </li>
  );
}
