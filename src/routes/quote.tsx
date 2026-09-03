import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import {
  Plus,
  X,
  Send,
  CheckCircle2,
  Mail,
  RotateCcw,
  ClipboardList,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  PenTool,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const BUSINESS_EMAIL = "sales@weaverbirdkenya.com";

const GARMENT_TYPES = [
  "Dress", "Shirt", "Shorts", "Trouser", "Skirt", "Blazer / Jacket",
  "Tracksuit", "T-Shirt", "Overall / Dust Coat", "Sweater", "Non-Woven Bag", "Other",
] as const;

const ORG_TYPES = [
  "School / College", "Corporate / Office", "Security firm", "Hospitality",
  "Healthcare", "Factory / Industrial", "Other",
] as const;

const BRANDING_OPTS = [
  "Embroidery", "Screen printing", "Weaving", "No branding needed",
] as const;

type GarmentRow = {
  id: string;
  type: string;
  otherDesc: string;
  qty: string;
  notes: string;
};

function makeRef(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `WB-QR-${String(d.getFullYear()).slice(2)}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}`;
}

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Weaverbird Apparel Solutions" },
      { name: "description", content: "Request a costed quotation for your organisation's uniforms and apparel. School, corporate, security, hospitality, healthcare & industrial." },
      { property: "og:title", content: "Request a Quote — Weaverbird" },
      { property: "og:description", content: "Tell us what you're outfitting and we'll send back a costed quotation." },
      { property: "og:url", content: "https://weaverbirdkenya.lovable.app/quote" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://weaverbirdkenya.lovable.app/quote" }],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <div className="min-h-dvh bg-background font-sans" style={{ fontFamily: "var(--font-sans)" }}>
      <Header current="Quote" />
      <main id="main-content">
        <PageHero />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}

function PageHero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dipkbpinx/image/upload/v1788328063/weaverbird/products/jysa5b1esbvuy5bfykvi.jpg")`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.13 0.05 155 / 0.44), oklch(0.10 0.06 155 / 0.75))",
        }}
      />
      {/* faint gradient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, oklch(0.78 0.18 145 / 0.25), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-16 text-center text-white lg:py-20 animate-fade-in-up ">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80">
          <ClipboardList className="h-4 w-4" style={{ color: "var(--accent-red)" }} />
          Custom Apparel Quote
        </div>
        <h1
          className="mt-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Request a <span style={{ color: "oklch(0.78 0.18 145)" }}>Quote</span>
        </h1>
        <p className="animate-fade-in mx-auto mt-5 max-w-2xl text-white/80">
          Tell us what you're outfitting and we'll send back a detailed, costed quotation tailored to your organisation — usually within one business day.
        </p>
        <div className="animate-fade-in mx-auto mt-8 hidden max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium text-white/75 md:flex">
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4" style={{ color: "var(--accent-red)" }} /> Response within 24 hours
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" style={{ color: "var(--accent-red)" }} /> No obligation
          </span>
          <span className="inline-flex items-center gap-2">
            <Truck className="h-4 w-4" style={{ color: "var(--accent-red)" }} /> Nationwide delivery
          </span>
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const quoteRef = useMemo(() => makeRef(), []);
  const [orgType, setOrgType] = useState<string>("");
  const [branding, setBranding] = useState<string[]>([]);
  const [rows, setRows] = useState<GarmentRow[]>([
    { id: crypto.randomUUID(), type: "", otherDesc: "", qty: "", notes: "" },
  ]);
  const [submitted, setSubmitted] = useState<{ mailto: string } | null>(null);

  const [orgDone, setOrgDone] = useState(false);
  const [remarksDone, setRemarksDone] = useState(false);

  const syncFieldProgress = () => {
    const fd = formRef.current ? new FormData(formRef.current) : null;
    const v = (k: string) => ((fd?.get(k) as string | null) ?? "").trim() !== "";
    setOrgDone(!!fd && ["orgName", "contact", "phone", "email", "town"].every(v));
    setRemarksDone(!!fd && v("remarks"));
  };

  const completedSteps =
    (orgDone ? 1 : 0) +
    (orgType ? 1 : 0) +
    (rows.some((r) => r.type && r.qty) ? 1 : 0) +
    (branding.length ? 1 : 0) +
    (remarksDone ? 1 : 0);

  const handleReset = () => {
    formRef.current?.reset();
    setOrgType("");
    setBranding([]);
    setRows([{ id: crypto.randomUUID(), type: "", otherDesc: "", qty: "", notes: "" }]);
    setOrgDone(false);
    setRemarksDone(false);
    setSubmitted(null);
  };

  const toggleBranding = (b: string) => {
    setBranding((prev) => prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]);
  };

  const updateRow = (id: string, patch: Partial<GarmentRow>) => {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  };

  const addRow = () => setRows((prev) => [...prev, { id: crypto.randomUUID(), type: "", otherDesc: "", qty: "", notes: "" }]);
  const removeRow = (id: string) => setRows((prev) => prev.length > 1 ? prev.filter((r) => r.id !== id) : prev);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!orgType) return;
    const fd = new FormData(e.currentTarget);
    const g = (k: string) => (fd.get(k) as string | null)?.trim() ?? "";

    const orgName = g("orgName");
    const lines: string[] = [];
    lines.push(`Quote reference: ${quoteRef}`);
    lines.push("");
    lines.push("== Organisation ==");
    lines.push(`Company:         ${orgName}`);
    lines.push(`Contact person:  ${g("contact")}`);
    lines.push(`Phone:           ${g("phone")}`);
    lines.push(`Email:           ${g("email")}`);
    lines.push(`P.O. Box:        ${g("pobox") || "-"}`);
    lines.push(`Town/Delivery:   ${g("town")}`);
    lines.push(`Needed by:       ${g("neededBy") || "-"}`);
    lines.push(`Organisation type: ${orgType}`);
    lines.push("");
    lines.push("== Garments ==");
    rows.forEach((r, i) => {
      const t = r.type === "Other" ? `Other - ${r.otherDesc}` : r.type;
      lines.push(`${i + 1}. ${t} | Qty: ${r.qty} | Notes: ${r.notes || "-"}`);
    });
    lines.push("");
    lines.push("== Branding & customisation ==");
    lines.push(`Options: ${branding.length ? branding.join(", ") : "-"}`);
    lines.push(`Details: ${g("brandingDetails") || "-"}`);
    lines.push("");
    lines.push("== Remarks ==");
    lines.push(g("remarks") || "-");

    const subject = `Quote request ${quoteRef} — ${orgName}`;
    const mailto = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = mailto;
    setSubmitted({ mailto });
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px]">
        {/* ============ FORM COLUMN ============ */}
        <div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="overflow-hidden rounded-2xl border bg-card shadow-md"
          >
            {/* Accent top bar */}
            <div
              className="flex items-center justify-between px-6 py-4 sm:px-10"
              style={{ background: "var(--color-maroon)" }}
            >
              <p className="text-sm font-semibold text-white">
                Quote request form
              </p>
              <p className="font-mono text-xs tracking-widest text-white/70">
                {quoteRef}
              </p>
            </div>

            <div className="p-6 sm:p-10">
              {/* 01 Organisation */}
              <Fieldset num="01" title="Your organisation">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Organisation / Company name" required className="sm:col-span-2">
                    <input name="orgName" required placeholder="e.g. XYZ Limited" className={inputCls} />
                  </Field>
                  <Field label="Contact person" required>
                    <input name="contact" required className={inputCls} />
                  </Field>
                  <Field label="Phone number" required>
                    <input name="phone" type="tel" required placeholder="07XX XXX XXX" className={inputCls} />
                  </Field>
                  <Field label="Email address" required>
                    <input name="email" type="email" required className={inputCls} />
                  </Field>
                  <Field label="P.O. Box">
                    <input name="pobox" className={inputCls} />
                  </Field>
                  <Field label="Town / delivery location" required>
                    <input name="town" required className={inputCls} />
                  </Field>
                  <Field label="Needed by">
                    <input name="neededBy" type="date" className={inputCls} />
                  </Field>
                </div>
              </Fieldset>

              {/* 02 Org type */}
              <Fieldset num="02" title="What kind of organisation are you?">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {ORG_TYPES.map((o) => {
                    const active = orgType === o;
                    return (
                      <button
                        type="button"
                        key={o}
                        onClick={() => setOrgType(o)}
                        className={`rounded-md cursor-pointer border px-3 py-2.5 text-sm font-medium transition-all active:scale-95 ${active
                            ? "border-transparent text-white shadow-md"
                            : "border-input bg-background hover:border-[var(--color-maroon)]/50 hover:bg-accent"
                          }`}
                        style={active ? { background: "var(--color-maroon)", boxShadow: "0 8px 20px -8px oklch(0.293 0.137 19.5 / 0.5)" } : {}}
                        aria-pressed={active}
                      >
                        {o}
                      </button>
                    );
                  })}
                </div>
                {!orgType && (
                  <p className="mt-2 text-xs text-muted-foreground">Please select one.</p>
                )}
              </Fieldset>

              {/* 03 Garments */}
              <Fieldset num="03" title="Garments needed">
                <div className="space-y-3">
                  {rows.map((r, idx) => (
                    <div
                      key={r.id}
                      className="rounded-xl border bg-background p-4 shadow-sm"
                      style={{ borderLeft: "3px solid var(--color-maroon)" }}
                    >
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_120px_1.2fr_auto]">
                        <div>
                          <label className={labelCls} htmlFor={`garment-type-${idx}`}>Garment type</label>
                          <select
                            id={`garment-type-${idx}`}
                            required
                            value={r.type}
                            onChange={(e) => updateRow(r.id, { type: e.target.value })}
                            className={inputCls}
                          >
                            <option value="" disabled>Select…</option>
                            {GARMENT_TYPES.map((g) => <option key={g} value={g}>{g}</option>)}
                          </select>
                          {r.type === "Other" && (
                            <input
                              aria-label={`Describe garment ${idx + 1}`}
                              required
                              value={r.otherDesc}
                              onChange={(e) => updateRow(r.id, { otherDesc: e.target.value })}
                              placeholder="Describe the garment"
                              className={`${inputCls} mt-2`}
                            />
                          )}
                        </div>
                        <div>
                          <label className={labelCls} htmlFor={`garment-qty-${idx}`}>Quantity</label>
                          <input
                            id={`garment-qty-${idx}`}
                            required
                            type="number"
                            min={1}
                            value={r.qty}
                            onChange={(e) => updateRow(r.id, { qty: e.target.value })}
                            placeholder="e.g. 200"
                            className={inputCls}
                          />
                        </div>
                        <div>
                          <label className={labelCls} htmlFor={`garment-notes-${idx}`}>Size / notes</label>
                          <input
                            id={`garment-notes-${idx}`}
                            value={r.notes}
                            onChange={(e) => updateRow(r.id, { notes: e.target.value })}
                            placeholder="e.g. mixed sizes 4-14"
                            className={inputCls}
                          />
                        </div>
                        <div className="flex items-end justify-end">
                          <button
                            type="button"
                            onClick={() => removeRow(r.id)}
                            disabled={rows.length === 1}
                            aria-label={`Remove garment ${idx + 1}`}
                            className="grid cursor-pointer h-10 w-10 place-items-center rounded-md border border-input text-muted-foreground transition hover:border-destructive hover:text-destructive disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addRow}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-dashed border-input px-4 py-2.5 text-sm font-medium text-muted-foreground transition hover:border-[var(--color-maroon)]/60 hover:bg-accent hover:text-foreground active:scale-95"
                  >
                    <Plus className="h-4 w-4" /> Add another garment
                  </button>
                </div>
              </Fieldset>

              {/* 04 Branding */}
              <Fieldset num="04" title="Branding & customisation">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {BRANDING_OPTS.map((b) => {
                    const active = branding.includes(b);
                    return (
                      <button
                        type="button"
                        key={b}
                        onClick={() => toggleBranding(b)}
                        className={`rounded-md cursor-pointer border px-3 py-2.5 text-sm font-medium transition-all active:scale-95 ${active
                            ? "border-transparent text-white shadow-md"
                            : "border-input bg-background hover:border-[var(--color-maroon)]/50 hover:bg-accent"
                          }`}
                        style={active ? { background: "var(--color-maroon)", boxShadow: "0 8px 20px -8px oklch(0.293 0.137 19.5 / 0.5)" } : {}}
                        aria-pressed={active}
                      >
                        {b}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-4">
                  <label className={labelCls} htmlFor="brandingDetails">Logo / colours / placement details</label>
                  <textarea
                    id="brandingDetails"
                    name="brandingDetails"
                    rows={3}
                    placeholder="e.g. school crest on chest, navy and gold thread"
                    className={`${inputCls} min-h-24 py-2`}
                  />
                </div>
              </Fieldset>

              {/* 05 Remarks */}
              <Fieldset num="05" title="Anything else?" last>
                <label className={labelCls} htmlFor="remarks">Remarks</label>
                <textarea
                  id="remarks"
                  name="remarks"
                  rows={3}
                  placeholder="e.g. sample required before bulk order, fabric preference, existing supplier reference"
                  className={`${inputCls} min-h-24 py-2`}
                />
              </Fieldset>

              {/* Footer */}
              <div className="mt-8 border-t border-dashed pt-6">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    className="group cursor-pointer inline-flex flex-1 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:brightness-110 active:scale-95"
                    style={{ background: "var(--color-maroon)", boxShadow: "0 10px 25px -10px oklch(0.293 0.137 19.5 / 0.55)" }}
                  >
                    Send quote request
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <button
                    type="reset"
                    onClick={handleReset}
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground active:scale-95 sm:flex-none"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Reset
                  </button>
                </div>
                <p className="mt-4 text-center text-xs text-muted-foreground sm:text-left">
                  We'll review your request and send a costed quotation, inclusive of 16% VAT.
                </p>
              </div>
            </div>
          </form>

          {submitted && (
            <div className="mt-8 overflow-hidden rounded-2xl border bg-card shadow-md">
              <div className="h-1.5" style={{ background: "oklch(0.55 0.18 145)" }} />
              <div className="p-6 sm:p-10">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full" style={{ background: "oklch(0.78 0.18 145 / 0.15)" }}>
                    <CheckCircle2 className="h-6 w-6" style={{ color: "oklch(0.55 0.18 145)" }} />
                  </span>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                      Request ready to send
                    </h2>
                    <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {quoteRef}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Your quote summary has been prepared and is ready to send from your mail app.
                      If it didn't open automatically, click the button below.
                    </p>
                    <a
                      href={submitted.mailto}
                      className="mt-5 inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:brightness-110 active:scale-95"
                      style={{ background: "var(--color-maroon)" }}
                    >
                      <Mail className="h-4 w-4" /> Open email to send
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ============ SIDEBAR ============ */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          {/* Progress */}
          <div className="overflow-hidden rounded-2xl border bg-card shadow-md">
            <div className="px-6 py-4" style={{ background: "var(--primary-darker)" }}>
              <p className="text-sm font-semibold text-white">Your progress</p>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-muted-foreground">{completedSteps} of 5 sections started</span>
                <span style={{ color: "var(--color-maroon)" }}>{Math.round((completedSteps / 5) * 100)}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${(completedSteps / 5) * 100}%`,
                    background: "var(--color-maroon)",
                  }}
                />
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  "Organisation details",
                  "Organisation type",
                  "Garments & quantities",
                  "Branding options",
                  "Final remarks",
                ].map((s, i) => (
                  <li key={s} className="flex items-center gap-3">
                    <span
                      className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-[10px] font-bold"
                      style={
                        i < completedSteps
                          ? { background: "var(--color-maroon)", color: "white" }
                          : { background: "var(--muted)", color: "var(--muted-foreground)" }
                      }
                    >
                      {i + 1}
                    </span>
                    <span className={i < completedSteps ? "font-medium text-foreground" : "text-muted-foreground"}>
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* What happens next */}
          <div className="rounded-2xl border bg-card p-6 shadow-md">
            <h3 className="text-base font-bold" style={{ fontFamily: "var(--font-display)" }}>
              What happens next?
            </h3>
            <ol className="mt-4 space-y-4">
              {[
                { icon: Send, text: "Your request lands in our sales inbox instantly." },
                { icon: PenTool, text: "Our team costs it out — fabric, branding & delivery." },
                { icon: CheckCircle2, text: "You receive a detailed quotation within 24 hours." },
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-md"
                    style={{ background: "oklch(0.293 0.137 19.5 / 0.1)", color: "var(--color-maroon)" }}
                  >
                    <step.icon className="h-4 w-4" />
                  </span>
                  <p className="pt-1.5 text-sm text-muted-foreground">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Direct contact */}
          <div
            className="rounded-2xl p-6 text-white shadow-md"
            style={{ background: "linear-gradient(150deg, var(--primary-darker), oklch(0.10 0.05 155))" }}
          >
            <h3 className="text-base font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Prefer to talk to us?
            </h3>
            <p className="mt-1 text-sm text-white/70">
              Call or visit any of our branches — we'll quote you on the spot.
            </p>
            <a
              href="tel:+254722264464"
              className="mt-4 flex items-center gap-3 rounded-md bg-white/10 px-4 py-3 text-sm font-semibold transition hover:bg-white/20"
            >
              <Phone className="h-4 w-4" style={{ color: "var(--accent-red)" }} />
              +254 722 264 464
            </a>
            <Link
              to="/branches"
              className="group mt-3 flex items-center justify-between rounded-md px-4 py-3 text-sm font-semibold transition hover:brightness-110"
              style={{ background: "var(--color-maroon)" }}
            >
              <span className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                Find a shop near you
              </span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ------- helpers ------- */
const inputCls =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-maroon)] focus-visible:border-[var(--color-maroon)] hover:border-foreground/30 disabled:cursor-not-allowed disabled:opacity-50";
const labelCls = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground";

function Fieldset({ num, title, children, last }: { num: string; title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <fieldset className={last ? "" : "mb-8 border-b pb-8"}>
      <legend className="mb-4 flex items-center gap-3">
        <span
          className="grid h-8 min-w-8 place-items-center rounded-md px-2 font-mono text-xs font-bold text-white"
          style={{ background: "var(--color-maroon)" }}
        >
          {num}
        </span>
        <span className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
          {title}
        </span>
      </legend>
      {children}
    </fieldset>
  );
}

function Field({ label, required, className, children }: { label: string; required?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <label className="block">
        <span className={labelCls}>
          {label} {required && <span style={{ color: "var(--accent-red)" }} aria-hidden>*</span>}
        </span>
        {children}
      </label>
    </div>
  );
}
