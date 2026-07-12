import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MapPin,
  Mail,
  Phone,
  Smartphone,
  Facebook,
  Twitter,
  Instagram,
  Clock,
  Calendar,
  Shirt,
  ChevronRight,
  Award,
  Users,
  ThumbsUp,
  Truck,
  PencilRuler,
  Scissors,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Building2,
  Heart,
  ShieldAlert,
  Factory,
  ArrowRight,
  Leaf,
  Menu,
  Diamond,
  Flame,
} from "lucide-react";
import { TikTokIcon } from "@/components/tiktok-icon";
import { toast } from "sonner";

import weaverLogo from "@/assets/logo.jpg";
import footerFabric from "@/assets/footer-fabric.jpg";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { products } from "@/assets/uniforms";
import { industries } from "@/assets/industries";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Weaverbird Garments Manufacturers Ltd" },
      {
        name: "description",
        content:
          "Premium school, corporate, security, sports and hospitality uniforms designed and manufactured in Kenya since 1996.",
      },
      { property: "og:title", content: "Weaverbird Garments Manufacturers Ltd" },
      {
        property: "og:description",
        content:
          "Kenya's leading uniform & apparel manufacturer. From design to delivery, nationwide.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div
      className="min-h-screen bg-background font-sans"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <Header />
      <Hero />
      <StatsBar />
      <Products />
      <Features />
      <Manufacturing />
      <Industries />
      <TrustedBy />
      <CtaBanner />
      <Footer />
    </div>
  );
}

/* ----------------- Brand Logo ----------------- */
function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={weaverLogo}
        alt="Weaverbird Apparel Solutions logo"
        className="h-12 w-auto object-contain sm:h-20"
      />
      <div className="hidden flex-col leading-tight sm:flex">
        <span className="text-lg font-bold tracking-wide text-white">WEAVERBIRD</span>
        <span className="text-xs font-medium tracking-wider text-white/70">
          Garments Manufacturer
        </span>
      </div>
    </div>
  );
}

