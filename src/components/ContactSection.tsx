import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { site } from "@/config/site";
import { branches } from "@/data/branches";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Reveal } from "@/components/Reveal";
import { waMessages, whatsappLink } from "@/utils/whatsapp";

const inputClass =
  "h-12 w-full rounded-xl border border-input bg-card px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    // No backend yet: hand the inquiry over to WhatsApp.
    window.open(whatsappLink(waMessages.contactForm(form)), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <span className="glow-orb top-0 left-[-8%] h-72 w-72 bg-primary/20" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          subtitle="Call us, message us on WhatsApp or send an inquiry — we usually reply quickly."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-7">
              <h3 className="text-lg font-bold">Contact details</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0 break-words">
                    <span className="block font-semibold">Phone</span>
                    <span className="text-muted-foreground">{site.phone}</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0 break-words">
                    <span className="block font-semibold">Email</span>
                    <span className="text-muted-foreground">{site.email}</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block font-semibold">Opening hours</span>
                    <span className="text-muted-foreground">{site.hours}</span>
                  </span>
                </li>
                {branches.map((branch) => (
                  <li key={branch.id} className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="min-w-0 break-words">
                      <span className="block font-semibold">{branch.label}</span>
                      <span className="text-muted-foreground">{branch.address}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <WhatsAppButton message={waMessages.general()} className="mt-6 w-full">
                Chat on WhatsApp
              </WhatsAppButton>

              <div className="mt-6 border-t border-border pt-5">
                <span className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  Follow us
                </span>
                <div className="mt-3 flex gap-2">
                  {[
                    { href: site.socials.facebook, Icon: Facebook, label: "Facebook" },
                    { href: site.socials.instagram, Icon: Instagram, label: "Instagram" },
                    { href: site.socials.youtube, Icon: Youtube, label: "YouTube" },
                  ].map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-secondary text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-7"
            >
              <h3 className="text-lg font-bold">Send an inquiry</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill in your details and we'll continue the conversation on WhatsApp.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => update("name")(e.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold">
                    Phone
                  </label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone")(e.target.value)}
                    placeholder="Your phone number"
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email")(e.target.value)}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => update("message")(e.target.value)}
                    placeholder="How can we help?"
                    className="w-full resize-y rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-xl bg-gradient-brand px-6 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.99] sm:w-auto"
              >
                Send Inquiry
              </button>

              {sent ? (
                <p
                  role="status"
                  className="mt-4 flex items-start gap-2 rounded-xl border border-success/25 bg-success/10 px-4 py-3 text-sm font-medium text-success"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  Thanks! Your inquiry is ready in WhatsApp — press send there and we'll reply
                  shortly.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
