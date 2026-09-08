import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { waMessages } from "@/utils/whatsapp";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-deep border-b border-white/[0.06]">
      {/* Subtle ambient lighting */}
      <span className="glow-orb top-[-10%] left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] bg-blue-600/20" aria-hidden="true" />
      <span className="glow-orb right-[-10%] bottom-[-15%] h-[28rem] w-[28rem] bg-blue-500/10" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 pt-16 pb-24 text-center sm:px-6 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
        {/* Executive Typography */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-400 backdrop-blur shadow-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          Mobiles • CCTV &amp; Cameras • Chargers &amp; Cables • Repairs
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-4xl leading-[1.08] font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight"
        >
          Premium Mobiles &amp;{" "}
          <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200 bg-clip-text text-transparent">
            Certified Electronics
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
        >
          Explore the latest smartphones, 4K CCTV surveillance cameras, fast chargers, heavy-duty cables, repair tools, and certified repair services with warranty.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3.5"
        >
          <Link
            to="/products"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-7 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 active:scale-[0.98]"
          >
            <span>Explore Products</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
          <WhatsAppButton message={waMessages.general()} size="lg">
            Inquire on WhatsApp
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  );
}