/* ----------------- Header ----------------- */
export function Header({ current = "Home" }: { current?: string }) {
  const links: { label: string; to?: string; href?: string }[] = [
    { label: "Home", to: "/" },
    { label: "Products", href: "/#products" },
    { label: "Industries", href: "/#industries" },
    { label: "Manufacturing", href: "/#manufacturing" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Branches", to: "/branches" },
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY && y > 80) setHidden(true);
      else if (y < lastY) setHidden(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      style={{ background: "var(--primary-darker)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo light />
        <nav className="hidden items-center gap-7 text-sm font-medium text-white/85 lg:flex">
          {links.map((l) => {
            const isActive = l.label === current;
            const cls = `relative transition hover:text-white ${isActive ? "text-white" : ""}`;
            const inner = (
              <>
                {l.label}
                {isActive && (
                  <span
                    className="absolute -bottom-2 left-0 h-0.5 w-6"
                    style={{ background: "var(--accent-red)" }}
                  />
                )}
              </>
            );
            return l.to ? (
              <Link key={l.label} to={l.to} className={cls}>
                {inner}
              </Link>
            ) : (
              <a key={l.label} href={l.href} className={cls}>
                {inner}
              </a>
            );
          })}
        </nav>
        <Link
          to="/quote"
          className="group hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95 lg:inline-flex"
          style={{ background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" }}
        >
          Get a Quote{" "}
          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="rounded-md p-2 text-white lg:hidden" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 border-l-0 p-0"
            style={{ background: "var(--primary-darker)" }}
          >
            <SheetHeader className="border-b border-white/10 p-6 text-left">
              <SheetTitle className="text-white">
                <Logo light />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 p-4">
              {links.map((l) => {
                const isActive = l.label === current;
                const cls = `rounded-md px-3 py-3 text-sm font-medium transition hover:bg-white/10 ${isActive ? "text-white" : "text-white/80"}`;
                return l.to ? (
                  <Link key={l.label} to={l.to} onClick={() => setOpen(false)} className={cls}>
                    {l.label}
                  </Link>
                ) : (
                  <a key={l.label} href={l.href} onClick={() => setOpen(false)} className={cls}>
                    {l.label}
                  </a>
                );
              })}
              <Link
                to="/quote"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-md"
                style={{ background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" }}
              >
                Get a Quote <ChevronRight className="h-4 w-4" />
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

/* ----------------- Hero ----------------- */
function Hero() {
  const tiles = products
    .filter((product) => ["school", "corporate", "security", "sports"].includes(product.id))
    .map(({ title, img, icon }) => ({
      label: title,
      img,
      icon,
    }));
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <img
        src="https://res.cloudinary.com/dipkbpinx/image/upload/v1783869677/weaverbird/nmszxatomphtat2xspfs.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.13 0.05 155 / 0.92) 0%, oklch(0.13 0.05 155 / 0.5) 100%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div className="text-white">
          <h1
            className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Kenya's Leading
            <br />
            <span style={{ color: "oklch(0.78 0.18 145)" }}>Uniform &amp; Apparel</span>
            <br />
            Manufacturer
          </h1>
          <p className="mt-6 max-w-md text-white/75">
            From school uniforms to corporate branding, we design, manufacture and deliver premium
            apparel solutions across Kenya.
          </p>
          <ul className="mt-6 grid max-w-md grid-cols-2 gap-3 text-sm text-white/85">
            {[
              { i: Award, t: "Established in 1996" },
              { i: Users, t: "3000+ Clients Served" },
              { i: Truck, t: "Nationwide Delivery" },
              { i: Factory, t: "In-house Production" },
            ].map(({ i: Icon, t }) => (
              <li key={t} className="flex items-center gap-2">
                <Icon className="h-4 w-4 shrink-0" style={{ color: "oklch(0.78 0.18 145)" }} />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/quote"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
              style={{ background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" }}
            >
              Get a Quote{" "}
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10 active:scale-95"
            >
              View Products
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {tiles.map(({ label, img, icon: Icon }) => (
            <div
              key={label}
              className="group relative aspect-[5/4] overflow-hidden rounded-2xl ring-1 ring-white/20"
            >
              <img
                src={img}
                alt={label}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
                width={512}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span
                  className="grid h-9 w-9 place-items-center rounded-full"
                  style={{ background: "var(--gradient-red)" }}
                >
                  <Icon className="h-4 w-4 text-white" />
                </span>
                <span className="text-sm font-semibold text-white">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------- Stats ----------------- */
function StatsBar() {
  const stats = [
    { i: Award, n: "30+", t: "Years Experience" },
    { i: Users, n: "3000+", t: "Happy Clients" },
    { i: ThumbsUp, n: "97%", t: "Client Satisfaction" },
    { i: MapPin, n: "12", t: "Branches Nationwide" },
    { i: Truck, n: "Fast", t: "Delivery" },
    { i: Factory, n: "Factory", t: "Production" },
  ];
  return (
    <section className="mx-auto -mt-8 max-w-7xl px-6">
      <div
        className="relative grid grid-cols-2 gap-3 rounded-2xl px-3 py-5 text-white sm:grid-cols-3 sm:gap-4 sm:px-4 sm:py-6 lg:grid-cols-6"
        style={{ background: "var(--primary-deep)", boxShadow: "var(--shadow-card)" }}
      >
        {stats.map(({ i: Icon, n, t }) => (
          <div key={t} className="flex min-w-0 items-center gap-2 sm:gap-3">
            <span
              className="grid aspect-square h-10 w-10 shrink-0 place-items-center rounded-full ring-1 sm:h-12 sm:w-12"
              style={{
                background: "oklch(0.20 0.07 155)",
                borderColor: "oklch(0.78 0.18 145 / 0.4)",
              }}
            >
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: "oklch(0.78 0.18 145)" }} />
            </span>
            <div className="min-w-0 leading-tight">
              <div
                className="break-words text-base font-bold sm:text-lg lg:text-xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {n}
              </div>
              <div className="text-[10px] text-white/70 sm:text-xs">{t}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------- Products ----------------- */
function Products() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2
            className="text-3xl font-bold sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Products
            <span className="mt-2 block h-1 w-12" style={{ background: "var(--accent-red)" }} />
          </h2>
          <p className="mt-3 text-muted-foreground">High quality. Custom made. Built to last.</p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-semibold"
          style={{ color: "var(--accent-red)" }}
        >
          View All Products <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {products.map(({ img, title, desc, icon: Icon }) => (
          <article
            key={title}
            className="group overflow-hidden rounded-2xl bg-card text-card-foreground transition hover:-translate-y-1"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={img}
                alt={title}
                loading="lazy"
                width={400}
                height={500}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-3 left-3 grid h-9 w-9 place-items-center rounded-full bg-white shadow">
                <Icon className="h-4 w-4" style={{ color: "var(--primary)" }} />
              </span>
            </div>
            <div className="relative p-4">
              <h3 className="text-sm font-bold">{title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
              <span
                className="absolute -top-4 right-4 grid h-8 w-8 place-items-center rounded-full text-white shadow-md"
                style={{ background: "var(--gradient-red)" }}
              >
                <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ----------------- Features ----------------- */
function Features() {
  const features = [
    {
      i: Diamond,
      t: "Quality Manufacturing",
      d: "Premium fabrics and precision stitching for long lasting wear.",
    },
    {
      i: Truck,
      t: "Fast Turnaround",
      d: "Bulk orders delivered on time without compromising quality.",
    },
    {
      i: PencilRuler,
      t: "Custom Branding",
      d: "Embroidery, weaving and printing to elevate your brand.",
    },
    {
      i: MapPin,
      t: "Nationwide Reach",
      d: "Multiple branches and reliable delivery across Kenya.",
    },
    { i: Award, t: "Competitive Pricing", d: "Factory-direct manufacturing for the best value." },
    { i: Users, t: "Dedicated Support", d: "Expert consultation from design to delivery." },
  ];
  return (
    <section className="bg-secondary/40 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2
            className="text-3xl font-bold sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why Choose Us
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            What makes us the trusted uniform manufacturing partner across Kenya.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {features.map(({ i: Icon, t, d }) => (
            <div
              key={t}
              className="rounded-xl bg-card p-5"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <span
                className="grid h-11 w-11 place-items-center rounded-full"
                style={{ background: "oklch(0.94 0.05 145)" }}
              >
                <Icon className="h-5 w-5" style={{ color: "var(--primary)" }} />
              </span>
              <h3 className="mt-4 text-sm font-bold">{t}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------- Manufacturing ----------------- */
function Manufacturing() {
  const steps = [
    { i: PencilRuler, t: "Design", s: "Concept & Mockups" },
    { i: Scissors, t: "Production", s: "Cutting & Stitching" },
    { i: Sparkles, t: "Branding", s: "Embroidery & Printing" },
    { i: ShieldCheck, t: "Quality Control", s: "Inspection" },
    { i: Truck, t: "Delivery", s: "Nationwide Delivery" },
  ];
  return (
    <section id="manufacturing" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2
          className="text-center text-3xl font-bold sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Our Manufacturing Process
        </h2>

        <div className="mt-12">
          <ol
            className="relative flex snap-x gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-5 sm:gap-y-10 sm:overflow-visible sm:pb-0"
            style={{ scrollbarWidth: "none" }}
          >
            {steps.map(({ i: Icon, t, s }, idx) => (
              <li
                key={t}
                className="relative flex min-w-[9rem] snap-center flex-col items-center text-center sm:min-w-0"
              >
                {idx < steps.length - 1 && (
                  <span
                    className="absolute right-[-30%] top-7 hidden h-px w-[60%] border-t border-dashed sm:block"
                    style={{ borderColor: "var(--border)" }}
                  />
                )}
                <span
                  className="grid h-14 w-14 place-items-center rounded-full bg-card"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <Icon className="h-6 w-6" style={{ color: "var(--primary)" }} />
                </span>
                <div className="mt-3 text-sm font-semibold">
                  {idx + 1}. {t}
                </div>
                <div className="text-xs text-muted-foreground">{s}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ----------------- Industries ----------------- */
function Industries() {
  return (
    <section id="industries" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2
          className="text-center text-3xl font-bold sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Industries We Serve
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {industries.map(({ title, subtitle, image, icon: Icon }) => (
            <div key={title} className="group relative h-72 overflow-hidden rounded-3xl">
              {/* Background Image */}
              <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/20 backdrop-blur">
                  <Icon className="h-6 w-6 text-emerald-400" />
                </div>

                <h3 className="text-2xl font-bold">{title}</h3>

                <p className="mt-1 text-sm text-white/80">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------- CTA Banner ----------------- */
function TrustedBy() {
  const clients = [
    "KCB",
    "EQUITY",
    "KENYA AIRWAYS",
    "G4S",
    "UoN",
    "SAFARICOM",
    "NATION",
    "JKUAT",
    "KPLC",
    "BIDCO",
  ];
  const row = [...clients, ...clients];
  return (
    <section className="bg-secondary/40 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl bg-card p-8" style={{ boxShadow: "var(--shadow-card)" }}>
          <h3 className="text-center text-sm font-semibold tracking-[0.2em] text-muted-foreground">
            TRUSTED BY LEADING ORGANIZATIONS
          </h3>
          <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
              {row.map((c, i) => (
                <span
                  key={`${c}-${i}`}
                  className="text-lg font-extrabold tracking-wide"
                  style={{ color: "var(--primary-deep)" }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div
            className="mt-8 grid grid-cols-3 gap-3 border-t pt-6"
            style={{ borderColor: "var(--border)" }}
          >
            {[
              { n: "50,000+", t: "Garments Delivered For Schools" },
              { n: "15+", t: "Corporate Clients Nationwide" },
              { n: "98%", t: "Repeat Business" },
            ].map((m) => (
              <div key={m.t} className="text-center">
                <div
                  className="text-2xl font-extrabold"
                  style={{ color: "var(--accent-red)", fontFamily: "var(--font-display)" }}
                >
                  {m.n}
                </div>
                <div className="mt-1 text-xs leading-tight text-muted-foreground">{m.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section id="quote" className="mx-auto max-w-7xl px-6 pb-16">
      <div
        className="relative overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dipkbpinx/image/upload/v1783868775/weaverbird/u4iqolm38vfhoqkj47ne.webp")`,
        }}
      >
        {/* dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.12 0.06 155 / 0.85) 0%, oklch(0.12 0.06 155 / 0.55) 55%, oklch(0.12 0.06 155 / 0.20) 100%)",
          }}
        />
        <div className="relative flex items-center px-8 py-14 sm:py-20 lg:px-16 lg:py-24">
          <div className="max-w-lg text-white">
            <h2
              className="text-2xl md:text-3xl font-bold leading-tight sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Need Uniforms for Your Organization?
            </h2>
            <p className="mt-4 text-base text-white/80 sm:text-lg">
              Get a quick quote tailored to your needs.
            </p>
            <Link
              to="/quote"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-white/90 hover:shadow-lg active:scale-95"
            >
              Request a Quote{" "}
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------- Footer ----------------- */
function FooterColHeader({ icon: Icon, title }: { icon: any; title: string }) {
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
                info@weaverbirdkenya.com
              </li>
              <li className="flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/5">
                  <Phone className="h-4 w-4 text-white/80" />
                </span>
                +020-2051487
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/5">
                  <Smartphone className="h-4 w-4 text-white/80" />
                </span>
                +254 722 264464
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm text-white/70">Follow us</span>
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
                { d: "Sunday", h: "All Sunday we are Closed" },
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
          <Logo light />
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Weaverbird Kenya. All Rights Reserved.
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
