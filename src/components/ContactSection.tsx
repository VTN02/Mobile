import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "@/components/icons/BrandIcons";
import { site } from "@/config/site";
import { branches } from "@/data/branches";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { waMessages, whatsappLink } from "@/utils/whatsapp";
import { cn } from "@/lib/utils";

const inputBase =
  "w-full rounded-xl border border-white/[0.10] bg-white/[0.04] px-4 text-sm text-white outline-none transition-all placeholder:text-slate-500 focus:border-blue-500/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-blue-500/20";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    window.open(whatsappLink(waMessages.contactForm(form)), "_blank", "noopener,noreferrer");
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: site.phone,
      href: `tel:${site.phone.replace(/\s/g, "")}`,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Mail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      icon: Clock,
      label: "Opening Hours",
      value: site.hours,
      href: null,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
  ];

  const socials = [
    {
      href: site.socials.facebook,
      Icon: FacebookIcon,
      label: "Facebook",
      hover: "hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 hover:text-[#1877F2]",
    },
    {
      href: site.socials.instagram,
      Icon: InstagramIcon,
      label: "Instagram",
      hover: "hover:border-rose-500/40 hover:bg-rose-500/10 hover:text-rose-400",
    },
    {
      href: site.socials.youtube,
      Icon: YouTubeIcon,
      label: "YouTube",
      hover: "hover:border-red-600/40 hover:bg-red-600/10 hover:text-red-500",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 left-[-10%] h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-5%] h-72 w-72 rounded-full bg-purple-600/8 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          subtitle="Call us, message us on WhatsApp, or send an inquiry — we usually reply within minutes."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">

          {/* ── Left Column ── */}
          <Reveal className="lg:col-span-2 flex flex-col gap-4">

            {/* WhatsApp CTA card */}
            <a
              href={whatsappLink(waMessages.general())}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-[#25D366]/25 bg-[#25D366]/[0.07] px-5 py-4 transition-all duration-200 hover:border-[#25D366]/50 hover:bg-[#25D366]/[0.13]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]">
                <WhatsAppIcon size={22} colored={false} className="text-white" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-white">Chat on WhatsApp</p>
                <p className="text-xs text-slate-400">Typically replies instantly</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:text-[#25D366]" />
            </a>

            {/* Contact info cards */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0f1422] p-5 space-y-3">
              <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest">
                Contact Details
              </h3>
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className={cn("mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border", color)}>
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{label}</p>
                    {href ? (
                      <a href={href} className="break-words text-sm text-slate-200 hover:text-white transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-200">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Branch addresses */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0f1422] p-5 space-y-3">
              <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest">
                Our Branches
              </h3>
              {branches.map((branch) => (
                <div key={branch.id} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{branch.label}</p>
                    <p className="text-sm text-slate-200">{branch.address}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0f1422] px-5 py-4">
              <p className="mb-3 text-sm font-bold text-white/60 uppercase tracking-widest">Follow Us</p>
              <div className="flex gap-2">
                {socials.map(({ href, Icon, label, hover }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400 transition-all duration-200",
                      hover,
                    )}
                  >
                    <Icon size={18} colored={false} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── Right Column — Inquiry Form ── */}
          <Reveal delay={100} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="h-full rounded-2xl border border-white/[0.08] bg-[#0f1422] p-6 sm:p-8"
            >
              {/* Form header */}
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">Send an Inquiry</h3>
                  <p className="text-xs text-slate-400">
                    We'll continue the conversation on WhatsApp.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => update("name")(e.target.value)}
                    placeholder="Your name"
                    className={cn(inputBase, "h-11")}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Phone <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone")(e.target.value)}
                    placeholder="Your phone number"
                    className={cn(inputBase, "h-11")}
                  />
                </div>

                {/* Email */}
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email")(e.target.value)}
                    placeholder="you@example.com"
                    className={cn(inputBase, "h-11")}
                  />
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Message <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => update("message")(e.target.value)}
                    placeholder="How can we help you?"
                    className={cn(
                      inputBase,
                      "resize-y py-3 leading-relaxed",
                    )}
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="mt-5 flex justify-end">
                <button
                  type="submit"
                  className="group inline-flex h-11 items-center gap-2 rounded-full bg-blue-600 px-7 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:bg-blue-500 hover:shadow-blue-500/30 active:scale-[0.98]"
                >
                  <WhatsAppIcon size={16} colored={false} className="text-white" />
                  <span>Send via WhatsApp</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              {/* Success banner */}
              {sent && (
                <div
                  role="status"
                  className="mt-5 flex items-start gap-2.5 rounded-xl border border-emerald-500/25 bg-emerald-500/[0.08] px-4 py-3"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                  <p className="text-sm font-medium text-emerald-300">
                    Your message is ready in WhatsApp — just press Send and we'll reply shortly!
                  </p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
