import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { reasons } from "../data/whyus";

export default function WhyUs() {
  return (
    <section id="why" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow="Why CodeNest Studio"
          title={
            <>
              A studio that thinks like a{" "}
              <span className="text-gold-grad">business partner.</span>
            </>
          }
          intro="No jargon, no bloat — just modern websites built around your goals, and someone who picks up the phone."
        />

        <Reveal className="mt-14">
          <div className="card overflow-hidden p-0">
            {/* gap-px over a line-colored bg renders crisp hairline separators */}
            <div className="grid gap-px bg-line/60 sm:grid-cols-2 lg:grid-cols-2">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="group flex items-start gap-4 bg-panel p-5 transition-colors duration-300 hover:bg-panel-2 sm:p-6"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-gold/15 bg-gold/[0.07] text-gold transition-colors duration-300 group-hover:bg-gold/15">
                    <r.icon className="size-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-fg">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
