// import { useState, useEffect, useRef, useCallback } from "react";
// import {
//   PersonStanding,
//   X,
//   Type,
//   Eye,
//   Contrast,
//   Droplets,
//   Pause,
//   BookOpen,
//   MousePointerClick,
//   RotateCcw,
//   Check,
// } from "lucide-react";

// type FeatureKey =
//   | "largerText"
//   | "highlightLinks"
//   | "textSpacing"
//   | "pauseAnimations"
//   | "highContrast"
//   | "desaturate"
//   | "readGuide";

// interface Feature {
//   key: FeatureKey;
//   label: string;
//   icon: typeof Type;
//   desc: string;
// }

// const FEATURES: Feature[] = [
//   {
//     key: "largerText",
//     label: "Larger Text",
//     icon: Type,
//     desc: "Increase text size for readability",
//   },
//   {
//     key: "highlightLinks",
//     label: "Highlight Links",
//     icon: MousePointerClick,
//     desc: "Underline and outline links",
//   },
//   { key: "textSpacing", label: "Text Spacing", icon: Eye, desc: "Increase letter & line spacing" },
//   { key: "highContrast", label: "High Contrast", icon: Contrast, desc: "Boost color contrast" },
//   { key: "desaturate", label: "Desaturate", icon: Droplets, desc: "Reduce colors to grayscale" },
//   {
//     key: "pauseAnimations",
//     label: "Pause Animations",
//     icon: Pause,
//     desc: "Stop motion and transitions",
//   },
//   { key: "readGuide", label: "Reading Guide", icon: BookOpen, desc: "Focus bar follows cursor" },
// ];

// const STORAGE_KEY = "wbd-a11y-prefs";

// export function AccessibilityWidget() {
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState<Set<FeatureKey>>(new Set());
//   const [fontSize, setFontSize] = useState(0);
//   const panelRef = useRef<HTMLDivElement>(null);
//   const guideRef = useRef<HTMLDivElement>(null);
//   const triggerRef = useRef<HTMLButtonElement>(null);
//   const closeRef = useRef<HTMLButtonElement>(null);

//   // Load saved preferences
//   useEffect(() => {
//     try {
//       const saved = localStorage.getItem(STORAGE_KEY);
//       if (saved) {
//         const parsed = JSON.parse(saved) as { features: FeatureKey[]; fontSize: number };
//         setActive(new Set(parsed.features));
//         setFontSize(parsed.fontSize);
//       }
//     } catch {
//       /* ignore */
//     }
//   }, []);

//   // Persist preferences
//   useEffect(() => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify({ features: [...active], fontSize }));
//   }, [active, fontSize]);

//   // Apply CSS classes to <html> based on active features
//   useEffect(() => {
//     const root = document.documentElement;
//     FEATURES.forEach((f) => {
//       root.classList.toggle(`a11y-${f.key}`, active.has(f.key));
//     });
//   }, [active]);

//   // Apply font size scaling
//   useEffect(() => {
//     const root = document.documentElement;
//     if (fontSize === 0) {
//       root.style.removeProperty("font-size");
//     } else {
//       root.style.fontSize = `${100 + fontSize * 8}%`;
//     }
//   }, [fontSize]);

//   // Reading guide bar
//   useEffect(() => {
//     if (!active.has("readGuide")) {
//       if (guideRef.current) guideRef.current.style.display = "none";
//       return;
//     }
//     const guide = guideRef.current;
//     if (!guide) return;
//     guide.style.display = "block";

//     const onMove = (e: MouseEvent) => {
//       guide.style.top = `${e.clientY - 24}px`;
//     };
//     window.addEventListener("mousemove", onMove);
//     return () => window.removeEventListener("mousemove", onMove);
//   }, [active]);

//   // Close on Escape
//   useEffect(() => {
//     if (!open) return;
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         setOpen(false);
//         triggerRef.current?.focus();
//         return;
//       }
//       if (e.key !== "Tab" || !panelRef.current) return;
//       const nodes = panelRef.current.querySelectorAll<HTMLElement>(
//         'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
//       );
//       if (nodes.length === 0) return;
//       const first = nodes[0];
//       const last = nodes[nodes.length - 1];
//       if (e.shiftKey && document.activeElement === first) {
//         e.preventDefault();
//         last.focus();
//       } else if (!e.shiftKey && document.activeElement === last) {
//         e.preventDefault();
//         first.focus();
//       }
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [open]);

