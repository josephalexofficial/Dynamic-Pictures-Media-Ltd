import { Image } from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

function scrollToHash(href: string) {
  if (!href.startsWith("#")) return false;
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", href);
  return true;
}

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      const position = window.scrollY + 120;
      for (const id of sections) {
        const section = document.getElementById(id);
        if (!section) continue;
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (position >= top && position < bottom) {
          setActive(`#${id}`);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (location.pathname === "/") {
        scrollToHash(href);
      } else {
        navigate({ pathname: "/", hash: href.slice(1) });
      }
      setOpen(false);
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          scrolled || open
            ? "border-ink/10 bg-white/95 shadow-sm backdrop-blur-md"
            : "border-transparent bg-white/90 backdrop-blur-sm",
        )}
      >
        <div className="container-site flex h-[4.5rem] items-center justify-between md:h-20">
          <Link
            href="/#home"
            onClick={(e) => handleNav(e, "#home")}
            className="group flex items-center gap-3"
          >
            <span className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-gold/40 shadow-sm md:h-12 md:w-12">
              <Image
                src="/images/brand/logo.jpg"
                alt="Dynamic Pictures Media Ltd"
                fill
                className="object-cover"
                sizes="48px"
                priority
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-base font-extrabold tracking-tight text-ink md:text-lg">
                Dynamic Pictures
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/55">
                Media Ltd
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.filter((l) => l.href !== "#contact").map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className={cn(
                  "relative px-3 py-2 text-sm font-bold tracking-tight transition-colors",
                  active === link.href
                    ? "text-ink"
                    : "text-ink/75 hover:text-ink",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-gold transition-transform duration-300",
                    active === link.href ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNav(e, "#contact")}
              className="ml-3 inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-ink-soft"
            >
              Contact Us
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white transition-all duration-300 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center text-ink"
        >
          <X className="h-6 w-6" strokeWidth={1.5} />
        </button>

        <nav className="flex h-full flex-col items-center justify-center gap-7">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-2xl font-extrabold tracking-tight text-ink transition hover:text-gold-dark"
              style={{
                transitionDelay: open ? `${i * 40}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(8px)",
                transitionProperty: "opacity, transform, color",
                transitionDuration: "300ms",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
