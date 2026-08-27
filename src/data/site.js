// Central brand + contact source of truth. Edit here to update the whole site.
export const site = {
  name: "CodeNest Studio",
  owner: "Shubhrato",
  role: "Web Developer & Digital Solutions Specialist",
  tagline: "We build digital experiences that move businesses forward.",
  email: "shubhrato18@gmail.com",
  phone: "8447509269",
  phoneIntl: "918447509269", // India +91 for wa.me deep links
  locationShort: "Ghaziabad, Uttar Pradesh, India",
  locationRegion: "Ghaziabad, Uttar Pradesh",
  locationFull:
    "Sahibabad Industrial Area, Site 4, Ghaziabad, Uttar Pradesh, India",
  url: "https://codeneststudio.in",
  // Add real profiles here later; footer renders only what exists.
  socials: [
    // { label: "GitHub", href: "https://github.com/..." },
  ],
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Technologies", href: "#technologies" },
  { label: "Pricing", href: "#pricing" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const DEFAULT_WA_MESSAGE =
  "Hi Shubhrato, I found CodeNest Studio and would like to discuss a website project.";

// Build a WhatsApp deep link with a prefilled, professional message.
export function whatsappLink(message = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(message)}`;
}

// Build a mailto link with optional subject/body.
// Uses encodeURIComponent (RFC 6068) so spaces become %20, not +.
export function mailtoLink({ subject, body } = {}) {
  const parts = [];
  if (subject) parts.push(`subject=${encodeURIComponent(subject)}`);
  if (body) parts.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${site.email}${parts.length ? `?${parts.join("&")}` : ""}`;
}
