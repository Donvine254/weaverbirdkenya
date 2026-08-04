import { Link } from "@tanstack/react-router";
import { Scissors, Home, MapPin, Mail, Shirt } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const quickLinks = [
  { to: "/", label: "Back home", icon: Home },
  { to: "/branches", label: "Find a shop", icon: MapPin },
  { to: "/quote", label: "Get a quote", icon: Shirt },
  { to: "/contact", label: "Talk to us", icon: Mail },
];

export function NotFound() {
  return (
    <div className="min-h-screen bg-background font-sans" style={{ fontFamily: "var(--font-sans)" }}>
      <Header />

      <main className="relative overflow-hidden" style={{ background: "var(--primary-darker)" }}>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0 2px, transparent 2px 10px), repeating-linear-gradient(-45deg, #fff 0 2px, transparent 2px 10px)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <Scissors className="h-3.5 w-3.5" /> Loose thread detected
          </span>

          <h1 className="mt-8 text-[5.5rem] font-extrabold leading-none tracking-tight text-white sm:text-[9rem]">
            4
            <span
              className="inline-block animate-bounce bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-red)", animationDuration: "2.2s" }}
            >
              0
            </span>
            4
          </h1>

          <div className="mx-auto mt-4 h-px w-40 bg-white/20" />

          <h2 className="mt-8 text-2xl font-bold text-white sm:text-3xl">
            This page didn&apos;t make it past quality control
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            We stitched, we searched, we checked every rack — but this page isn&apos;t in the
            warehouse. Maybe it was sent back for alterations. Let&apos;s get you somewhere useful.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {quickLinks.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-left text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
              >
                <span className="flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "var(--gradient-red)" }}
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </span>
                  {label}
                </span>
                <span className="text-white/40 transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
