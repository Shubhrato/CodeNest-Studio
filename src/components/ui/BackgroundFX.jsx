// Fixed ambient layer: fine engineering grid + two soft brand glows + noise.
// Sits behind all content and is inert to pointers / screen readers.
export default function BackgroundFX() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="grid-bg mask-fade-b absolute inset-0 opacity-[0.55]" />

      <div
        className="animate-drift absolute -top-48 left-1/2 h-[62vh] w-[85vw] -translate-x-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(233,180,90,0.13), transparent 62%)",
        }}
      />
      <div
        className="animate-drift absolute top-[35%] -right-52 h-[52vh] w-[48vw] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(110,123,242,0.12), transparent 62%)",
          animationDelay: "-7s",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
