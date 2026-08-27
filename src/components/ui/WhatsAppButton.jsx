import { whatsappLink, DEFAULT_WA_MESSAGE } from "../../data/site";
import { useMagnetic } from "../../hooks/useMagnetic";

// Official WhatsApp glyph (kept accurate; brand green used only here).
function WhatsAppGlyph({ className = "size-5" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.01 3.2c-7.06 0-12.8 5.73-12.8 12.79 0 2.25.59 4.45 1.71 6.39L3.2 28.8l6.6-1.7a12.77 12.77 0 0 0 6.2 1.58h.01c7.06 0 12.79-5.73 12.79-12.79 0-3.42-1.33-6.63-3.75-9.05a12.7 12.7 0 0 0-9.04-3.64Zm0 23.42h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.6 10.6 0 0 1-1.63-5.66c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.52c0 5.87-4.77 10.63-10.63 10.63Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.42 5.43 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

// Premium WhatsApp CTA — recognizable green, but restrained (glass + ring).
export default function WhatsAppButton({
  message = DEFAULT_WA_MESSAGE,
  label = "Chat About Your Project",
  full = false,
  magnetic = false,
  className = "",
}) {
  const magRef = useMagnetic(0.2);
  return (
    <a
      ref={magnetic ? magRef : undefined}
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center justify-center gap-2.5 rounded-full border border-[#25D366]/35 bg-[#25D366]/10 px-6 py-3.5 font-medium text-[#3ddc84] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366]/60 hover:bg-[#25D366]/16 hover:text-[#57e79a] ${
        full ? "w-full" : ""
      } ${className}`}
    >
      <WhatsAppGlyph className="size-5 shrink-0" />
      <span>{label}</span>
    </a>
  );
}
