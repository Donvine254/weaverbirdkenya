import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Headset, ArrowRight } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export const Route = createFileRoute("/policies_/terms-of-use")({
  component: TermsOfUsePage,
  head: () => ({
    meta: [
      {
        title: "Terms of Use | Weaverbird Garments Manufacturers Ltd",
      },
      {
        name: "description",
        content:
          "Terms and conditions governing the use of the Weaverbird Garments Manufacturers Ltd website, content and online services.",
      },
    ],
  }),
});

const sections = [
  {
    id: "acceptance-of-terms",
    number: "01",
    title: "Acceptance of These Terms",
  },
  {
    id: "use-of-website",
    number: "02",
    title: "Use of Our Website",
  },
  {
    id: "product-information",
    number: "03",
    title: "Product & Service Information",
  },
  {
    id: "quotations-and-orders",
    number: "04",
    title: "Quotations & Orders",
  },
  {
    id: "intellectual-property",
    number: "05",
    title: "Intellectual Property",
  },
  {
    id: "user-submissions",
    number: "06",
    title: "Information You Submit",
  },
  {
    id: "third-party-links",
    number: "07",
    title: "Third-Party Links",
  },
  {
    id: "website-availability",
    number: "08",
    title: "Website Availability",
  },
  {
    id: "disclaimers",
    number: "09",
    title: "Disclaimers",
  },
  {
    id: "limitation-of-liability",
    number: "10",
    title: "Limitation of Liability",
  },
  {
    id: "privacy",
    number: "11",
    title: "Privacy",
  },
  {
    id: "changes-to-terms",
    number: "12",
    title: "Changes to These Terms",
  },
  {
    id: "governing-law",
    number: "13",
    title: "Governing Law",
  },
  {
    id: "contact",
    number: "14",
    title: "Contact Us",
  },
];

function TermsOfUsePage() {
  return (
    <div className="min-h-dvh bg-background font-sans" style={{ fontFamily: "var(--font-sans)" }}>
      <Header current="Policies" />

      <main id="main-content">
        <TermsOfUseContent />
      </main>

      <Footer />
    </div>
  );
}

