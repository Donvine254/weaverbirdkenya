import { useEffect, useState } from "react";
import { branches, type Branch } from "@/data/branches";
import "leaflet/dist/leaflet.css";

export function BranchesMap({
  selected,
  onSelect,
}: {
  selected: Branch;
  onSelect: (b: Branch) => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [mod, setMod] = useState<{
    RL: typeof import("react-leaflet");
    L: typeof import("leaflet");
  } | null>(null);

  useEffect(() => {
    let cancelled = false;
    Promise.all([import("react-leaflet"), import("leaflet")]).then(([RL, L]) => {
      if (cancelled) return;
      // @ts-expect-error internal
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
      setMod({ RL, L });
      setMounted(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!mounted || !mod) {
    return (
      <div className="grid h-[420px] w-full place-items-center bg-muted text-sm text-muted-foreground">
        Loading map…
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup, useMap } = mod.RL;
  const L = mod.L;

  const hqIcon = L.divIcon({
    className: "",
    html: `<div style="background:linear-gradient(135deg,oklch(0.66 0.22 25),oklch(0.55 0.20 20));width:34px;height:34px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:3px solid white;box-shadow:0 4px 12px rgba(0,0,0,.3);display:grid;place-items:center;"><span style="transform:rotate(45deg);color:white;font-weight:800;font-size:14px;">★</span></div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -30],
  });
  const branchIcon = L.divIcon({
    className: "",
    html: `<div style="background:oklch(0.20 0.07 155);width:28px;height:28px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:3px solid white;box-shadow:0 3px 8px rgba(0,0,0,.25);"></div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -24],
  });

  function FitAll() {
    const map = useMap();
    useEffect(() => {
      const bounds = L.latLngBounds(branches.map((b) => b.coords));
      map.fitBounds(bounds, { padding: [50, 50] });
    }, [map]);
    return null;
  }

  return (
    <div className="h-[420px] w-full sm:h-[520px]">
      <MapContainer
        center={selected.coords}
        zoom={2}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitAll />
        {branches.map((b) => (
          <Marker
            key={b.name}
            position={b.coords}
            icon={b.type === "headquarters" ? hqIcon : branchIcon}
            eventHandlers={{ click: () => onSelect(b) }}
          >
            <Popup>
              <div style={{ minWidth: 180 }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{b.name}</div>
                <div style={{ fontSize: 12, color: "#555", marginBottom: 6 }}>
                  {b.address}
                </div>
                <a
                  href={b.map}
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ color: "oklch(0.55 0.20 20)", fontWeight: 600, fontSize: 12 }}
                >
                  Get directions →
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}