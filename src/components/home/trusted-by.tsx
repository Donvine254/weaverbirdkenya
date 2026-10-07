/* ----------------- CTA Banner ----------------- */
export function TrustedBy() {
  const clients = [
    "KCB",
    "EQUITY",
    "EQUITY GROUP FOUNDATION",
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
    "CO-OPERATIVE BANK",
    "THIKA SPORTS CLUB",
    "KMTC",
    "IMPERIAL COLLEGE",
    "TAI SACCO",
    "THIKA CLOTH MILLS",
    "DELFIRM HOTEL",
    "ZIWA FARM",
    "DIAMOND TRUST BANK",
    "GERTON UNIVERSITY",
    "MAKINI SCHOOLS",
    "THIKA COFFEE MILL",
    "WATERFRONT HIGH SCHOOL",
    "THIKA POLYTECHNIC",
    "KIAMBU COUNTY GOVERNMENT",
    "KIHARU TECHNICAL TRAINING INSTITUTE",
    "KENYA ASSOCIATION OF MANUFACTURERS",
    "MPESA FOUNDATION",
    "JOMO KENYATTA FOUNDATION",
    "FOOD AGRICULTURE ORGANIZATION OF THE UNITED NATIONS",
    "COMMONWEALTH COLLEGE",
    "MOUNT KENYA UNIVERSITY",
    "KONG SECURITY",
    "AFRICAN INSITUTE FOR CAPACITY DEVELOPMENT (AICAD)",
    "ACROSS AGRICULTURE LTD",
    "KISII UNIVERSITY",
    "BIC EAST AFRICA",
    "BONFIRE ADVENTURES",
    "BRAEBURN SCHOOLS",
    "CAMFED KENYA",
    "CATHOLIC ARCHDIOCESE OF ARUSHA",
    "INSTITUTE FOR CULTURE & ECOLOGY",
    "KENYA INSTITUTE OF SPECIAL EDUCATION",
    "KENYA NUT COMPANY LTD",
  ];
  const row = [...clients, ...clients];
  return (
    <section className="bg-primary-deep py-12">
      <div className="bg-card p-8" style={{ boxShadow: "var(--shadow-card)" }}>
        <h3 className="text-sm font-semibold tracking-wide text-maroon">
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
                className="text-2xl font-extrabold text-maroon"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {m.n}
              </div>
              <div className="mt-1 text-xs leading-tight text-muted-foreground">{m.t}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center p-4">
          <img
            src="https://res.cloudinary.com/dipkbpinx/image/upload/v1791364802/weaverbird/Client%20Logos/xvonmzm9r32deaulqk7b.jpg"
            alt="Made in Kenya"
            className="h-auto max-h-[96px] w-full max-w-sm object-contain sm:max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
}
