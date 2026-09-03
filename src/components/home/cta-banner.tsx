import { ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CtaBanner() {
  return (
    <section id="quote" className="w-full">
      <div
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dipkbpinx/image/upload/v1783868775/weaverbird/u4iqolm38vfhoqkj47ne.webp")`,
        }}
      >
        {/* dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.12 0.06 155 / 0.85) 0%, oklch(0.12 0.06 155 / 0.55) 55%, oklch(0.12 0.06 155 / 0.20) 100%)",
          }}
        />
        <div className="relative flex items-center px-8 py-14 sm:py-20 lg:px-16 lg:py-24">
          <div className="max-w-lg text-white">
            <div className="flex items-center gap-2 py-6">
              <div className="w-12 h-12 rounded-md bg-[#22c55e]/20 border border-[#22c55e]/40 flex items-center justify-center flex-shrink-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
                </svg>
              </div>
              <span className="text-[#4ade80] text-sm font-semibold uppercase tracking-wider">
                Custom Uniforms
              </span>
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold leading-normal sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Need Uniforms for Your Organization?
            </h2>
            <p className="mt-4 text-base text-white/80 sm:text-lg">
              Get a quick quote tailored to your needs.
            </p>
            <Link
              to="/quote"
              className="group mt-8 inline-flex items-center gap-3 rounded-md bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-white/90 hover:shadow-lg active:scale-95"
            >
              Request a Bulk Quote{" "}
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
