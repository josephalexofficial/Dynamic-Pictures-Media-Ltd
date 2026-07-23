import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TEAM_GROUP_PHOTOS, TEAM_MEMBERS, type TeamMember } from "@/lib/data";

export function Team() {
  const [ceo, ...rest] = TEAM_MEMBERS;

  return (
    <section id="team" className="section-pad bg-sand">
      <div className="container-site">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
            Our Team
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Meet the people behind the lens
          </h2>
          <p className="mt-4 text-ink/60">
            Leadership on the left — the wider crew captured in motion on the
            right.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: portraits */}
          <div className="space-y-6">
            <MemberCard member={ceo} featured />
            <div className="grid gap-6 sm:grid-cols-2">
              {rest.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          {/* Right: group collage */}
          <div>
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-bold text-ink">
                  Behind the scenes
                </h3>
                <p className="mt-1 text-sm text-ink/55">
                  The Dynamic Pictures crew at work and on set.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-6 grid-rows-3 gap-2 md:gap-3">
              <div className="relative col-span-4 row-span-2 aspect-[4/3] overflow-hidden">
                <Image
                  src={TEAM_GROUP_PHOTOS[0]}
                  alt="Team group"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 70vw, 35vw"
                />
              </div>
              <div className="relative col-span-2 row-span-1 overflow-hidden">
                <Image
                  src={TEAM_GROUP_PHOTOS[1]}
                  alt="Team moment"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>
              <div className="relative col-span-2 row-span-1 overflow-hidden">
                <Image
                  src={TEAM_GROUP_PHOTOS[2]}
                  alt="Team moment"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>
              <div className="relative col-span-2 overflow-hidden aspect-square">
                <Image
                  src={TEAM_GROUP_PHOTOS[3]}
                  alt="Team moment"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>
              <div className="relative col-span-4 overflow-hidden aspect-[2/1]">
                <Image
                  src={TEAM_GROUP_PHOTOS[4]}
                  alt="Team moment"
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
              </div>
            </div>

            <Link
              href="/team"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-soft"
            >
              Discover the full team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function MemberCard({
  member,
  featured = false,
}: {
  member: TeamMember;
  featured?: boolean;
}) {
  const socials = member.socials;

  return (
    <article
      className={
        featured
          ? "flex flex-col gap-5 border border-ink/10 bg-white p-5 shadow-soft sm:flex-row sm:items-center"
          : "border border-ink/10 bg-white p-4 shadow-soft"
      }
    >
      <div
        className={
          featured
            ? "relative mx-auto h-36 w-36 shrink-0 overflow-hidden rounded-full ring-4 ring-gold/40 sm:mx-0"
            : "relative mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full ring-2 ring-gold/30"
        }
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="144px"
        />
      </div>
      <div className={featured ? "text-center sm:text-left" : "text-center"}>
        <h3 className="font-display text-lg font-bold text-ink">
          {member.name}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-gold-dark">{member.role}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink/60">{member.bio}</p>
        {socials && (
          <div
            className={
              featured
                ? "mt-3 flex justify-center gap-3 sm:justify-start"
                : "mt-3 flex justify-center gap-3"
            }
          >
            {socials.x && (
              <a
                href={socials.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-ink/40 transition hover:text-ink"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.9 2H22l-6.8 7.8L23 22h-6.5l-5.1-6.7L5.8 22H2.7l7.3-8.3L1 2h6.7l4.6 6.1L18.9 2zm-1.1 18h1.8L6.3 3.9H4.4L17.8 20z" />
                </svg>
              </a>
            )}
            {socials.github && (
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-ink/40 transition hover:text-ink"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.48A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
                </svg>
              </a>
            )}
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-ink/40 transition hover:text-ink"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22 2H2v20h20V2z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
