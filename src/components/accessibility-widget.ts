import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Accessibility, X, Type, Eye, Contrast, Droplets,
  Pause, Volume2, MousePointerClick, RotateCcw, Check,
} from 'lucide-react';

type FeatureKey =
  | 'largerText'
  | 'highlightLinks'
  | 'textSpacing'
  | 'pauseAnimations'
  | 'highContrast'
  | 'desaturate'
  | 'readGuide';

interface Feature {
  key: FeatureKey;
  label: string;
  icon: typeof Type;
  desc: string;
}

const FEATURES: Feature[] = [
  { key: 'largerText', label: 'Larger Text', icon: Type, desc: 'Increase text size for readability' },
  { key: 'highlightLinks', label: 'Highlight Links', icon: MousePointerClick, desc: 'Underline and outline links' },
  { key: 'textSpacing', label: 'Text Spacing', icon: Eye, desc: 'Increase letter & line spacing' },
  { key: 'highContrast', label: 'High Contrast', icon: Contrast, desc: 'Boost color contrast' },
  { key: 'desaturate', label: 'Desaturate', icon: Droplets, desc: 'Reduce colors to grayscale' },
  { key: 'pauseAnimations', label: 'Pause Animations', icon: Pause, desc: 'Stop motion and transitions' },
  { key: 'readGuide', label: 'Reading Guide', icon: Volume2, desc: 'Focus bar follows cursor' },
];

const STORAGE_KEY = 'wbd-a11y-prefs';

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Set<FeatureKey>>(new Set());
  const [fontSize, setFontSize] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const guideRef = useRef<HTMLDivElement>(null);

  // Load saved preferences
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as { features: FeatureKey[]; fontSize: number };
        setActive(new Set(parsed.features));
        setFontSize(parsed.fontSize);
      }
    } catch {
      /* ignore */
    }
  }, []);

  // Persist preferences
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ features: [...active], fontSize }));
  }, [active, fontSize]);

  // Apply CSS classes to <html> based on active features
  useEffect(() => {
    const root = document.documentElement;
    FEATURES.forEach((f) => {
      root.classList.toggle(`a11y-${f.key}`, active.has(f.key));
    });
  }, [active]);

  // Apply font size scaling
  useEffect(() => {
    const root = document.documentElement;
    if (fontSize === 0) {
      root.style.removeProperty('font-size');
    } else {
      root.style.fontSize = `${100 + fontSize * 8}%`;
    }
  }, [fontSize]);

  // Reading guide bar
  useEffect(() => {
    if (!active.has('readGuide')) {
      if (guideRef.current) guideRef.current.style.display = 'none';
      return;
    }
    const guide = guideRef.current;
    if (!guide) return;
    guide.style.display = 'block';

    const onMove = (e: MouseEvent) => {
      guide.style.top = `${e.clientY - 24}px`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [active]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Click outside to close
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, [open]);

  const toggle = useCallback((key: FeatureKey) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    setActive(new Set());
    setFontSize(0);
  }, []);

  return (
    <>
      {/* Reading guide bar */}
      <div
        ref={guideRef}
        className="fixed left-0 right-0 h-12 z-[9998] pointer-events-none hidden"
        style={{
          background: 'rgba(34,197,94,0.18)',
          borderTop: '2px solid rgba(34,197,94,0.7)',
          borderBottom: '2px solid rgba(34,197,94,0.7)',
          display: 'none',
        }}
      />

      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Accessibility options"
        aria-expanded={open}
        title="Accessibility"
        className="fixed bottom-5 left-5 z-[9999] w-14 h-14 rounded-full bg-[#000c01] hover:bg-[#0d2b1e] text-white shadow-2xl flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-400/40"
      >
        <Accessibility size={26} />
        {active.size > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-500 text-white text-[10px] font-bold flex items-center justify-center">
            {active.size}
          </span>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Accessibility settings"
          className="fixed bottom-24 left-5 z-[9999] w-[340px] max-w-[calc(100vw-2.5rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in"
        >
          {/* Header */}
          <div className="bg-[#000c01] px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Accessibility size={20} className="text-green-400" />
              <div>
                <div className="text-white font-bold text-sm">Accessibility</div>
                <div className="text-white/50 text-[10px]">ADA · EAA · WCAG Ready</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close accessibility menu"
              className="text-white/60 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Font size control */}
          <div className="px-5 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Text Size</span>
              <span className="text-xs font-semibold text-gray-400">
                {fontSize === 0 ? 'Default' : `+${fontSize * 8}%`}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setFontSize((f) => Math.max(0, f - 1))}
                disabled={fontSize === 0}
                aria-label="Decrease text size"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed text-gray-700 flex items-center justify-center text-lg font-bold transition-colors"
              >
                A−
              </button>
              <div className="flex-1 h-2 bg-gray-200 rounded-full relative">
                <div
                  className="absolute top-0 left-0 h-2 bg-green-500 rounded-full transition-all"
                  style={{ width: `${(fontSize / 4) * 100}%` }}
                />
              </div>
              <button
                type="button"
                onClick={() => setFontSize((f) => Math.min(4, f + 1))}
                disabled={fontSize === 4}
                aria-label="Increase text size"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed text-gray-700 flex items-center justify-center text-xl font-bold transition-colors"
              >
                A+
              </button>
            </div>
          </div>

          {/* Feature toggles */}
          <div className="px-3 py-3 max-h-[320px] overflow-y-auto">
            {FEATURES.map((f) => {
              const isOn = active.has(f.key);
              const Icon = f.icon;
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => toggle(f.key)}
                  aria-pressed={isOn}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-colors mb-1 ${
                    isOn ? 'bg-green-50' : 'hover:bg-gray-50'
                  }`}
                >
                  <span
                    className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOn ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <Icon size={17} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-semibold ${isOn ? 'text-green-800' : 'text-gray-800'}`}>
                      {f.label}
                    </div>
                    <div className="text-[11px] text-gray-400 truncate">{f.desc}</div>
                  </div>
                  <span
                    className={`w-9 h-5 rounded-full flex-shrink-0 relative transition-colors ${
                      isOn ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${
                        isOn ? 'left-4' : 'left-0.5'
                      }`}
                    />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="px-5 py-3.5 border-t border-gray-100 flex items-center justify-between bg-gray-50">
            <button
              type="button"
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-red-600 transition-colors"
            >
              <RotateCcw size={13} /> Reset All
            </button>
            <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
              <Check size={11} className="text-green-500" />
              Preferences saved
            </div>
          </div>
        </div>
      )}
    </>
  );
}
