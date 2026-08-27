// The CodeNest mark: a "nest" formed by nested brackets around an egg —
// echoing the { } bracket motif used throughout the site.
export function LogoMark({ className = "size-9" }) {
  return (
    <span
      className={`grid place-items-center rounded-[0.7rem] border border-gold/25 bg-gradient-to-b from-panel to-ink-2 ${className}`}
    >
      <svg
        viewBox="0 0 32 32"
        className="size-[64%]"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12.5 6C7.8 8.2 5.5 11.7 5.5 16s2.3 7.8 7 10"
          stroke="var(--color-gold)"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path
          d="M19.5 6c4.7 2.2 7 5.7 7 10s-2.3 7.8-7 10"
          stroke="var(--color-gold-soft)"
          strokeWidth="2.1"
          strokeLinecap="round"
          opacity="0.8"
        />
        <circle cx="16" cy="16" r="3.1" fill="var(--color-gold)" />
      </svg>
    </span>
  );
}

export default function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="font-display text-[1.15rem] font-semibold tracking-tight text-fg">
        Code<span className="text-gold-grad">Nest</span>
        <span className="ml-1 font-mono text-[0.62rem] font-normal uppercase tracking-[0.2em] text-faint align-[0.18em]">
          Studio
        </span>
      </span>
    </span>
  );
}
