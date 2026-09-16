import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { site } from "@/config/site";
import { branches } from "@/data/branches";
import { categories } from "@/data/products";
import { waMessages, whatsappLink } from "@/utils/whatsapp";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "@/components/icons/BrandIcons";
import { cn } from "@/lib/utils";

const businessLinks = [
  { to: "/categories", label: "Categories" },
  { to: "/products", label: "Products" },
  { to: "/branches", label: "Branches" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <>
      <div className="divider-glow" aria-hidden="true" />
      <footer className="relative overflow-hidden bg-gradient-deep text-navy-foreground">
        <span className="glow-orb top-[-40%] left-1/4 h-80 w-80 bg-primary/40" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-400 text-white shadow-lg shadow-blue-600/30 ring-1 ring-white/20">
                <Smartphone className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <span className="block truncate text-base leading-tight font-extrabold bg-gradient-to-r from-white via-slate-100 to-sky-200 bg-clip-text text-transparent">
                  {site.name}
                </span>
                <span className="block text-[10.5px] leading-tight font-bold bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  Mobiles &amp; Electronics
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy-foreground/70">
              Mobile phones, CCTV security cameras, chargers, cables, electronics and repair tools — plus trusted
              in-house repair services at two convenient branches.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                {
                  href: site.socials.facebook,
                  Icon: FacebookIcon,
                  label: "Facebook",
                  hoverClass: "hover:border-[#1877F2]/50 hover:bg-[#1877F2]/15 hover:text-[#1877F2]",
                },
                {
                  href: site.socials.instagram,
                  Icon: InstagramIcon,
                  label: "Instagram",
                  hoverClass: "hover:border-rose-500/50 hover:bg-rose-500/15 hover:text-rose-400",
                },
              ].map(({ href, Icon, label, hoverClass }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={cn(
                    "grid h-10 w-10 place-items-center rounded-xl border border-navy-foreground/15 bg-navy-foreground/10 text-navy-foreground/80 transition-colors",
                    hoverClass,
                  )}
                >
                  <Icon size={18} colored={false} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Business">
            <h2 className="text-sm font-bold tracking-[0.14em] text-cyan uppercase">Business</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {businessLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Product categories">
            <h2 className="text-sm font-bold tracking-[0.14em] text-cyan uppercase">Products</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    to="/products"
                    search={{ category }}
                    className="text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold tracking-[0.14em] text-cyan uppercase">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm text-navy-foreground/70">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                <span className="min-w-0 break-words">{site.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <WhatsAppIcon size={16} colored={true} className="mt-0.5 shrink-0" />
                <a
                  href={whatsappLink(waMessages.general())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-0 break-words transition-colors hover:text-white hover:underline decoration-emerald-400/50"
                >
                  WhatsApp: {site.whatsappNumber}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                <span className="min-w-0 break-words">{site.email}</span>
              </li>
              {branches.map((branch) => (
                <li key={branch.id} className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                  <span className="min-w-0 break-words">
                    {branch.label}: {branch.address}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-navy-foreground/12 pt-6 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="cursor-default transition-colors hover:text-navy-foreground">
              Privacy Policy
            </span>
            <span className="cursor-default transition-colors hover:text-navy-foreground">
              Terms &amp; Conditions
            </span>
          </div>
        </div>

        {/* ── Developer Credit Strip ── */}
        <div className="mt-5 flex items-center justify-center border-t border-white/[0.05] pt-5">
          <p className="flex items-center gap-1.5 text-[11px] text-navy-foreground/35">
            <span>Designed &amp; developed with</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3 w-3 text-rose-500/70"
              aria-hidden="true"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            <span>by</span>
            <a
              href={whatsappLink(waMessages.developer(), "94774534056")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Vithusan V on WhatsApp"
              className="font-bold text-[#25D366]/60 transition-colors duration-200 hover:text-[#25D366]"
            >
              Vithusan V
            </a>
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}

