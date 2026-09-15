import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/utils/whatsapp";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

type Variant = "solid" | "outline" | "ghost" | "icon";
type Size = "sm" | "md" | "lg";

type WhatsAppButtonProps = {
  message: string;
  number?: string;
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  label?: string;
};

const variants: Record<Variant, string> = {
  solid:
    "bg-whatsapp text-whatsapp-foreground hover:brightness-110 shadow-soft hover:shadow-lift",
  outline:
    "border border-whatsapp/40 bg-whatsapp/8 text-whatsapp hover:bg-whatsapp hover:text-whatsapp-foreground",
  ghost: "text-whatsapp hover:bg-whatsapp/10",
  icon: "border border-whatsapp/35 bg-whatsapp/10 text-whatsapp hover:bg-whatsapp hover:text-whatsapp-foreground",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-13 px-7 text-base gap-2.5",
};

export function WhatsAppButton({
  message,
  number,
  children,
  variant = "solid",
  size = "md",
  className,
  label,
}: WhatsAppButtonProps) {
  const isIcon = variant === "icon";
  return (
    <motion.a
      href={whatsappLink(message, number)}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 450, damping: 25 }}
      aria-label={label ?? (typeof children === "string" ? children : "Chat on WhatsApp")}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl font-semibold transition-colors duration-200",
        variants[variant],
        isIcon ? "h-11 w-11 p-0" : sizes[size],
        className,
      )}
    >
      <WhatsAppIcon
        size={size === "lg" ? 20 : 17}
        colored={variant === "outline" || variant === "ghost"}
        className="shrink-0"
      />
      {!isIcon && children ? <span className="truncate">{children}</span> : null}
    </motion.a>
  );
}
