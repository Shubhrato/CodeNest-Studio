import { MapPin, ArrowRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import WhatsAppButton from "./ui/WhatsAppButton";
import Portrait from "./ui/Portrait";

const stack = [
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "PHP",
  "MySQL",
  "WordPress",
  "Tailwind CSS",
];

const focus = [
  "Clean, considered design",
  "Practical functionality",
  "A strong focus on business goals",
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Portrait */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[2rem] border border-gold/12"
            />
            <div
              aria-hidden="true"
              className="absolute inset-4 -z-10 rounded-[2rem] blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 40% 30%, rgba(233,180,90,0.16), transparent 65%)",
              }}
            />
            <Portrait
              className="aspect-[4/5] rounded-[1.6rem] border border-gold/25"
              imgClassName="rounded-[1.6rem]"
            />
            <div className="glass absolute -bottom-4 left-4 flex items-center gap-2 rounded-full px-4 py-2 sm:left-6">
              <MapPin className="size-4 text-gold" />
              <span className="font-mono text-xs text-fg/90">Ghaziabad, India</span>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow">About Shubhrato</span>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl">
              The developer behind{" "}
              <span className="text-gold-grad">CodeNest Studio.</span>
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
              <p>
                I'm Shubhrato — I build modern websites that combine clean design, practical
                functionality and a strong focus on business goals.
              </p>
              <p>
                From business websites and landing pages to React applications, WordPress solutions
                and custom PHP/MySQL projects, I help businesses create a professional digital
                presence without unnecessary complexity.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <ul className="mt-6 flex flex-col gap-2">
              {focus.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-fg/90">
                  <span className="size-1.5 rounded-full bg-gold" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" icon={ArrowRight} magnetic>
                Let's Build Something
              </Button>
              <WhatsAppButton />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
