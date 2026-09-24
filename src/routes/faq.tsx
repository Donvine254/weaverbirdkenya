import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  CircleHelp,
  Clock3,
  Headset,
  PackageCheck,
  Palette,
  Ruler,
  Shirt,
  Truck,
} from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
  head: () => ({
    meta: [
      {
        title: "Frequently Asked Questions | Weaverbird Garments Manufacturers Ltd",
      },
      {
        name: "description",
        content:
          "Find answers to frequently asked questions about Weaverbird garments, custom branding, sizing, orders, production and delivery.",
      },
    ],
  }),
});

const faqGroups = [
  {
    title: "Orders & Production",
    icon: PackageCheck,
    description: "Information about placing orders, quantities and production.",
    questions: [
      {
        question: "How do I place an order with Weaverbird?",
        answer:
          "You can contact our team with the garments or products you require, quantities, sizes, branding requirements and any other relevant specifications. We will review your requirements and provide further information or a quotation before production begins.",
      },
      {
        question: "Do you have a minimum order quantity?",
        answer:
          "Minimum quantities may vary depending on the product, fabric, branding method and level of customisation required. Contact our team with your requirements and we will advise you on the applicable quantity.",
      },
      {
        question: "How long does production take?",
        answer:
          "Production timelines depend on the type of garment, order quantity, availability of materials, customisation requirements and our production schedule at the time of ordering. An estimated timeline can be provided when your order requirements are confirmed.",
      },
      {
        question: "Can I request a quotation before placing an order?",
        answer:
          "Yes. You can request a quotation by providing details of the products you require, quantities, sizes, branding or customisation requirements and any relevant delivery information.",
      },
      {
        question: "Can Weaverbird handle large or bulk orders?",
        answer:
          "Yes. Weaverbird manufactures garments for institutions, businesses, organisations and other customers requiring bulk quantities. Production requirements and timelines are assessed based on the specifications and size of each order.",
      },
    ],
  },

  {
    title: "Products & Customisation",
    icon: Shirt,
    description: "Learn more about our garments, designs and branding options.",
    questions: [
      {
        question: "What types of garments do you manufacture?",
        answer:
          "We manufacture a broad range of garments including school uniforms, corporate wear, workwear and overalls, security uniforms, medical wear, hospitality wear, T-shirts and polo shirts, sweaters and jumpers, tracksuits and sportswear, as well as selected promotional products.",
      },
      {
        question: "Can you manufacture garments to our specifications?",
        answer:
          "Yes. Depending on the product and order requirements, garments can be manufactured according to agreed specifications such as fabric, colour, sizing, design details and branding.",
      },
      {
        question: "Can you add our organisation's logo to garments?",
        answer:
          "Yes. Branding can be incorporated into many of the garments we manufacture. Available options depend on the product, material, artwork and branding requirements.",
      },
      {
        question: "Can we choose our own colours and fabrics?",
        answer:
          "Colour and material options depend on the garment, required performance characteristics and material availability. Our team can discuss suitable options when reviewing your requirements.",
      },
      {
        question: "Do you manufacture both standard and custom uniforms?",
        answer:
          "Yes. We manufacture garments for a variety of uniform requirements and can work with customer specifications where customisation is required.",
      },
    ],
  },

  {
    title: "Sizing & Samples",
    icon: Ruler,
    description: "Guidance on sizing, measurements and product samples.",
    questions: [
      {
        question: "How do I know which garment sizes to order?",
        answer:
          "Our size guide can help you identify suitable garment sizes. For institutional or bulk orders, we recommend confirming sizing requirements carefully before the final order is submitted.",
      },
      {
        question: "Where can I find your size guide?",
        answer:
          "Our size guide is available through the Downloads section of our website. If you require additional sizing assistance, please contact our team.",
      },
      {
        question: "Can I request a sample before a bulk order?",
        answer:
          "Sample availability depends on the garment and the requirements of the order. For customised products, sampling arrangements and any applicable costs can be discussed during the quotation and order process.",
      },
      {
        question: "What should I do if I am unsure about sizing?",
        answer:
          "Contact our team before confirming your order. Providing accurate sizing information before production helps reduce the risk of incorrect sizes in customised or bulk orders.",
      },
    ],
  },

  {
    title: "Branding & Artwork",
    icon: Palette,
    description: "What to know when supplying logos and other artwork.",
    questions: [
      {
        question: "What should I provide for custom branding?",
        answer:
          "Please provide a clear version of your logo or artwork together with instructions about the required placement, colours and any other relevant branding details.",
      },
      {
        question: "Will the colours on my screen exactly match the finished garment?",
        answer:
          "Screen colours can vary between devices and may not exactly represent fabrics, printing, embroidery or other physical materials. Where colour accuracy is particularly important, requirements should be discussed and confirmed before production.",
      },
      {
        question: "Can you reproduce any logo or design I provide?",
        answer:
          "Customers should only provide logos, artwork or other materials that they are authorised to use. Some artwork may also require adjustment depending on the garment, material and branding method.",
      },
    ],
  },

  {
    title: "Delivery & Collection",
    icon: Truck,
    description: "Information about receiving completed orders.",
    questions: [
      {
        question: "Do you offer delivery?",
        answer:
          "Delivery arrangements may be available depending on the order and destination. Delivery requirements, charges and timelines should be confirmed when placing your order.",
      },
      {
        question: "Can I collect my order?",
        answer:
          "Collection arrangements may be made for completed orders where applicable. Our team will provide the relevant collection information when your order is ready.",
      },
      {
        question: "How will I know when my order is ready?",
        answer:
          "Our team will communicate with you regarding the progress or completion of your order using the contact information provided during the ordering process.",
      },
    ],
  },

  {
    title: "Returns & Support",
    icon: Headset,
    description: "Help with completed orders, returns and other enquiries.",
    questions: [
      {
        question: "What if there is a problem with my order?",
        answer:
          "Please contact us as soon as possible with your order details and a clear description of the issue. Our team will review the matter and advise you on the appropriate next steps.",
      },
      {
        question: "Can customised garments be returned or exchanged?",
        answer:
          "Return and exchange eligibility depends on the circumstances and the type of product involved. Customised, branded or specially manufactured products may be subject to different conditions. Please refer to our Return & Exchange Policy for full details.",
      },
      {
        question: "How can I contact Weaverbird for help?",
        answer:
          "You can contact our team through the Contact page on our website for product enquiries, quotations, order assistance or other support.",
      },
    ],
  },
];

