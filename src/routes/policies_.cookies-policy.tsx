import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Headset, ArrowRight } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { seoMeta } from "@/lib/seo";

export const Route = createFileRoute("/policies_/cookies-policy")({
  component: CookiesPolicyPage,
  head: () =>
    seoMeta({
      title: "Cookie Policy",
      description:
        "Learn how Weaverbird Garments Manufacturers Ltd uses cookies and analytics technologies on its website.",
      path: "/policies/cookies-policy",
    }),
});

const sections = [
  {
    id: "what-are-cookies",
    number: "01",
    title: "What Are Cookies?",
  },
  {
    id: "how-we-use-cookies",
    number: "02",
    title: "How We Use Cookies",
  },
  {
    id: "google-analytics",
    number: "03",
    title: "Google Analytics",
  },
  {
    id: "microsoft-clarity",
    number: "04",
    title: "Microsoft Clarity",
  },
  {
    id: "information-collected",
    number: "05",
    title: "Information Collected Through Analytics",
  },
  {
    id: "cookies-we-do-not-use",
    number: "06",
    title: "Cookies We Do Not Use",
  },
  {
    id: "managing-cookies",
    number: "07",
    title: "Managing Your Cookie Preferences",
  },
  {
    id: "third-party-services",
    number: "08",
    title: "Third-Party Services",
  },
  {
    id: "changes",
    number: "09",
    title: "Changes to This Cookie Policy",
  },
  {
    id: "contact",
    number: "10",
    title: "Contact Us",
  },
];

function CookiesPolicyPage() {
  return (
    <div className="min-h-dvh bg-background font-sans" style={{ fontFamily: "var(--font-sans)" }}>
      <Header current="Policies" />

      <main id="main-content">
        <CookiesPolicyContent />
      </main>

      <Footer />
    </div>
  );
}

