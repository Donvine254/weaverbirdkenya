import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "wb-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      /* storage unavailable */
    }
  }, []);

  function close(choice: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* storage unavailable */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-5">
      <div
        role="dialog"
        aria-label="Cookie consent"
        className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-white/10 p-5 shadow-2xl sm:flex-row sm:items-center"
        style={{
          background: "linear-gradient(135deg, oklch(0.13 0.05 155), oklch(0.10 0.06 155))",
        }}
      >
        <span
          className="grid aspect-square h-10 w-10 shrink-0 place-items-center rounded-full"
          style={{ background: "oklch(0.66 0.22 25 / 0.18)" }}
        >
          <Cookie className="h-5 w-5" style={{ color: "oklch(0.78 0.18 145)" }} />
        </span>
        <p className="flex-1 text-sm leading-relaxed text-white/80">
          We use cookies to enhance your experience. By continuing you agree to our cookie policy.
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => close("declined")}
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10 active:scale-95"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => close("accepted")}
            className="rounded-full px-5 py-2 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-md active:scale-95"
            style={{ background: "var(--gradient-red)" }}
          >
            Accept
          </button>
          <button
            type="button"
            aria-label="Dismiss cookie notice"
            onClick={() => close("declined")}
            className="rounded-full p-1.5 text-white/60 transition hover:bg-white/10 hover:text-white sm:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
