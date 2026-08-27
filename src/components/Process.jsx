import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { process } from "../data/process";

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow="Process"
          title={
            <>
              How we build{" "}
              <span className="text-gold-grad">your website.</span>
            </>
          }
          intro="A clear, five-step path from first conversation to a live site you can rely on."
        />

        <ol className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((s, i) => (
            <Reveal as="li" key={s.step} delay={i * 80} className="relative">
              {/* connective track: dot + segment (reads as a timeline on lg) */}
              <div className="flex items-center gap-3">
                <span className="grid size-3 shrink-0 place-items-center rounded-full bg-gold shadow-[0_0_0_4px_rgba(233,180,90,0.14)]" />
                <span className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
              </div>

              <div className="mt-5">
                <span className="font-display text-5xl font-semibold leading-none text-gold/25">
                  {s.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-fg">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
