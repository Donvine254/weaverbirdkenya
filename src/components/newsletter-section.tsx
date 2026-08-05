import { useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  function handleSignup(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("You're subscribed!", {
      description: "Thanks for joining — expect uniform tips and offers from Weaverbird.",
    });
    setEmail("");
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 lg:pb-24">
      <div
        className="relative overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-12 lg:py-16"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.13 0.05 155), oklch(0.10 0.06 155))",
        }}
      >
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-red)" }}
        />
        <div className="relative mx-auto max-w-2xl">
          <span
            className="mx-auto grid aspect-square h-12 w-12 place-items-center rounded-full"
            style={{ background: "oklch(0.66 0.22 25 / 0.18)" }}
          >
            <Mail className="h-5 w-5" style={{ color: "oklch(0.78 0.18 145)" }} />
          </span>
          <h2
            className="mt-5 text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            New shop openings, straight to your inbox
          </h2>
          <p className="mt-3 text-sm text-white/75">
            Subscribe for branch updates, seasonal uniform offers and restock alerts near you.
          </p>

          <form
            onSubmit={handleSignup}
            className="mx-auto mt-7 flex max-w-md items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] p-1.5 transition hover:border-white/25 focus-within:border-[var(--accent-red)] focus-within:bg-white/[0.07] focus-within:ring-2 focus-within:ring-[var(--accent-red)]"
          >
            <input
              type="email"
              aria-label="Email address"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none"
            />
            <button
              type="submit"
              className="group inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-md active:scale-95"
              style={{ background: "var(--gradient-red)" }}
            >
              Subscribe
              <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </form>
          <p className="mt-3 text-xs text-white/50">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
