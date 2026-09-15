import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "hidden sm:inline-flex items-center rounded-full border px-3.5 py-1 text-xs font-semibold tracking-[0.14em] uppercase backdrop-blur-md shadow-sm",
            tone === "dark"
              ? "border-blue-400/30 bg-blue-400/10 text-blue-300"
              : "border-blue-500/25 bg-blue-500/10 text-blue-400",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <Tag
        className={cn(
          "mt-0 sm:mt-4 text-2xl font-extrabold sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12] tracking-tight text-white",
          tone === "dark" ? "text-navy-foreground" : "text-white",
        )}
      >
        {title}
      </Tag>
      {subtitle ? (
        <p
          className={cn(
            "mt-3.5 text-base leading-relaxed sm:text-lg hidden sm:block",
            tone === "dark" ? "text-slate-300" : "text-slate-400",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
