import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Headset, ArrowRight } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export const Route = createFileRoute("/policies_/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      {
        title: "Privacy Policy | Weaverbird Garments Manufacturers Ltd",
      },
      {
        name: "description",
        content:
          "Learn how Weaverbird Garments Manufacturers Ltd collects, uses, protects and manages personal information.",
      },
    ],
  }),
});

const sections = [
  {
    id: "information-we-collect",
    number: "01",
    title: "Information We Collect",
  },
  {
    id: "how-we-collect-information",
    number: "02",
    title: "How We Collect Information",
  },
  {
    id: "how-we-use-information",
    number: "03",
    title: "How We Use Your Information",
  },
  {
    id: "cookies",
    number: "04",
    title: "Cookies & Similar Technologies",
  },
  {
    id: "information-sharing",
    number: "05",
    title: "Information Sharing",
  },
  {
    id: "information-security",
    number: "06",
    title: "Information Security",
  },
  {
    id: "data-retention",
    number: "07",
    title: "Data Retention",
  },
  {
    id: "your-rights",
    number: "08",
    title: "Your Privacy Rights",
  },
  {
    id: "third-party-links",
    number: "09",
    title: "Third-Party Links",
  },
  {
    id: "international-transfers",
    number: "10",
    title: "International Data Transfers",
  },
  {
    id: "changes",
    number: "11",
    title: "Changes to This Policy",
  },
  {
    id: "contact",
    number: "12",
    title: "Contact Us",
  },
];

function PrivacyPolicyPage() {
  return (
    <div className="min-h-dvh bg-background font-sans" style={{ fontFamily: "var(--font-sans)" }}>
      <Header current="Policies" />
      <main id="main-content">
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </div>
  );
}

