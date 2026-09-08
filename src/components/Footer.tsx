import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Smartphone, Youtube } from "lucide-react";
import { site } from "@/config/site";
import { branches } from "@/data/branches";
import { categories } from "@/data/products";
import { waMessages, whatsappLink } from "@/utils/whatsapp";

const businessLinks = [
  { to: "/categories", label: "Categories" },
  { to: "/products", label: "Products" },
  { to: "/branches", label: "Branches" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-deep text-navy-foreground">
      <span className="glow-orb top-[-40%] left-1/4 h-80 w-80 bg-primary/40" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                <Smartphone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0 truncate text-base font-extrabold">{site.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy-foreground/70">
              Mobile phones, CCTV security cameras, chargers, cables, electronics and repair tools — plus trusted
              in-house repair services at two convenient branches.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { href: site.socials.facebook, Icon: Facebook, label: "Facebook" },
                { href: site.socials.instagram, Icon: Instagram, label: "Instagram" },
                { href: site.socials.youtube, Icon: Youtube, label: "YouTube" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-navy-foreground/15 bg-navy-foreground/10 text-navy-foreground/80 transition-colors hover:bg-navy-foreground/20 hover:text-navy-foreground"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
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
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                <a
                  href={whatsappLink(waMessages.general())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-0 break-words transition-colors hover:text-navy-foreground"
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
      </div>
    </footer>
  );
}
