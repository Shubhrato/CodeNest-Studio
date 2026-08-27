import { Check, ArrowRight, Sparkles } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { pricing } from "../data/pricing";

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow="Pricing"
          title={
            <>
              Startup-friendly pricing,{" "}
              <span className="text-gold-grad">built around scope.</span>
            </>
          }
          intro="Transparent starting points — not rigid boxes. You only pay for what your project actually needs."
        />

        <Reveal className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/[0.07] px-4 py-2 font-mono text-xs text-gold">
            <Sparkles className="size-4" />
            Startup discount — save approx. 40% vs. current market development costs
          </span>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {pricing.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 80} className="h-full">
              <div
                className={`card flex h-full flex-col p-7 ${
                  tier.popular
                    ? "border-gold/45 shadow-[0_30px_80px_-40px_rgba(233,180,90,0.5)] lg:-my-3 lg:py-10"
                    : "card-hover"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-ink">
                    Most popular
                  </span>
                )}

                <h3 className="font-display text-xl font-semibold text-fg">{tier.name}</h3>
                <p className="mt-1 text-sm text-muted">{tier.tagline}</p>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-mono text-xs text-faint">from</span>
                  <span className="font-display text-4xl font-semibold text-fg tabnum">
                    {tier.priceFrom}
                  </span>
                </div>
                <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-widest text-faint">
                  {tier.note}
                </p>

                <div className="rule my-6" />

                <ul className="flex flex-1 flex-col gap-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                      <Check
                        className={`mt-0.5 size-4 shrink-0 ${
                          tier.popular ? "text-gold" : "text-gold/70"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  variant={tier.popular ? "primary" : "outline"}
                  icon={ArrowRight}
                  full
                  className="mt-7"
                >
                  Get My Project Estimate
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-center text-sm text-faint">
            Indicative starting prices for development work. Every project is quoted on its actual
            scope — no hidden costs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
