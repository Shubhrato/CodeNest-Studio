import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./ui/Logo";
import Button from "./ui/Button";
import WhatsAppButton from "./ui/WhatsAppButton";
import { nav } from "../data/site";
import { useScrolled, useActiveSection } from "../hooks/useNav";

const SECTION_IDS = nav.map((n) => n.href.replace("#", ""));

export default function Navbar() {
  const scrolled = useScrolled(24);
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);
  const progressRef = useRef(null);

  // Thin scroll-progress bar (ref-driven, no re-render per scroll frame).
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = progressRef.current;
      if (el) {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        el.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`;
      }
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Lock body scroll + close on Escape while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled || open
            ? "glass border-b border-line/70 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.9)]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="shell flex h-[68px] items-center justify-between" aria-label="Primary">
          <a href="#home" className="shrink-0" aria-label="CodeNest Studio — home">
            <Logo />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-sm transition-colors duration-300 ${
                      isActive ? "text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-px origin-center bg-gradient-to-r from-transparent via-gold to-transparent transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="#contact" size="sm" icon={ArrowUpRight} magnetic>
              Start a Project
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full border border-line text-fg transition-colors hover:border-gold/50 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {/* Scroll progress */}
        <div className="relative h-px w-full bg-transparent">
          <div
            ref={progressRef}
            className="h-full origin-left scale-x-0 bg-gradient-to-r from-gold-deep via-gold to-gold-soft"
          />
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`glass overflow-hidden border-b border-line/70 transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[560px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="shell flex flex-col gap-1 py-5">
          {nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[1.05rem] transition-colors ${
                  isActive ? "bg-white/[0.04] text-gold" : "text-fg hover:bg-white/[0.03]"
                }`}
              >
                {item.label}
                <span className="font-mono text-xs text-faint">
                  0{nav.indexOf(item) + 1}
                </span>
              </a>
            );
          })}
          <div className="mt-3 flex flex-col gap-3">
            <Button href="#contact" size="md" full icon={ArrowUpRight} onClick={() => setOpen(false)}>
              Start a Project
            </Button>
            <WhatsAppButton full />
          </div>
        </div>
      </div>
    </header>
  );
}
