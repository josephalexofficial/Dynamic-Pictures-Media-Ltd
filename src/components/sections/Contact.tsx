import { FormEvent, useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
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
  "w-full border border-ink/15 bg-sand px-3.5 py-2.5 text-sm outline-none transition focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/25";

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
      className="flex min-h-[calc(100svh-4.5rem)] items-center bg-sand py-10 md:min-h-[calc(100svh-5rem)] md:py-12"
    >
      <div className="container-site w-full">
        <div className="mb-6 text-center md:mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
            Contact Us
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Let&apos;s create something great
          </h2>
        </div>

        <div className="grid overflow-hidden border border-ink/10 bg-white shadow-soft lg:grid-cols-[1.15fr_0.85fr]">
          <form onSubmit={onSubmit} className="p-5 sm:p-6 md:p-8">
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
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
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
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

            <Field label="Message" className="mt-3 sm:mt-4">
              <textarea
                required
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${fieldClass} resize-none`}
                placeholder="Tell us about your project..."
              />
            </Field>

            <button
              type="submit"
              disabled={sending}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1ebe57] disabled:opacity-70 sm:mt-5"
            >
              <Send className="h-4 w-4" />
              {sending ? "Opening WhatsApp..." : "Send via WhatsApp"}
            </button>
            <p className="mt-2 text-center text-xs text-ink/45">
              Opens WhatsApp with your message ready for {WHATSAPP_DISPLAY}
            </p>
          </form>

          <aside className="bg-ink p-5 text-white sm:p-6 md:p-8">
            <h3 className="font-display text-lg font-bold">Reach us directly</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <Info icon={MapPin} title="Location">
                {CONTACT_ADDRESS}
              </Info>
              <Info icon={Phone} title="Phone">
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-gold">
                  {WHATSAPP_DISPLAY}
                </a>
              </Info>
              <Info icon={Mail} title="Email">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="break-all hover:text-gold"
                >
                  {CONTACT_EMAIL}
                </a>
              </Info>
              <Info icon={Clock} title="Hours">
                Mon – Sun · 8:00 AM – 6:00 PM
              </Info>
            </ul>
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
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink/55">
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
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-white/45">
          {title}
        </p>
        <div className="mt-0.5 leading-relaxed text-white/80">{children}</div>
      </div>
    </li>
  );
}
