import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { Plus, X, Send, CheckCircle2, Mail, RotateCcw } from "lucide-react";
import { Header, Footer } from "./index";

const BUSINESS_EMAIL = "info@weaverbirdkenya.com";

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
    ],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <div className="min-h-screen bg-background font-sans" style={{ fontFamily: "var(--font-sans)" }}>
      <Header current="Quote" />
      <QuoteForm />
      <Footer />
    </div>
  );
}

function QuoteForm() {
  const quoteRef = useMemo(() => makeRef(), []);
  const [orgType, setOrgType] = useState<string>("");
  const [branding, setBranding] = useState<string[]>([]);
  const [rows, setRows] = useState<GarmentRow[]>([
    { id: crypto.randomUUID(), type: "", otherDesc: "", qty: "", notes: "" },
  ]);
  const [submitted, setSubmitted] = useState<{ mailto: string } | null>(null);

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
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:py-20">
      {/* Intro */}
      <div className="mb-8">
        <h1
          className="text-3xl font-extrabold tracking-tight sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Request a quote
        </h1>
        <p className="mt-2 text-muted-foreground">
          Tell us what you're outfitting and we'll send back a costed quotation.
        </p>
        <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Quote reference <span className="ml-2 text-foreground">{quoteRef}</span>
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border bg-card p-6 shadow-sm sm:p-10"
      >
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
          <div className="flex flex-wrap gap-2">
            {ORG_TYPES.map((o) => {
              const active = orgType === o;
              return (
                <button
                  type="button"
                  key={o}
                  onClick={() => setOrgType(o)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all active:scale-95 ${
                    active
                      ? "border-transparent text-white shadow-md"
                      : "border-input bg-background hover:border-foreground/40 hover:bg-accent"
                  }`}
                  style={active ? { background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" } : {}}
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
              <div key={r.id} className="rounded-xl border bg-background p-4">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_120px_1.2fr_auto]">
                  <div>
                    <label className={labelCls}>Garment type</label>
                    <select
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
                        required
                        value={r.otherDesc}
                        onChange={(e) => updateRow(r.id, { otherDesc: e.target.value })}
                        placeholder="Describe the garment"
                        className={`${inputCls} mt-2`}
                      />
                    )}
                  </div>
                  <div>
                    <label className={labelCls}>Quantity</label>
                    <input
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
                    <label className={labelCls}>Size / notes</label>
                    <input
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
                      className="grid h-10 w-10 place-items-center rounded-full border border-input text-muted-foreground transition hover:border-destructive hover:text-destructive disabled:cursor-not-allowed disabled:opacity-40"
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
              className="inline-flex items-center gap-2 rounded-full border border-dashed border-input px-4 py-2 text-sm font-medium text-muted-foreground transition hover:border-foreground/40 hover:bg-accent hover:text-foreground"
            >
              <Plus className="h-4 w-4" /> Add another garment
            </button>
          </div>
        </Fieldset>

        {/* 04 Branding */}
        <Fieldset num="04" title="Branding & customisation">
          <div className="flex flex-wrap gap-2">
            {BRANDING_OPTS.map((b) => {
              const active = branding.includes(b);
              return (
                <button
                  type="button"
                  key={b}
                  onClick={() => toggleBranding(b)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all active:scale-95 ${
                    active
                      ? "border-transparent text-white shadow-md"
                      : "border-input bg-background hover:border-foreground/40 hover:bg-accent"
                  }`}
                  style={active ? { background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" } : {}}
                  aria-pressed={active}
                >
                  {b}
                </button>
              );
            })}
          </div>
          <div className="mt-4">
            <label className={labelCls}>Logo / colours / placement details</label>
            <textarea
              name="brandingDetails"
              rows={3}
              placeholder="e.g. school crest on chest, navy and gold thread"
              className={`${inputCls} min-h-24 py-2`}
            />
          </div>
        </Fieldset>

        {/* 05 Remarks */}
        <Fieldset num="05" title="Anything else?" last>
          <label className={labelCls}>Remarks</label>
          <textarea
            name="remarks"
            rows={3}
            placeholder="e.g. sample required before bulk order, fabric preference, existing supplier reference"
            className={`${inputCls} min-h-24 py-2`}
          />
        </Fieldset>

        {/* Footer */}
        <div className="mt-8 border-t border-dashed pt-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-muted-foreground">
              We'll review your request and send a costed quotation, inclusive of 16% VAT.
            </p>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
              style={{ background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" }}
            >
              Send quote request
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </form>

      {submitted && (
        <div className="mt-8 rounded-2xl border bg-card p-6 shadow-sm sm:p-10">
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
                className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
                style={{ background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" }}
              >
                <Mail className="h-4 w-4" /> Open email to send
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ------- helpers ------- */
const inputCls =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-ring hover:border-foreground/30 disabled:cursor-not-allowed disabled:opacity-50";
const labelCls = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground";

function Fieldset({ num, title, children, last }: { num: string; title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <fieldset className={last ? "" : "mb-8 border-b pb-8"}>
      <legend className="mb-4 flex items-center gap-3">
        <span
          className="grid h-8 min-w-8 place-items-center rounded-full px-2 font-mono text-xs font-bold text-white"
          style={{ background: "var(--gradient-red)" }}
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
      <label className={labelCls}>
        {label} {required && <span style={{ color: "var(--accent-red)" }}>*</span>}
      </label>
      {children}
    </div>
  );
}