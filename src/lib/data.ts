export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#events", label: "Events" },
  { href: "#team", label: "Team" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
] as const;

export const WHATSAPP_NUMBER = "254798658801";
export const WHATSAPP_DISPLAY = "+254 798 658 801";
export const CONTACT_EMAIL = "mulusanorris123@gmail.com";
export const CONTACT_ADDRESS = "Kitengela Town, Kajiado County — Next to Kitengela Shopping Center";

export const SERVICES = [
  {
    id: "photography",
    title: "Professional Photography",
    description:
      "Capture lasting moments with artistic precision — portraits, products, and brand imagery crafted for impact.",
    image: "/images/services/photography-hq.webp",
    fallback: "/images/services/photography.jpg",
  },
  {
    id: "videography",
    title: "Videography",
    description:
      "Cinematic video production that turns your story into motion — from concept to final cut.",
    image: "/images/services/videography.jpg",
    fallback: "/images/services/videography.jpg",
  },
  {
    id: "event-coverage",
    title: "Event Coverage",
    description:
      "Full-day documentation for graduations, corporate events, and celebrations — every key moment preserved.",
    image: "/images/services/event-coverage-hq.webp",
    fallback: "/images/services/event-coverage.jpg",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description:
      "Visual identity, posters, and brand assets that communicate clearly and look unforgettable.",
    image: "/images/services/graphic-design.jpg",
    fallback: "/images/services/graphic-design.webp",
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Modern, fast websites that showcase your brand and convert visitors into clients.",
    image: "/images/services/web-development.jpg",
    fallback: "/images/services/web-development.jpg",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description:
      "Polished post-production — color, sound, pacing, and storytelling that elevates raw footage.",
    image: "/images/services/video-editing-hq.webp",
    fallback: "/images/services/video-editing.jpg",
  },
] as const;

export const GALLERY_IMAGES = [
  { src: "/images/gallery/image-1.jpg", alt: "Portfolio image 1" },
  { src: "/images/gallery/image-2.jpg", alt: "Portfolio image 2" },
  { src: "/images/gallery/image-3.jpg", alt: "Portfolio image 3" },
  { src: "/images/gallery/image-4.jpg", alt: "Portfolio image 4" },
  { src: "/images/gallery/image-5.jpg", alt: "Portfolio image 5" },
  { src: "/images/gallery/image-6.jpg", alt: "Portfolio image 6" },
  { src: "/images/gallery/second.jpg", alt: "Featured shoot" },
  { src: "/images/gallery/third.jpg", alt: "Creative production" },
  { src: "/images/gallery/image-10.jpg", alt: "Portfolio image 10" },
] as const;

export const HERO_IMAGES = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
] as const;

export type TeamSocials = {
  x?: string;
  github?: string;
  linkedin?: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials?: TeamSocials;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "mulusa-norris",
    name: "Mr Mulusa Norris",
    role: "Founder & CEO",
    bio: "Visionary leader with a passion for creative excellence and building stories that last.",
    image: "/images/team/portraits/mulusa-norris.png",
  },
  {
    id: "steve-kijedi",
    name: "Mr Steve Kijedi",
    role: "Operations Manager",
    bio: "Ensuring smooth productions and exceptional client experiences from brief to delivery.",
    image: "/images/team/portraits/steve-kijedi.png",
  },
  {
    id: "alex-joseph",
    name: "Alex Joseph",
    role: "Lead Developer",
    bio: "Turning creative visions into polished digital experiences with clean, modern engineering.",
    image: "/images/team/portraits/alex-joseph.png",
    socials: {
      x: "https://x.com/web3wiztron",
      github: "https://github.com/josephalexofficial",
      linkedin: "https://www.linkedin.com/in/josephalexofficial/",
    },
  },
];

export const TEAM_GROUP_PHOTOS = [
  "/images/team/group/team-1.jpeg",
  "/images/team/group/team-2.jpeg",
  "/images/team/group/team-3.jpeg",
  "/images/team/group/team-4.jpeg",
  "/images/team/group/team-5.jpeg",
] as const;

export const TESTIMONIALS = [
  {
    name: "Fedel Mbaya",
    role: "CEO, Tech Solutions",
    image: "/images/testimonials/fedel-mbaya.png",
    quote:
      "Dynamic Pictures delivered exceptional quality and professionalism. Their attention to detail is outstanding!",
  },
  {
    name: "Hon Patrick Osoi",
    role: "Honorable Member",
    image: "/images/testimonials/patrick-osoi.png",
    quote:
      "The team exceeded our expectations with their creative approach and timely delivery.",
  },
  {
    name: "Felix Mbaya",
    role: "Marketing Director",
    image: "/images/testimonials/felix-mbaya.png",
    quote:
      "Their creativity and professionalism set them apart. The final deliverables were beyond what we imagined.",
  },
] as const;