function FAQPage() {
  return (
    <div className="min-h-dvh bg-background font-sans" style={{ fontFamily: "var(--font-sans)" }}>
      <Header current="FAQ" />

      <main id="main-content">
        <PageHero
          eyebrow="Help & Support"
          icon={CircleHelp}
          image="https://res.cloudinary.com/dipkbpinx/image/upload/v1790256336/weaverbird/diitw7ipcfnmvk7ioyhk.jpg"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our garments, customisation, orders, production, sizing and delivery."
        />

        <FAQContent />
      </main>

      <Footer />
    </div>
  );
}

function FAQContent() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        {/* Introduction */}
        <div className="max-w-5xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon">
            How can we help?
          </div>

          <h2
            className="mt-3 text-2xl font-bold text-foreground sm:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Everything you need to know
          </h2>

          <p className="mt-4 max-w-5xl mx-auto text-[15px] leading-7">
            Browse the questions below for information about working with Weaverbird. If you need
            help with a specific order or requirement, our team is available to assist.
          </p>
        </div>

        {/* FAQ groups */}
        <div className="mx-auto mt-14 max-w-5xl space-y-12">
          {faqGroups.map((group) => (
            <FAQGroup key={group.title} {...group} />
          ))}
        </div>

        <HelpSection />
      </div>
    </section>
  );
}

interface FAQGroupProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  questions: {
    question: string;
    answer: string;
  }[];
}

function FAQGroup({ title, description, icon: Icon, questions }: FAQGroupProps) {
  return (
    <section>
      <div className="mb-5 flex items-start gap-4">
        <span
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full"
          style={{ background: "oklch(0.66 0.22 25 / 0.12)" }}
        >
          <Icon className="h-5 w-5 text-maroon" />
        </span>

        <div>
          <h2
            className="text-xl font-bold sm:text-2xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--primary-deep)",
            }}
          >
            {title}
          </h2>

          <p className="mt-1 text-sm">{description}</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        {questions.map((item) => (
          <FAQItem key={item.question} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group border-b border-border last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 sm:px-6">
        <span className="text-sm font-semibold text-foreground sm:text-[15px]">{question}</span>

        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors group-open:bg-maroon/10">
          <ChevronDown className="h-4 w-4 text-maroon transition-transform duration-300 group-open:rotate-180" />
        </span>
      </summary>

      <div className="px-5 pb-5 pr-14 sm:px-6 sm:pb-6 sm:pr-16">
        <p className="text-sm leading-7">{answer}</p>
      </div>
    </details>
  );
}

function HelpSection() {
  return (
    <section
      className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-border bg-cover bg-center px-6 py-12 sm:px-8"
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
              Still need help?
            </div>

            <h2
              className="mt-1 text-xl font-bold sm:text-2xl"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--primary-deep)",
              }}
            >
              Can&apos;t find the answer you need?
            </h2>

            <p className="mt-1 max-w-xl text-sm text-muted-foreground">
              Tell us what you&apos;re looking for and our team will be happy to assist with your
              enquiry.
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
