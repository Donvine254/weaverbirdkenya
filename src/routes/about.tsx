import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award, Users, MapPin, Factory, CheckCircle2, Target, Eye, Heart,
  ShieldCheck, Shirt, ChevronRight, Leaf, Sparkles,
} from "lucide-react";
import { Header, Footer } from "./index";
import factoryHero from "@/assets/our_factory.jpg.asset.json";
import weaverLogo from "@/assets/Weaver_Logo.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Weaverbird Apparel Solutions" },
      { name: "description", content: "Weaverbird Garments Manufacturers Ltd was founded in 1996. Two directors, 12 shops, a Thika factory, 400+ employees and 50+ product categories. Made in Kenya with 98% quality standards." },
      { property: "og:title", content: "About Weaverbird Kenya" },
      { property: "og:description", content: "Premium uniforms and apparel made in Kenya since 1996. 30 years of experience, 12 branches and a factory in Thika." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans" style={{ fontFamily: "var(--font-sans)" }}>
      <Header current="About Us" />
      <PageHero />
      <div className="mx-auto max-w-7xl space-y-12 px-6 py-12 lg:py-16">
        <StorySection />
        <StatsSection />
        <MissionVisionSection />
        <ValuesSection />
        <LeadershipSection />
        <CtaSection />
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
          <Award className="h-4 w-4" style={{ color: "var(--accent-red)" }} />
          Since 1996
        </div>
        <h1
          className="mt-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          About <span style={{ color: "oklch(0.78 0.18 145)" }}>Weaverbird</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/80">
          Kenya’s trusted uniform and apparel manufacturer. Designed, cut, stitched and branded locally for institutions, businesses and security teams.
        </p>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className="relative aspect-[4/3] min-h-[280px] overflow-hidden rounded-2xl border border-border shadow-sm">
        <img
          src={factoryHero.url}
          alt="Weaverbird factory and headquarters in Thika"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="space-y-5">
        <SectionHeader
          eyebrow="Our story"
          title="Three decades of Kenyan-made quality"
          subtitle="From a single workshop to a nationwide network."
        />
        <p className="text-sm leading-relaxed text-muted-foreground">
          Weaverbird Garments Manufacturers Ltd was founded in 1996 with one clear purpose: to make
          high-quality, durable uniforms and workwear right here in Kenya. What started as a small
          garment operation has grown into a trusted manufacturer with 12 retail shops, a factory and
          headquarters in Thika, and a team of over 400 people.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          For nearly 30 years we have supplied schools, corporate teams, security firms, hospitals,
          hotels and sports clubs with apparel that looks professional and lasts longer. Every
          piece is designed, cut, stitched and finished locally — because we believe Kenyan
          workmanship is world-class.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            { i: Factory, t: "Factory & HQ in Thika" },
            { i: MapPin, t: "12 shops across Kenya" },
            { i: Award, t: "30 years of experience" },
            { i: Leaf, t: "Proudly made in Kenya" },
          ].map(({ i: Icon, t }) => (
            <li key={t} className="flex items-center gap-2 text-sm font-medium text-foreground">
              <span
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full"
                style={{ background: "oklch(0.66 0.22 25 / 0.12)" }}
              >
                <Icon className="h-4 w-4" style={{ color: "var(--accent-red)" }} />
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { i: Award, n: "1996", t: "Year Founded" },
    { i: Users, n: "400+", t: "Employees" },
    { i: MapPin, n: "12", t: "Retail Shops" },
    { i: Shirt, n: "50+", t: "Product Categories" },
    { i: ShieldCheck, n: "98%", t: "Quality Standards" },
    { i: CheckCircle2, n: "30+", t: "Years of Experience" },
  ];
  return (
    <section
      className="rounded-2xl px-4 py-8 text-white sm:px-6 sm:py-10"
      style={{ background: "var(--primary-deep)" }}
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map(({ i: Icon, n, t }) => (
          <div key={t} className="text-center">
            <span
              className="mx-auto grid h-12 w-12 place-items-center rounded-full"
              style={{ background: "oklch(0.20 0.07 155)", border: "1px solid oklch(0.78 0.18 145 / 0.4)" }}
            >
              <Icon className="h-5 w-5" style={{ color: "oklch(0.78 0.18 145)" }} />
            </span>
            <div
              className="mt-3 text-2xl font-extrabold sm:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {n}
            </div>
            <div className="mt-1 text-xs text-white/70">{t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MissionVisionSection() {
  const cards = [
    {
      icon: Target,
      title: "Mission",
      body: "To design and deliver quality, affordable uniforms and apparel that help Kenyan organisations look professional, perform better and take pride in their people.",
    },
    {
      icon: Eye,
      title: "Vision",
      body: "To be Kenya’s most trusted apparel partner — known for consistent quality, ethical manufacturing and nationwide service that reaches every county and community.",
    },
  ];
  return (
    <section>
      <SectionHeader
        eyebrow="Mission & vision"
        title="What drives us every day"
        subtitle="Our direction is simple: quality, reliability and local excellence."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <span
              className="grid h-12 w-12 place-items-center rounded-full"
              style={{ background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" }}
            >
              <c.icon className="h-5 w-5 text-white" />
            </span>
            <h3
              className="mt-5 text-xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {c.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    {
      icon: Heart,
      title: "Respect & Pride",
      body: "We respect every employee, partner and customer, and take pride in garments that carry the Weaverbird name.",
    },
    {
      icon: ShieldCheck,
      title: "Integrity & Professionalism",
      body: "We do business honestly, keep our promises and deliver with professionalism from first quote to final delivery.",
    },
    {
      icon: Sparkles,
      title: "Quality & Satisfaction",
      body: "98% quality standards and customer satisfaction are more than numbers — they are the benchmark for every order we ship.",
    },
    {
      icon: Users,
      title: "People & Community",
      body: "With over 400 employees, we invest in local skills, fair work and a team that feels like family.",
    },
  ];
  return (
    <section>
      <SectionHeader
        eyebrow="Our values"
        title="The principles behind every stitch"
        subtitle="Culture, craftsmanship and consistency woven together."
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => (
          <div
            key={v.title}
            className="rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <span
              className="grid h-11 w-11 place-items-center rounded-full"
              style={{ background: "oklch(0.66 0.22 25 / 0.12)" }}
            >
              <v.icon className="h-5 w-5" style={{ color: "var(--accent-red)" }} />
            </span>
            <h3
              className="mt-4 text-lg font-bold text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {v.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function LeadershipSection() {
  const directors = [
    {
      name: "Director Name",
      role: "Co-Founder & Managing Director",
      bio: "One of the founding directors who has guided Weaverbird from its first workshop to a nationwide manufacturing operation.",
    },
    {
      name: "Director Name",
      role: "Co-Founder & Operations Director",
      bio: "Leads production, supply chain and quality, ensuring every garment meets the standards customers expect.",
    },
  ];
  return (
    <section>
      <SectionHeader
        eyebrow="Leadership"
        title="Meet the directors"
        subtitle="Two founders, one vision: Kenyan-made apparel built to last."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {directors.map((d, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
          >
            <span
              className="grid h-14 w-14 shrink-0 place-items-center rounded-full text-lg font-bold text-white"
              style={{ background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" }}
            >
              {d.name.split(" ").map((p) => p[0]).join("")}
            </span>
            <div>
              <h3
                className="text-lg font-bold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {d.name}
              </h3>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {d.role}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section
      className="relative overflow-hidden rounded-2xl bg-cover bg-center p-8 text-center text-white lg:p-12"
      style={{ backgroundImage: `url(${factoryHero.url})` }}
    >
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, oklch(0.13 0.05 155 / 0.92), oklch(0.10 0.06 155 / 0.75))",
        }}
      />
      <div className="relative">
        <img
          src={weaverLogo.url}
          alt=""
          className="mx-auto h-16 w-auto object-contain opacity-90"
          loading="lazy"
        />
        <h3
          className="mt-5 text-2xl font-bold sm:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Ready to work with us?
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/80">
          Whether you need a quote, a factory visit or a nationwide supply partner, we are here to help.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/quote"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
            style={{ background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" }}
          >
            Get a Quote <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10 active:scale-95"
          >
            Contact Us
          </Link>
        </div>
      </div>
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
      <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent-red)" }}>
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
