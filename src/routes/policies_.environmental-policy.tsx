import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, Headset, Leaf, PackageCheck, Recycle, Shirt } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export const Route = createFileRoute("/policies_/environmental-policy")({
  component: EnvironmentalPolicyPage,
  head: () => ({
    meta: [
      {
        title: "Environmental Policy | Weaverbird Garments Manufacturers Ltd",
      },
      {
        name: "description",
        content:
          "Learn about Weaverbird Garments Manufacturers Ltd's commitment to responsible manufacturing, resource efficiency and environmental protection.",
      },
    ],
  }),
});

function EnvironmentalPolicyPage() {
  return (
    <div className="min-h-dvh bg-background font-sans" style={{ fontFamily: "var(--font-sans)" }}>
      <Header current="Policies" />

      <main id="main-content">
        <EnvironmentalPolicyHero />
        <EnvironmentalPolicyContent />
      </main>

      <Footer />
    </div>
  );
}

function EnvironmentalPolicyContent() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12 lg:py-16">
        <article>
          {/* Introduction */}
          <header>
            <div className="text-sm font-semibold text-foreground">
              Effective Date: 1 January 2026
            </div>

            <h1
              className="mt-6 text-3xl font-bold text-foreground sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Environmental Policy
            </h1>

            <div className="mt-6 space-y-4 text-[15px] leading-7">
              <p>
                Weaverbird Garments Manufacturers Ltd (&quot;Weaverbird&quot;) recognises that
                responsible manufacturing includes a responsibility to protect the environment and
                use resources thoughtfully.
              </p>

              <p>
                As a garment manufacturer, we seek to conduct our operations in a manner that
                reduces unnecessary environmental impact, promotes efficient use of resources and
                supports responsible practices throughout our manufacturing activities.
              </p>

              <p>
                We are committed to complying with applicable environmental laws, regulatory
                requirements, licences and approvals relevant to our operations, while continually
                looking for practical opportunities to improve our environmental performance.
              </p>
            </div>
          </header>

          {/* Vision */}
          <PolicySection title="Our Vision">
            <p>
              Our vision is to manufacture quality garments responsibly while continuously improving
              the way we use materials, energy, water and other resources.
            </p>

            <p>
              We believe that environmental responsibility and quality manufacturing can work
              together. Our approach is therefore focused on practical improvements that reduce
              waste, encourage responsible resource use and support the long-term sustainability of
              our operations.
            </p>
          </PolicySection>

          {/* Guiding principles */}
          <PolicySection title="Our Guiding Principles">
            <p>
              Environmental responsibility is incorporated into the way we approach our
              manufacturing operations. We seek to:
            </p>

            <ul>
              <li>
                Comply with applicable environmental laws, regulations, licences and other
                requirements relevant to our operations.
              </li>

              <li>
                Use raw materials, water, energy and other resources responsibly and efficiently.
              </li>

              <li>
                Reduce avoidable waste and encourage reuse, recycling and responsible disposal where
                practicable.
              </li>

              <li>
                Consider environmental impacts when making operational and procurement decisions.
              </li>

              <li>
                Maintain responsible practices in the handling and use of packaging and
                manufacturing materials.
              </li>

              <li>
                Promote environmental awareness among our employees and encourage responsible
                workplace practices.
              </li>

              <li>
                Review our practices as our operations develop and identify reasonable opportunities
                for continued improvement.
              </li>
            </ul>
          </PolicySection>

          {/* Priorities */}
          <PolicySection title="Our Environmental Priorities">
            <p>
              Our environmental efforts are focused on areas that are relevant to our garment
              manufacturing operations.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <PriorityCard
                icon={Shirt}
                title="Materials & Production"
                description="We seek to use fabrics, trims and other production materials efficiently and to minimise avoidable material waste throughout our manufacturing processes."
              />

              <PriorityCard
                icon={Recycle}
                title="Waste Management"
                description="We aim to reduce unnecessary waste and support appropriate reuse, recycling and disposal practices for production and operational waste where practicable."
              />

              <PriorityCard
                icon={PackageCheck}
                title="Packaging"
                description="We seek to manage packaging materials responsibly and consider opportunities to reduce unnecessary packaging and improve material efficiency."
              />

              <PriorityCard
                icon={Droplets}
                title="Water & Resources"
                description="We encourage responsible use of water, electricity and other resources within our facilities and seek practical opportunities to improve efficiency."
              />
            </div>
          </PolicySection>

          {/* Continuous improvement */}
          <PolicySection title="Continuous Improvement">
            <p>
              Environmental responsibility is an ongoing process. As our business develops, we will
              continue to review our operations and consider practical measures that can improve
              resource efficiency, reduce waste and strengthen our environmental practices.
            </p>

            <p>
              Where appropriate, we will work with employees, suppliers, customers and other
              business partners to encourage responsible practices connected with the products we
              manufacture and the materials we use.
            </p>
          </PolicySection>

          {/* Responsibility */}
          <PolicySection title="Responsibility">
            <p>
              Responsibility for implementing this policy is shared across Weaverbird. Management is
              responsible for supporting appropriate environmental practices within our operations,
              while employees are expected to follow applicable procedures and use resources
              responsibly in their work.
            </p>

            <p>
              This policy provides the general framework for our environmental approach and may be
              reviewed periodically as our operations, environmental priorities and applicable
              requirements evolve.
            </p>
          </PolicySection>

          <HelpSection />
        </article>
      </div>
    </section>
  );
}

interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
}

function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <section className="mt-14">
      <h2
        className="text-xl font-bold text-maroon sm:text-2xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>

      <div
        className="
          mt-5 space-y-4 text-[15px] leading-7
          [&_strong]:font-semibold [&_strong]:text-foreground
          [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2
          [&_li]:pl-1
        "
      >
        {children}
      </div>
    </section>
  );
}

interface PriorityCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

function PriorityCard({ icon: Icon, title, description }: PriorityCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <span
        className="grid h-11 w-11 place-items-center rounded-full"
        style={{ background: "oklch(0.66 0.22 25 / 0.12)" }}
      >
        <Icon className="h-5 w-5 text-maroon" />
      </span>

      <h3
        className="mt-4 text-lg font-bold"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--primary-deep)",
        }}
      >
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
    </div>
  );
}

function HelpSection() {
  return (
    <section
      className="relative mt-14 overflow-hidden rounded-2xl border border-border bg-cover bg-center px-6 py-12 sm:px-8"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dipkbpinx/image/upload/v1789734686/weaverbird/products/zlans5luhbqoas6wzdbi.jpg")',
      }}
    >
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <span
            className="grid h-16 w-16 shrink-0 place-items-center rounded-full"
            style={{ background: "oklch(0.66 0.22 25 / 0.12)" }}
          >
            <Headset className="h-10 w-10 text-maroon" />
          </span>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon">
              Need help?
            </div>

            <h2
              className="mt-1 text-xl font-bold sm:text-2xl"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--primary-deep)",
              }}
            >
              Have a question about our environmental practices?
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Contact our team for more information about Weaverbird&apos;s environmental policy and
              manufacturing practices.
            </p>
          </div>
        </div>

        <Link
          to="/contact"
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-maroon px-6 py-3 text-sm font-semibold !text-white shadow-md transition-all hover:shadow-lg active:scale-95"
          style={{ boxShadow: "var(--shadow-red)" }}
        >
          Contact Us
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}

function EnvironmentalPolicyHero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dipkbpinx/image/upload/v1790255462/weaverbird/aulqdoq4giwfoabxztcf.jpg")',
      }}
    >
      {/* Dark green overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "oklch(0.12 0.05 155 / 0.62)",
        }}
      />

      <div className="relative mx-auto flex min-h-[280px] max-w-7xl items-center justify-center px-6 py-16 text-center sm:min-h-[320px] sm:py-20 lg:min-h-[380px]">
        <div className="mx-auto max-w-3xl text-white">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            <Leaf className="h-4 w-4 text-maroon" />
            Environment &amp; Sustainability
          </div>

          <h1
            className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Environmental Policy
          </h1>
        </div>
      </div>
    </section>
  );
}
