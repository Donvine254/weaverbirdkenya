import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MapPin, Phone, Clock, Search, Navigation, Factory, Building2, X } from "lucide-react";
import { Header, Footer } from "./index";
import { branches, type Branch } from "@/data/branches";
import { BranchesMap } from "@/components/branches-map";

export type { Branch };
export { branches };

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "Branches & Store Locator — Weaverbird Apparel Solutions" },
      {
        name: "description",
        content:
          "Find a Weaverbird shop near you. 12 branches across Kenya plus our Thika factory & headquarters. Addresses, phone numbers, opening hours & directions.",
      },
      { property: "og:title", content: "Weaverbird Branches — Store Locator" },
      {
        property: "og:description",
        content:
          "Find your nearest Weaverbird shop across Kenya. Get directions, phone numbers and opening hours.",
      },
    ],
  }),
  component: BranchesPage,
});

function BranchesPage() {
  return (
    <div
      className="min-h-screen bg-background font-sans"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <Header current="Branches" />
      <PageHero />
      <Locator />
      <Footer />
    </div>
  );
}

function PageHero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dipkbpinx/image/upload/v1783869677/weaverbird/nmszxatomphtat2xspfs.jpg")`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.13 0.05 155 / 0.88), oklch(0.10 0.06 155 / 0.75))",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center text-white lg:py-28">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80">
          <MapPin className="h-4 w-4" style={{ color: "var(--accent-red)" }} />
          Nationwide Network
        </div>
        <h1
          className="mt-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Our <span style={{ color: "oklch(0.78 0.18 145)" }}>Branches</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/80">
          Find a Weaverbird shop near you. We have 12 retail locations across Kenya plus our factory
          headquarters in Thika.
        </p>
      </div>
    </section>
  );
}

function Locator() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Branch>(branches[0]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return branches;
    return branches.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.address.toLowerCase().includes(q) ||
        b.type.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,420px)_1fr]">
        {/* Full map showing all branches */}
        <div className="order-first overflow-hidden rounded-2xl border border-border bg-muted shadow-sm lg:order-none lg:col-span-2">
          <BranchesMap selected={selected} onSelect={setSelected} />
        </div>
        {/* List panel */}
        <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="border-b border-border p-4">
            <div className="group flex items-center gap-2 rounded-full border border-input bg-background px-3 py-2 transition focus-within:border-[var(--accent-red)] focus-within:ring-2 focus-within:ring-[var(--accent-red)]">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search town, mall or landmark…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setQuery("")}
                  className="rounded-full p-1 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "location" : "locations"} found
            </p>
          </div>

          <ul className="max-h-[640px] divide-y divide-border overflow-y-auto">
            {filtered.length === 0 && (
              <li className="p-8 text-center text-sm text-muted-foreground">
                No branches match "{query}". Try a different town or landmark.
              </li>
            )}
            {filtered.map((b) => {
              const isActive = selected.name === b.name;
              const isHQ = b.type === "headquarters";
              return (
                <li key={b.name}>
                  <button
                    type="button"
                    onClick={() => setSelected(b)}
                    className={`flex w-full items-start gap-3 p-4 text-left transition hover:bg-muted/50 ${
                      isActive ? "bg-muted/70" : ""
                    }`}
                  >
                    <span
                      className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full"
                      style={{
                        background: isHQ ? "var(--gradient-red)" : "oklch(0.20 0.07 155)",
                      }}
                    >
                      {isHQ ? (
                        <Factory className="h-4 w-4 text-white" />
                      ) : (
                        <Building2 className="h-4 w-4 text-white" />
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-foreground">{b.name}</span>
                        {isHQ && (
                          <span
                            className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"
                            style={{ background: "var(--gradient-red)" }}
                          >
                            HQ · Factory
                          </span>
                        )}
                      </div>
                      <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{b.address}</p>
                      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Phone className="h-3 w-3" />
                        {b.phone}
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Details panel */}
        <BranchDetail branch={selected} />
      </div>
    </section>
  );
}

function BranchDetail({ branch }: { branch: Branch }) {
  const isHQ = branch.type === "headquarters";
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="flex-1 p-6 lg:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="grid h-11 w-11 place-items-center rounded-full"
            style={{ background: isHQ ? "var(--gradient-red)" : "var(--primary-deep)" }}
          >
            {isHQ ? (
              <Factory className="h-5 w-5 text-white" />
            ) : (
              <Building2 className="h-5 w-5 text-white" />
            )}
          </span>
          <div>
            <h2
              className="text-2xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {branch.name}
            </h2>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {isHQ ? "Headquarters · Factory" : "Retail Branch"}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <InfoRow icon={MapPin} label="Address">
            {branch.address}
          </InfoRow>
          <InfoRow icon={Phone} label="Phone">
            <a href={`tel:${branch.phone.replace(/\s+/g, "")}`} className="hover:underline">
              {branch.phone}
            </a>
          </InfoRow>
          <InfoRow icon={Clock} label="Opening Hours">
            <ul className="space-y-1 text-sm">
              <li className="flex justify-between gap-4">
                <span className="text-muted-foreground">Mon – Fri</span>
                <span className="font-medium text-foreground">{branch.hours.monday_friday}</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-muted-foreground">Saturday</span>
                <span className="font-medium text-foreground">{branch.hours.saturday}</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-muted-foreground">Sunday</span>
                <span className="font-medium text-foreground">{branch.hours.sunday}</span>
              </li>
            </ul>
          </InfoRow>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={branch.map}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
            style={{ background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" }}
          >
            <Navigation className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            Get Directions
          </a>
          <a
            href={`tel:${branch.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted active:scale-95"
          >
            <Phone className="h-4 w-4" />
            Call Shop
          </a>
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <span
        className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg"
        style={{ background: "oklch(0.66 0.22 25 / 0.12)" }}
      >
        <Icon className="h-4 w-4" style={{ color: "var(--accent-red)" }} />
      </span>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="mt-1 text-sm text-foreground">{children}</div>
      </div>
    </div>
  );
}
