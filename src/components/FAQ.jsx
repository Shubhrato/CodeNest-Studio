import { useState } from "react";
import { Plus } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { faqs } from "../data/faq";

function FaqItem({ item, index, open, onToggle }) {
  const btnId = `faq-btn-${index}`;
  const panelId = `faq-panel-${index}`;
  return (
    <div className="border-b border-line/60 last:border-0">
      <h3>
        <button
          id={btnId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-gold"
        >
          <span className="font-display text-base font-medium text-fg sm:text-lg">
            {item.q}
          </span>
          <Plus
            className={`size-5 shrink-0 text-gold transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-8 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Questions,{" "}
              <span className="text-gold-grad">answered.</span>
            </>
          }
          intro="The things people usually want to know before starting a project."
        />

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="card px-6 sm:px-8">
            {faqs.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                index={i}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