function PrivacyPolicyContent() {
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

          {/* Policy */}
          <article className="min-w-0 max-w-4xl">
            <PolicyIntroduction />

            <div className="mt-12 space-y-14">
              <PolicySection id="information-we-collect" number="01" title="Information We Collect">
                <p>
                  We may collect personal information that you provide directly to us when you
                  contact Weaverbird, request a quotation, place an order, make an enquiry, submit a
                  form, communicate with our team or otherwise use our website and services.
                </p>

                <p>This information may include:</p>

                <ul>
                  <li>Your name and contact details.</li>
                  <li>Business or organisation name and relevant business contact information.</li>
                  <li>
                    Delivery, billing and other information required to process an order or enquiry.
                  </li>
                  <li>Information contained in correspondence you send to us.</li>
                  <li>Details about products, services, quotations or orders you request.</li>
                  <li>
                    Technical information generated when you use our website, such as browser,
                    device and usage information.
                  </li>
                </ul>

                <p>
                  We aim to collect only information that is relevant to the purpose for which it is
                  required.
                </p>
              </PolicySection>

              <PolicySection
                id="how-we-collect-information"
                number="02"
                title="How We Collect Information"
              >
                <p>
                  We may collect information directly from you and automatically through your use of
                  our website.
                </p>

                <p>
                  Information may be provided directly when you complete a contact or enquiry form,
                  request a quotation, communicate with us by email or telephone, place an order, or
                  otherwise interact with Weaverbird.
                </p>

                <p>
                  Certain technical information may also be collected automatically when you access
                  our website through cookies and similar technologies.
                </p>
              </PolicySection>

              <PolicySection
                id="how-we-use-information"
                number="03"
                title="How We Use Your Information"
              >
                <p>
                  We use personal information for legitimate business and operational purposes,
                  including to:
                </p>

                <ul>
                  <li>Respond to enquiries and requests for information.</li>
                  <li>Prepare quotations and process customer orders.</li>
                  <li>Communicate with customers about orders, products and services.</li>
                  <li>Arrange delivery, fulfilment and other requested services.</li>
                  <li>Provide customer support and manage our business relationships.</li>
                  <li>Maintain and improve our website and services.</li>
                  <li>
                    Protect our website, systems, customers and business from misuse, fraud or
                    security threats.
                  </li>
                  <li>Comply with applicable legal, regulatory and record-keeping obligations.</li>
                </ul>
              </PolicySection>

              <PolicySection id="cookies" number="04" title="Cookies & Similar Technologies">
                <p>
                  Our website may use cookies and similar technologies to support website
                  functionality, understand how visitors use our website and improve the browsing
                  experience.
                </p>

                <p>
                  Cookies are small data files stored on your device when you visit certain
                  websites. Depending on the type of cookie, they may be necessary for website
                  operation or used for analytics and preferences.
                </p>

                <p>
                  For additional information about the cookies we use and the choices available to
                  you, please refer to our Cookies Policy.
                </p>
              </PolicySection>

              <PolicySection id="information-sharing" number="05" title="Information Sharing">
                <p>
                  We do not sell your personal information. We may share information where
                  reasonably necessary to operate our business and provide our services.
                </p>

                <p>
                  This may include sharing relevant information with service providers that support
                  functions such as website hosting, technology, communications, payment processing,
                  delivery or professional services.
                </p>

                <p>
                  We may also disclose information where required by law, regulation, legal process
                  or a lawful request from an authorised public authority.
                </p>
              </PolicySection>

              <PolicySection id="information-security" number="06" title="Information Security">
                <p>
                  We take reasonable administrative, organisational and technical measures designed
                  to protect personal information against unauthorised access, loss, misuse,
                  alteration or disclosure.
                </p>

                <p>
                  While we take appropriate steps to safeguard information, no internet transmission
                  or electronic storage system can be guaranteed to be completely secure.
                </p>
              </PolicySection>

              <PolicySection id="data-retention" number="07" title="Data Retention">
                <p>
                  We retain personal information only for as long as reasonably necessary for the
                  purposes for which it was collected, including fulfilling business, contractual,
                  accounting, legal and regulatory requirements.
                </p>

                <p>
                  The appropriate retention period may vary depending on the type of information,
                  the purpose for which it is processed and any applicable legal obligations.
                </p>
              </PolicySection>

              <PolicySection id="your-rights" number="08" title="Your Privacy Rights">
                <p>
                  Subject to applicable data protection law, you may have rights regarding the
                  personal information we hold about you. These may include the right to request
                  access to your personal information and to request that inaccurate or incomplete
                  information be corrected.
                </p>

                <p>
                  Depending on the circumstances and applicable law, you may also be able to request
                  deletion, object to or restrict certain processing, or withdraw consent where
                  processing is based on consent.
                </p>

                <p>
                  To make a privacy-related request, please contact us using the details provided at
                  the end of this policy. We may need to verify your identity before completing
                  certain requests.
                </p>
              </PolicySection>

              <PolicySection id="third-party-links" number="09" title="Third-Party Links">
                <p>
                  Our website may contain links to websites or services operated by third parties.
                  Their privacy practices are governed by their own policies and are not controlled
                  by Weaverbird.
                </p>

                <p>
                  We encourage you to review the privacy information provided by third-party
                  websites before providing personal information to them.
                </p>
              </PolicySection>

              <PolicySection
                id="international-transfers"
                number="10"
                title="International Data Transfers"
              >
                <p>
                  Some service providers used to support our website or business operations may
                  process information in countries other than the country in which it was originally
                  collected.
                </p>

                <p>
                  Where personal information is transferred across borders, we take appropriate
                  steps to ensure that it is handled in accordance with applicable data protection
                  requirements.
                </p>
              </PolicySection>

              <PolicySection id="changes" number="11" title="Changes to This Privacy Policy">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes to our
                  practices, services, technology or applicable requirements.
                </p>

                <p>
                  When we make changes, the revised policy will be published on this page and the
                  effective date will be updated where appropriate.
                </p>
              </PolicySection>

              <PolicySection id="contact" number="12" title="Contact Us">
                <p>
                  If you have questions about this Privacy Policy, how we handle personal
                  information, or wish to make a privacy-related request, please contact us.
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

      <h2
        className="mt-6 text-2xl font-bold text-foreground sm:text-3xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Our commitment to your privacy
      </h2>

      <div className="mt-5 space-y-4 text-[15px] leading-7">
        <p>
          Weaverbird Garments Manufacturers Ltd (&quot;Weaverbird&quot;, &quot;we&quot;,
          &quot;our&quot; or &quot;us&quot;) respects your privacy and is committed to handling
          personal information responsibly.
        </p>

        <p>
          This Privacy Policy explains the types of personal information we may collect when you
          visit our website, contact us, request information, purchase our products or otherwise
          interact with us. It also explains how we may use, protect and share that information and
          the choices available to you.
        </p>

        <p>
          Please read this policy together with any additional privacy information that may be
          provided when we collect personal information from you.
        </p>
      </div>
    </header>
  );
}

function TableOfContents() {
  return (
    <nav aria-label="Privacy policy contents">
      <div className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-maroon">
        On this page
      </div>

      <div className="border-l border-border">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center gap-3 border-l-2 border-transparent py-2.5 pl-4 pr-2 text-sm  transition-colors hover:border-maroon hover:text-maroon"
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
            className="flex gap-3 border-b border-border/60 py-3 text-sm  last:border-0 hover:text-maroon"
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
              If you have any questions about our privacy policy, our team is here to help.
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
