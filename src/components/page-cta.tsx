import { Link } from "@tanstack/react-router";
import { ArrowRight, ReceiptText, Mail } from "lucide-react";

/* Reusable dark CTA block with "Request a Quote" + "Contact Us" buttons. */
export function PageCta({
  title,
  text,
  quoteFirst = true,
}: {
  title: string;
  text: string;
  quoteFirst?: boolean;
}) {
  const quote = (
    <Link
      key="q"
      to="/quote"
      className="group inline-flex items-center justify-center gap-2 rounded-md bg-maroon px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg active:scale-95"
      style={{ boxShadow: "var(--shadow-red)" }}
    >
      <ReceiptText className="h-4 w-4" /> Request a Quote
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
  const contact = (
    <Link
      key="c"
      to="/contact"
      className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-95"
    >
      <Mail className="h-4 w-4" /> Contact Us
    </Link>
  );
  return (
    <section className="px-6 py-16">
      <div
        className="mx-auto max-w-5xl rounded-2xl px-6 py-12 text-center text-white sm:px-12"
        style={{ background: "var(--primary-darker)" }}
      >
        <h2
          className="text-2xl font-extrabold sm:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/75">{text}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {quoteFirst ? [quote, contact] : [contact, quote]}
        </div>
      </div>
    </section>
  );
}
