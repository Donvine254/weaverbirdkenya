

/* ----------------- CTA Banner ----------------- */
export function TrustedBy() {
  const clients = [
    "KCB",
    "EQUITY",
    "KENYA AIRWAYS",
    "G4S",
    "JKUAT",
    "KPLC",
    "BIDCO",
    "JKF",
    "ABSA KENYA",
    "HFCB",
    "KEBS",
    "KPA",
    "THIKA SPORTS CLUB",
    "KMTC",
    "IMPERIAL COLLEGE",
    "TAI SACCO",
    "THIKA CLOTH MILLS",
    "DELFIRM HOTEL",
    "ZIWA FARM",
    "THIKA COFFEE MILL",
    "MPESA FOUNDATION",
    "JOMO KENYATTA FOUNDATION",
    "COMMONWEALTH COLLEGE",
    "MOUNT KENYA UNIVERSITY",
    "KONG SECURITY"
  ];
  const row = [...clients, ...clients];
  return (
    <section className="bg-secondary/40 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl bg-card p-8" style={{ boxShadow: "var(--shadow-card)" }}>
          <h3 className="text-center text-sm font-semibold tracking-[0.2em] text-muted-foreground">
            TRUSTED BY LEADING ORGANIZATIONS
          </h3>
          <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
              {row.map((c, i) => (
                <span
                  key={`${c}-${i}`}
                  className="text-lg font-extrabold tracking-wide"
                  style={{ color: "var(--primary-deep)" }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div
            className="mt-8 grid grid-cols-3 gap-3 border-t pt-6"
            style={{ borderColor: "var(--border)" }}
          >
            {[
              { n: "10M+", t: "Garments Delivered For Schools" },
              { n: "200+", t: "Corporate Clients Nationwide" },
              { n: "98%", t: "Repeat Business" },
            ].map((m) => (
              <div key={m.t} className="text-center">
                <div
                  className="text-2xl font-extrabold"
                  style={{ color: "var(--accent-red)", fontFamily: "var(--font-display)" }}
                >
                  {m.n}
                </div>
                <div className="mt-1 text-xs leading-tight text-muted-foreground">{m.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

