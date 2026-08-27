import Portrait from "./Portrait";
import CodeWindow from "./CodeWindow";
import { LogoMark } from "./Logo";

function Badge({ dot, label, className = "", style }) {
  return (
    <div
      className={`glass absolute z-20 hidden items-center gap-2 rounded-full px-3.5 py-2 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.9)] sm:flex ${className}`}
      style={style}
    >
      <span
        className="size-2 rounded-full"
        style={{ background: dot, boxShadow: `0 0 10px ${dot}` }}
      />
      <span className="font-mono text-xs text-fg/90">{label}</span>
    </div>
  );
}

// Hero showcase: profile identity + live code, framed in the nest motif,
// with floating platform badges. Decorative — labelled aria-hidden.
export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[460px] lg:max-w-[520px]">
      {/* nested-frame "nest" motif + glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-3 -z-10 rounded-[2rem] border border-gold/12"
      />
      <div
        aria-hidden="true"
        className="absolute -inset-7 -z-20 rounded-[2.5rem] border border-white/[0.04]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-6 -z-10 rounded-[2rem] blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 60% 30%, rgba(233,180,90,0.16), transparent 65%)",
        }}
      />

      {/* main glass card */}
      <div className="glass relative rounded-[1.6rem] p-5 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)] sm:p-6">
        <div className="flex items-center gap-4">
          <Portrait className="size-16 shrink-0 rounded-2xl border border-gold/25 shadow-inner sm:size-[76px]" />
          <div className="min-w-0">
            <p className="font-display text-lg font-semibold text-fg">Shubhrato</p>
            <p className="truncate text-sm text-muted">
              Web Developer &amp; Digital Solutions
            </p>
            <p className="mt-1.5 inline-flex items-center gap-1.5 font-mono text-[0.68rem] text-good">
              <span className="pulse-dot inline-block size-1.5 rounded-full bg-good" />
              Available for new projects
            </p>
          </div>
          <div className="ml-auto hidden self-start sm:block">
            <LogoMark className="size-9" />
          </div>
        </div>

        <div className="rule my-5" />

        <CodeWindow />
      </div>

      {/* floating platform badges */}
      <Badge
        dot="#61dafb"
        label="React"
        className="animate-floaty -right-3 -top-3 lg:-right-6"
        style={{ animationDelay: "-1s" }}
      />
      <Badge
        dot="#e6edf3"
        label="Next.js"
        className="animate-floaty-slow -left-4 top-[38%] lg:-left-8"
      />
      <Badge
        dot="#3ddc84"
        label="WordPress"
        className="animate-floaty -bottom-3 right-10"
        style={{ animationDelay: "-3s" }}
      />
    </div>
  );
}
