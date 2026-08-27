import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
  Pencil,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import WhatsAppButton from "./ui/WhatsAppButton";
import { site, mailtoLink } from "../data/site";

const NEEDS = [
  "Business Website",
  "Portfolio",
  "Landing Page",
  "React Website",
  "WordPress Website",
  "PHP/MySQL Website",
  "E-commerce",
  "Website Redesign",
  "Maintenance",
  "Other",
];

const BUDGETS = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000+",
  "Not sure",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emptyForm = {
  need: "",
  budget: "",
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

function ChipGroup({ legend, options, value, onSelect, error, describedBy }) {
  return (
    <fieldset aria-describedby={describedBy}>
      <legend className="mb-2.5 block text-sm text-muted">
        {legend} <span className="text-gold">*</span>
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const selected = value === opt;
          return (
            <button
              key={opt}
              type="button"
              aria-pressed={selected}
              onClick={() => onSelect(opt)}
              className={`rounded-full border px-3.5 py-2 text-sm transition-all duration-200 ${
                selected
                  ? "border-gold/60 bg-gold/12 text-gold"
                  : "border-line text-muted hover:border-gold/40 hover:text-fg"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {error && (
        <p id={describedBy} className="mt-2 text-xs text-[#f2a072]">
          {error}
        </p>
      )}
    </fieldset>
  );
}

function Field({ label, name, type = "text", required, value, onChange, error, ...rest }) {
  const errId = error ? `${name}-error` : undefined;
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm text-muted">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={errId}
        className="w-full rounded-xl border border-line bg-ink-2/60 px-4 py-3 text-fg outline-none transition-colors placeholder:text-faint focus:border-gold/50 focus:bg-ink-2"
        {...rest}
      />
      {error && (
        <p id={errId} className="mt-1 text-xs text-[#f2a072]">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => {
    const val = e?.target ? e.target.value : e;
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const validate = () => {
    const next = {};
    if (!form.need) next.need = "Please choose what you need.";
    if (!form.budget) next.budget = "Please pick a budget range.";
    if (!form.name.trim()) next.name = "Your name helps me address you.";
    if (!form.email.trim()) next.email = "An email is needed to reply.";
    else if (!EMAIL_RE.test(form.email.trim())) next.email = "That email doesn't look right.";
    if (form.message.trim().length < 10)
      next.message = "A sentence or two about the project helps.";
    return next;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  // Build ready-to-send channel messages from the enquiry.
  const summaryLines = [
    `• Project: ${form.need}`,
    `• Budget: ${form.budget}`,
    `• Name: ${form.name}`,
    form.company && `• Business: ${form.company}`,
    form.phone && `• Phone: ${form.phone}`,
    form.email && `• Email: ${form.email}`,
  ].filter(Boolean);

  const waMessage = `Hi Shubhrato, I'd like to discuss a website project.\n\n${summaryLines.join(
    "\n"
  )}\n\nAbout the project:\n${form.message}`;

  const emailHref = mailtoLink({
    subject: `Project enquiry — ${form.need}${form.name ? ` (${form.name})` : ""}`,
    body: `Hi Shubhrato,\n\n${summaryLines.join("\n")}\n\nAbout the project:\n${form.message}\n\nThanks,\n${form.name}`,
  });

  return (
    <section id="contact" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Have a project in mind?{" "}
              <span className="text-gold-grad">Let's build it.</span>
            </>
          }
          intro="Tell me what you need, and let's figure out the best way to turn your idea into a professional website."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Direct methods */}
          <div className="flex flex-col gap-4">
            <Reveal>
              <div className="card p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-faint">
                  Prefer to talk now?
                </p>
                <p className="mt-2 text-sm text-muted">
                  Message me directly — I read every enquiry personally.
                </p>
                <div className="mt-4">
                  <WhatsAppButton full />
                </div>
              </div>
            </Reveal>

            <Reveal delay={70}>
              <a href={mailtoLink()} className="card card-hover group flex items-center gap-4 p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-gold/20 bg-gold/[0.08] text-gold">
                  <Mail className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-muted">Email</p>
                  <p className="truncate font-medium text-fg group-hover:text-gold">
                    {site.email}
                  </p>
                </div>
                <ArrowRight className="ml-auto size-4 text-faint transition-transform group-hover:translate-x-1 group-hover:text-gold" />
              </a>
            </Reveal>

            <Reveal delay={140}>
              <div className="card flex items-center gap-4 p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-white/[0.03] text-gold">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-muted">Based in</p>
                  <p className="font-medium text-fg">{site.locationRegion}, India</p>
                  <p className="mt-0.5 text-xs text-faint">Working with clients anywhere.</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Enquiry form */}
          <Reveal delay={80}>
            <div className="card p-6 sm:p-8">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="grid size-16 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                    <CheckCircle2 className="size-8" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-fg">
                    Ready to send, {form.name.split(" ")[0] || "there"}!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted">
                    Your project details are filled in below — pick how you'd like to reach me and
                    it'll open pre-written.
                  </p>
                  <div className="mt-7 flex w-full max-w-sm flex-col gap-3">
                    <WhatsAppButton label="Continue on WhatsApp" message={waMessage} full />
                    <Button href={emailHref} variant="outline" icon={Mail} full>
                      Continue by Email
                    </Button>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-1 inline-flex items-center justify-center gap-1.5 text-sm text-faint transition-colors hover:text-fg"
                    >
                      <Pencil className="size-3.5" />
                      Edit details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
                  <ChipGroup
                    legend="What do you need?"
                    options={NEEDS}
                    value={form.need}
                    onSelect={set("need")}
                    error={errors.need}
                    describedBy="need-error"
                  />
                  <ChipGroup
                    legend="What's your approximate budget?"
                    options={BUDGETS}
                    value={form.budget}
                    onSelect={set("budget")}
                    error={errors.budget}
                    describedBy="budget-error"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name" name="name" required value={form.name} onChange={set("name")} error={errors.name} autoComplete="name" placeholder="Your name" />
                    <Field label="Email" name="email" type="email" required value={form.email} onChange={set("email")} error={errors.email} autoComplete="email" placeholder="you@example.com" />
                    <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={set("phone")} autoComplete="tel" placeholder="Optional" />
                    <Field label="Company / Business" name="company" value={form.company} onChange={set("company")} autoComplete="organization" placeholder="Optional" />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                      Tell me about your project <span className="text-gold">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={set("message")}
                      aria-invalid={errors.message ? "true" : undefined}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className="w-full resize-y rounded-xl border border-line bg-ink-2/60 px-4 py-3 text-fg outline-none transition-colors placeholder:text-faint focus:border-gold/50 focus:bg-ink-2"
                      placeholder="Goals, pages, features, timeline, references — whatever's useful."
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-[#f2a072]">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Button type="submit" size="lg" icon={Send} full>
                      Send Project Enquiry
                    </Button>
                    <p className="mt-3 text-center text-xs text-faint">
                      No spam. Your details are only used to reply to your enquiry.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
