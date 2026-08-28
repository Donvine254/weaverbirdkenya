export default function Maasai() {
  return (
    <section
      className="relative overflow-hidden py-12 text-[#fbf8f0]"
      style={{
        backgroundColor: "#7d1522",
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(244,239,226,0.04) 0 2px, transparent 2px 22px)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 grid-cols-1 items-center grid gap-16 md:grid-cols-2">
        {/* Image */}
        <div
          className="border p-3.5"
          style={{
            borderColor: "#e4c877",
            background: "rgba(0, 0, 0, 0.12)",
          }}
        >
          <img
            src="https://res.cloudinary.com/dipkbpinx/image/upload/v1787899978/weaverbird/products/stwgnjjx2hke80n7cy9v.jpg"
            alt="Maasai shuka fabric in traditional pattern"
            className="h-[360px] w-full object-contain"
          />
        </div>

        {/* Content */}
        <div>
          <div
            className="mb-3.5 flex items-center gap-2.5 text-[0.72rem] font-bold uppercase tracking-[0.22em]"
            style={{ color: "#e4c877" }}
          >
            <span className="inline-block h-0.5 w-6" style={{ backgroundColor: "#bf9b3f" }} />
            Heritage · Culture · Identity
          </div>

          <h2 className="mb-4 text-3xl font-bold sm:text-4xl" style={{ color: "#fbf8f0" }}>
            Maasai Shukas &amp; African Apparel
          </h2>

          <p className="mb-6" style={{ color: "rgba(251, 248, 240, 0.85)" }}>
            Our Maasai shukas celebrate tradition with vibrant colours, authentic patterns and
            superior quality — perfect for cultural events, tourism, corporate gifts and everyday
            style. Made with premium cotton fabrics for comfort, durability and vibrant colour
            retention.
          </p>

          <a
            href="mailto:sales@weaverbirdkenya.com"
            className="inline-flex items-center gap-2 rounded-sm border px-8 py-4 text-sm font-semibold uppercase tracking-wide transition-all hover:bg-white/10"
            style={{
              borderColor: "rgba(251, 248, 240, 0.55)",
              color: "#fbf8f0",
            }}
          >
            Enquire About Shukas
          </a>

          {/* Colour Palette */}
          <div className="mt-6 flex gap-2.5">
            <div
              className="h-11 w-11 rounded-full border-2"
              style={{
                backgroundColor: "#c6090d",
                borderColor: "#fbf8f0",
              }}
            />
            <div
              className="h-11 w-11 rounded-full border-2"
              style={{
                backgroundColor: "#173a63",
                borderColor: "#fbf8f0",
              }}
            />{" "}
            <div
              className="h-11 w-11 rounded-full border-2"
              style={{
                backgroundColor: "#0024b4",
                borderColor: "#fbf8f0",
              }}
            />
            <div
              className="h-11 w-11 rounded-full border-2"
              style={{
                backgroundColor: "#111",
                borderColor: "#fbf8f0",
              }}
            />
            <div
              className="hidden sm:block h-11 w-11 rounded-full border-2"
              style={{
                backgroundColor: "#f4efe2",
                borderColor: "#fbf8f0",
              }}
            />
            <div
              className="h-11 w-11 rounded-full border-2"
              style={{
                backgroundColor: "#134a30",
                borderColor: "#fbf8f0",
              }}
            />
            <div
              className="hidden sm:block h-11 w-11 rounded-full border-2"
              style={{
                backgroundColor: "#001a84",
                borderColor: "#fbf8f0",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
