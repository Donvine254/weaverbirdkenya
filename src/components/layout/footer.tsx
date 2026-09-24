import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Calendar,
  Shirt,
  ChevronRight,
  Leaf,
  LucideIcon,
  ShieldCheck,
  CircleHelp,
  ArrowRight,
} from "lucide-react";

import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import footerFabric from "@/assets/footer-fabric.jpg";
import { InstagramIcon, FacebookCircleLogo, TiktokColorLogo, WhatsappLogo } from "@/assets/icons";

/* ----------------- Footer ----------------- */
export function FooterColHeader({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span
        className="grid h-10 w-10 place-items-center rounded-full ring-1"
        style={{
          borderColor: "oklch(0.66 0.22 25 / 0.4)",
          background: "oklch(0.13 0.05 155 / 0.4)",
        }}
      >
        <Icon className="h-6 w-6" style={{ color: "var(--accent-red)" }} />
      </span>
      <div>
        <h3
          className="text-base font-bold tracking-wide text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h3>
        <span className="mt-1 block h-0.5 w-8" style={{ background: "var(--accent-red)" }} />
      </div>
    </div>
  );
}

export function Footer() {
  const services = [
    { title: "School Uniforms", href: "/products#school-uniforms" },
    { title: "Corporate & Security Uniforms", href: "/products#corporate-wear" },
    { title: "Medical Wear", href: "/products#medical-wear" },
    { title: "Screen Printing", href: "/services#screen-printing" },
    { title: "Embroidery", href: "/services#embroidery" },
    { title: "Weaving", href: "/services#weaving" },
    { title: "Bulk Manufacturing", href: "/services#bulk-manufacturing" },
  ];
  const helpLinks = [
    { title: "Frequently Asked Questions", href: "/faq" },
    { title: "Privacy Policy", href: "/policies/privacy-policy" },
    { title: "Cookie Policy", href: "/policies/cookies-policy" },
    { title: "Terms of Use", href: "/policies/terms-of-use" },
    { title: "Environmental Policy", href: "/policies/environmental-policy" },
  ];
  const socials = [
    {
      icon: FacebookCircleLogo,
      label: "Facebook",
      href: "https://facebook.com/weaverbirdgarmentsltd",
    },
    // { icon: Twitter, label: "Twitter", href: "https://twitter.com/" },
    {
      icon: InstagramIcon,
      label: "Instagram",
      href: "https://www.instagram.com/popular/weaverbird-kenya",
    },
    { icon: TiktokColorLogo, label: "TikTok", href: "https://www.tiktok.com/@weaver.bird.garme5" },
    { icon: WhatsappLogo, label: "Whatsapp", href: "https://wa.me/254722264464" },
  ];

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ background: "var(--primary-darker)" }}
    >
      <img
        src={footerFabric}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 object-cover opacity-15"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, var(--primary-darker) 50%, transparent 100%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Contact */}
          <div>
            <FooterColHeader icon={MapPin} title="CONTACT INFO" />
            <ul className="space-y-4 text-sm text-white/85">
              <li className="flex gap-3 border-b border-white/10 pb-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-maroon">
                  <MapPin className="h-4 w-4 text-white" />
                </span>
                <span>
                  Off Thika-Garissa Highway
                  <br />
                  Along Kianjau - Athena rd
                </span>
              </li>
              <li className="flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-maroon">
                  <Mail className="h-4 w-4 text-white" />
                </span>
                <a href="mailto:sales@weaverbirdkenya.com" aria-label="Email Weaverbird sales team">
                  sales@weaverbirdkenya.com
                </a>
              </li>
              <li className="flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-maroon">
                  <Phone className="h-4 w-4 text-white" />
                </span>

                <span className="flex flex-col gap-3">
                  <a href="tel:0202051487" aria-label="Call Weaverbird toll-free line 020-2051487">
                    020-2051487 (Toll Free)
                  </a>

                  <a
                    href="tel:+254722264464"
                    aria-label="Call Weaverbird mobile line +254 722 264464"
                  >
                    +254 722 264464
                  </a>
                </span>
              </li>
            </ul>
            {/* socials */}
            <div className="mt-6 flex items-center gap-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex transition-opacity hover:opacity-75 text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Opening Time */}
          <div>
            <FooterColHeader icon={Clock} title="OPENING TIME" />
            <ul className="space-y-4">
              {[
                { d: "Mon - Friday", h: "08.00 am to 05.00 pm" },
                { d: "Saturday", h: "08.00 am to 04.00 pm" },
                { d: "Sunday", h: "Closed" },
              ].map((row) => (
                <li
                  key={row.d}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <span
                    className="grid h-10 w-10 place-items-center rounded-lg"
                    style={{ background: "oklch(0.66 0.22 25 / 0.15)" }}
                  >
                    <Calendar className="h-5 w-5" style={{ color: "var(--accent-red)" }} />
                  </span>
                  <div>
                    <div className="font-semibold text-white">{row.d}</div>
                    <div className="text-xs text-white/70">{row.h}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <FooterColHeader icon={Shirt} title="OUR SERVICES" />
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <a
                    href={service.href}
                    className="flex items-center gap-3 text-sm text-white/85 transition hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4" style={{ color: "var(--accent-red)" }} />
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              to="/blog/uniform-care"
              className="mt-4 inline-flex items-center gap-3 text-sm text-white/85 transition hover:text-white"
            >
              <ChevronRight className="h-4 w-4" style={{ color: "var(--accent-red)" }} />
              Uniform Care Guide
            </Link>
          </div>
          {/* Help & Policies */}
          <div>
            <FooterColHeader icon={ShieldCheck} title="RESOURCES" />

            <ul className="space-y-3">
              {helpLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    className="flex items-center gap-3 text-sm text-white/85 transition hover:text-white"
                  >
                    <ChevronRight
                      className="h-4 w-4 shrink-0"
                      style={{ color: "var(--accent-red)" }}
                    />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/policies"
              className="mt-4 inline-flex items-center gap-3 text-sm text-white/85 font-semibold transition hover:text-white"
            >
              <ChevronRight className="h-4 w-4" style={{ color: "var(--accent-red)" }} />
              View all policies
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Weaverbird Garments Manufacturers Ltd.
          </p>
          <p className="flex items-center gap-2 text-sm text-white/70">
            <Leaf className="h-4 w-4" style={{ color: "oklch(0.78 0.18 145)" }} />
            Sustainable. Ethical. Responsible.
          </p>
        </div>
      </div>
    </footer>
  );
}
