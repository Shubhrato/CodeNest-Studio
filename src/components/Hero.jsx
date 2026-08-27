import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Button from "./ui/Button";
import HeroVisual from "./ui/HeroVisual";

const TRUST = [
  "Web Development",
  "UI/UX",
  "Business Websites",
  "Custom Solutions",
];

export default function Hero() {
  // Page-load entrance: toggle the reveal class right after first paint.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const item = (delay) => ({
    className: `reveal ${mounted ? "reveal--in" : ""}`,
    style: { transitionDelay: `${delay}ms` },
  });

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      <div className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Left — the pitch */}
        <div className="max-w-xl">
          <div {...item(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-3.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted">
              <span className="pulse-dot inline-block size-1.5 rounded-full bg-good" />
              Available for new projects
            </span>
          </div>

          <h1
            className={`reveal ${
              mounted ? "reveal--in" : ""
            } mt-6 text-balance font-display text-[clamp(2.6rem,7vw,4.6rem)] font-semibold leading-[1.02]`}
            style={{ transitionDelay: "90ms" }}
          >
            Modern websites.
            <br />
            Built for <span className="text-gold-grad">real business.</span>
          </h1>

          <p
            {...item(170)}
            className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            CodeNest Studio designs and develops fast, responsive and
            conversion-focused websites for businesses, startups, professionals
            and brands.
          </p>

          <div {...item(250)} className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#contact" size="lg" icon={ArrowRight} magnetic>
              Start Your Project
            </Button>
            <Button href="#projects" size="lg" variant="outline" icon={ArrowUpRight}>
              Explore My Work
            </Button>
          </div>

          <div
            {...item(330)}
            className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-faint"
          >
            {TRUST.map((t, i) => (
              <span key={t} className="inline-flex items-center gap-3">
                {i > 0 && <span className="text-gold/50">•</span>}
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right — the signature visual */}
        <div
          className={`reveal ${mounted ? "reveal--in" : ""}`}
          style={{ transitionDelay: "220ms" }}
        >
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