function TermsOfUseContent() {
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

          {/* Terms */}
          <article className="min-w-0 max-w-4xl">
            <TermsIntroduction />

            <div className="mt-12 space-y-14">
              <PolicySection id="acceptance-of-terms" number="01" title="Acceptance of These Terms">
                <p>
                  These Terms of Use govern your access to and use of the Weaverbird Garments
                  Manufacturers Ltd website and the information, features and resources made
                  available through it.
                </p>

                <p>
                  By accessing or using this website, you agree to comply with these Terms of Use.
                  If you do not agree with these terms, please discontinue use of the website.
                </p>

                <p>
                  These Terms of Use relate primarily to use of our website. Additional terms may
                  apply to quotations, orders, contracts, deliveries or other transactions between
                  you and Weaverbird.
                </p>
              </PolicySection>

              <PolicySection id="use-of-website" number="02" title="Use of Our Website">
                <p>
                  You may use our website for lawful purposes, including learning about Weaverbird,
                  viewing our products and services, contacting our team and requesting information
                  or quotations.
                </p>

                <p>You must not use our website to:</p>

                <ul>
                  <li>
                    Violate any applicable law, regulation or the rights of another person or
                    organisation.
                  </li>
                  <li>
                    Attempt to gain unauthorised access to our website, servers, systems or
                    networks.
                  </li>
                  <li>
                    Introduce viruses, malicious code or other material that could interfere with
                    the operation or security of the website.
                  </li>
                  <li>
                    Interfere with, damage or disrupt the website or another person's use of it.
                  </li>
                  <li>
                    Use automated systems to extract or reproduce substantial portions of website
                    content without our permission.
                  </li>
                  <li>
                    Misrepresent your identity or provide deliberately false or misleading
                    information to Weaverbird.
                  </li>
                </ul>

                <p>
                  We reserve the right to restrict access to the website where we reasonably believe
                  these Terms of Use have been violated.
                </p>
              </PolicySection>

              <PolicySection
                id="product-information"
                number="03"
                title="Product & Service Information"
              >
                <p>
                  We aim to present our garments, uniforms, promotional items, manufacturing
                  capabilities and other services accurately and clearly.
                </p>

                <p>
                  Product photographs, illustrations, colours, specifications, descriptions and
                  other website content are provided for general information. Actual products may
                  vary depending on materials, sizing, customisation, production requirements,
                  screen display settings and other relevant factors.
                </p>

                <p>
                  Information displayed on the website does not by itself constitute a binding offer
                  to manufacture or supply a particular product.
                </p>
              </PolicySection>

              <PolicySection id="quotations-and-orders" number="04" title="Quotations & Orders">
                <p>
                  Information submitted through our website may be used to request a quotation or
                  begin discussions about an order. Submitting an enquiry or quotation request does
                  not by itself create a contract between you and Weaverbird.
                </p>

                <p>
                  Pricing, quantities, specifications, branding, materials, production timelines,
                  delivery arrangements, payment terms and other requirements may need to be
                  confirmed separately before an order is accepted.
                </p>

                <p>
                  Where separate quotation, invoice, purchase order, contract or supply terms apply
                  to a transaction, those terms may contain additional conditions governing the
                  relevant order.
                </p>
              </PolicySection>

              <PolicySection id="intellectual-property" number="05" title="Intellectual Property">
                <p>
                  Unless otherwise stated, the content made available on this website, including
                  text, graphics, photographs, product images, designs, logos, branding, layout and
                  other materials, is owned by or licensed to Weaverbird and may be protected by
                  applicable intellectual property laws.
                </p>

                <p>
                  You may view and use website content for ordinary personal or business reference
                  purposes. You may not reproduce, republish, distribute, modify, commercially
                  exploit or create derivative works from protected website content without
                  appropriate permission.
                </p>

                <p>
                  Third-party names, logos, trademarks and other intellectual property displayed on
                  the website remain the property of their respective owners.
                </p>

                <p>
                  Additional information about the use of our brand and website materials is
                  provided in our Trademark &amp; Copyright Policy.
                </p>
              </PolicySection>

              <PolicySection id="user-submissions" number="06" title="Information You Submit">
                <p>
                  You are responsible for ensuring that information you provide through our website
                  is accurate and that you have the authority to provide it.
                </p>

                <p>
                  If you provide artwork, logos, names, designs, specifications or other materials
                  for the purpose of requesting customised products or services, you are responsible
                  for ensuring that your requested use of those materials does not unlawfully
                  infringe the rights of another person or organisation.
                </p>

                <p>
                  Information containing personal data will be handled in accordance with our
                  Privacy Policy.
                </p>
              </PolicySection>

              <PolicySection id="third-party-links" number="07" title="Third-Party Links">
                <p>
                  Our website may contain links to websites, platforms or services operated by third
                  parties. These links may be provided for convenience or additional information.
                </p>

                <p>
                  Third-party websites operate independently from Weaverbird. Their content,
                  availability, security, terms and privacy practices are governed by their
                  respective operators.
                </p>

                <p>
                  The inclusion of a third-party link does not necessarily imply endorsement of that
                  website, its operator, products or services.
                </p>
              </PolicySection>

              <PolicySection id="website-availability" number="08" title="Website Availability">
                <p>
                  We aim to keep our website accessible and functioning properly, but we do not
                  guarantee that it will always be available or operate without interruption.
                </p>

                <p>
                  We may modify, suspend, restrict or discontinue all or part of the website where
                  reasonably necessary for maintenance, security, updates, operational requirements
                  or other business reasons.
                </p>
              </PolicySection>

              <PolicySection id="disclaimers" number="09" title="Disclaimers">
                <p>
                  We take reasonable care in preparing information published on our website.
                  However, website content is provided primarily for general informational purposes
                  and may be updated from time to time.
                </p>

                <p>
                  To the extent permitted by applicable law, we do not warrant that all website
                  information will always be complete, current, error-free or suitable for every
                  particular purpose.
                </p>

                <p>
                  Before relying on product specifications, pricing, availability, production
                  timelines or other information for a transaction, please confirm the relevant
                  details with Weaverbird.
                </p>
              </PolicySection>

              <PolicySection
                id="limitation-of-liability"
                number="10"
                title="Limitation of Liability"
              >
                <p>
                  To the extent permitted by applicable law, Weaverbird will not be responsible for
                  losses arising solely from your inability to access the website, reliance on
                  general website information without obtaining appropriate confirmation, or the
                  acts or services of independent third parties.
                </p>

                <p>
                  Nothing in these Terms of Use is intended to exclude or limit any liability or
                  legal right that cannot lawfully be excluded or limited.
                </p>
              </PolicySection>

              <PolicySection id="privacy" number="11" title="Privacy">
                <p>
                  Your privacy is important to us. Personal information collected through your use
                  of our website or interactions with Weaverbird is handled in accordance with our
                  Privacy Policy.
                </p>

                <p>
                  Our Privacy Policy explains the types of personal information we may collect, how
                  we use and protect that information and the choices that may be available to you.
                </p>

                <Link
                  to="/policies/privacy-policy"
                  className="inline-flex items-center gap-2 font-semibold text-maroon hover:underline"
                >
                  Read our Privacy Policy
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </PolicySection>

              <PolicySection id="changes-to-terms" number="12" title="Changes to These Terms">
                <p>
                  We may revise these Terms of Use from time to time to reflect changes to our
                  website, services, business practices or applicable requirements.
                </p>

                <p>
                  Updated terms will be published on this page. Where appropriate, we will also
                  update the effective date shown at the beginning of these Terms of Use.
                </p>

                <p>
                  Your continued use of the website after revised terms become effective will be
                  subject to the updated Terms of Use.
                </p>
              </PolicySection>

              <PolicySection id="governing-law" number="13" title="Governing Law">
                <p>
                  These Terms of Use are governed by the laws applicable to Weaverbird Garments
                  Manufacturers Ltd and are subject to the jurisdiction of the competent courts,
                  except where applicable law requires otherwise.
                </p>

                <p>
                  Any dispute relating specifically to a commercial order or contract may also be
                  governed by the terms agreed for that transaction.
                </p>
              </PolicySection>

              <PolicySection id="contact" number="14" title="Contact Us">
                <p>
                  If you have questions about these Terms of Use, the use of our website or any of
                  the information published on it, please contact us.
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

function TermsIntroduction() {
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
        Terms of Use
      </h1>

      <div className="mt-5 space-y-4 text-[15px] leading-7">
        <p>
          Welcome to the website of Weaverbird Garments Manufacturers Ltd (&quot;Weaverbird&quot;,
          &quot;we&quot;, &quot;our&quot; or &quot;us&quot;).
        </p>

        <p>
          These Terms of Use explain the rules that apply when you access, browse or use our website
          and its content, features and online resources.
        </p>

        <p>
          Please read these terms carefully. By accessing or using this website, you acknowledge
          that your use of the website is subject to these Terms of Use and any applicable laws and
          regulations.
        </p>
      </div>
    </header>
  );
}

function TableOfContents() {
  return (
    <nav aria-label="Terms of use contents">
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
            style={{
              background: "oklch(0.66 0.22 25 / 0.12)",
            }}
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
              If you have any questions about our Terms of Use, our team is here to help.
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
