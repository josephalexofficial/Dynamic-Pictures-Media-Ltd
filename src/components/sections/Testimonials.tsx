import { Image } from "@/components/ui/Image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="section-pad bg-white">
      <div className="container-site">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
            Testimonials
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            What our clients say
          </h2>
          <p className="mt-4 text-ink/60">
            Real feedback from people who trusted us with their stories.
          </p>
        </div>

        {/* Desktop: three cards */}
        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <TestimonialCard testimonial={TESTIMONIALS[index]} />
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous"
              onClick={() =>
                setIndex(
                  (i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
                )
              }
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === index ? "w-6 bg-gold" : "w-2 bg-ink/20",
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next"
              onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
}) {
  return (
    <article className="flex h-full flex-col border border-ink/10 bg-sand p-7 shadow-soft transition hover:shadow-lift">
      <Quote className="mb-4 h-8 w-8 text-gold/70" />
      <div className="mb-4 flex gap-0.5 text-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="flex-1 text-[15px] leading-relaxed text-ink/70 italic">
        “{testimonial.quote}”
      </p>
      <div className="mt-6 flex items-center gap-4 border-t border-ink/10 pt-5">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/40 ring-offset-2 ring-offset-sand">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover object-top"
            sizes="56px"
          />
        </div>
        <div>
          <h3 className="font-display text-base font-bold text-ink">
            {testimonial.name}
          </h3>
          <p className="text-sm text-gold-dark">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}