function CookiesPolicyContent() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        {/* Mobile / tablet contents */}
        <div className="mb-10 lg:hidden">
          <MobileTableOfContents />
        </div>

        <div className="lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-16">
          {/* Desktop sticky navigation */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents />
            </div>
          </aside>

          {/* Cookie Policy */}
          <article className="min-w-0 max-w-4xl">
            <PolicyIntroduction />

            <div className="mt-12 space-y-14">
              <PolicySection id="what-are-cookies" number="01" title="What Are Cookies?">
                <p>
                  Cookies are small text files that websites may place on your device when you visit
                  them. Cookies can be used for purposes such as remembering preferences, supporting
                  website functionality and understanding how visitors interact with a website.
                </p>

                <p>
                  Similar technologies may also be used to collect information about website usage
                  and interactions. In this policy, we use the term &quot;cookies&quot; to refer
                  generally to cookies and similar technologies where appropriate.
                </p>
              </PolicySection>

              <PolicySection id="how-we-use-cookies" number="02" title="How We Use Cookies">
                <p>
                  Weaverbird Garments Manufacturers Ltd (&quot;Weaverbird&quot;, &quot;we&quot;,
                  &quot;our&quot; or &quot;us&quot;) uses a limited number of cookies and similar
                  technologies on this website.
                </p>

                <p>
                  We use analytics technologies to help us understand how our website is being used
                  and to identify opportunities to improve its performance, navigation and user
                  experience.
                </p>

                <p>
                  Our planned analytics services are Google Analytics and Microsoft Clarity. We do
                  not currently use cookies for advertising or for operating user accounts on this
                  website.
                </p>
              </PolicySection>

              <PolicySection id="google-analytics" number="03" title="Google Analytics">
                <p>
                  We use Google Analytics to understand general patterns in how visitors use our
                  website.
                </p>

                <p>
                  Google Analytics may use cookies and related technologies to collect information
                  about website activity. This can help us understand matters such as which pages
                  are visited, how users navigate through the website and how the website performs.
                </p>

                <p>
                  Information collected through Google Analytics is processed by Google in
                  accordance with its applicable terms and privacy practices.
                </p>
              </PolicySection>

              <PolicySection id="microsoft-clarity" number="04" title="Microsoft Clarity">
                <p>
                  We use Microsoft Clarity to better understand how visitors interact with our
                  website and to help us improve its usability and performance.
                </p>

                <p>
                  Clarity may use cookies and similar technologies to collect information about
                  website interactions, such as how visitors navigate pages and interact with
                  website elements.
                </p>

                <p>
                  Information collected through Microsoft Clarity is processed by Microsoft in
                  accordance with its applicable terms and privacy practices.
                </p>
              </PolicySection>

              <PolicySection
                id="information-collected"
                number="05"
                title="Information Collected Through Analytics"
              >
                <p>
                  When analytics services are enabled, Google Analytics and Microsoft Clarity may
                  automatically receive or generate technical and usage information relating to
                  visits to our website.
                </p>

                <p>Depending on the service and its configuration, this may include:</p>

                <ul>
                  <li>Pages viewed and website navigation.</li>
                  <li>Approximate visit times and session duration.</li>
                  <li>Browser and device information.</li>
                  <li>Operating system and general technical information.</li>
                  <li>General or approximate location information.</li>
                  <li>Interactions with pages, links and other website elements.</li>
                  <li>Referring websites or sources through which visitors reach our website.</li>
                </ul>

                <p>
                  We use this information to understand website performance and usage trends rather
                  than to ask visitors to create profiles or accounts with Weaverbird.
                </p>
              </PolicySection>

              <PolicySection id="cookies-we-do-not-use" number="06" title="Cookies We Do Not Use">
                <p>
                  Our website does not currently use cookies for operating customer accounts,
                  remembering shopping baskets or providing personalised advertising.
                </p>

                <p>
                  We also do not currently use advertising cookies to build advertising profiles of
                  visitors for Weaverbird.
                </p>

                <p>
                  If we introduce additional cookie-based functionality in the future, we will
                  update this policy and, where required, the choices presented to website visitors.
                </p>
              </PolicySection>

              <PolicySection
                id="managing-cookies"
                number="07"
                title="Managing Your Cookie Preferences"
              >
                <p>
                  Where required, you may be given the opportunity to accept or reject non-essential
                  cookies through the cookie controls provided on our website.
                </p>

                <p>
                  You can also control or delete cookies through your browser settings. Most
                  browsers allow you to view stored cookies, delete them and control whether
                  websites are permitted to store cookies on your device.
                </p>

                <p>
                  Blocking certain cookies or technologies may affect some website functionality or
                  our ability to understand how the website is being used.
                </p>
              </PolicySection>

              <PolicySection id="third-party-services" number="08" title="Third-Party Services">
                <p>
                  Google Analytics and Microsoft Clarity are third-party services. Cookies or
                  similar technologies placed or operated by these providers are subject to their
                  respective privacy practices and terms.
                </p>

                <p>
                  We encourage you to review the privacy and cookie information provided by Google
                  and Microsoft if you would like additional information about how their services
                  process data.
                </p>
              </PolicySection>

              <PolicySection id="changes" number="09" title="Changes to This Cookie Policy">
                <p>
                  We may update this Cookie Policy if we change the technologies used on our website
                  or if our legal or operational requirements change.
                </p>

                <p>
                  Any revised policy will be published on this page. Where appropriate, we will also
                  update the effective date shown at the beginning of the policy.
                </p>
              </PolicySection>

              <PolicySection id="contact" number="10" title="Contact Us">
                <p>
                  If you have questions about our use of cookies or analytics technologies, please
                  contact us.
                </p>

                <HelpSection />
              </PolicySection>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function PolicyIntroduction() {
  return (
    <header>
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-semibold text-foreground">
          Effective Date: 1 January 2026
        </span>
      </div>

      <h1
        className="mt-6 text-2xl font-bold text-foreground sm:text-3xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Cookie Policy
      </h1>

      <div className="mt-5 space-y-4 text-[15px] leading-7">
        <p>
          This Cookie Policy explains how Weaverbird Garments Manufacturers Ltd uses cookies and
          similar technologies when you visit our website.
        </p>

        <p>
          We keep our use of these technologies limited. We use Google Analytics and Microsoft
          Clarity to help us understand website usage, performance and visitor interactions so that
          we can improve the website.
        </p>

        <p>
          This policy should be read together with our Privacy Policy, which provides additional
          information about how we handle personal information.
        </p>

        <Link
          to="/policies/privacy-policy"
          className="inline-flex items-center gap-2 font-semibold text-maroon hover:underline"
        >
          Read our Privacy Policy
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}

function TableOfContents() {
  return (
    <nav aria-label="Cookie policy contents">
      <div className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-maroon">
        On this page
      </div>

      <div className="border-l border-border">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center gap-3 border-l-2 border-transparent py-2.5 pl-4 pr-2 text-sm transition-colors hover:border-maroon hover:text-maroon"
          >
            <span className="shrink-0 text-xs font-semibold">{section.number}</span>

            <span className="leading-snug">{section.title}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

function MobileTableOfContents() {
  return (
    <details className="group rounded-2xl border border-border bg-card shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-semibold text-foreground">
        <span>On this page</span>

        <ChevronRight className="h-4 w-4 text-maroon transition-transform group-open:rotate-90" />
      </summary>

      <div className="border-t border-border px-5 py-3">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="flex gap-3 border-b border-border/60 py-3 text-sm last:border-0 hover:text-maroon"
          >
            <span className="text-xs font-semibold text-maroon">{section.number}</span>

            {section.title}
          </a>
        ))}
      </div>
    </details>
  );
}

interface PolicySectionProps {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}

function PolicySection({ id, number, title, children }: PolicySectionProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2
        className="mt-1 text-xl font-bold text-maroon sm:text-2xl"
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
          [&_a]:font-semibold [&_a]:text-maroon
          [&_a:hover]:underline
        "
      >
        {children}
      </div>
    </section>
  );
}

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
              If you have any questions about our Cookie Policy, our team is here to help.
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