//   // Move focus into the panel when it opens
//   useEffect(() => {
//     if (open) closeRef.current?.focus();
//   }, [open]);

//   // Click outside to close
//   useEffect(() => {
//     if (!open) return;
//     const onDown = (e: MouseEvent) => {
//       if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
//         setOpen(false);
//       }
//     };
//     window.addEventListener("mousedown", onDown);
//     return () => window.removeEventListener("mousedown", onDown);
//   }, [open]);

//   const toggle = useCallback((key: FeatureKey) => {
//     setActive((prev) => {
//       const next = new Set(prev);
//       if (next.has(key)) next.delete(key);
//       else next.add(key);
//       return next;
//     });
//   }, []);

//   const resetAll = useCallback(() => {
//     setActive(new Set());
//     setFontSize(0);
//   }, []);

//   return (
//     <>
//       {/* Reading guide bar */}
//       <div
//         ref={guideRef}
//         aria-hidden="true"
//         className="fixed left-0 right-0 h-12 z-[9998] pointer-events-none hidden"
//         style={{
//           background: "rgba(34,197,94,0.18)",
//           borderTop: "2px solid rgba(34,197,94,0.7)",
//           borderBottom: "2px solid rgba(34,197,94,0.7)",
//           display: "none",
//         }}
//       />

//       {/* Floating button */}
//       <button
//         type="button"
//         ref={triggerRef}
//         onClick={() => setOpen((o) => !o)}
//         aria-label="Accessibility options"
//         aria-expanded={open}
//         title="Accessibility Widget"
//         className="fixed bottom-5 right-5 z-[9999] cursor-pointer w-12 h-12 rounded-full bg-maroon hover:bg-gold text-white shadow-2xl flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-400/40"
//       >
//         <PersonStanding size={26} className="size-10" aria-hidden="true" />
//         {active.size > 0 && (
//           <span
//             aria-label={`${active.size} accessibility settings active`}
//             className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-500 text-white text-[10px] font-bold flex items-center justify-center"
//           >
//             {active.size}
//           </span>
//         )}
//       </button>

//       {/* Panel */}
//       {open && (
//         <div
//           ref={panelRef}
//           role="dialog"
//           aria-modal="true"
//           aria-label="Accessibility settings"
//           className="fixed bottom-32 right-5 z-[9999] w-[340px] max-w-[calc(100vw-2.5rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in"
//         >
//           {/* Header */}
//           <div className="bg-[#000c01] px-5 py-4 flex items-center justify-between">
//             <div className="flex items-center gap-2.5">
//               <PersonStanding size={20} className="text-green-400" />
//               <div>
//                 <div className="text-white font-bold text-sm">Accessibility</div>
//                 <div className="text-white/70 text-[10px]">ADA · EAA · WCAG Ready</div>
//               </div>
//             </div>
//             <button
//               type="button"
//               ref={closeRef}
//               onClick={() => {
//                 setOpen(false);
//                 triggerRef.current?.focus();
//               }}
//               aria-label="Close accessibility menu"
//               className="text-white/80 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400 rounded"
//             >
//               <X size={18} aria-hidden="true" />
//             </button>
//           </div>

//           {/* Font size control */}
//           <div className="px-5 py-4 border-b border-gray-100">
//             <div className="flex items-center justify-between mb-3">
//               <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
//                 Text Size
//               </span>
//               <span className="text-xs font-semibold text-gray-600">
//                 {fontSize === 0 ? "Default" : `+${fontSize * 8}%`}
//               </span>
//             </div>
//             <div className="flex items-center gap-2">
//               <button
//                 type="button"
//                 onClick={() => setFontSize((f) => Math.max(0, f - 1))}
//                 disabled={fontSize === 0}
//                 aria-label="Decrease text size"
//                 className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed text-gray-700 flex items-center justify-center text-lg font-bold transition-colors"
//               >
//                 A−
//               </button>
//               <div className="flex-1 h-2 bg-gray-200 rounded-full relative">
//                 <div
//                   className="absolute top-0 left-0 h-2 bg-green-500 rounded-full transition-all"
//                   style={{ width: `${(fontSize / 4) * 100}%` }}
//                 />
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setFontSize((f) => Math.min(4, f + 1))}
//                 disabled={fontSize === 4}
//                 aria-label="Increase text size"
//                 className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed text-gray-700 flex items-center justify-center text-xl font-bold transition-colors"
//               >
//                 A+
//               </button>
//             </div>
//           </div>

