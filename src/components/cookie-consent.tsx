import { useState, useEffect } from 'react';
import { Cookie, X, Check, ChevronDown, ChevronUp } from 'lucide-react';

const STORAGE_KEY = 'wbd-cookie-consent';
const POLICY_VERSION = 1;
// Best practice (GDPR/ePrivacy guidance): re-ask at most every 6-12 months.
const MAX_AGE_DAYS = 180;

type ConsentChoice = 'accepted' | 'rejected' | 'partial';
interface ConsentRecord {
  version?: number;
  choice: ConsentChoice;
  necessary: true;
  analytics: boolean;
  functional: boolean;
  date: string;
}

function isConsentValid(raw: string | null): boolean {
  if (!raw) return false;
  try {
    const rec = JSON.parse(raw) as ConsentRecord;
    if (!rec || !rec.choice || !rec.date) return false;
    if (rec.version !== POLICY_VERSION) return false;
    const ageDays = (Date.now() - new Date(rec.date).getTime()) / 86_400_000;
    return Number.isFinite(ageDays) && ageDays < MAX_AGE_DAYS;
  } catch {
    return false;
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: false, functional: false });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!isConsentValid(saved)) {
        const t = setTimeout(() => setVisible(true), 12000);
        return () => clearTimeout(t);
      }
    } catch {
      const t = setTimeout(() => setVisible(true), 12000);
      return () => clearTimeout(t);
    }
  }, []);

  const save = (record: ConsentRecord) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...record, version: POLICY_VERSION }));
    } catch {
      /* storage unavailable — just dismiss */
    }
    setVisible(false);
  };

  const acceptAll = () =>
    save({ choice: 'accepted', necessary: true, analytics: true, functional: true, date: new Date().toISOString() });

  const rejectAll = () =>
    save({ choice: 'rejected', necessary: true, analytics: false, functional: false, date: new Date().toISOString() });

  const savePrefs = () =>
    save({
      choice: 'partial',
      necessary: true,
      analytics: prefs.analytics,
      functional: prefs.functional,
      date: new Date().toISOString(),
    });

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9997] flex justify-center p-3 sm:p-4 pointer-events-none"
    >
      <div className="pointer-events-auto w-full max-w-3xl bg-background/80 backdrop-blur-md rounded-2xl shadow-2xl border border-white/40 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-start gap-3 p-4 sm:p-5">
          <div className="w-10 h-10 rounded-xl bg-[#000c01] flex items-center justify-center flex-shrink-0">
            <Cookie size={20} className="text-green-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-sm text-gray-900 mb-1">We value your privacy</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
              You can choose to enable or disable some non-essential cookies.{' '}
              <a href="#" className="text-green-700 font-semibold hover:text-green-900 underline">
                Cookie Policy
              </a>
            </p>
          </div>
          <button
            type="button"
            onClick={rejectAll}
            aria-label="Close and reject cookies"
            className="text-gray-400 hover:text-gray-600 flex-shrink-0 -mr-1 -mt-1"
          >
            <X size={18} />
          </button>
        </div>

        {/* Expanded preferences */}
        {expanded && (
          <div className="px-4 sm:px-5 pb-3 space-y-2.5 animate-in">
            <CookieCategory
              title="Strictly Necessary Cookies"
              desc="Required for the website to function correctly. Cannot be disabled."
              alwaysOn
            />
            <CookieCategory
              title="Analytics Cookies"
              desc="Help us understand how visitors interact with the site — anonymously."
              checked={prefs.analytics}
              onToggle={() => setPrefs((p) => ({ ...p, analytics: !p.analytics }))}
            />
            <CookieCategory
              title="Functional Cookies"
              desc="Enable enhanced features like accessibility preferences and saved settings."
              checked={prefs.functional}
              onToggle={() => setPrefs((p) => ({ ...p, functional: !p.functional }))}
            />
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-2 px-4 sm:px-5 py-4 bg-gray-50 border-t border-gray-100">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors px-2 py-2"
          >
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            {expanded ? 'Hide' : 'Customize'}
          </button>
          <div className="flex-1" />
          <button
            type="button"
            onClick={rejectAll}
            className="text-xs font-semibold text-gray-600 hover:text-gray-900 px-4 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            Reject All
          </button>
          {expanded && (
            <button
              type="button"
              onClick={savePrefs}
              className="text-xs font-semibold text-gray-700 px-4 py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              Save Preferences
            </button>
          )}
          <button
            type="button"
            onClick={acceptAll}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white px-5 py-2.5 rounded-lg bg-[#000c01] hover:bg-[#0d2b1e] transition-colors shadow-md"
          >
            <Check size={14} /> Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

function CookieCategory({
  title,
  desc,
  checked,
  onToggle,
  alwaysOn,
}: {
  title: string;
  desc: string;
  checked?: boolean;
  onToggle?: () => void;
  alwaysOn?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
      <div className="flex-1 min-w-0">
        <div className="text-xs font-bold text-gray-800">{title}</div>
        <div className="text-[11px] text-gray-400 mt-0.5">{desc}</div>
      </div>
      {alwaysOn ? (
        <span className="text-[10px] font-bold uppercase tracking-wider text-green-700 bg-green-100 px-2.5 py-1 rounded-full">
          Always On
        </span>
      ) : (
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          onClick={onToggle}
          className={`w-10 h-5.5 rounded-full flex-shrink-0 relative transition-colors ${checked ? 'bg-green-500' : 'bg-gray-300'}`}
          style={{ height: 22, width: 40 }}
        >
          <span
            className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${
              checked ? 'left-5' : 'left-0.5'
            }`}
          />
        </button>
      )}
    </div>
  );
}
