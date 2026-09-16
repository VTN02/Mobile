import { Clock, MapPin, Phone, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Branch } from "@/data/branches";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { waMessages } from "@/utils/whatsapp";
import { GoogleMapsIcon } from "@/components/icons/BrandIcons";

export function BranchCard({ branch }: { branch: Branch }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#14192a]/95 via-[#101422]/95 to-[#0d101a]/95 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      {/* Top specular highlight */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-t-2xl z-20"
        aria-hidden="true"
      />

      {/* ── Google Map Embed Preview ── */}
      <div className="relative h-48 overflow-hidden sm:h-52">
        {/* Branch label badge — floats over the map */}
        <span className="absolute top-4 left-4 z-10 rounded-full border border-blue-500/40 bg-[#0e121d]/90 px-3 py-1 text-[11px] font-bold tracking-wider text-blue-400 uppercase backdrop-blur-md shadow-lg">
          {branch.label}
        </span>

        {/* Open in Google Maps button — top right */}
        <a
          href={branch.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${branch.name} in Google Maps`}
          className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#0e121d]/85 px-2.5 py-1 text-[11px] font-semibold text-white/80 backdrop-blur-md hover:bg-[#0e121d] hover:text-white transition-colors shadow-lg"
        >
          <ExternalLink className="h-3 w-3" aria-hidden="true" />
          Open map
        </a>

        {/* Iframe map */}
        <iframe
          title={`Map for ${branch.name}`}
          src={branch.mapsEmbedUrl}
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full border-0 grayscale-[20%] contrast-[1.05]"
          style={{ filter: "invert(0) hue-rotate(0deg)" }}
        />

        {/* Bottom gradient fade into card body */}
        <div
          className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#101422] to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* ── Card Body ── */}
      <div className="p-6 pt-4">
        <h3 className="text-xl font-bold text-white transition-colors duration-200 group-hover:text-blue-200">{branch.name}</h3>

        <ul className="mt-4 space-y-3 text-sm">
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
            <span className="min-w-0 text-slate-300">{branch.address}</span>
          </li>
          <li className="flex items-start gap-3">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
            <a
              href={`tel:${branch.phone.replace(/\s/g, "")}`}
              className="min-w-0 break-words text-slate-300 hover:text-white transition-colors"
            >
              {branch.phone}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
            <span className="min-w-0 text-slate-300">{branch.hours}</span>
          </li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-2.5">
          <motion.a
            href={branch.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#171c2b] px-4 text-sm font-semibold text-slate-200 transition-colors duration-200 hover:border-white/20 hover:bg-[#1f2538] hover:text-white"
          >
            <GoogleMapsIcon size={16} aria-hidden="true" />
            <span>Google Maps</span>
          </motion.a>
          <WhatsAppButton message={waMessages.branch(branch.label)}>
            WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </motion.article>
  );
}