//           {/* Feature toggles */}
//           <div className="px-3 py-3 max-h-[320px] overflow-y-auto">
//             {FEATURES.map((f) => {
//               const isOn = active.has(f.key);
//               const Icon = f.icon;
//               return (
//                 <button
//                   key={f.key}
//                   type="button"
//                   onClick={() => toggle(f.key)}
//                   aria-pressed={isOn}
//                   className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-colors mb-1 ${
//                     isOn ? "bg-green-50" : "hover:bg-gray-50"
//                   }`}
//                 >
//                   <span
//                     className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
//                       isOn ? "bg-green-500 text-white" : "bg-gray-100 text-gray-500"
//                     }`}
//                   >
//                     <Icon size={17} />
//                   </span>
//                   <div className="flex-1 min-w-0">
//                     <div
//                       className={`text-sm font-semibold ${isOn ? "text-green-800" : "text-gray-800"}`}
//                     >
//                       {f.label}
//                     </div>
//                     <div className="text-[11px] text-gray-600 truncate">{f.desc}</div>
//                   </div>
//                   <span
//                     className={`w-9 h-5 rounded-full flex-shrink-0 relative transition-colors ${
//                       isOn ? "bg-green-500" : "bg-gray-300"
//                     }`}
//                   >
//                     <span
//                       className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${
//                         isOn ? "left-4" : "left-0.5"
//                       }`}
//                     />
//                   </span>
//                 </button>
//               );
//             })}
//           </div>

//           {/* Footer */}
//           <div className="px-5 py-3.5 border-t border-gray-100 flex items-center justify-between bg-gray-50">
//             <button
//               type="button"
//               onClick={resetAll}
//               className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-red-600 transition-colors"
//             >
//               <RotateCcw size={13} /> Reset All
//             </button>
//             <div className="flex items-center gap-1.5 text-[10px] text-gray-600">
//               <Check size={11} className="text-green-500" />
//               Preferences saved
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import { useState, useEffect, useRef, useCallback } from "react";
import { TextSpacingIcon } from "../assets/icons";
import {
  PersonStanding,
  X,
  Type,
  Eye,
  ListChevronsUpDown,
  Contrast,
  Droplets,
  CirclePause,
  BookOpen,
  Link2,
  RotateCcw,
  Check,
} from "lucide-react";

type FeatureKey =
  | "highlightLinks"
  | "textSpacing"
  | "pauseAnimations"
  | "highContrast"
  | "desaturate"
  | "readGuide";

interface Feature {
  key: FeatureKey;
  label: string;
  icon: typeof Type;
  desc: string;
}

const FEATURES: Feature[] = [
  {
    key: "highlightLinks",
    label: "Highlight Links",
    icon: Link2,
    desc: "Make links easier to identify",
  },
  {
    key: "textSpacing",
    label: "Text Spacing",
    icon: Eye,
    desc: "Increase letter and line spacing",
  },
  {
    key: "highContrast",
    label: "High Contrast",
    icon: Contrast,
    desc: "Increase page contrast",
  },
  {
    key: "desaturate",
    label: "Desaturate",
    icon: Droplets,
    desc: "Reduce page colors",
  },
  {
    key: "pauseAnimations",
    label: "Pause Animations",
    icon: CirclePause,
    desc: "Stop animations and transitions",
  },
  {
    key: "readGuide",
    label: "Reading Guide",
    icon: BookOpen,
    desc: "Guide your eyes while reading",
  },
];

const STORAGE_KEY = "wbd-a11y-prefs";

