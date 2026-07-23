import { useState } from "react";
import { ArrowRight, Expand } from "lucide-react";
import { Image } from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { GalleryLightbox } from "@/components/ui/GalleryLightbox";
import { TEAM_GROUP_PHOTOS, TEAM_MEMBERS, type TeamMember } from "@/lib/data";

const BTS_IMAGES = TEAM_GROUP_PHOTOS.map((src, i) => ({
  src,
  alt: `Dynamic Pictures crew behind the scenes ${i + 1}`,
}));

export function Team() {
  const [ceo, ...rest] = TEAM_MEMBERS;
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="team" className="section-pad relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-site relative">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold-dark">
            Our Team
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink text-balance md:text-5xl">
            Meet the people behind the lens
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/60 md:text-lg">
            Leadership and creatives who bring every production to life — on set
            and behind the scenes.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-gold to-gold-dark" />
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left — CEO featured + two members */}
          <div className="flex h-full flex-col gap-5">
            <CeoCard member={ceo} />
            <div className="grid min-h-0 flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
              {rest.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          {/* Right — collage matches left height */}
          <div className="flex h-full min-h-[420px] flex-col lg:min-h-0">
            <div className="mb-4">
              <h3 className="font-display text-xl font-extrabold text-ink">
                Behind the scenes
              </h3>
              <p className="mt-1 text-sm text-ink/55">
                The Dynamic Pictures crew at work and on set.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:min-h-0 sm:flex-1 sm:grid-rows-3 md:gap-3">
              <BtsPhoto
                index={0}
                onOpen={setActive}
                className="col-span-2 aspect-[16/10] sm:col-span-1 sm:row-span-2 sm:aspect-auto"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
              <BtsPhoto
                index={1}
                onOpen={setActive}
                className="aspect-square sm:aspect-auto"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <BtsPhoto
                index={2}
                onOpen={setActive}
                className="aspect-square sm:aspect-auto"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <BtsPhoto
                index={3}
                onOpen={setActive}
                className="aspect-square sm:aspect-auto"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <BtsPhoto
                index={4}
                onOpen={setActive}
                className="aspect-square sm:col-span-1 sm:aspect-auto"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white transition hover:bg-ink-soft"
          >
            Discover the full team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <GalleryLightbox
        images={BTS_IMAGES}
        activeSrc={active}
        onClose={() => setActive(null)}
        onSelect={setActive}
      />
    </section>
  );
}

function BtsPhoto({
  index,
  onOpen,
  className = "",
  sizes,
}: {
  index: number;
  onOpen: (src: string) => void;
  className?: string;
  sizes: string;
}) {
  const image = BTS_IMAGES[index];

  return (
    <button
      type="button"
      onClick={() => onOpen(image.src)}
      aria-label={`View photo: ${image.alt}`}
      className={`group relative overflow-hidden bg-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
        sizes={sizes}
      />
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition duration-300 group-hover:bg-ink/35 group-hover:opacity-100">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-soft">
          <Expand className="h-4 w-4" />
        </span>
      </span>
    </button>
  );
}

function CeoCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex flex-col gap-5 border border-ink/8 bg-sand/40 p-5 shadow-soft transition duration-300 hover:border-ink/12 hover:bg-sand sm:flex-row sm:items-center sm:gap-6 sm:p-6 md:p-7">
      <div className="relative mx-auto h-32 w-32 shrink-0 overflow-hidden rounded-full bg-gold ring-4 ring-gold/35 sm:mx-0 sm:h-36 sm:w-36 md:h-40 md:w-40">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="160px"
        />
      </div>
      <div className="min-w-0 flex-1 text-center sm:text-left">
        <span className="mb-1 inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-gold-dark">
          Leadership
        </span>
        <h3 className="font-display text-xl font-extrabold tracking-tight text-ink md:text-2xl">
          {member.name}
        </h3>
        <p className="mt-0.5 text-sm font-semibold text-gold-dark md:text-base">
          {member.role}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink/60 md:text-[15px]">
          {member.bio}
        </p>
        <SocialLinks
          socials={member.socials}
          className="mt-4 flex justify-center gap-3 sm:justify-start"
        />
      </div>
    </article>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex h-full flex-col border border-ink/8 bg-sand/40 p-5 text-center shadow-soft transition duration-300 hover:border-ink/12 hover:bg-sand md:p-6">
      <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full bg-gold ring-2 ring-gold/35 sm:h-32 sm:w-32">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="128px"
        />
      </div>
      <h3 className="mt-4 font-display text-lg font-extrabold tracking-tight text-ink">
        {member.name}
      </h3>
      <p className="mt-0.5 text-sm font-semibold text-gold-dark">{member.role}</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/55">
        {member.bio}
      </p>
      <SocialLinks socials={member.socials} />
    </article>
  );
}
