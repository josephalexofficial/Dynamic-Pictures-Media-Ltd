import { WHATSAPP_NUMBER } from "./data";

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export function buildWhatsAppMessage(data: ContactFormData): string {
  const serviceLabel = data.service || "General Inquiry";

  return [
    "Hello Dynamic Pictures Media Ltd 👋",
    "",
    "I would like to get in touch regarding your services.",
    "",
    `*Name:* ${data.name}`,
    `*Email:* ${data.email}`,
    data.phone ? `*Phone:* ${data.phone}` : null,
    `*Service:* ${serviceLabel}`,
    "",
    "*Message:*",
    data.message,
    "",
    "Looking forward to your response. Thank you!",
  ]
    .filter(Boolean)
    .join("\n");
}

export function openWhatsApp(data: ContactFormData) {
  const text = encodeURIComponent(buildWhatsAppMessage(data));
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
