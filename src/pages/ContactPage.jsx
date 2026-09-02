import { Mail, Phone, MapPin, Clock, ShieldCheck, MessageSquare } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import Contact from "../components/Contact";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import { site } from "../data/site";

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact Us"
        badge="START A CONVERSATION"
        title={
          <>
            Let's build something <span className="text-gold-grad">extraordinary together.</span>
          </>
        }
        intro="Have questions or ready to launch your new website? Get in touch with CodeNest Studio today. We respond to all enquiries within 24 hours."
      />

      {/* Quick Info Grid */}
      <section className="pt-16 pb-8">
        <div className="shell">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal delay={0}>
              <div className="card p-6 flex flex-col justify-between h-full">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-gold/10 text-gold">
                    <Mail className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-faint uppercase">Email Direct</span>
                </div>
                <div className="mt-4">
                  <a href={`mailto:${site.email}`} className="text-sm font-semibold text-fg hover:text-gold transition-colors">
                    {site.email}
                  </a>
                  <p className="text-xs text-muted mt-1">24-hour response guarantee</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <div className="card p-6 flex flex-col justify-between h-full">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-gold/10 text-gold">
                    <Phone className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-faint uppercase">Call / WhatsApp</span>
                </div>
                <div className="mt-4">
                  <a href={`tel:+${site.phoneIntl}`} className="text-sm font-semibold text-fg hover:text-gold transition-colors">
                    +91 {site.phone}
                  </a>
                  <p className="text-xs text-muted mt-1">Mon–Sat, 10 AM – 7 PM IST</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card p-6 flex flex-col justify-between h-full">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-gold/10 text-gold">
                    <MapPin className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-faint uppercase">Location</span>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-fg">{site.locationRegion}</p>
                  <p className="text-xs text-muted mt-1">Uttar Pradesh, India</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="card p-6 flex flex-col justify-between h-full border-gold/30">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-gold/10 text-gold">
                    <MessageSquare className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-gold uppercase">Fastest Channel</span>
                </div>
                <div className="mt-4">
                  <WhatsAppButton full />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Component */}
      <Contact />
    </main>
  );
}
