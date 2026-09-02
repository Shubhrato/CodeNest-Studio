import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

export default function PageHeader({ eyebrow, title, intro, badge }) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden border-b border-line/50 bg-radial-glow">
      <div className="shell relative z-10">
        {/* Breadcrumb Navigation */}
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-xs text-muted backdrop-blur-md">
            <Link to="/" className="transition-colors hover:text-gold">Home</Link>
            <ChevronRight className="size-3 text-faint" />
            <span className="text-gold font-medium">{eyebrow}</span>
          </nav>
        </Reveal>

        <div className="max-w-3xl">
          {badge && (
            <Reveal delay={40}>
              <span className="eyebrow mb-3 inline-block">{badge}</span>
            </Reveal>
          )}

          <Reveal delay={80}>
            <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl font-display tracking-tight text-fg leading-[1.08] mb-6">
              {title}
            </h1>
          </Reveal>

          {intro && (
            <Reveal delay={140}>
              <p className="text-pretty text-lg sm:text-xl text-muted leading-relaxed max-w-2xl">
                {intro}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
