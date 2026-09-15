import { WhatsAppIcon } from "@/components/icons/BrandIcons";
import { waMessages, whatsappLink } from "@/utils/whatsapp";

export function WhatsAppCallout() {
  return (
    <section aria-label="Direct WhatsApp Consultation" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#25D366]/30 bg-gradient-to-r from-[#0d1a14] via-[#101f18] to-[#0c1624] p-8 sm:p-12 lg:p-14 shadow-2xl">
          {/* Ambient WhatsApp Green Glow */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#25D366]/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-3.5 py-1.5 text-xs font-bold tracking-wider text-[#25D366] uppercase">
                <WhatsAppIcon size={15} colored={true} />
                <span>Instant Expert Consultation</span>
              </div>

              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
                Need Quick Help or Product Inquiries?
              </h2>

              <p className="mt-3 text-base leading-relaxed text-slate-300">
                Chat with our team directly on WhatsApp for real-time stock availability, instant repair cost estimates, device specifications, and friendly tech advice.
              </p>
            </div>

            <div className="flex items-center shrink-0 w-full lg:w-auto">
              <a
                href={whatsappLink(waMessages.general())}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] px-8 py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon size={24} colored={false} className="shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
