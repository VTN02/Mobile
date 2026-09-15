import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Battery,
  Camera,
  Cpu,
  Laptop,
  Monitor,
  Plug,
  ShieldCheck,
  Smartphone,
  ChevronDown,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { services, type RepairService } from "@/data/services";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { waMessages } from "@/utils/whatsapp";

const icons = {
  smartphone: Smartphone,
  monitor: Monitor,
  battery: Battery,
  plug: Plug,
  cpu: Cpu,
  laptop: Laptop,
  camera: Camera,
  shield: ShieldCheck,
} as const;

const serviceBadges: Record<string, string> = {
  "mobile-repair": "Quick Turnaround",
  "screen-replacement": "OEM Displays",
  "cctv-installation-repair": "On-Site Setup",
  "battery-replacement": "Tested Cells",
  "charging-port-repair": "Same Day Fix",
  "camera-optics-repair": "Precision Tuning",
  "software-support": "Data Safe",
  "laptop-electronics-repair": "Board Level",
};

const serviceHighlights: Record<string, string[]> = {
  "mobile-repair": [
    "Comprehensive hardware diagnostics",
    "Premium quality replacement parts",
    "Workmanship warranty included",
  ],
  "screen-replacement": [
    "High-clarity OLED & IPS screen assemblies",
    "100% touch calibration testing",
    "Optional tempered glass protection added",
  ],
  "cctv-installation-repair": [
    "4K IP camera & DVR/NVR configuration",
    "Weatherproof cabling & clean installation",
    "Live mobile view remote monitoring setup",
  ],
  "battery-replacement": [
    "Pre-fit capacity & health diagnostic",
    "High-density certified lithium replacement cells",
    "Overheat & surge safety verified",
  ],
  "charging-port-repair": [
    "Micro-soldering & power IC checks",
    "Debris removal & port alignment",
    "Fast charge rate verification",
  ],
  "camera-optics-repair": [
    "Camera module & stabilizer realignment",
    "Cracked outer lens glass replacement",
    "Auto-focus & optical zoom testing",
  ],
  "software-support": [
    "OS recovery & secure firmware updates",
    "Safe cross-device data backup & transfer",
    "Unresponsive system troubleshooting",
  ],
  "laptop-electronics-repair": [
    "Thermal paste reapplication & fan service",
    "Power jack & motherboard component diagnostics",
    "Screen, keyboard & hinge restoration",
  ],
};

export function ServicesDropdown() {
  // First item open by default
  const [openId, setOpenId] = useState<string | null>("mobile-repair");

  const toggleService = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-3">
      {services.map((service, index) => {
        const isOpen = openId === service.id;
        const Icon = icons[service.icon];
        const badge = serviceBadges[service.id] ?? "Certified";
        const highlights = serviceHighlights[service.id] ?? [
          "Professional diagnostics",
          "Quality parts guaranteed",
          "Fast repair turnaround",
        ];

        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "border-blue-500/50 bg-[#121626] shadow-xl shadow-blue-600/10"
                : "border-white/[0.08] bg-[#0e111c] hover:border-white/20 hover:bg-[#121622]"
            }`}
          >
            {/* Clickable Accordion Header */}
            <button
              type="button"
              onClick={() => toggleService(service.id)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-2">
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors duration-300 ${
                    isOpen
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base sm:text-lg font-bold text-white transition-colors">
                      {service.name}
                    </h3>
                    <span className="inline-flex items-center rounded-md border border-blue-400/20 bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold text-blue-300">
                      {badge}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-slate-400 line-clamp-1 sm:hidden">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Animated Chevron Button */}
              <div
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-500/40 bg-blue-500/20 text-blue-400 rotate-180"
                    : "border-white/10 bg-white/5 text-slate-400"
                }`}
              >
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </div>
            </button>

            {/* Expandable Body with Framer Motion Animation */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: { duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] },
                      opacity: { duration: 0.25, delay: 0.08 },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] },
                      opacity: { duration: 0.15 },
                    },
                  }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-white/[0.06] p-4 sm:p-6 bg-[#0a0d17]/70 space-y-4">
                    {/* Main Description */}
                    <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                      {service.description}
                    </p>

                    {/* Highlights List */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                      {highlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-center gap-2 rounded-lg border border-white/[0.05] bg-white/[0.02] p-2.5 text-xs text-slate-200"
                        >
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Bar */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Clock className="h-3.5 w-3.5 text-blue-400" />
                        <span>Walk-ins welcome &amp; fast turnaround</span>
                      </div>

                      <WhatsAppButton
                        message={waMessages.repair(service.name)}
                        size="sm"
                        className="shadow-lg"
                      >
                        Inquire About {service.name}
                      </WhatsAppButton>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
