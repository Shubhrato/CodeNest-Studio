import { useEffect, useState } from "react";

// Authored, syntax-coloured lines (safe — no dangerouslySetInnerHTML).
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
  [{ t: " " }],
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
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-line/80 bg-white/[0.02] px-3.5 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="size-2.5 rounded-full bg-[#28c840]/80" />
        <span className="ml-2 rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[0.68rem] text-faint">
          Site.jsx
        </span>
        <span className="ml-auto font-mono text-[0.62rem] uppercase tracking-widest text-[#8ea2ff]/70">
          React
        </span>
      </div>
      {/* Code body — full height reserved to avoid layout shift while typing */}
      <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[0.74rem] leading-[1.75] sm:text-[0.8rem]">
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
    </div>
  );
}
