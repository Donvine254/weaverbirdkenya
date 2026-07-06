import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mail, Phone, Smartphone, MapPin, Clock, MessageCircle, Navigation,
  Facebook, Twitter, Instagram, Linkedin, Factory, Store, ArrowRight,
} from "lucide-react";
import { Header, Footer } from "./index";
import factoryHero from "@/assets/our_factory.jpg.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Weaverbird Apparel Solutions" },
      { name: "description", content: "Get in touch with Weaverbird Kenya. Call, email or visit our factory in Thika. Find a store near you across our 12 nationwide branches." },
      { property: "og:title", content: "Contact Weaverbird Kenya" },
      { property: "og:description", content: "Reach our team by phone, email or WhatsApp. Visit our Thika factory or find your nearest branch." },
    ],
  }),
  component: ContactPage,
});

const FACTORY_MAP = "https://www.google.com/maps/search/?api=1&query=Weaverbird+Garments+Thika+Kenya";

function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans" style={{ fontFamily: "var(--font-sans)" }}>
      <Header current="Contact" />
      <PageHero />
      <div className="mx-auto max-w-7xl space-y-12 px-6 py-12 lg:py-16">
        <ContactMethods />
        <SocialSection />
        <FactorySection />
        <FindStoreCta />
      </div>
      <Footer />
    </div>
  );
}

function PageHero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${factoryHero.url})` }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.13 0.05 155 / 0.88), oklch(0.10 0.06 155 / 0.75))",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center text-white lg:py-28">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80">
          <MessageCircle className="h-4 w-4" style={{ color: "var(--accent-red)" }} />
          Get in Touch
        </div>
        <h1
          className="mt-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Contact <span style={{ color: "oklch(0.78 0.18 145)" }}>Weaverbird</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/80">
          Reach our team by phone, email or WhatsApp — or drop by our Thika factory. We reply within one working day.
        </p>
      </div>
    </section>
  );
}

type Method = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  detail: string;
  href: string;
  cta: string;
};

function ContactMethods() {
  const methods: Method[] = [
    {
      icon: Phone,
      title: "Call the office",
      value: "+020-2051487",
      detail: "Landline, Mon – Sat, 8am – 5pm EAT",
      href: "tel:+2022051487",
      cta: "Call now",
    },
    {
      icon: Smartphone,
      title: "WhatsApp / Mobile",
      value: "+254 722 264 464",
      detail: "Fastest for quotes and order updates",
      href: "https://wa.me/254722264464",
      cta: "Open WhatsApp",
    },
    {
      icon: Mail,
      title: "Email us",
      value: "info@weaverbirdkenya.com",
      detail: "For quotes, tenders and partnerships",
      href: "mailto:info@weaverbirdkenya.com",
      cta: "Send email",
    },
  ];
  return (
    <section>
      <SectionHeader
        eyebrow="Contact methods"
        title="How would you like to reach us?"
        subtitle="Pick the channel that suits you — our team responds during business hours."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {methods.map((m) => (
          <a
            key={m.title}
            href={m.href}
            target={m.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer noopener"
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <span
              className="grid h-12 w-12 place-items-center rounded-full"
              style={{ background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" }}
            >
              <m.icon className="h-5 w-5 text-white" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
              {m.title}
            </h3>
            <p className="mt-1 text-sm font-semibold text-foreground">{m.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{m.detail}</p>
            <span
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold transition group-hover:gap-2"
              style={{ color: "var(--accent-red)" }}
            >
              {m.cta} <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function SocialSection() {
  const socials = [
    { icon: Facebook, label: "Facebook", handle: "@WeaverbirdKenya", href: "https://facebook.com/" },
    { icon: Instagram, label: "Instagram", handle: "@weaverbird.ke", href: "https://instagram.com/" },
    { icon: Twitter, label: "Twitter / X", handle: "@WeaverbirdKE", href: "https://twitter.com/" },
    { icon: Linkedin, label: "LinkedIn", handle: "Weaverbird Garments", href: "https://linkedin.com/" },
  ];
  return (
    <section>
      <SectionHeader
        eyebrow="Social media"
        title="Follow us online"
        subtitle="Latest catalogues, factory tours and behind-the-scenes work."
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <span
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full"
              style={{ background: "var(--gradient-red)" }}
            >
              <s.icon className="h-5 w-5 text-white" />
            </span>
            <div className="min-w-0">
              <div className="text-sm font-bold text-foreground">{s.label}</div>
              <div className="truncate text-xs text-muted-foreground">{s.handle}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function FactorySection() {
  return (
    <section>
      <SectionHeader
        eyebrow="Visit us"
        title="Factory & Headquarters"
        subtitle="Come and see how we design, cut, stitch and brand every garment."
      />
      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <img
              src={factoryHero.url}
              alt="Weaverbird factory in Thika"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-6 lg:p-8">
            <div className="flex items-center gap-3">
              <span
                className="grid h-11 w-11 place-items-center rounded-full"
                style={{ background: "var(--gradient-red)" }}
              >
                <Factory className="h-5 w-5 text-white" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                  Weaverbird Thika Factory
                </h3>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Headquarters & Production
                </div>
              </div>
            </div>
            <ul className="mt-6 space-y-4 text-sm text-foreground">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0" style={{ color: "var(--accent-red)" }} />
                <span>
                  Off Thika-Garissa Highway, along Kianjau – Athena Rd,
                  near Broadway Sec. School, Thika, Kenya.
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0" style={{ color: "var(--accent-red)" }} />
                <span>
                  Mon – Fri: 8:00am – 5:00pm · Sat: 8:00am – 5:00pm · Sun: Closed
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0" style={{ color: "var(--accent-red)" }} />
                <a href="tel:+2022051487" className="hover:underline">+020-2051487</a>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={FACTORY_MAP}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
                style={{ background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" }}
              >
                <Navigation className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FindStoreCta() {
  return (
    <section
      className="overflow-hidden rounded-2xl p-8 text-center text-white lg:p-12"
      style={{ background: "var(--gradient-hero, var(--primary-darker))" }}
    >
      <span
        className="mx-auto grid h-14 w-14 place-items-center rounded-full"
        style={{ background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" }}
      >
        <Store className="h-6 w-6 text-white" />
      </span>
      <h3 className="mt-5 text-2xl font-bold sm:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
        Prefer to visit in person?
      </h3>
      <p className="mx-auto mt-3 max-w-xl text-sm text-white/80">
        We have 12 retail branches across Kenya. Find the shop closest to you and drop by anytime.
      </p>
      <Link
        to="/branches"
        className="group mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
        style={{ background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" }}
      >
        Find a store near you
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </section>
  );
}

function SectionHeader({
  eyebrow, title, subtitle,
}: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent-red)" }}>
        {eyebrow}
      </div>
      <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  );
}