import { useMagnetic } from "../../hooks/useMagnetic";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium leading-none transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none";

const sizes = {
  sm: "text-sm px-4 py-2.5",
  md: "text-[0.95rem] px-5 py-3",
  lg: "text-base px-7 py-4",
};

const variants = {
  primary:
    "bg-gold text-ink hover:bg-gold-soft shadow-[0_12px_34px_-12px_rgba(233,180,90,0.65)] hover:shadow-[0_16px_44px_-12px_rgba(233,180,90,0.8)] hover:-translate-y-0.5",
  outline:
    "text-fg border border-line hover:border-gold/55 hover:bg-white/[0.03] hover:-translate-y-0.5",
  ghost: "text-muted hover:text-fg",
};

// Polymorphic button/link. `magnetic` adds a subtle cursor pull (desktop only).
export default function Button({
  href,
  as,
  variant = "primary",
  size = "md",
  magnetic = false,
  icon: Icon,
  full = false,
  className = "",
  children,
  ...rest
}) {
  const magRef = useMagnetic(0.22);
  const Comp = href ? "a" : as || "button";
  const props = href ? { href } : { type: rest.type || "button" };

  return (
    <Comp
      ref={magnetic ? magRef : undefined}
      className={`${base} ${sizes[size]} ${variants[variant]} ${
        full ? "w-full" : ""
      } ${className}`}
      {...props}
      {...rest}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {Icon && (
          <Icon className="size-[1.05em] transition-transform duration-300 group-hover:translate-x-0.5" />
        )}
      </span>
    </Comp>
  );
}
