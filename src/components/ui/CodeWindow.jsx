import { useEffect, useState } from "react";
import { Code2, Eye, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";

// Authored, syntax-coloured lines.
const C = {
  kw: "text-[#8ea2ff]",
  str: "text-[#8fd6a6]",
  key: "text-[#e9b45a]",
  fn: "text-[#f2cd85]",
  pl: "text-[#c7ccd8]",
  com: "text-[#5f6472] italic",
  pun: "text-[#6b7080]",
};

const LINES = [
  [{ c: "com", t: "// what CodeNest ships" }],
  [
    { c: "kw", t: "const " },
    { c: "pl", t: "studio" },
    { c: "pun", t: " = {" },
  ],
  [
    { c: "key", t: "  name" },
    { c: "pun", t: ": " },
    { c: "str", t: '"CodeNest Studio"' },
    { c: "pun", t: "," },
  ],
  [
    { c: "key", t: "  owner" },
    { c: "pun", t: ": " },
    { c: "str", t: '"Shubhrato"' },
    { c: "pun", t: "," },
  ],
  [
    { c: "key", t: "  builds" },
    { c: "pun", t: ": [" },
    { c: "str", t: '"business"' },
    { c: "pun", t: ", " },
    { c: "str", t: '"react"' },
    { c: "pun", t: ", " },
    { c: "str", t: '"wp"' },
    { c: "pun", t: "]," },
  ],
  [
    { c: "key", t: "  focus" },
    { c: "pun", t: ": " },
    { c: "str", t: '"conversion"' },
    { c: "pun", t: "," },
  ],
  [{ c: "pun", t: "};" }],
  [{ t: " " }],
  [
    { c: "kw", t: "export default function " },
    { c: "fn", t: "Site" },
    { c: "pun", t: "() {" },
  ],
  [
    { c: "kw", t: "  return " },
    { c: "pun", t: "<" },
    { c: "fn", t: "Launch" },
    { c: "pl", t: " project" },
    { c: "pun", t: "={" },
    { c: "pl", t: "studio" },
    { c: "pun", t: "} />;" },
  ],
  [{ c: "pun", t: "}" }],
];

export default function CodeWindow({ className = "" }) {
  const [activeTab, setActiveTab] = useState("code"); // "code" | "preview" | "speed"
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [n, setN] = useState(reduced ? LINES.length : 0);

  useEffect(() => {
    if (reduced) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= LINES.length) clearInterval(id);
    }, 240);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-[#0a0c12]/90 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)] ${className}`}
    >
      {/* Window chrome & interactive tab bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line/80 bg-white/[0.02] px-3.5 py-2.5">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
          <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
          <span className="size-2.5 rounded-full bg-[#28c840]/80" />
        </div>

        {/* Interactive Tabs */}
        <div className="flex items-center gap-1 rounded-lg bg-black/40 p-1 border border-line/50">
          <button
            type="button"
            onClick={() => setActiveTab("code")}
            className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 font-mono text-[0.68rem] transition-colors ${
              activeTab === "code" ? "bg-gold/20 text-gold font-bold" : "text-muted hover:text-fg"
            }`}
          >
            <Code2 className="size-3" /> Code
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 font-mono text-[0.68rem] transition-colors ${
              activeTab === "preview" ? "bg-gold/20 text-gold font-bold" : "text-muted hover:text-fg"
            }`}
          >
            <Eye className="size-3" /> Visual
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("speed")}
            className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 font-mono text-[0.68rem] transition-colors ${
              activeTab === "speed" ? "bg-gold/20 text-gold font-bold" : "text-muted hover:text-fg"
            }`}
          >
            <Zap className="size-3" /> Speed 100
          </button>
        </div>
      </div>

      {/* Tab 1: Code Body */}
      {activeTab === "code" && (
        <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[0.74rem] leading-[1.75] sm:text-[0.8rem] min-h-[220px]">
          <code>
            {LINES.map((line, i) => (
              <div
                key={i}
                className="transition-opacity duration-200"
                style={{ opacity: i < n ? 1 : 0 }}
              >
                {line.map((tok, j) => (
                  <span key={j} className={C[tok.c] || C.pl}>
                    {tok.t}
                  </span>
                ))}
                {i === n - 1 && <span className="blink text-gold">▍</span>}
              </div>
            ))}
          </code>
        </pre>
      )}

      {/* Tab 2: Visual Live Mockup */}
      {activeTab === "preview" && (
        <div className="p-5 min-h-[220px] flex flex-col justify-between bg-surface/40">
          <div className="flex items-center justify-between border-b border-line/50 pb-3">
            <span className="font-display font-semibold text-sm text-fg">CodeNest Studio Mockup</span>
            <span className="rounded-full bg-good/15 text-good px-2.5 py-0.5 font-mono text-[0.65rem] font-bold">
              LIVE PREVIEW
            </span>
          </div>
          <div className="py-4 space-y-2">
            <div className="h-4 w-3/4 bg-gold/20 rounded-full animate-pulse" />
            <div className="h-3 w-1/2 bg-line rounded-full" />
            <div className="h-3 w-2/3 bg-line/60 rounded-full" />
          </div>
          <div className="flex items-center gap-2 pt-2 border-t border-line/40 font-mono text-[0.7rem] text-muted">
            <CheckCircle2 className="size-3.5 text-good" /> Glassmorphic UI & Ultra-Fast Rendering
          </div>
        </div>
      )}

      {/* Tab 3: 100/100 Lighthouse Performance Scores */}
      {activeTab === "speed" && (
        <div className="p-5 min-h-[220px] grid grid-cols-2 gap-3 items-center bg-black/60">
          <div className="card p-3 text-center border-good/30 bg-good/5">
            <span className="font-display text-2xl font-bold text-good">100</span>
            <p className="font-mono text-[0.65rem] text-muted uppercase mt-1">Performance</p>
          </div>
          <div className="card p-3 text-center border-gold/30 bg-gold/5">
            <span className="font-display text-2xl font-bold text-gold">100</span>
            <p className="font-mono text-[0.65rem] text-muted uppercase mt-1">Accessibility</p>
          </div>
          <div className="card p-3 text-center border-gold/30 bg-gold/5">
            <span className="font-display text-2xl font-bold text-gold">100</span>
            <p className="font-mono text-[0.65rem] text-muted uppercase mt-1">Best Practices</p>
          </div>
          <div className="card p-3 text-center border-good/30 bg-good/5">
            <span className="font-display text-2xl font-bold text-good">100</span>
            <p className="font-mono text-[0.65rem] text-muted uppercase mt-1">SEO Ranking</p>
          </div>
        </div>
      )}
    </div>
  );
}
