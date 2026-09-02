import { useState } from "react";

// Elegant monogram shown until photo is explicitly enabled.
function Monogram() {
  return (
    <div className="grid h-full w-full place-items-center bg-[radial-gradient(130%_120%_at_30%_15%,#1b2130_0%,#0d1017_70%)]">
      <div className="grid-bg mask-fade-b absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative text-center">
        <div className="font-display text-[clamp(2.5rem,7vw,4.5rem)] font-semibold leading-none text-gold-grad">
          S
        </div>
        <div className="mt-2.5 font-mono text-[0.65rem] uppercase tracking-[0.35em] text-faint">
          Shubhrato
        </div>
      </div>
    </div>
  );
}

// Renders the portrait if showImage is true, otherwise renders the monogram.
export default function Portrait({
  src = "/shubhrato.jpg",
  alt = "Shubhrato — founder of CodeNest Studio",
  className = "",
  imgClassName = "",
  showImage = false, // Set to true whenever you want to display your photo
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!showImage || failed ? (
        <Monogram />
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover object-center ${imgClassName}`}
        />
      )}
    </div>
  );
}
