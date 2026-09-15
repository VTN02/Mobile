import { Battery, Camera, Cpu, Laptop, Monitor, Plug, ShieldCheck, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import type { RepairService } from "@/data/services";
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

export function RepairCard({ service }: { service: RepairService }) {
  const Icon = icons[service.icon];

  return (
    <motion.article 
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="group relative flex h-full flex-col rounded-2xl border border-white/[0.08] bg-[#121624] p-6 shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5"
    >
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
        {service.description}
      </p>
      <WhatsAppButton
        message={waMessages.repair(service.name)}
        variant="outline"
        size="sm"
        className="mt-5 self-start border-white/10 bg-[#161c2c] hover:bg-emerald-500/15 hover:border-emerald-500/40 hover:text-emerald-400 text-slate-200"
      >
        Inquire on WhatsApp
      </WhatsAppButton>
    </motion.article>
  );
}
