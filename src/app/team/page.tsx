import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { TEAM_GROUP_PHOTOS, TEAM_MEMBERS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Dynamic Pictures Media Ltd team — leadership, creatives, and the people behind every frame.",
};

export default function TeamPage() {
  return (
    <div className="bg-sand pt-28 pb-20">
      <div className="container-site">
        <Link
          href="/#team"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-ink/60 transition hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
            The Full Team
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            The faces of Dynamic Pictures
          </h1>
          <p className="mt-4 text-ink/60">
            A close-knit crew of storytellers, operators, and builders dedicated
            to visual excellence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.id}
              className="border border-ink/10 bg-white p-6 text-center shadow-soft"
            >
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full ring-4 ring-gold/35">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="160px"
                />
              </div>
              <h2 className="mt-5 font-display text-xl font-bold text-ink">
                {member.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-gold-dark">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                {member.bio}
              </p>
              {member.socials && Object.keys(member.socials).length > 0 && (
                <div className="mt-4 flex justify-center gap-3">
                  {member.socials.x && (
                    <a
                      href={member.socials.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink/40 hover:text-ink"
                      aria-label="X"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.9 2H22l-6.8 7.8L23 22h-6.5l-5.1-6.7L5.8 22H2.7l7.3-8.3L1 2h6.7l4.6 6.1L18.9 2zm-1.1 18h1.8L6.3 3.9H4.4L17.8 20z" />
                      </svg>
                    </a>
                  )}
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink/40 hover:text-ink"
                      aria-label="GitHub"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.48A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
                      </svg>
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink/40 hover:text-ink"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22 2H2v20h20V2z" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="mb-6 text-center font-display text-2xl font-bold text-ink">
            Life on set
          </h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {TEAM_GROUP_PHOTOS.map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden ${
                  i === 0 ? "col-span-2 aspect-[2/1] md:col-span-2" : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt={`Team photo ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
