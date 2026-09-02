import { MapPin, ArrowRight, ShieldCheck, HeartHandshake, Code, Award } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import Capabilities from "../components/Capabilities";
import FinalCTA from "../components/FinalCTA";
import Button from "../components/ui/Button";

const studioValues = [
  {
    icon: ShieldCheck,
    title: "Honesty & Transparency",
    desc: "No exaggerated claims, no surprise fees, and direct communication at every project milestone.",
  },
  {
    icon: Code,
    title: "Clean Code Quality",
    desc: "We write clean, efficient, standards-compliant HTML, CSS, React, and PHP code that scales effortlessly.",
  },
  {
    icon: HeartHandshake,
    title: "Client-First Collaboration",
    desc: "We build lasting relationships by listening carefully to your business goals and providing ongoing care.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About CodeNest Studio"
        badge="MEET THE STUDIO"
        title={
          <>
            Crafting purposeful digital solutions with <span className="text-gold-grad">passion & precision.</span>
          </>
        }
        intro="CodeNest Studio is a digital studio founded by Shubhrato, based in Ghaziabad, UP, India. We help businesses, professionals, and brands establish a strong, high-converting web presence."
      />

      {/* Main About Profile Section */}
      <About />

      {/* Core Studio Principles */}
      <section className="section py-20 bg-surface/30 border-y border-line/50">
        <div className="shell">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow">Our Philosophy</span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="text-3xl font-display font-semibold text-fg mt-2">
                Values That Drive Our Craft
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studioValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card p-8 text-center h-full flex flex-col items-center">
                  <span className="grid size-14 place-items-center rounded-2xl border border-gold/30 bg-gold/10 text-gold mb-6">
                    <v.icon className="size-7" />
                  </span>
                  <h3 className="font-display font-semibold text-xl text-fg mb-3">{v.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyUs />

      {/* Capabilities Overview */}
      <Capabilities />

      {/* CTA */}
      <FinalCTA />
    </main>
  );
}
