import Reveal from "./Reveal";

// Consistent section heading: bracketed mono eyebrow + display title + intro.
export default function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "center",
  className = "",
}) {
  const centered = align === "center";
  return (
    <div
      className={`flex flex-col gap-4 ${
        centered ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={70}>
        <h2 className="text-balance text-3xl leading-[1.06] sm:text-4xl md:text-[2.85rem]">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={130}>
          <p
            className={`text-pretty text-base leading-relaxed text-muted sm:text-lg ${
              centered ? "max-w-xl" : "max-w-2xl"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
