import { Phone } from "lucide-react";

export function CallButton() {
  return (
    <a
      href="tel:+254722264464"
      aria-label="Call Weaverbird"
      className="
        group
        fixed bottom-40 mb-2 right-5 z-[9990]
        flex h-12 w-12 items-center justify-center
        rounded-full
        bg-primary
        text-white
        shadow-lg
        transition-transform duration-200
        hover:scale-110
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-primary
      "
    >
      {/* Pulse ring 1 */}
      <span
        aria-hidden="true"
        className="
          absolute inset-0 -z-10
          rounded-full
          bg-primary
          animate-[call-ping_2s_ease-out_infinite]
        "
      />

      {/* Pulse ring 2 */}
      <span
        aria-hidden="true"
        className="
          absolute inset-0 -z-10
          rounded-full
          bg-primary
          animate-[call-ping_2s_ease-out_0.7s_infinite]
        "
      />

      {/* Phone icon */}
      <Phone
        aria-hidden="true"
        className="
          relative z-10 h-6 w-6
          fill-current
          animate-[call-ring_3s_ease-in-out_infinite]
        "
      />

      {/* Tooltip */}
      <span
        className="
          pointer-events-none
          absolute right-full mr-3
          hidden whitespace-nowrap
          rounded-md
          bg-foreground
          px-3 py-1.5
          text-xs font-medium
          text-background
          opacity-0 shadow
          transition-opacity
          group-hover:opacity-100
          md:block
        "
      >
        Call us
      </span>
    </a>
  );
}
