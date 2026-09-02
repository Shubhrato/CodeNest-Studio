import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow="Services"
          title={
            <>
              Everything your website needs,{" "}
              <span className="text-gold-grad">in one studio.</span>
            </>
          }
          intro="From first launch to full redesign — design, build and maintenance handled end to end."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 70}>
              <Link
                to="/contact"
                className="card card-hover group flex h-full flex-col gap-4 p-6"
                aria-label={`${s.title} — start a project`}
              >
                <span className="grid size-12 place-items-center rounded-xl border border-gold/20 bg-gold/[0.08] text-gold transition-all duration-300 group-hover:border-gold/40 group-hover:bg-gold/15">
                  <s.icon className="size-6" strokeWidth={1.6} />
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-fg">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-faint transition-colors duration-300 group-hover:text-gold">
                  Enquire
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
