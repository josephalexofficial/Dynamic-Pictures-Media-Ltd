import Image from "next/image";
import Link from "next/link";
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,185,35,0.18),transparent_50%)]" />
      <div className="container-site relative pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5 lg:col-span-1">
            <Link href="/#home" className="inline-flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-gold/50">
                <Image
                  src="/images/brand/logo.jpg"
                  alt="Dynamic Pictures Media Ltd"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </span>
              <span>
                <span className="block font-display text-lg font-bold leading-tight">
                  Dynamic Pictures
                </span>
                <span className="text-xs uppercase tracking-[0.16em] text-white/50">
                  Media Ltd
                </span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/65">
              Transforming visions into captivating visual stories through
              photography, videography, and creative digital solutions.
            </p>
            <div className="flex gap-3">
              <Social
                href="https://www.facebook.com/Angolongo"
                label="Facebook"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.5V12H17l-.4 3h-2.4v7A10 10 0 0 0 22 12z" />
              </Social>
              <Social
                href="https://www.youtube.com/@dynamicmedialtd"
                label="YouTube"
              >
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.8 15.5v-7l6.2 3.5-6.2 3.5z" />
              </Social>
              <Social href={`https://wa.me/${WHATSAPP_NUMBER}`} label="WhatsApp">
                <path d="M20.5 3.5A10 10 0 0 0 3.3 17.8L2 22l4.3-1.1A10 10 0 1 0 20.5 3.5zm-8.5 16a8.3 8.3 0 0 1-4.2-1.2l-.3-.2-2.5.7.7-2.4-.2-.3a8.3 8.3 0 1 1 6.5 3.4zm4.6-6.2c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.8 6.8 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.7c-.1-.3 0-.4.1-.5l.4-.4.2-.3a.4.4 0 0 0 0-.4c0-.1-.5-1.3-.7-1.8s-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.7 11.5 11.5 0 0 0 4.4 3.9c.6.3 1 .4 1.4.5a3.4 3.4 0 0 0 1.6.1 2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c-.1-.1-.2-.1-.4-.2z" />
              </Social>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-gold">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${link.href}`}
                    className="text-sm text-white/65 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-gold">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/65">
              <li>{CONTACT_ADDRESS}</li>
              <li>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="hover:text-white"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="break-all hover:text-white"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-[0.16em] text-gold">
              Hours
            </h3>
            <ul className="space-y-2 text-sm text-white/65">
              <li className="flex justify-between gap-4">
                <span>Mon – Sun</span>
                <span>8:00 AM – 6:00 PM</span>
              </li>
              <li className="pt-3 text-white/45">
                Available for booked events outside regular hours.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/40 sm:flex-row sm:text-left">
          <p>© {year} Dynamic Pictures Media Ltd. All rights reserved.</p>
          <p>Kitengela · Kajiado · Kenya</p>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:bg-gold hover:text-ink"
    >
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        {children}
      </svg>
    </a>
  );
}
