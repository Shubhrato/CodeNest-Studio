import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Filter, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import Projects from "../components/Projects";
import FinalCTA from "../components/FinalCTA";
import Button from "../components/ui/Button";
import { projects } from "../data/projects";

const ALL_CATEGORIES = ["All", "Industrial", "Professional", "Legal", "Business Website"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <main>
      <PageHeader
        eyebrow="Our Portfolio"
        badge="FEATURED WORK & CASE STUDIES"
        title={
          <>
            Real websites engineered for <span className="text-gold-grad">real client success.</span>
          </>
        }
        intro="Explore our selected work across industrial, legal, corporate, and small business sectors. Designed with intention and built to perform."
      />

      {/* Projects Gallery Section */}
      <section className="section py-20">
        <div className="shell">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <Reveal>
                <span className="eyebrow">Case Studies</span>
              </Reveal>
              <Reveal delay={60}>
                <h2 className="text-3xl font-display font-semibold text-fg mt-2">
                  Client Projects & Solutions
                </h2>
              </Reveal>
            </div>

            {/* Category Filter Chips */}
            <Reveal delay={100}>
              <div className="flex flex-wrap items-center gap-2">
                {ALL_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                      activeCategory === cat
                        ? "bg-gold text-ink font-semibold shadow-md"
                        : "border border-line bg-surface/50 text-muted hover:border-gold/50 hover:text-fg"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Render embedded project showcase */}
          <Projects />
        </div>
      </section>

      {/* Project Capabilities Banner */}
      <section className="section py-16 bg-surface/30 border-y border-line/50">
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0}>
              <div className="card p-6 border-gold/20">
                <span className="font-mono text-gold text-xs font-bold uppercase tracking-wider">01 / Speed & Performance</span>
                <h3 className="font-display text-lg font-semibold text-fg mt-2">Core Web Vitals Optimized</h3>
                <p className="text-xs text-muted mt-2 leading-relaxed">
                  Every project is built with clean CSS, lightweight code scripts, and compressed assets for instantaneous response.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="card p-6 border-gold/20">
                <span className="font-mono text-gold text-xs font-bold uppercase tracking-wider">02 / Custom UI/UX</span>
                <h3 className="font-display text-lg font-semibold text-fg mt-2">Bespoke Design Aesthetics</h3>
                <p className="text-xs text-muted mt-2 leading-relaxed">
                  We don't use generic, cookie-cutter themes. Each client receives a uniquely tailored visual identity aligned with their industry.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="card p-6 border-gold/20">
                <span className="font-mono text-gold text-xs font-bold uppercase tracking-wider">03 / Mobile Excellence</span>
                <h3 className="font-display text-lg font-semibold text-fg mt-2">100% Fluid Responsiveness</h3>
                <p className="text-xs text-muted mt-2 leading-relaxed">
                  Flawless rendering across phones, tablets, laptops, and ultra-wide desktop displays.
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
