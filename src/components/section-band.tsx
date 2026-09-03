export function SectionBand() {
  return (
    <div
      aria-hidden
      className="relative h-16 w-full bg-cover bg-center bg-no-repeat sm:h-20 lg:h-24"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dipkbpinx/image/upload/v1788414929/ocyk67ekrwjeejffrqvj.jpg')",
      }}
    >
      {/* fade overlays so the band blends softly into surrounding sections */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--primary-darker) 0%, transparent 35%, transparent 65%, var(--primary-darker) 100%)",
        }}
      />
    </div>
  );
}
