import { useState } from "react";
import { Calculator, Check, ArrowRight, Sparkles } from "lucide-react";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import WhatsAppButton from "./ui/WhatsAppButton";

const SITE_TYPES = [
  { id: "business", name: "Business Website", base: 14999 },
  { id: "landing", name: "Landing Page", base: 9999 },
  { id: "ecommerce", name: "E-Commerce Store", base: 24999 },
  { id: "react", name: "Custom React / Next.js App", base: 34999 },
];

const PAGE_RANGES = [
  { id: "1-3", label: "1 to 3 Pages", multiplier: 1 },
  { id: "4-7", label: "4 to 7 Pages", multiplier: 1.35 },
  { id: "8-12", label: "8 to 12 Pages", multiplier: 1.7 },
  { id: "12+", label: "12+ Pages / Scale", multiplier: 2.2 },
];

const ADDONS = [
  { id: "seo", name: "Advanced On-Page SEO", price: 3999 },
  { id: "whatsapp", name: "WhatsApp & Live Chat Deep Links", price: 1499 },
  { id: "speed", name: "90+ Google Speed Guarantee", price: 2999 },
  { id: "cms", name: "Admin Content Manager (CMS)", price: 4999 },
];

export default function CostCalculator() {
  const [selectedType, setSelectedType] = useState(SITE_TYPES[0]);
  const [selectedPages, setSelectedPages] = useState(PAGE_RANGES[0]);
  const [selectedAddons, setSelectedAddons] = useState([ADDONS[0].id, ADDONS[1].id]);

  const toggleAddon = (id) => {
    setSelectedAddons((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  // Calculate estimated total
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = ADDONS.find((a) => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const rawTotal = Math.round(selectedType.base * selectedPages.multiplier + addonsTotal);
  const minPrice = Math.round(rawTotal * 0.95);
  const maxPrice = Math.round(rawTotal * 1.1);

  const formattedMin = `₹${minPrice.toLocaleString("en-IN")}`;
  const formattedMax = `₹${maxPrice.toLocaleString("en-IN")}`;

  const addonNames = selectedAddons
    .map((id) => ADDONS.find((a) => a.id === id)?.name)
    .filter(Boolean)
    .join(", ");

  const waMessage = `Hi Shubhrato, I calculated a website estimate on CodeNest Studio:\n\n• Type: ${selectedType.name}\n• Pages: ${selectedPages.label}\n• Addons: ${addonNames || "None"}\n• Estimated Cost: ${formattedMin} – ${formattedMax}\n\nI'd like to get a final confirmation quote.`;

  return (
    <section id="estimator" className="section py-20">
      <div className="shell">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal>
            <span className="eyebrow">Instant Quote Estimator</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-fg mt-2">
              Calculate your website estimate in seconds.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-muted text-base mt-3">
              Select your project parameters below to get an instant, transparent development estimate.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-8 items-start max-w-5xl mx-auto">
          {/* Controls Panel */}
          <Reveal delay={80}>
            <div className="card p-6 sm:p-8 flex flex-col gap-8">
              {/* 1. Website Type */}
              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-gold mb-3 font-semibold">
                  1. Select Website Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SITE_TYPES.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`rounded-xl border p-4 text-left transition-all duration-300 ${
                        selectedType.id === type.id
                          ? "border-gold bg-gold/12 text-fg shadow-sm"
                          : "border-line bg-surface/50 text-muted hover:border-gold/40 hover:text-fg"
                      }`}
                    >
                      <p className="font-display font-semibold text-sm">{type.name}</p>
                      <p className="font-mono text-xs text-faint mt-1">Starting ₹{type.base.toLocaleString("en-IN")}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Number of Pages */}
              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-gold mb-3 font-semibold">
                  2. Number of Pages / Scope
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {PAGE_RANGES.map((page) => (
                    <button
                      key={page.id}
                      type="button"
                      onClick={() => setSelectedPages(page)}
                      className={`rounded-lg border py-3 px-2 text-center text-xs font-mono transition-all duration-300 ${
                        selectedPages.id === page.id
                          ? "border-gold bg-gold/15 text-gold font-bold"
                          : "border-line text-muted hover:border-gold/30 hover:text-fg"
                      }`}
                    >
                      {page.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Optional Features */}
              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-gold mb-3 font-semibold">
                  3. Select Add-on Features
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ADDONS.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => toggleAddon(addon.id)}
                        className={`flex items-center justify-between rounded-xl border p-3.5 text-left text-xs transition-all duration-300 ${
                          isChecked
                            ? "border-gold/60 bg-gold/10 text-fg"
                            : "border-line text-muted hover:border-gold/30 hover:text-fg"
                        }`}
                      >
                        <span className="flex items-center gap-2 font-medium">
                          <span className={`grid size-4 place-items-center rounded border ${isChecked ? "border-gold bg-gold text-ink" : "border-line"}`}>
                            {isChecked && <Check className="size-3" />}
                          </span>
                          {addon.name}
                        </span>
                        <span className="font-mono text-faint shrink-0">+₹{addon.price}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Results Summary Box */}
          <Reveal delay={160} className="sticky top-24">
            <div className="card p-8 border-gold/40 bg-gradient-to-b from-surface via-surface to-gold/10 shadow-[0_30px_70px_-30px_rgba(233,180,90,0.2)]">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-xs text-gold">
                <Calculator className="size-3.5" /> Estimated Total Range
              </span>

              <div className="mt-6">
                <p className="text-xs text-muted font-mono uppercase tracking-wider">Estimated Project Investment</p>
                <h3 className="text-3xl sm:text-4xl font-display font-bold text-gold mt-1 tabnum">
                  {formattedMin} – {formattedMax}
                </h3>
                <p className="text-xs text-faint mt-2">
                  *Final quote confirmed after brief scope discussion. No hidden extra charges.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-line/60 space-y-2 text-xs text-muted">
                <div className="flex justify-between">
                  <span>Scope:</span>
                  <span className="text-fg font-medium">{selectedType.name} ({selectedPages.label})</span>
                </div>
                <div className="flex justify-between">
                  <span>Included Addons:</span>
                  <span className="text-gold font-medium">{selectedAddons.length} Selected</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <WhatsAppButton label="Send Estimate on WhatsApp" message={waMessage} full size="lg" />
                <Button href="/contact" variant="outline" full icon={ArrowRight}>
                  Request Formal Quote
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
