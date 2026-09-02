import { Link } from "react-router-dom";
import { Cpu, ShieldCheck, Zap, Code2, Globe, Server, Database, Layers } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import Technologies from "../components/Technologies";
import FinalCTA from "../components/FinalCTA";
import { devTech, platforms } from "../data/technologies";

const techCategories = [
  {
    icon: Code2,
    category: "Frontend Stack",
    description: "Modern, component-driven client technology designed for lightning-fast loads & reactive UX.",
    items: ["React.js", "Next.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3"],
  },
  {
    icon: Server,
    category: "Backend & APIs",
    description: "Robust server-side logic and custom API development for dynamic business applications.",
    items: ["Node.js", "Express.js", "PHP", "RESTful APIs", "Serverless Functions"],
  },
  {
    icon: Database,
    category: "Databases & Storage",
    description: "Secure, structured data storage and query optimization for dynamic sites.",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    icon: Globe,
    category: "CMS & Platforms",
    description: "Flexible content management solutions tailored to client update preferences.",
    items: ["WordPress", "Shopify", "Webflow", "Framer"],
  },
];

export default function TechnologiesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Technologies"
        badge="MODERN TECH STACK"
        title={
          <>
            Built with modern standards for <span className="text-gold-grad">speed & longevity.</span>
          </>
        }
        intro="We pick the right tools for your specific goals — ensuring high performance, easy scalability, and future-proof web architecture."
      />

      {/* Interactive Tech Categories */}
      <section className="section py-20">
        <div className="shell">
          <div className="mb-12">
            <Reveal>
              <span className="eyebrow">Technology Breakdown</span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="text-3xl font-display font-semibold text-fg mt-2">
                Our Core Technology Stack
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techCategories.map((cat, idx) => (
              <Reveal key={cat.category} delay={idx * 80}>
                <div className="card p-8 group transition-all duration-300 hover:border-gold/50">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="grid size-12 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                      <cat.icon className="size-6" />
                    </span>
                    <h3 className="text-xl font-display font-semibold text-fg">
                      {cat.category}
                    </h3>
                  </div>
                  <p className="text-sm text-muted mb-6 leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-line/50">
                    {cat.items.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-gold/20 bg-gold/[0.06] px-3 py-1.5 font-mono text-xs text-gold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Technologies Platform Comparison */}
      <Technologies />

      {/* Engineering Standards */}
      <section className="section py-16 bg-surface/30 border-y border-line/50">
        <div className="shell">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow">Quality Standards</span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="text-3xl font-display font-semibold text-fg mt-2">
                Why Our Code Outperforms
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0}>
              <div className="card p-6 text-center">
                <div className="mx-auto grid size-12 place-items-center rounded-xl bg-gold/10 text-gold mb-4">
                  <Zap className="size-6" />
                </div>
                <h3 className="font-display font-semibold text-fg text-lg">90+ Lighthouse Speed</h3>
                <p className="text-sm text-muted mt-2">
                  Optimized assets, minimal bundle sizes, and clean CSS ensure instant page loads.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card p-6 text-center">
                <div className="mx-auto grid size-12 place-items-center rounded-xl bg-gold/10 text-gold mb-4">
                  <ShieldCheck className="size-6" />
                </div>
                <h3 className="font-display font-semibold text-fg text-lg">SEO & Mobile First</h3>
                <p className="text-sm text-muted mt-2">
                  Built to rank high on Google with semantic HTML5 tags and fully fluid responsive grids.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="card p-6 text-center">
                <div className="mx-auto grid size-12 place-items-center rounded-xl bg-gold/10 text-gold mb-4">
                  <Cpu className="size-6" />
                </div>
                <h3 className="font-display font-semibold text-fg text-lg">Clean Architecture</h3>
                <p className="text-sm text-muted mt-2">
                  Maintainable, self-documenting code built according to modern web development standards.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <FinalCTA />
    </main>
  );
}