const MAX_FONT_SIZE = 4;
const MAX_LINE_HEIGHT = 3;

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);

  const [active, setActive] = useState<Set<FeatureKey>>(() => new Set<FeatureKey>());

  const [fontSize, setFontSize] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);

  const panelRef = useRef<HTMLDivElement>(null);
  const guideRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  /**
   * Load saved accessibility preferences
   */
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) return;

      const parsed = JSON.parse(saved) as {
        features?: FeatureKey[];
        fontSize?: number;
        lineHeight?: number;
      };

      if (Array.isArray(parsed.features)) {
        setActive(new Set(parsed.features));
      }

      if (typeof parsed.fontSize === "number") {
        setFontSize(Math.min(MAX_FONT_SIZE, Math.max(0, parsed.fontSize)));
      }

      if (typeof parsed.lineHeight === "number") {
        setLineHeight(Math.min(MAX_LINE_HEIGHT, Math.max(0, parsed.lineHeight)));
      }
    } catch {
      // Ignore invalid localStorage data
    }
  }, []);

  /**
   * Persist preferences
   */
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          features: [...active],
          fontSize,
          lineHeight,
        }),
      );
    } catch {
      // Ignore storage errors
    }
  }, [active, fontSize, lineHeight]);

  /**
   * Apply accessibility feature classes
   * to the <html> element
   */
  useEffect(() => {
    const root = document.documentElement;

    FEATURES.forEach((feature) => {
      root.classList.toggle(`a11y-${feature.key}`, active.has(feature.key));
    });

    return () => {
      FEATURES.forEach((feature) => {
        root.classList.remove(`a11y-${feature.key}`);
      });
    };
  }, [active]);

  /**
   * Apply global font size scaling
   */
  useEffect(() => {
    const root = document.documentElement;

    if (fontSize === 0) {
      root.style.removeProperty("font-size");
      return;
    }

    root.style.fontSize = `${100 + fontSize * 8}%`;
  }, [fontSize]);

  /**
   * Apply multi-level line height
   */
  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("a11y-lineHeight-1", "a11y-lineHeight-2", "a11y-lineHeight-3");

    if (lineHeight > 0) {
      root.classList.add(`a11y-lineHeight-${lineHeight}`);
    }

    return () => {
      root.classList.remove("a11y-lineHeight-1", "a11y-lineHeight-2", "a11y-lineHeight-3");
    };
  }, [lineHeight]);

  /**
   * Reading guide
   */
  useEffect(() => {
    const guide = guideRef.current;

    if (!guide) return;

    if (!active.has("readGuide")) {
      guide.style.display = "none";
      return;
    }

    guide.style.display = "block";

    const onMove = (event: MouseEvent) => {
      guide.style.top = `${event.clientY - 24}px`;
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, [active]);

  /**
   * Escape key + keyboard focus trap
   */
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const nodes = panelRef.current.querySelectorAll<HTMLElement>(
        `
          button:not([disabled]),
          [href],
          input,
          select,
          textarea,
          [tabindex]:not([tabindex="-1"])
          `,
      );

      if (nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  /**
   * Move keyboard focus into dialog
   */
  useEffect(() => {
    if (open) {
      closeRef.current?.focus();
    }
  }, [open]);

  /**
   * Click outside menu to close
   */
  useEffect(() => {
    if (!open) return;

    const onDown = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", onDown);

    return () => {
      window.removeEventListener("mousedown", onDown);
    };
  }, [open]);

  /**
   * Toggle accessibility feature
   */
  const toggle = useCallback((key: FeatureKey) => {
    setActive((previous) => {
      const next = new Set(previous);

      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }

      return next;
    });
  }, []);

  /**
   * Cycle font size:
   *
   * Default
   * +8%
   * +16%
   * +24%
   * +32%
   * Default
   */
  const cycleFontSize = useCallback(() => {
    setFontSize((current) => {
      if (current >= MAX_FONT_SIZE) {
        return 0;
      }

      return current + 1;
    });
  }, []);

  const cycleLineHeight = useCallback(() => {
    setLineHeight((current) => (current >= MAX_LINE_HEIGHT ? 0 : current + 1));
  }, []);

  /**
   * Reset all accessibility settings
   */
  const resetAll = useCallback(() => {
    setActive(new Set());
    setFontSize(0);
    setLineHeight(0);
  }, []);

  /**
   * Number shown on floating accessibility button
   */
  const enabledCount = active.size + (fontSize > 0 ? 1 : 0) + (lineHeight > 0 ? 1 : 0);

  return (
    <>
      {/* ======================================================
          READING GUIDE
      ====================================================== */}

      <div
        ref={guideRef}
        aria-hidden="true"
        className="fixed left-0 right-0 z-[9998] hidden h-12 pointer-events-none"
        style={{
          background: "rgba(34, 197, 94, 0.12)",
          borderTop: "2px solid rgba(34, 197, 94, 0.6)",
          borderBottom: "2px solid rgba(34, 197, 94, 0.6)",
          display: "none",
        }}
      />

      {/* ======================================================
          FLOATING ACCESSIBILITY BUTTON
      ====================================================== */}

      <button
        type="button"
        ref={triggerRef}
        tabIndex={0}
        onClick={() => setOpen((previous) => !previous)}
        aria-label="Accessibility options"
        aria-haspopup="dialog"
        aria-expanded={open}
        title="Accessibility Menu"
        className="fixed bottom-5 right-5 z-[9999] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-maroon text-white shadow-[0_10px_35px_rgba(0,0,0,0.28)] transition-all duration-200 hover:scale-105 hover:bg-gold focus:outline-none focus:ring-4 focus:ring-green-400/40"
      >
        <PersonStanding size={32} strokeWidth={2} aria-hidden="true" />
        {enabledCount > 0 && (
          <span
            aria-label={`${enabledCount} accessibility settings active`}
            className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-green-600 px-1 text-[10px] font-bold text-white"
          >
            {enabledCount}
          </span>
        )}
      </button>

      {/* ======================================================
          ACCESSIBILITY PANEL
      ====================================================== */}

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Accessibility settings"
          className="fixed bottom-24 right-5 z-[9999] w-[390px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-[24px] border border-black/[0.07] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.24)] animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          {/* ==================================================
              HEADER
          ================================================== */}

          <div className="flex items-center justify-between bg-primary-deep px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold">
                <PersonStanding size={22} className="text-white" aria-hidden="true" />
              </span>

              <div>
                <div className="text-[15px] font-bold leading-tight text-white">
                  Accessibility Menu
                </div>

                <div className="mt-0.5 text-[11px] text-white">
                  Customize your browsing experience
                </div>
              </div>
            </div>

            <button
              type="button"
              ref={closeRef}
              tabIndex={0}
              onClick={() => {
                setOpen(false);
                triggerRef.current?.focus();
              }}
              aria-label="Close accessibility menu"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          {/* ==================================================
              TOOLS
          ================================================== */}

          <div className="max-h-[480px] overflow-y-auto overscroll-contain bg-[#f7f8f7] p-4">
            <div className="grid grid-cols-2 gap-3">
              {/* ==============================================
                  BIGGER TEXT
              ============================================== */}

              <button
                type="button"
                tabIndex={0}
                onClick={cycleFontSize}
                aria-pressed={fontSize > 0}
                aria-label={
                  fontSize === 0
                    ? "Bigger Text. Default size"
                    : `Bigger Text. ${fontSize * 8} percent larger`
                }
                className={`group relative flex min-h-[96px] cursor-pointer flex-col items-center justify-center rounded-2xl border px-3 py-3 text-center shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 ${
                  fontSize > 0
                    ? "border-green-700 bg-green-50 shadow-[0_5px_18px_rgba(22,101,52,0.12)]"
                    : "border-gray-200 bg-white hover:-translate-y-0.5 hover:border-green-400 hover:shadow-md"
                }`}
              >
                {fontSize > 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-700 text-white"
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>
                )}

                <Type
                  size={28}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className={`mb-2 transition-colors ${fontSize > 0 ? "text-green-800" : "text-gray-700 group-hover:text-green-800"}`}
                />

                <span
                  className={`text-[13px] font-semibold leading-tight ${fontSize > 0 ? "text-green-950" : "text-gray-800"}`}
                >
                  Bigger Text
                </span>

                {/* Level indicators */}

                <div aria-hidden="true" className="mt-2 flex gap-1">
                  {[1, 2, 3, 4].map((level) => (
                    <span
                      key={level}
                      className={`h-1.5 w-4 rounded-full transition-colors ${level <= fontSize ? "bg-green-700" : "bg-gray-200"}`}
                    />
                  ))}
                </div>

                <span
                  className={`mt-1.5 text-[10px] font-medium ${fontSize > 0 ? "text-green-700" : "text-gray-400"}`}
                >
                  {fontSize === 0 ? "Default" : `+${fontSize * 8}%`}
                </span>
              </button>

              <button
                type="button"
                tabIndex={0}
                onClick={cycleLineHeight}
                aria-pressed={lineHeight > 0}
                aria-label={
                  lineHeight === 0 ? "Line Height. Default" : `Line Height. Level ${lineHeight}`
                }
                className={`group relative flex min-h-[96px] cursor-pointer flex-col items-center justify-center rounded-2xl border px-3 py-3 text-center shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 ${
                  lineHeight > 0
                    ? "border-green-700 bg-green-50 shadow-[0_5px_18px_rgba(22,101,52,0.12)]"
                    : "border-gray-200 bg-white hover:-translate-y-0.5 hover:border-green-400 hover:shadow-md"
                }`}
              >
                {lineHeight > 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-700 text-white"
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>
                )}

                <ListChevronsUpDown
                  size={27}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className={`mb-2 transition-colors ${
                    lineHeight > 0 ? "text-green-800" : "text-gray-700 group-hover:text-green-800"
                  }`}
                />

                <span
                  className={`text-[13px] font-semibold leading-tight ${
                    lineHeight > 0 ? "text-green-950" : "text-gray-800"
                  }`}
                >
                  Line Height
                </span>

                <div aria-hidden="true" className="mt-2 flex gap-1">
                  {[1, 2, 3].map((level) => (
                    <span
                      key={level}
                      className={`h-1.5 w-5 rounded-full transition-colors ${
                        level <= lineHeight ? "bg-green-700" : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>

                <span
                  className={`mt-1.5 text-[10px] font-medium ${
                    lineHeight > 0 ? "text-green-700" : "text-gray-400"
                  }`}
                >
                  {lineHeight === 0 ? "Default" : `Level ${lineHeight}`}
                </span>
              </button>

              {/* ==============================================
                  OTHER ACCESSIBILITY TOOLS
              ============================================== */}

              {FEATURES.map((feature) => {
                const isOn = active.has(feature.key);
                const Icon = feature.icon;

                return (
                  <button
                    key={feature.key}
                    type="button"
                    tabIndex={0}
                    onClick={() => toggle(feature.key)}
                    aria-pressed={isOn}
                    aria-label={`${feature.label}. ${isOn ? "Enabled" : "Disabled"}`}
                    title={feature.desc}
                    className={`group relative flex min-h-[96px] cursor-pointer flex-col items-center justify-center rounded-2xl border px-3 py-3 text-center shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 ${
                      isOn
                        ? "border-green-700 bg-green-50 shadow-[0_5px_18px_rgba(22,101,52,0.12)]"
                        : "border-gray-200 bg-white hover:-translate-y-0.5 hover:border-green-400 hover:shadow-md"
                    }`}
                  >
                    {/* Active indicator */}
                    {isOn && (
                      <span
                        aria-hidden="true"
                        className="absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-700 text-white"
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                    )}
                    {/* Icon */}
                    {feature.key === "textSpacing" ? (
                      <TextSpacingIcon
                        width={27}
                        height={27}
                        aria-hidden="true"
                        className={`mb-2 transition-colors ${isOn ? "text-green-800" : "text-gray-700 group-hover:text-green-800"}`}
                      />
                    ) : (
                      <Icon
                        size={27}
                        strokeWidth={1.8}
                        aria-hidden="true"
                        className={`mb-2 transition-colors ${isOn ? "text-green-800" : "text-gray-700 group-hover:text-green-800"}`}
                      />
                    )}

                    {/* Label */}

                    <span
                      className={`text-[13px] font-semibold leading-tight ${isOn ? "text-green-950" : "text-gray-800"}`}
                    >
                      {feature.label}
                    </span>
                    {/* State */}
                    <span
                      className={`mt-2 text-[10px] font-medium ${isOn ? "text-green-700" : "text-gray-400"}`}
                    >
                      {isOn ? "Enabled" : "Off"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          {/* ==================================================
              FOOTER
          ================================================== */}
          <div className="flex items-center justify-between border-t border-gray-100 bg-white px-5 py-3.5">
            <button
              type="button"
              tabIndex={0}
              onClick={resetAll}
              aria-label="Reset all accessibility settings"
              disabled={active.size === 0 && fontSize === 0 && lineHeight === 0}
              className="inline-flex items-center gap-1.5 cursor-pointer rounded text-xs font-semibold text-gray-500 transition-colors hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
            >
              <RotateCcw size={14} aria-hidden="true" />
              Reset All
            </button>
            <div className="flex items-center gap-1.5 text-[10px] font-medium text-gray-500">
              <Check size={12} className="text-green-600" aria-hidden="true" />
              Preferences saved
            </div>
          </div>
        </div>
      )}
    </>
  );
}
