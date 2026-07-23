import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Events } from "@/components/sections/Events";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { HashScroll } from "@/components/HashScroll";

export default function HomePage() {
  return (
    <>
      <HashScroll />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Events />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}
