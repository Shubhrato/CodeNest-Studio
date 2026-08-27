import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { capabilities } from "../data/capabilities";

export default function Capabilities() {
  return (
    <section id="capabilities" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow="Capabilities"
          title={
            <>
              One studio,{" "}
              <span className="text-gold-grad">a lot of ground covered.</span>
            </>
          }
          intro="Whatever stage you're at, there's a way to build it well."
        />

        <div className="mt-14 grid grid-flow-dense auto-rows-fr grid-cols-2 gap-3 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal
              key={c.title}
              delay={(i % 4) * 60}
              className={`h-full ${c.span === 2 ? "col-span-2" : ""}`}
            >
              <div
                className={`card card-hover group relative h-full overflow-hidden p-5 ${
                  c.span === 2 ? "sm:p-6" : ""
                }`}
              >
                {c.span === 2 && (
                  <div
                    aria-hidden="true"
                    className="absolute -right-8 -top-8 size-28 rounded-full blur-2xl"
                    style={{
                      background: "radial-gradient(circle, rgba(233,180,90,0.14), transparent 70%)",
                    }}
                  />
                )}
                <div className="relative flex h-full flex-col">
                  <span className="grid size-11 place-items-center rounded-xl border border-gold/15 bg-gold/[0.07] text-gold transition-colors duration-300 group-hover:bg-gold/15">
                    <c.icon className="size-5" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-fg">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Button href="#contact" variant="outline" icon={ArrowUpRight}>
            Don't see your project? Ask anyway
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
