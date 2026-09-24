import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Cookie,
  Copyright,
  FileText,
  Handshake,
  Headset,
  Leaf,
  LockKeyhole,
  PackageCheck,
  Scale,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

const HERO_IMAGE =
  "https://res.cloudinary.com/dipkbpinx/image/upload/v1789732032/weaverbird/products/r6ymdgb6ibkmqtmdzgzj.jpg";

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      {
        title: "Company Policies — Weaverbird Apparel Solutions",
      },
      {
        name: "description",
        content:
          "View Weaverbird Garments Manufacturers Ltd policies, including privacy, cookies, terms of use, returns and exchanges, human rights, intellectual property and responsible business practices.",
      },
      {
        name: "keywords",
        content:
          "Weaverbird policies, privacy policy, cookies policy, terms of use, returns policy, human rights statement, copyright policy, Kenya garment manufacturer policies",
      },
      {
        property: "og:title",
        content: "Company Policies — Weaverbird Apparel Solutions",
      },
      {
        property: "og:description",
        content:
          "Our policies and commitments covering customers, privacy, responsible manufacturing and ethical business practices.",
      },
      {
        property: "og:image",
        content: HERO_IMAGE,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://weaverbirdkenya.lovable.app/policies",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:image",
        content: HERO_IMAGE,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://weaverbirdkenya.lovable.app/policies",
      },
    ],
  }),

  component: PoliciesPage,
});

