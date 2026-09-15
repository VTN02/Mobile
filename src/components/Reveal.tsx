import { type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
  as?: "div" | "section" | "li" | "article";
  yOffset?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  yOffset = 24,
}: RevealProps) {
  const Component = motion[as] as React.ComponentType<HTMLMotionProps<"div">>;

  return (
    <Component
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn("h-full", className)}
    >
      {children}
    </Component>
  );
}
