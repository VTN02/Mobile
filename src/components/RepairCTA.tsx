import { Wrench } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { waMessages } from "@/utils/whatsapp";

export function RepairCTA() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-950/80 via-[#10162a] to-indigo-950/80 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
      {/* Subtle glowing ring */}
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400">
            <Wrench className="h-3.5 w-3.5" />
            <span>Fast Turnaround • Quality Parts</span>
          </div>
          <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl tracking-tight">
            Having Trouble With Your Device?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            Let our certified technical team diagnose and repair it. From screen damage and battery replacement to CCTV maintenance and motherboard diagnostics.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <WhatsAppButton message={waMessages.repair("Device Consultation")} size="lg">
            Contact Repair Team
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
