import { useEffect } from "react";
import { Image } from "@/components/ui/Image";
import { PageBackLink, PageShell } from "@/components/ui/PageShell";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { TEAM_GROUP_PHOTOS, TEAM_MEMBERS } from "@/lib/data";

export function TeamPage() {
  useEffect(() => {
    document.title = "Our Team | Dynamic Pictures Media Ltd";
  }, []);

  return (
    <PageShell>
      <PageBackLink href="/#team">Back to home</PageBackLink>

      <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 md:mb-14">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold-dark">
          The Full Team
        </p>
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink text-balance sm:text-4xl md:text-5xl">
          The faces of Dynamic Pictures
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60 sm:text-base">
          A close-knit crew of storytellers, operators, and builders dedicated
          to visual excellence.
        </p>
        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-gold to-gold-dark" />
      </div>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-3 md:gap-8">
        {TEAM_MEMBERS.map((member) => (
          <article
            key={member.id}
            className="border border-ink/10 bg-white p-5 text-center shadow-soft sm:p-6"
          >
            <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full ring-4 ring-gold/35 sm:h-40 sm:w-40">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top"
                sizes="160px"
              />
            </div>
            <h2 className="mt-5 font-display text-xl font-extrabold text-ink">
              {member.name}
            </h2>
            <p className="mt-1 text-sm font-semibold text-gold-dark">
              {member.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/60">
              {member.bio}
            </p>
            <SocialLinks
              socials={member.socials}
              iconClassName="text-ink/40 transition hover:text-ink"
              size="h-5 w-5"
            />
          </article>
        ))}
      </div>

      <div className="mt-12 sm:mt-16">
        <div className="mb-5 text-center sm:mb-6">
          <h2 className="font-display text-2xl font-extrabold text-ink">
            Life on set
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-gold to-gold-dark" />
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3 md:gap-4">
          {TEAM_GROUP_PHOTOS.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden ${
                i === 0
                  ? "col-span-2 aspect-[2/1] md:col-span-2"
                  : "aspect-square"
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
    </PageShell>
  );
}
