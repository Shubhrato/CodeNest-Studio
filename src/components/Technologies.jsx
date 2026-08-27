import { Info } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { devTech, platforms } from "../data/technologies";

function TechStrip() {
  const Group = ({ hidden }) => (
    <div className="flex shrink-0 items-center gap-3 pr-3" aria-hidden={hidden}>
      {devTech.map((t) => (
        <span key={t} className="chip">
          <span className="size-1.5 rounded-full bg-gold/70" />
          {t}
        </span>
      ))}
    </div>
  );
  return (
    <div className="mask-fade-x mt-12 overflow-hidden py-1">
      <div className="animate-marquee flex w-max">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}

const complexityTone = {
  Low: "text-good",
  "Low–Medium": "text-good",
  Medium: "text-gold",
  "Medium–High": "text-gold-soft",
  High: "text-[#f2a072]",
};

export default function Technologies() {
  return (
    <section id="technologies" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow="Technologies & Platforms"
          title={
            <>
              The right tool for the job —{" "}
              <span className="text-gold-grad">priced honestly.</span>
            </>
          }
          intro="Built with modern code or on the platform that fits you best. Ranges below are development (build) cost only."
        />

        <TechStrip />

        {/* Desktop table */}
        <Reveal className="mt-10 hidden md:block">
          <div className="card overflow-hidden p-0">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Platform development cost ranges. CodeNest startup range is
                roughly 40% below typical market development cost.
              </caption>
              <thead>
                <tr className="border-b border-line font-mono text-[0.68rem] uppercase tracking-[0.15em] text-faint">
                  <th scope="col" className="px-5 py-4 font-medium">Platform</th>
                  <th scope="col" className="px-5 py-4 font-medium">Best for</th>
                  <th scope="col" className="px-5 py-4 font-medium">Typical dev range</th>
                  <th scope="col" className="px-5 py-4 font-medium text-gold">
                    CodeNest startup range
                  </th>
                  <th scope="col" className="px-5 py-4 font-medium">Complexity</th>
                </tr>
              </thead>
              <tbody>
                {platforms.map((p) => (
                  <tr
                    key={p.name}
                    className="border-b border-line/60 transition-colors last:border-0 hover:bg-white/[0.02]"
                  >
                    <th scope="row" className="px-5 py-4 font-display text-base font-semibold text-fg">
                      {p.name}
                    </th>
                    <td className="px-5 py-4 text-sm text-muted">{p.bestFor}</td>
                    <td className="px-5 py-4 font-mono text-sm text-muted tabnum">
                      {p.typical}
                    </td>
                    <td className="px-5 py-4">
                      <span className="inline-block rounded-md bg-gold/[0.1] px-2.5 py-1 font-mono text-sm font-medium text-gold tabnum">
                        {p.codenest}
                      </span>
                    </td>
                    <td className={`px-5 py-4 font-mono text-xs ${complexityTone[p.complexity] || "text-muted"}`}>
                      {p.complexity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Mobile cards */}
        <div className="mt-8 grid gap-3 md:hidden">
          {platforms.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 60}>
              <div className="card p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-fg">{p.name}</h3>
                  <span className={`font-mono text-xs ${complexityTone[p.complexity] || "text-muted"}`}>
                    {p.complexity}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-muted">{p.bestFor}</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line/60 pt-4">
                  <div>
                    <p className="font-mono text-[0.62rem] uppercase tracking-widest text-faint">Typical</p>
                    <p className="font-mono text-sm text-muted tabnum">{p.typical}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[0.62rem] uppercase tracking-widest text-gold/70">CodeNest</p>
                    <p className="font-mono text-sm font-medium text-gold tabnum">{p.codenest}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Honest-pricing disclaimer */}
        <Reveal className="mt-6">
          <div className="glass flex items-start gap-3 rounded-xl p-4 text-sm text-muted">
            <Info className="mt-0.5 size-4 shrink-0 text-gold" />
            <p>
              Figures are <span className="text-fg">website development cost</span> only. Platform
              subscriptions, hosting, domains and third-party/paid integrations are billed
              separately. Final pricing depends on pages, features, integrations, content and
              functionality — the CodeNest startup range reflects roughly 40% below typical market
              development cost, depending on scope.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
