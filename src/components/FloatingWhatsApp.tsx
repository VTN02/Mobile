import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { whatsappLink, waMessages } from "@/utils/whatsapp";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappLink(waMessages.general())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 350, damping: 20, delay: 0.8 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.92 }}
      className="group fixed right-4 bottom-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_4px_25px_rgba(16,185,129,0.55)] sm:right-6 sm:bottom-6"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping opacity-60 pointer-events-none" />
      <MessageCircle className="relative h-6 w-6" aria-hidden="true" />
    </motion.a>
  );
}
