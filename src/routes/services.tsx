import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Layers2, ReceiptText } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/page-hero";
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
        <PageHero
          eyebrow="What We Do"
          icon={Layers2}
          className="bg-left-top"
          image="https://res.cloudinary.com/dipkbpinx/image/upload/v1788328706/weaverbird/products/ub4oimqxtr0pab3h7rg7.jpg"
          title={
            <>
              Our <span style={{ color: "oklch(0.78 0.18 145)" }}>Services</span>
            </>
          }
          subtitle="Everything from the first sketch to the final stitch happens under one roof at our Thika factory: weaving, cutting, embroidery, printing, tailoring, quality control and delivery."
        />
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


function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const Icon = service.icon;
  const reversed = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      id={service.id}
      className="scroll-mt-24 rounded-3xl border border-black/5 p-5 shadow-[0_1px_2px_rgba(13,43,30,0.04),0_12px_32px_-12px_rgba(13,43,30,0.15)] transition-shadow hover:shadow-[0_1px_2px_rgba(13,43,30,0.05),0_20px_48px_-16px_rgba(13,43,30,0.22)] sm:p-8 lg:p-10"
      style={{
        background:
          "linear-gradient(135deg, oklch(1 0 0) 0%, oklch(0.995 0.004 155) 55%, oklch(0.975 0.022 155) 100%)",
      }}
    >
      <div
        className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        {/* Media */}
        <div className="border border-[#bf9b3f] bg-white p-4">
          <div className="relative aspect-[4/3] overflow-hidden">
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
              className="absolute left-4 top-4 rounded-xl px-3 py-1.5 text-sm font-bold text-white bg-maroon"
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
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-maroon"
            aria-hidden="true"
          >
            <Icon className="h-6 w-6 text-white" />
          </span>
          <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            {service.title}
          </h2>
          <p className="mt-1.5 text-sm font-semibold text-maroon" >
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
    <section className="py-8" style={{
        backgroundColor: "var(--color-maroon)",
        backgroundImage: `repeating-radial-gradient(
      ellipse at 50% 100%,
      transparent 0 18px,
      rgba(244,239,226,0.045) 19px 21px,
      transparent 22px 42px
    )`,
      }} >
        <div className="bg-primary-darker w-full">
      <div
        className="mx-auto max-w-7xl overflow-hidden px-6 py-12 text-center sm:px-12">
        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          Ready to put our factory to work?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/75 sm:text-base">
          Tell us what you need and we'll come back with samples, timelines and pricing.
        </p>
        <Link
          to="/quote"
          className="group mt-7 inline-flex bg-maroon items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
          style={{ boxShadow: "var(--shadow-red)" }}
        >
           <ReceiptText className="h-4 w-4" />
          Get a Bulk Quote
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
      </div>
    </section>
  );
}
