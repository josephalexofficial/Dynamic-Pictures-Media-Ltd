import { type FormEvent, type ReactNode, useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { BrandGlyph, BrandSocials } from "@/components/ui/BrandSocials";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  SERVICES,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/data";
import { openWhatsApp } from "@/lib/whatsapp";

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const fieldClass =
  "w-full border border-ink/12 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25";

export function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    openWhatsApp(form);
    setTimeout(() => {
      setSending(false);
      setForm(INITIAL);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden bg-white"
    >
      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-ink/[0.03] blur-3xl" />

      <div className="container-site relative">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold-dark">
            Contact Us
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink text-balance md:text-5xl">
            Let&apos;s create something great
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/60 md:text-lg">
            Tell us about your project — we&apos;ll reply on WhatsApp with next
            steps.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-gold to-gold-dark" />
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="h-1 w-10 rounded-full bg-gold" />
              <h3 className="font-display text-lg font-extrabold text-ink">
                Send a message
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={fieldClass}
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={fieldClass}
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="Phone">
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={fieldClass}
                  placeholder="+254 7XX XXX XXX"
                />
              </Field>
              <Field label="Service">
                <select
                  required
                  value={form.service}
                  onChange={(e) =>
                    setForm({ ...form, service: e.target.value })
                  }
                  className={fieldClass}
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Other Services">Other Services</option>
                </select>
              </Field>
            </div>

            <Field label="Message" className="mt-4">
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${fieldClass} resize-none`}
                placeholder="Tell us about your project..."
              />
            </Field>

            <button
              type="submit"
              disabled={sending}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-[#1ebe57] hover:shadow-lift disabled:opacity-70 sm:w-auto sm:min-w-[240px]"
            >
              <BrandGlyph id="whatsapp" className="h-5 w-5" />
              {sending ? "Opening WhatsApp..." : "Send via WhatsApp"}
            </button>
            <p className="mt-3 text-sm text-ink/45">
              Opens WhatsApp with your message ready for{" "}
              <span className="font-semibold text-ink/60">{WHATSAPP_DISPLAY}</span>
            </p>
          </form>

          {/* Details + socials — light panel, no black */}
          <aside className="lg:col-span-5">
            <div className="border border-ink/8 bg-sand/70 p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-1 w-10 rounded-full bg-gold" />
                <h3 className="font-display text-lg font-extrabold text-ink">
                  Reach us directly
                </h3>
              </div>

              <ul className="space-y-5">
                <Info icon={MapPin} title="Location">
                  {CONTACT_ADDRESS}
                </Info>
                <Info icon={Phone} title="Phone">
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="transition hover:text-gold-dark"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </Info>
                <Info icon={Mail} title="Email">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="break-all transition hover:text-gold-dark"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </Info>
                <Info icon={Clock} title="Hours">
                  Mon – Sun · 8:00 AM – 6:00 PM
                </Info>
              </ul>

              <div className="mt-8 border-t border-ink/10 pt-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink/45">
                  Connect with us
                </p>
                <p className="mt-1.5 text-sm text-ink/55">
                  Follow our latest work and message us anytime.
                </p>
                <BrandSocials
                  className="mt-5 text-ink"
                  size="lg"
                  showLabels
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/55">
        {label}
      </span>
      {children}
    </label>
  );
}

function Info({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: ReactNode;
}) {
  return (
    <li className="flex gap-3.5">
      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-gold-dark shadow-soft ring-1 ring-ink/5">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0 pt-0.5">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink/40">
          {title}
        </p>
        <div className="mt-1 text-sm leading-relaxed text-ink/75">{children}</div>
      </div>
    </li>
  );
}
