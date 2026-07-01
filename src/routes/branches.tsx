import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  MapPin, Phone, Clock, Search, Navigation, Factory, Building2, X,
} from "lucide-react";
import { Header, Footer } from "./index";

export interface Branch {
  name: string;
  type: "headquarters" | "branch";
  phone: string;
  hours: { monday_friday: string; saturday: string; sunday: string };
  address: string;
  map: string;
}

const branches: Branch[] = [
  {
    name: "Headquarters / Factory",
    type: "headquarters",
    phone: "+254722264464",
    hours: { monday_friday: "8:00AM - 5:00PM", saturday: "8:00AM - 12:00PM", sunday: "Closed" },
    address: "Off Thika-Garissa Highway, along Kianjau-Athena Road, near Broadway Secondary School, Thika",
    map: "https://www.google.com/maps/search/?api=1&query=Weaver+Bird+Garments+Ltd+Headquarters,+Thika",
  },
  { name: "Nairobi", type: "branch", phone: "+254724089655", hours: { monday_friday: "8:30AM - 6:00PM", saturday: "8:30AM - 6:00PM", sunday: "Closed" }, address: "Delfirm Hotel Plaza, River Road, Nairobi", map: "https://www.google.com/maps/search/?api=1&query=Delfirm+Hotel+Plaza,+River+Road,+Nairobi,+Kenya" },
  { name: "Chuka", type: "branch", phone: "+254799111222", hours: { monday_friday: "8:30AM - 6:00PM", saturday: "8:30AM - 6:00PM", sunday: "Closed" }, address: "Captain Plaza, next to Legacy Hotel, opposite Equity Bank, Chuka", map: "https://www.google.com/maps/search/?api=1&query=Captain+Plaza,+Chuka,+Kenya" },
  { name: "Thika Shop 1", type: "branch", phone: "0718343353", hours: { monday_friday: "8:30AM - 6:00PM", saturday: "8:30AM - 6:00PM", sunday: "Closed" }, address: "Eco Bank Plaza, Opposite Post Bank, Thika", map: "https://www.google.com/maps/search/?api=1&query=Eco+Bank+Plaza,+Thika,+Kenya" },
  { name: "Thika Shop 2", type: "branch", phone: "0738447700", hours: { monday_friday: "8:30AM - 6:00PM", saturday: "8:30AM - 6:00PM", sunday: "Closed" }, address: "Twin Oak Plaza, Ground Floor, Opposite Safaricom Customer Care, Thika", map: "https://www.google.com/maps/search/?api=1&query=Twin+Oak+Plaza,+Thika,+Kenya" },
  { name: "Ruiru", type: "branch", phone: "0745444447", hours: { monday_friday: "8:30AM - 7:00PM", saturday: "8:30AM - 7:00PM", sunday: "8:30AM - 6:00PM" }, address: "The Nord Mall, 1st Floor, Ruiru", map: "https://www.google.com/maps/search/?api=1&query=The+Nord+Mall,+Ruiru,+Kenya" },
  { name: "Runda", type: "branch", phone: "0745444446", hours: { monday_friday: "8:30AM - 7:00PM", saturday: "8:30AM - 7:00PM", sunday: "8:30AM - 6:00PM" }, address: "Along Kiambu Road, Runda, Nairobi", map: "https://www.google.com/maps/search/?api=1&query=Runda,+Kiambu+Road,+Nairobi,+Kenya" },
  { name: "TRM (Thika Road Mall)", type: "branch", phone: "0725666444", hours: { monday_friday: "8:30AM - 7:00PM", saturday: "8:30AM - 7:00PM", sunday: "8:30AM - 6:00PM" }, address: "1st Floor, Opposite Carrefour Supermarket, Thika Road Mall, Nairobi", map: "https://www.google.com/maps/search/?api=1&query=Thika+Road+Mall,+Nairobi,+Kenya" },
  { name: "Kisumu", type: "branch", phone: "0754666444", hours: { monday_friday: "8:30AM - 6:00PM", saturday: "8:30AM - 6:00PM", sunday: "Closed" }, address: "Oginga Odinga Road, Opposite Eco Bank Place, Kisumu", map: "https://www.google.com/maps/search/?api=1&query=Oginga+Odinga+Road,+Kisumu,+Kenya" },
  { name: "Nakuru", type: "branch", phone: "0743103103", hours: { monday_friday: "8:30AM - 6:00PM", saturday: "8:30AM - 6:00PM", sunday: "Closed" }, address: "Along Kenyatta Avenue, Nakuru", map: "https://www.google.com/maps/search/?api=1&query=Kenyatta+Avenue,+Nakuru,+Kenya" },
  { name: "Meru", type: "branch", phone: "0727399399", hours: { monday_friday: "8:30AM - 6:00PM", saturday: "8:30AM - 6:00PM", sunday: "Closed" }, address: "Njuri Ncheke Street, Opposite Mater Hospital, Meru", map: "https://www.google.com/maps/search/?api=1&query=Njuri+Ncheke+Street,+Meru,+Kenya" },
  { name: "Kerugoya", type: "branch", phone: "0745444445", hours: { monday_friday: "8:30AM - 6:00PM", saturday: "8:30AM - 6:00PM", sunday: "Closed" }, address: "Opposite Bingwa Sacco, Ground Floor, Kerugoya", map: "https://www.google.com/maps/search/?api=1&query=G72H%2B3FW,+Kerugoya,+Kenya" },
  { name: "Murang'a", type: "branch", phone: "+254712444482", hours: { monday_friday: "8:30AM - 6:00PM", saturday: "8:30AM - 6:00PM", sunday: "Closed" }, address: "Along Biashara Avenue, next to Consolidated Bank, Murang'a", map: "https://www.google.com/maps/search/?api=1&query=Biashara+Avenue,+Murang%27a,+Kenya" },
];

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "Branches & Store Locator — Weaverbird Apparel Solutions" },
      { name: "description", content: "Find a Weaverbird shop near you. 12 branches across Kenya plus our Thika factory & headquarters. Addresses, phone numbers, opening hours & directions." },
      { property: "og:title", content: "Weaverbird Branches — Store Locator" },
      { property: "og:description", content: "Find your nearest Weaverbird shop across Kenya. Get directions, phone numbers and opening hours." },
    ],
  }),
  component: BranchesPage,
});

function BranchesPage() {
  return (
    <div className="min-h-screen bg-background font-sans" style={{ fontFamily: "var(--font-sans)" }}>
      <Header current="Branches" />
      <PageHero />
      <Locator />
      <Footer />
    </div>
  );
}

function PageHero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="relative mx-auto max-w-7xl px-6 py-16 text-white lg:py-20">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/70">
          <MapPin className="h-4 w-4" style={{ color: "var(--accent-red)" }} />
          Store Locator
        </div>
        <h1
          className="mt-3 text-4xl font-extrabold sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Find a <span style={{ color: "oklch(0.78 0.18 145)" }}>Weaverbird</span> Near You
        </h1>
        <p className="mt-4 max-w-2xl text-white/75">
          {branches.length} locations across Kenya — including our Thika factory & headquarters.
          Search by town, mall or landmark to find the shop closest to you.
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
  const osmQuery = encodeURIComponent(branch.address);
  // OpenStreetMap search-embed doesn't require an API key.
  const mapSrc = `https://www.google.com/maps?q=${osmQuery}&output=embed`;

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="relative aspect-[16/10] w-full bg-muted sm:aspect-[16/9]">
        <iframe
          key={branch.name}
          title={`Map of ${branch.name}`}
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
        />
      </div>

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
  icon: React.ComponentType<{ className?: string }>;
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