type Policy = {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const policies: Policy[] = [
  {
    title: "Terms of Use",
    description:
      "Rules and guidelines for using our website, digital services and online resources.",
    href: "/policies/terms-of-use",
    icon: FileText,
  },
  {
    title: "Privacy Policy",
    description: "How we collect, use, store and protect your personal information.",
    href: "/policies/privacy-policy",
    icon: LockKeyhole,
  },
  {
    title: "Cookies Policy",
    description: "Information about how we use cookies and similar technologies on our website.",
    href: "/policies/cookies-policy",
    icon: Cookie,
  },
  {
    title: "Return & Exchange Policy",
    description:
      "Our guidelines for eligible returns, exchanges, replacements and related requests.",
    href: "/resources/return_and_exchange_policy.pdf",
    icon: PackageCheck,
  },
  {
    title: "Frequently Asked Questions",
    description: "Answers to common questions about our products, orders, services and processes.",
    href: "/faq",
    icon: BookOpen,
  },
  {
    title: "Trademark & Copyright Policy",
    description:
      "How our trademarks, designs, website content and other intellectual property are protected.",
    href: "/resources/trademark_and_copyright_policy.pdf",
    icon: Copyright,
  },
  {
    title: "Human Rights Statement",
    description:
      "Our commitment to respecting human rights across our operations and supply chain.",
    href: "/resources/human_rights_policy_statement.pdf",
    icon: Users,
  },
  {
    title: "Environmental Policy",
    description:
      "Our approach to responsible manufacturing, waste reduction and environmental stewardship.",
    href: "/policies/environmental-policy",
    icon: Leaf,
  },
  {
    title: "Anti-Bribery & Anti-Corruption Policy",
    description: "Our standards for conducting business honestly, fairly and transparently.",
    href: "/policies/anti-bribery-and-corruption",
    icon: ShieldCheck,
  },
  {
    title: "Code of Conduct",
    description:
      "The principles and standards that guide our employees and business relationships.",
    href: "/policies/code-of-conduct",
    icon: Scale,
  },
  {
    title: "Responsible Sourcing Policy",
    description: "Our commitment to responsible sourcing and ethical supply-chain practices.",
    href: "/policies/responsible-sourcing",
    icon: Truck,
  },
  {
    title: "Supplier Code of Conduct",
    description:
      "The standards we expect suppliers and business partners working with Weaverbird to uphold.",
    href: "/policies/supplier-code-of-conduct",
    icon: Handshake,
  },
];

function PoliciesPage() {
  return (
    <div className="min-h-dvh bg-background font-sans" style={{ fontFamily: "var(--font-sans)" }}>
      <Header current="Policies" />

      <main id="main-content">
        <PoliciesHero />
        <PoliciesDirectory />
      </main>

      <Footer />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

function PoliciesHero() {
  const commitments = [
    {
      icon: ShieldCheck,
      title: "Ethical",
      subtitle: "Business Practices",
    },
    {
      icon: Users,
      title: "People",
      subtitle: "Focused",
    },
    {
      icon: Leaf,
      title: "Responsible",
      subtitle: "Manufacturing",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-cover bg-right sm:bg-center lg:min-h-[500px]"
      style={{
        backgroundImage: `url("${HERO_IMAGE}")`,
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.13 0.05 155 / 0.72), oklch(0.10 0.06 155 / 0.42))",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 text-white sm:py-20 md:pt-24 md:pb-16 lg:pt-36 lg:pb-16">
        <div className="max-w-xl animate-fade-in-up">
          {/* Eyebrow */}
          <div className="hidden sm:block text-xs font-semibold uppercase tracking-widest text-white/80">
            Trust. Responsibility. Transparency.
          </div>

          {/* Heading */}
          <h1
            className="mt-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Policies
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
            We are committed to doing business responsibly, ethically and transparently. Find our
            policies, guidelines and important information in one place.
          </p>

          {/* Accent */}
          <div className="mt-6 h-1 w-12 rounded-full bg-maroon" />

          {/* Commitments */}
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-7">
            {commitments.map(({ icon: Icon, title, subtitle }) => (
              <div
                key={title}
                className={`flex shrink-0 items-center gap-2 sm:gap-2.5 ${
                  title === "People" ? "hidden sm:flex" : ""
                }`}
              >
                <span
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full sm:h-9 sm:w-9"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                >
                  <Icon
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                    style={{ color: "var(--accent-red)" }}
                  />
                </span>

                <div className="whitespace-nowrap text-[10px] leading-tight sm:text-xs">
                  <div className="font-semibold text-white">{title}</div>
                  <div className="mt-0.5 text-white/70">{subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Policy directory                                                           */
/* -------------------------------------------------------------------------- */

function PoliciesDirectory() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <SectionHeader
        eyebrow="Everything you need to know, all in one place"
        title="All Company Policies"
        subtitle="Browse our policies to learn more about how we operate, protect your information, uphold our values and serve our customers and partners."
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {policies.map((policy) => (
          <PolicyCard key={policy.title} policy={policy} />
        ))}
      </div>
      <HelpSection />
    </section>
  );
}

function PolicyCard({ policy }: { policy: Policy }) {
  const Icon = policy.icon;
  const isDocument = policy.href.toLowerCase().endsWith(".pdf");

  const content = (
    <>
      <span
        className="grid h-14 w-14 place-items-center rounded-full"
        style={{
          background: "oklch(0.66 0.22 25 / 0.12)",
        }}
      >
        <Icon className="h-8 w-8 text-maroon" />
      </span>

      <h2
        className="mt-5 text-lg font-bold leading-snug"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--primary-deep)",
        }}
      >
        {policy.title}
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{policy.description}</p>

      <div className="mt-auto pt-5">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-maroon">
          {policy.href === "/faq" ? "View FAQs" : isDocument ? "View Document" : "Read Policy"}

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </>
  );

  const className =
    "group flex min-h-[255px] flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-maroon/30 hover:shadow-md";

  if (isDocument) {
    return (
      <a href={policy.href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link to={policy.href} className={className}>
      {content}
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* Help CTA                                                                   */
/* -------------------------------------------------------------------------- */
function HelpSection() {
  return (
    <section
      className="relative mt-12 overflow-hidden rounded-2xl border border-border bg-cover bg-center px-6 py-12 sm:px-8"
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
              Can&apos;t find what you&apos;re looking for?
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              If you have any questions about our policies, our team is here to help.
            </p>
          </div>
        </div>

        <Link
          to="/contact"
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-maroon px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
          style={{ boxShadow: "var(--shadow-red)" }}
        >
          Contact Us
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
/* -------------------------------------------------------------------------- */
/* Shared section heading                                                     */
/* -------------------------------------------------------------------------- */

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
      <div className="text-xs font-semibold uppercase tracking-widest text-maroon">
        &mdash; {eyebrow}
      </div>

      <h2
        className="mt-2 text-3xl font-bold sm:text-4xl"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--primary-deep)",
        }}
      >
        {title}
      </h2>

      {subtitle && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
