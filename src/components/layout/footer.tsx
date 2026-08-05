import { MapPin, Mail, Phone, Smartphone, Facebook, Twitter, Instagram, Clock, Calendar, Shirt, ChevronRight, Leaf } from "lucide-react";
import { useState } from "react";
import { TikTokIcon } from "@/components/tiktok-icon";
import { toast } from "sonner";
import footerFabric from "@/assets/footer-fabric.jpg";

/* ----------------- Footer ----------------- */
export function FooterColHeader({ icon: Icon, title }: { icon: any; title: string }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span
        className="grid h-14 w-14 place-items-center rounded-full ring-1"
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
    "School Uniforms",
    "Corporate & Security Uniforms",
    "Screen Printing",
    "Embroidery",
    "Weaving",
    "Other Apparel",
  ];
  const socials = [
    { icon: Facebook, label: "Facebook", href: "https://facebook.com/weaverbirdgarmentsltd" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/" },
    { icon: TikTokIcon, label: "TikTok", href: "https://www.tiktok.com/@weaver.bird.garme5" },
  ];
  const [email, setEmail] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("You're subscribed!", {
      description: "Thank you for joining the Weaverbird newsletter.",
    });
    setEmail("");
  };

  return (
    <footer
      className="relative mt-8 overflow-hidden text-white"
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
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/5">
                  <MapPin className="h-4 w-4 text-white/80" />
                </span>
                <span>
                  Off Thika-Garissa Highway
                  <br />
                  Along Kianjau - Athena rd Near
                  <br />
                  Broadway sec. school.
                </span>
              </li>
              <li className="flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/5">
                  <Mail className="h-4 w-4 text-white/80" />
                </span>
                <a href="mailto:info@weaverbirdkenya.com"> info@weaverbirdkenya.com</a>
              </li>
              <li className="flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/5">
                  <Phone className="h-4 w-4 text-white/80" />
                </span>
                <a href="tel:0202051487">020-2051487 (Toll Free)</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/5">
                  <Smartphone className="h-4 w-4 text-white/80" />
                </span>
                <a href="tel:+254722264464">+254 722 264464</a>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full transition hover:brightness-110"
                  style={{ background: "var(--gradient-red)" }}
                >
                  <s.icon className="h-4 w-4 text-white" />
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
                { d: "Saturday", h: "08.00 am to 05.00 pm" },
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
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-sm text-white/85 transition hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4" style={{ color: "var(--accent-red)" }} />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <FooterColHeader icon={Mail} title="NEWSLETTER" />
            <p className="text-sm leading-relaxed text-white/80">
              Stay updated with the latest trends in garment manufacturing and innovative apparel
              solutions at Weaverbird. Discover industry insights, design inspiration, and updates
              on our sustainable practices. Sign up today for more!
            </p>
            <form
              onSubmit={handleSignup}
              className="mt-5 flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] p-1.5 transition hover:border-white/25 focus-within:border-[var(--accent-red)] focus-within:bg-white/[0.07] focus-within:ring-2 focus-within:ring-[var(--accent-red)]"
            >
              <input
                type="email"
                aria-label="Email address"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-1 rounded-l-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-md active:scale-95"
                style={{ background: "var(--gradient-red)" }}
              >
                Sign Up
              </button>
            </form>
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

