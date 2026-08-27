import { ArrowRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import WhatsAppButton from "./ui/WhatsAppButton";

export default function FinalCTA() {
  return (
    <section className="section pb-0">
      <div className="shell">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[1.8rem] px-6 py-14 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-24 mx-auto h-56 w-2/3 rounded-full blur-3xl"
              style={{
                background: "radial-gradient(circle, rgba(233,180,90,0.2), transparent 65%)",
              }}
            />
            <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-30" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance font-display text-3xl font-semibold leading-[1.08] sm:text-5xl">
                Your business deserves a{" "}
                <span className="text-gold-grad">better website.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-pretty text-base text-muted sm:text-lg">
                Let's build something fast, modern and designed around your goals.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Button href="#contact" size="lg" icon={ArrowRight} magnetic>
                  Start Your Project
                </Button>
                <WhatsAppButton />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
