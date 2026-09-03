import {
  ClipboardCheck,
  ClipboardList,
  Factory,
  Handshake,
  MessagesSquare,
  Package,
  ReceiptText,
  Shirt,
  Truck,
} from "lucide-react";

export default function OrderingProcess() {
  const processSteps = [
    {
      title: "Inquiry",
      body: "Reach out to us via phone, whatsapp email or our website with your requirements. You can also physically visit our factory.",
      icon: MessagesSquare,
    },
    {
      title: "Requirements Confirmation",
      body: "We discuss your needs including quantities, fabric, design, colors, sizes and delivery timeline.",
      icon: ClipboardList,
    },
    {
      title: "Design & Sample",
      body: "We develop or refine designs and produce samples for your approval (if required). In some scenarios, you can also provide your own sample.",
      icon: Shirt,
    },
    {
      title: "Quotation",
      body: "We provide a detailed quotation including pricing, lead time and payment terms.",
      icon: ReceiptText,
    },
    {
      title: "Order Confirmation",
      body: "You confirm the order by approving the quotation. Non-individual buyers are required to issue a local purchase order (LPO).",
      icon: Handshake,
    },
    {
      title: "Production",
      body: "We source materials and manufacture your order with strict quality control at every stage.",
      icon: Factory,
    },
    {
      title: "Quality Inspection",
      body: "Finished products are thoroughly inspected to ensure they meet our standards and your expectations.",
      icon: ClipboardCheck,
    },
    {
      title: "Packing",
      body: "Your garments are carefully packed using premium packaging for safe transit.",
      icon: Package,
    },
    {
      title: "Delivery",
      body: "We deliver your order to your preferred destination on time. You can also opt to pick them up.",
      icon: Truck,
    },
  ];

  return (
    <section id="process" className="bg-white py-12">
      <div
        className="mx-auto max-w-6xl">
        <div className="mb-14">
          <div className="mb-3.5 flex items-center gap-2.5 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-maroon">
            &mdash; Ordering Process
          </div>

          <h2 className="mb-3.5 text-3xl font-bold sm:text-4xl">Simple. Transparent. Reliable.</h2>

          <p className="text-base text-foreground/80">
            We're committed to making your experience seamless, from first inquiry to final
            delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-gold/30 sm:grid-cols-2 md:grid-cols-3">
          {processSteps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="relative bg-white p-8">
                {/* Number + Icon */}
                <div className="flex items-center justify-between gap-4">
                  <Icon className="size-7 shrink-0 text-maroon" strokeWidth={1.4} aria-hidden />

                  <span className="font-display text-3xl font-bold leading-none text-primary/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h4 className="mt-4 text-sm font-bold uppercase tracking-[0.08em]">{step.title}</h4>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
