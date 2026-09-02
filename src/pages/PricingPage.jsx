import { Link } from "react-router-dom";
import { Check, HelpCircle, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Button from "../components/ui/Button";

const addOns = [
  { name: "Extra Page Development", price: "₹2,500 / page", desc: "Custom designed inner page with content layout & responsive optimization." },
  { name: "Payment Gateway Integration", price: "₹4,999", desc: "Razorpay, Stripe, or PhonePe secure checkout integration." },
  { name: "E-Commerce Product Catalog", price: "₹7,999", desc: "Product listing, filtering, cart state management, and enquiry flow." },
  { name: "Advanced SEO & Schema Markup", price: "₹3,999", desc: "Comprehensive on-page SEO, rich snippet schema, and Google Search Console indexing." },
  { name: "Domain & Hosting Consultation", price: "Free with any package", desc: "Expert guidance selecting SSL, cloud hosting, and domain DNS setup." },
];

export default function PricingPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Pricing Plans"
        badge="TRANSPARENT VALUE"
        title={
          <>
            Honest pricing with <span className="text-gold-grad">zero hidden fees.</span>
          </>
        }
        intro="Fixed-scope website design and web application development packages tailored for startups, small businesses, and growing enterprises."
      />

      {/* Pricing Cards Section */}
      <Pricing />

      {/* Custom Add-ons Section */}
      <section className="section py-16 bg-surface/30 border-y border-line/50">
        <div className="shell">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <Reveal>
              <span className="eyebrow">Modular Options</span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="text-3xl font-display font-semibold text-fg mt-2">
                Available Add-on Services
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-muted text-sm mt-3">
                Need extra functionality? Add standalone features to any tier without paying for a full plan upgrade.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((item, i) => (
              <Reveal key={item.name} delay={i * 60}>
                <div className="card p-6 h-full flex flex-col justify-between hover:border-gold/40">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h3 className="font-display font-semibold text-fg text-base">{item.name}</h3>
                      <span className="font-mono text-xs font-bold text-gold shrink-0">{item.price}</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-line/50">
                    <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs text-gold hover:underline">
                      Add to quote <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Guarantee */}
      <section className="section py-16">
        <div className="shell">
          <div className="card p-8 md:p-12 relative overflow-hidden bg-gradient-to-r from-surface via-surface to-gold/10 border border-gold/30">
            <div className="max-w-2xl">
              <span className="eyebrow">Our Promise</span>
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-fg mt-3">
                Clear deliverables, milestone payments & 100% satisfaction.
              </h2>
              <p className="text-sm text-muted mt-4 leading-relaxed">
                We work on a transparent milestone structure (e.g. 50% advance to start, 50% on final launch approval). You review live demo builds before launch.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <Button href="/contact" size="md">
                  Get a Custom Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <FinalCTA />
    </main>
  );
}
