import { useState } from "react";
import { ExternalLink, ArrowUpRight, Eye } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import ProjectPreview from "./ui/ProjectPreview";
import ProjectModal from "./ui/ProjectModal";
import { projects } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow="Featured Projects"
          title={
            <>
              Recent work,{" "}
              <span className="text-gold-grad">built to perform.</span>
            </>
          }
          intro="A look at websites delivered for real businesses. New projects are added here as they launch."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <article className="card card-hover group h-full p-3 sm:p-4">
                <button
                  type="button"
                  onClick={() => setActive(p)}
                  aria-label={`View the ${p.title} case study`}
                  className="relative block w-full overflow-hidden rounded-xl"
                >
                  <ProjectPreview
                    project={p}
                    className="transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                  />
                  {/* hover overlay + CTA */}
                  <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/85 via-ink/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="mb-1 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-medium text-ink">
                      <Eye className="size-4" />
                      View case study
                    </span>
                  </div>
                </button>

                <div className="p-3 sm:p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-xs text-gold">Project {p.index}</p>
                      <h3 className="mt-1 font-display text-xl font-semibold text-fg transition-transform duration-300 group-hover:translate-x-1">
                        {p.title}
                      </h3>
                    </div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${p.title} live site`}
                      className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors hover:border-gold/50 hover:text-gold"
                    >
                      <ArrowUpRight className="size-4" />
                    </a>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.categories.map((c) => (
                      <span key={c} className="chip">{c}</span>
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted">{p.summary}</p>

                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setActive(p)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-gold"
                    >
                      <Eye className="size-4" />
                      View case study
                    </button>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-faint transition-colors hover:text-gold"
                    >
                      {p.domain}
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
