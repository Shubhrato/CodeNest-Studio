import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const active = testimonials[activeIndex];

  return (
    <section className="section py-20 bg-surface/30 border-y border-line/50">
      <div className="shell">
        <SectionHeader
          eyebrow="Client Reviews"
          title={
            <>
              Trusted by businesses, <span className="text-gold-grad">built on results.</span>
            </>
          }
          intro="Read what our clients say about working with CodeNest Studio on their website projects."
        />

        <div className="mt-14 max-w-4xl mx-auto">
          <Reveal>
            <div className="card p-8 sm:p-12 relative overflow-hidden bg-gradient-to-b from-surface/90 to-surface/40 border border-gold/30 shadow-[0_20px_60px_-30px_rgba(233,180,90,0.15)]">
              {/* Background ambient glow & watermark quote icon */}
              <Quote className="absolute -bottom-6 -right-6 size-48 text-gold/5 pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-6 border-b border-line/60">
                <div className="flex items-center gap-4">
                  <div className="grid size-14 place-items-center rounded-2xl bg-gold/10 border border-gold/30 text-gold font-display font-bold text-xl">
                    {active.avatarInitial}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-fg">{active.name}</h3>
                    <p className="text-xs text-muted">
                      {active.role} • <span className="text-gold font-medium">{active.company}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-1.5">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-gold">
                    {[...Array(active.rating)].map((_, i) => (
                      <Star key={i} className="size-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-good">
                    <CheckCircle className="size-3.5" /> Verified Client Review
                  </span>
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="relative z-10 text-pretty text-lg sm:text-xl text-fg/90 leading-relaxed font-sans italic">
                "{active.quote}"
              </blockquote>

              {/* Navigation Bar */}
              <div className="relative z-10 mt-10 pt-6 border-t border-line/50 flex items-center justify-between">
                <span className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 font-mono text-xs text-gold">
                  {active.tag}
                </span>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-faint mr-2">
                    0{activeIndex + 1} / 0{testimonials.length}
                  </span>
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="grid size-9 place-items-center rounded-full border border-line text-fg transition-colors hover:border-gold/50 hover:bg-gold/10"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next testimonial"
                    className="grid size-9 place-items-center rounded-full border border-line text-fg transition-colors hover:border-gold/50 hover:bg-gold/10"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
