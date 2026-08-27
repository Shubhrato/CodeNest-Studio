import { useEffect, useRef } from "react";
import { X, ExternalLink, Check } from "lucide-react";
import ProjectPreview from "./ProjectPreview";
import Button from "./Button";
import WhatsAppButton from "./WhatsAppButton";

// Accessible case-study dialog. Esc / backdrop close, scroll lock, focus
// moved in on open and restored to the trigger on close.
export default function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const open = Boolean(project);

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const nodes = panelRef.current?.querySelectorAll(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        if (!nodes || !nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      if (prevFocus instanceof HTMLElement) prevFocus.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-end sm:place-items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        className="modal-in glass relative max-h-[92vh] w-full overflow-y-auto rounded-t-3xl border-line/70 p-6 sm:max-w-2xl sm:rounded-3xl sm:p-8"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          className="absolute right-5 top-5 grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-gold/50 hover:text-fg"
        >
          <X className="size-4" />
        </button>

        <p className="font-mono text-xs text-gold">Case Study — {project.index}</p>
        <h3 id="project-modal-title" className="mt-2 font-display text-2xl font-semibold text-fg">
          {project.title}
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.categories.map((c) => (
            <span key={c} className="chip">{c}</span>
          ))}
        </div>

        <ProjectPreview project={project} className="mt-6 shadow-2xl" />

        <div className="mt-6">
          <h4 className="font-mono text-[0.7rem] uppercase tracking-widest text-faint">Overview</h4>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{project.overview}</p>
        </div>

        <div className="mt-5">
          <h4 className="font-mono text-[0.7rem] uppercase tracking-widest text-faint">Highlights</h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-muted">
                <Check className="mt-0.5 size-4 shrink-0 text-gold/80" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            icon={ExternalLink}
          >
            Visit live site
          </Button>
          <WhatsAppButton
            label="Discuss a similar project"
            message={`Hi Shubhrato, I saw the ${project.title} project on CodeNest Studio and would like something similar.`}
          />
        </div>
      </div>
    </div>
  );
}
