import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  Smartphone,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
  Facebook,
  Twitter,
  Instagram,
  Factory,
  Store,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/page-hero";
import { FacebookCircleLogo, InstagramIcon, TiktokColorLogo, WhatsappLogo } from "@/assets/icons";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Weaverbird Apparel Solutions" },
      {
        name: "description",
        content:
          "Get in touch with Weaverbird Kenya. Call, email or visit our factory in Thika. Find a store near you across our 12 nationwide branches.",
      },
      { property: "og:title", content: "Contact Weaverbird Kenya" },
      {
        property: "og:description",
        content:
          "Reach our team by phone, email or WhatsApp. Visit our Thika factory or find your nearest branch.",
      },
      { property: "og:url", content: "https://weaverbirdkenya.lovable.app/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://weaverbirdkenya.lovable.app/contact" }],
  }),
  component: ContactPage,
});

const FACTORY_MAP = "https://maps.app.goo.gl/ZDgsjr48u5BqzZHv6";

function ContactPage() {
  return (
    <div className="min-h-dvh bg-background font-sans" style={{ fontFamily: "var(--font-sans)" }}>
      <Header current="Contact" />
      <main id="main-content">
        <PageHero
          eyebrow="Get in Touch"
          icon={MessageCircle}
          title={
            <>
              Contact <span style={{ color: "oklch(0.78 0.18 145)" }}>Weaverbird</span>
            </>
          }
          subtitle="Reach our team by phone, email or WhatsApp — or drop by our Thika factory. We reply within one working day."
        />
        <div className="mx-auto max-w-7xl space-y-12 px-6 py-12 lg:py-16">
          <ContactMethods />
          <SocialSection />
          <FactorySection />
          <FindStoreCta />
        </div>
      </main>
      <Footer />
    </div>
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
      icon: WhatsappLogo,
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
              className="grid h-10 w-10 place-items-center rounded-full bg-maroon/80 text-white"
              style={{ boxShadow: "var(--shadow-red)" }}
            >
              <m.icon className="h-6 w-6" />
            </span>
            <h3
              className="mt-5 text-lg font-bold text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
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
    {
      icon: FacebookCircleLogo,
      label: "Facebook",
      handle: "@WeaverbirdKenya",
      href: "https://facebook.com/weaverbirdgarmentsltd",
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      handle: "@weaverbird.ke",
      href: "https://instagram.com/",
    },

    {
      icon: TiktokColorLogo,
      label: "TikTok",
      handle: "@weaver.bird.garme5",
      href: "https://www.tiktok.com/@weaver.bird.garme5",
    },
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
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full">
              <s.icon />
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
          <div className="relative aspect-[4/3] overflow-hidden min-h-[280px]">
            <img
              src="https://res.cloudinary.com/dipkbpinx/image/upload/v1785838444/eocj3xfmjgnjlbytkk5o.jpg"
              alt="Weaverbird factory and headquarters in Thika"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
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
                <h3
                  className="text-xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
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
                  Off Thika-Garissa Highway, along Kianjau – Athena Rd, near Broadway Sec. School,
                  Thika, Kenya.
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0" style={{ color: "var(--accent-red)" }} />
                <div className="flex flex-col">
                  <span>Mon – Fri: 8:00 am – 5:00 pm</span>
                  <span>Sat: 8:00 am – 4:00 pm</span>
                  <span>Sun: Closed</span>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0" style={{ color: "var(--accent-red)" }} />
                <a href="mailto:sales@weaverbirdkenya.com" className="hover:underline">
                  sales@weaverbirdkenya.com
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0" style={{ color: "var(--accent-red)" }} />
                <a href="tel:+2022051487" className="hover:underline">
                  020-2051487 (Toll Free)
                </a>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={FACTORY_MAP}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95 bg-maroon"
                style={{ boxShadow: "var(--shadow-red)" }}
              >
                <Navigation className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                Get Directions
              </a>
              <a
                href="tel:+2022051487"
                title="Book a visit appointment at the Weaverbird factory in Thika"
                className="hidden lg:inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
                style={{ background: "var(--primary)", boxShadow: "var(--shadow-green)" }}
                aria-label="book a visit appointment at the Weaverbird factory in Thika"
              >
                <Phone className="h-4 w-4" />
                Book a Visit Appointment
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
        className="mx-auto grid h-12 w-12 bg-maroon place-items-center rounded-full"
        style={{ boxShadow: "var(--shadow-red)" }}
      >
        <Store className="h-8 w-8 text-white" />
      </span>
      <h2
        className="mt-5 text-2xl font-bold sm:text-3xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Prefer to visit in person?
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm text-white/80">
        We have 13 retail branches across Kenya. Find the shop closest to you and drop by anytime.
      </p>
      <Link
        to="/branches"
        className="group mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95 bg-maroon"
        style={{ boxShadow: "var(--shadow-red)" }}
      >
        Find a store near you
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div
        className="text-xs font-semibold uppercase tracking-widest"
        style={{ color: "var(--accent-red)" }}
      >
        {eyebrow}
      </div>
      <h2
        className="mt-2 text-3xl font-bold text-foreground sm:text-4xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
