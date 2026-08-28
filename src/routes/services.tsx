import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { services, type ServiceItem } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Weaverbird Apparel Solutions" },
      {
        name: "description",
        content:
          "Embroidery, screen printing, in-house weaving, cutting & stitching, sampling, tailoring, bulk manufacturing and nationwide delivery from our Thika factory.",
      },
      { property: "og:title", content: "Uniform Manufacturing Services in Kenya" },
      {
        property: "og:description",
        content:
          "From sketch to stitch under one roof: embroidery, printing, weaving, tailoring, bulk production and delivery.",
      },
      { property: "og:url", content: "https://weaverbirdkenya.lovable.app/services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://weaverbirdkenya.lovable.app/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-dvh bg-background font-sans" style={{ fontFamily: "var(--font-sans)" }}>
      <Header current="Services" />
      <main id="main-content">
        <ServicesHero />
        <section className="mx-auto max-w-7xl space-y-10 px-6 py-14 lg:py-20">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </section>
        <ServicesCta />
      </main>
      <Footer />
    </div>
  );
}

function ServicesHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--primary-darker)" }}
    >
   <div className="absolute inset-0">
  {/* The Image */}
  <img
    src="https://res.cloudinary.com/dipkbpinx/image/upload/v1787899976/weaverbird/products/nabth0lum2fljecqgqfw.jpg"
    alt="Background"
    className="w-full h-full object-cover object-center"
  />
</div>
<div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.13 0.05 155 / 0.92) 0%, oklch(0.13 0.05 155 / 0.5) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center text-white lg:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/85">

          What We Do
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Our <span style={{ color: "oklch(0.80 0.18 150)" }}>Services</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          Everything from the first sketch to the final stitch happens under one
          roof at our Thika factory: weaving, cutting, embroidery, printing,
          tailoring, quality control and delivery.
        </p>
      </div>
    </section>
  );
}


function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const Icon = service.icon;
  const reversed = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      id={service.id}
      className="scroll-mt-24 rounded-3xl border border-black/5 p-5 sm:p-8 lg:p-10"
      style={{ background: "oklch(0.97 0.02 155)" }}
    >
      <div
        className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        {/* Media */}
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src={service.image}
              alt={service.imageAlt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-1/2"
              style={{
                background: "linear-gradient(to top, oklch(0.13 0.05 155 / 0.85), transparent)",
              }}
              aria-hidden="true"
            />
            <span
              className="absolute left-4 top-4 rounded-xl px-3 py-1.5 text-sm font-bold text-white bg-red-500"
            >
              {number}
            </span>
            <span
              className="absolute bottom-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-md"
              aria-hidden="true"
            >
              <Icon className="h-5 w-5" style={{ color: "var(--primary-darker)" }} />
            </span>
          </div>

          {service.equipment && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.equipment.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-sm"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "oklch(0.70 0.18 150)" }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Text */}
        <div>
          <span
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500"
            aria-hidden="true"
          >
            <Icon className="h-6 w-6 text-white" />
          </span>
          <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            {service.title}
          </h2>
          <p className="mt-1.5 text-sm font-semibold text-red-500" >
            {service.tagline}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {service.description}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/85">
                <span
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "oklch(0.70 0.18 150 / 0.2)" }}
                  aria-hidden="true"
                >
                  <Check className="h-3 w-3" style={{ color: "oklch(0.48 0.15 150)" }} />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function ServicesCta() {
  return (
    <section className="px-6 pb-16">
      <div
        className="mx-auto max-w-7xl overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-12"
        style={{ background: "var(--primary-darker)" }}
      >
        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          Ready to put our factory to work?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/75 sm:text-base">
          Tell us what you need and we'll come back with samples, timelines and pricing.
        </p>
        <Link
          to="/quote"
          className="group mt-7 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
          style={{ background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" }}
        >
          Get a Bulk Quote
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
