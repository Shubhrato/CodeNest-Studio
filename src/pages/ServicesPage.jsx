import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import Process from "../components/Process";
import FinalCTA from "../components/FinalCTA";
import { services } from "../data/services";

const serviceDetails = [
  {
    title: "Custom Business Websites",
    tagline: "Establish market authority & generate qualified leads 24/7.",
    features: [
      "Mobile-first responsive architecture across all screen sizes",
      "Fast page loads (sub-1 second performance target)",
      "SEO-ready metadata & semantic HTML structure",
      "Interactive lead forms & instant WhatsApp integration",
    ],
    deliverables: "Design mockups, responsive website, SSL setup, SEO basics, training.",
  },
  {
    title: "High-Converting Landing Pages",
    tagline: "Maximized conversion rates for ad campaigns & product launches.",
    features: [
      "Persuasive copywriting-aligned layout structures",
      "A/B testing-friendly clean component design",
      "Frictionless CTA buttons & lead capture popups",
      "Custom analytics & conversion tracking ready",
    ],
    deliverables: "Single-page application, custom hero visuals, lead integration.",
  },
  {
    title: "Modern React & Single-Page Apps",
    tagline: "Dynamic, stateful web applications tailored to custom business logic.",
    features: [
      "Modular React component structure for scalability",
      "Vite lightning-fast bundling & asset optimization",
      "Seamless API integrations & dynamic state management",
      "Smooth client-side routing & page transitions",
    ],
    deliverables: "Full React source code, API integration, GitHub repository setup.",
  },
  {
    title: "Website Redesign & Modernization",
    tagline: "Breathe new life into legacy websites with modern aesthetics.",
    features: [
      "Modern dark/light glassmorphic UX & curated typography",
      "Enhanced mobile usability & UX touchpoints",
      "Performance overhaul & Core Web Vitals fixes",
      "Zero downtime content migration",
    ],
    deliverables: "Full UI redesign, code overhaul, content migration, speed report.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Services"
        badge="END-TO-END DIGITAL SOLUTIONS"
        title={
          <>
            Crafting digital experiences that <span className="text-gold-grad">drive results.</span>
          </>
        }
        intro="From concept and UX design to custom web development, optimization, and ongoing maintenance. We build fast, reliable, and stunning websites."
      />

      {/* Main Services Grid */}
      <section className="section py-20">
        <div className="shell">
          <div className="mb-12">
            <Reveal>
              <span className="eyebrow">Service Catalog</span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="text-3xl font-display font-semibold text-fg mt-2">
                Core Web Engineering & Design Services
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 60}>
                <div className="card group flex h-full flex-col justify-between p-6 transition-all duration-300 hover:border-gold/50 hover:-translate-y-1">
                  <div>
                    <span className="grid size-12 place-items-center rounded-xl border border-gold/20 bg-gold/[0.08] text-gold transition-all duration-300 group-hover:border-gold/40 group-hover:bg-gold/20">
                      <s.icon className="size-6" strokeWidth={1.6} />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-fg mt-5">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {s.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-line/50">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-xs font-mono text-gold hover:underline"
                    >
                      Enquire about {s.title}
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Capabilities */}
      <section className="section py-16 bg-surface/30 border-y border-line/50">
        <div className="shell">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow">What You Get</span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="text-3xl font-display font-semibold text-fg mt-2">
                Uncompromising Quality in Every Deliverable
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceDetails.map((detail, idx) => (
              <Reveal key={detail.title} delay={idx * 80}>
                <div className="card p-8 relative overflow-hidden">
                  <div className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                      <Sparkles className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-fg">
                        {detail.title}
                      </h3>
                      <p className="text-sm text-gold/90 mt-1 font-medium">
                        {detail.tagline}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {detail.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-muted">
                        <CheckCircle2 className="size-4 text-gold shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-xs">
                    <span className="text-faint font-mono">Deliverables:</span>
                    <span className="text-fg font-medium">{detail.deliverables}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Process */}
      <Process />

      {/* CTA */}
      <FinalCTA />
    </main>
  );
}
