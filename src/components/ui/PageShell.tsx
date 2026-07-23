import { type ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/components/ui/Link";

/** Shared shell for /events, /gallery, /team subpages — mobile-first spacing */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-sand pt-[5.75rem] pb-16 sm:pt-28 sm:pb-20 md:pb-24">
      <div className="container-site">{children}</div>
    </div>
  );
}

export function PageBackLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="mb-6 inline-flex min-h-11 items-center gap-2 py-2 text-sm font-semibold text-ink/60 transition hover:text-ink sm:mb-8"
    >
      <ArrowLeft className="h-4 w-4 shrink-0" />
      {children}
    </Link>
  );
}
