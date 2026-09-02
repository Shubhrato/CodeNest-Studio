import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import Logo from "./ui/Logo";
import { site, nav, mailtoLink } from "../data/site";
import { services } from "../data/services";

export default function Footer() {
  const year = 2026;

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-24 border-t border-line/70 pt-16">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Modern websites for modern businesses — designed, built and maintained by {site.owner}.
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-faint">
              {site.role}
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer Navigation">
            <h2 className="font-mono text-xs uppercase tracking-widest text-faint">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services Navigation">
            <h2 className="font-mono text-xs uppercase tracking-widest text-faint">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <Link
                    to="/services"
                    className="text-sm text-muted transition-colors hover:text-gold"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-faint">Get in touch</h2>
            <ul className="mt-4 space-y-3.5">
              <li>
                <a
                  href={mailtoLink()}
                  className="group inline-flex items-start gap-2.5 text-sm text-muted transition-colors hover:text-gold"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${site.phoneIntl}`}
                  className="group inline-flex items-start gap-2.5 text-sm text-muted transition-colors hover:text-gold"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                  +91 {site.phone}
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5 text-sm text-muted">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                {site.locationRegion}, India
              </li>
            </ul>

            {site.socials.length > 0 && (
              <ul className="mt-5 flex gap-2">
                {site.socials.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chip hover:border-gold/40 hover:text-fg"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="rule mt-14" />

        <div className="flex flex-col items-center justify-between gap-4 py-7 sm:flex-row">
          <p className="text-xs text-faint">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-faint">
            Built with care in {site.locationRegion}.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-gold"
          >
            Back to top
            <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
