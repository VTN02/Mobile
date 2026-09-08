import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { motion } from "framer-motion";
import type { Branch } from "@/data/branches";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { waMessages } from "@/utils/whatsapp";

export function BranchCard({ branch }: { branch: Branch }) {
  return (
    <motion.article 
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121624] shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5"
    >
      {/* Map Header Preview */}
      <div className="relative h-40 overflow-hidden bg-[#0e121d] border-b border-white/[0.06] sm:h-44">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.25) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative flex h-full flex-col justify-between p-5">
          <span className="w-fit rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[11px] font-bold tracking-wider text-blue-400 uppercase backdrop-blur-md">
            {branch.label}
          </span>
          <div className="flex items-center gap-2 text-white">
            <MapPin className="h-5 w-5 shrink-0 text-blue-400" aria-hidden="true" />
            <span className="truncate text-base font-bold">{branch.area}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{branch.name}</h3>
        <ul className="mt-4 space-y-3 text-sm text-slate-400">
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
            <span className="min-w-0 text-slate-300">{branch.address}</span>
          </li>
          <li className="flex items-start gap-3">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
            <span className="min-w-0 break-words text-slate-300">{branch.phone}</span>
          </li>
          <li className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
            <span className="min-w-0">{branch.hours}</span>
          </li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-2.5">
          <a
            href={branch.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 text-sm font-semibold text-blue-300 transition-all duration-200 hover:bg-blue-600 hover:text-white"
          >
            <Navigation className="h-4 w-4" aria-hidden="true" />
            Get Directions
          </a>
          <WhatsAppButton message={waMessages.branch(branch.label)}>WhatsApp</WhatsAppButton>
        </div>
      </div>
    </motion.article>
  );
}
