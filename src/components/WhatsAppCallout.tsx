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

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full lg:w-auto">
              <a
                href={whatsappLink(waMessages.sample1_product())}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send Sample Message 1: Product Inquiry"
                className="group flex flex-1 sm:flex-initial items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all active:scale-[0.98]"
              >
                <WhatsAppIcon size={20} colored={false} className="shrink-0" />
                <div className="text-left">
                  <span className="block leading-tight">Sample 1: Product Inquiry</span>
                  <span className="block text-[10px] font-normal text-emerald-100 opacity-90 truncate max-w-[170px]">
                    Price &amp; stock availability
                  </span>
                </div>
              </a>

              <a
                href={whatsappLink(waMessages.sample2_repair())}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send Sample Message 2: Repair Quote"
                className="group flex flex-1 sm:flex-initial items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/[0.08] hover:bg-white/[0.14] px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition-all active:scale-[0.98]"
              >
                <WhatsAppIcon size={20} colored={false} className="shrink-0 text-[#25D366]" />
                <div className="text-left">
                  <span className="block leading-tight">Sample 2: Repair Quote</span>
                  <span className="block text-[10px] font-normal text-slate-300 opacity-90 truncate max-w-[170px]">
                    Fast estimate &amp; turnaround
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