export const EVENTS = [
  {
    slug: "maa-institute-graduation-2026",
    title: "Maa Institute Graduation Ceremony",
    shortTitle: "Maa Institute Graduation",
    date: "4th July 2026",
    location: "Kajiado Campus",
    tag: "Graduation Coverage",
    cover: "/images/events/maa-institute/pic-1.jpeg",
    preview: [
      "/images/events/maa-institute/pic-1.jpeg",
      "/images/events/maa-institute/pic-2.jpeg",
      "/images/events/maa-institute/pic-3.jpeg",
      "/images/events/maa-institute/pic-4.jpeg",
    ],
    gallery: [
      "/images/events/maa-institute/pic-1.jpeg",
      "/images/events/maa-institute/pic-2.jpeg",
      "/images/events/maa-institute/pic-3.jpeg",
      "/images/events/maa-institute/pic-4.jpeg",
      "/images/events/maa-institute/pic-5.jpeg",
      "/images/events/maa-institute/pic-6.jpeg",
      "/images/events/maa-institute/pic-7.jpeg",
      "/images/events/maa-institute/pic-8.jpeg",
      "/images/events/maa-institute/pic-9.jpeg",
    ],
    excerpt:
      "Full ceremony coverage for Maa Institute of Professional Studies — Kajiado Campus graduation day.",
    story: `On 4th July 2026, Dynamic Pictures Media Ltd was privileged to document the graduation ceremony of Maa Institute of Professional Studies at the Kajiado Campus.

From the quiet anticipation before the procession to the proud smiles as graduates crossed the stage, our team captured every chapter of the day — portraits, speeches, family reunions, and the atmosphere that made the celebration unforgettable.

We worked discreetly and purposefully so the institution, graduates, and families could relive the milestone through crisp photography and thoughtful storytelling. This coverage reflects our commitment to institutional events that deserve lasting visual archives.`,
  },
  {
    slug: "eau-half-marathon-2026",
    title: "East African University 2026 Half Marathon",
    shortTitle: "EAU Half Marathon 2026",
    date: "2026",
    location: "East African University",
    tag: "Sports & Action",
    cover: "/images/events/half-marathon/photo-1.jpeg",
    preview: [
      "/images/events/half-marathon/photo-1.jpeg",
      "/images/events/half-marathon/photo-3.jpeg",
      "/images/events/half-marathon/photo-7.jpeg",
      "/images/events/half-marathon/photo-12.jpeg",
    ],
    gallery: [
      "/images/events/half-marathon/photo-1.jpeg",
      "/images/events/half-marathon/photo-2.jpeg",
      "/images/events/half-marathon/photo-3.jpeg",
      "/images/events/half-marathon/photo-4.jpeg",
      "/images/events/half-marathon/photo-5.jpeg",
      "/images/events/half-marathon/photo-6.jpeg",
      "/images/events/half-marathon/photo-7.jpeg",
      "/images/events/half-marathon/photo-8.jpeg",
      "/images/events/half-marathon/photo-9.jpeg",
      "/images/events/half-marathon/photo-10.jpeg",
      "/images/events/half-marathon/photo-11.jpeg",
      "/images/events/half-marathon/photo-12.jpeg",
      "/images/events/half-marathon/photo-13.jpeg",
      "/images/events/half-marathon/photo-14.jpeg",
      "/images/events/half-marathon/photo-15.jpeg",
    ],
    excerpt:
      "Dynamic action coverage of the East African University 2026 Half Marathon Run — energy, grit, and community.",
    story: `The East African University 2026 Half Marathon was a celebration of endurance, community, and school spirit — and Dynamic Pictures Media Ltd was on the course to capture it all.

Our crew positioned across the route to freeze the start-line buzz, mid-race determination, finish-line triumphs, and the shared joy between runners, officials, and supporters. Motion, emotion, and place came together in a body of work that feels as alive as the race itself.

This coverage showcases how we approach sports and outdoor events: fast reactions, strong composition, and a narrative that honors both athletes and organizers.`,
  },
] as const;

export function getEventBySlug(slug: string) {
  return EVENTS.find((event) => event.slug === slug);
}
