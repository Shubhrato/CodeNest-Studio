// A stylized, on-brand browser mockup for a project. It is intentionally an
// abstract representation (not a fabricated screenshot). If a real screenshot
// is added to the project as `image`, it is shown instead.
export default function ProjectPreview({ project, className = "" }) {
  const { theme, domain, image, title } = project;
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-[#0a0c12] ${className}`}
    >
      {/* chrome */}
      <div className="flex items-center gap-2 border-b border-line/80 bg-white/[0.02] px-3 py-2">
        <span className="size-2 rounded-full bg-[#ff5f57]/70" />
        <span className="size-2 rounded-full bg-[#febc2e]/70" />
        <span className="size-2 rounded-full bg-[#28c840]/70" />
        <span className="mx-auto max-w-[70%] truncate rounded-md bg-white/[0.04] px-3 py-0.5 font-mono text-[0.62rem] text-faint">
          {domain}
        </span>
      </div>

      {/* body */}
      {image ? (
        <img
          src={image}
          alt={`${title} website preview`}
          loading="lazy"
          decoding="async"
          className="aspect-[16/11] w-full object-cover object-top"
        />
      ) : (
        <div
          className="relative aspect-[16/11] w-full overflow-hidden p-4"
          style={{ background: theme.base }}
          aria-hidden="true"
        >
          <div
            className="absolute -right-10 -top-10 size-40 rounded-full blur-2xl"
            style={{ background: `${theme.accent}33` }}
          />
          {/* mini nav */}
          <div className="relative flex items-center gap-2">
            <span className="size-3 rounded-md" style={{ background: theme.accent }} />
            <span className="h-1.5 w-10 rounded-full bg-white/15" />
            <div className="ml-auto flex gap-2">
              {[0, 1, 2].map((k) => (
                <span key={k} className="h-1.5 w-6 rounded-full bg-white/10" />
              ))}
            </div>
          </div>
          {/* hero */}
          <div className="relative mt-5 space-y-2">
            <div className="h-3.5 w-3/5 rounded" style={{ background: `${theme.accent}cc` }} />
            <div className="h-3.5 w-2/5 rounded bg-white/25" />
            <div className="mt-2 h-1.5 w-4/5 rounded-full bg-white/10" />
            <div className="h-1.5 w-3/5 rounded-full bg-white/10" />
            <span
              className="mt-3 inline-block h-5 w-20 rounded-md"
              style={{ background: theme.accent2 }}
            />
          </div>
          {/* cards */}
          <div className="relative mt-5 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((k) => (
              <div
                key={k}
                className="h-12 rounded-lg border border-white/10 bg-white/[0.03]"
                style={{ borderTop: `2px solid ${theme.accent}66` }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
