import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Truck Dispatching Services | Prime Path Trucking";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SERVICES = [
  "Load Finding & Rate Negotiation",
  "Broker Packet Setup",
  "Billing & Invoicing",
  "Route Optimization",
  "24/7 Night & Weekend Dispatch",
  "Factoring Coordination",
  "Document Management",
];

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%", display: "flex",
        background: "#0A0F1E", padding: "60px 72px",
        position: "relative", overflow: "hidden",
      }}>
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=80"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.2 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,15,30,0.97) 0%, rgba(10,15,30,0.8) 100%)" }} />
        <div style={{ position: "absolute", top: -80, left: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)" }} />

        <div style={{ position: "relative", display: "flex", width: "100%", gap: 60 }}>
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <span style={{ color: "#F97316", fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>What We Handle</span>
              <span style={{ color: "#fff", fontSize: 56, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
                Everything Except{" "}
                <span style={{ color: "#F97316" }}>the Driving.</span>
              </span>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 20, lineHeight: 1.5 }}>
                All 7 services included in one flat fee. No hidden charges.
              </span>
            </div>

            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg,#F97316,#EA580C)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/>
                </svg>
              </div>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, fontWeight: 700 }}>Prime Path Trucking</span>
            </div>
          </div>

          {/* Right — service list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, justifyContent: "center", minWidth: 340 }}>
            {SERVICES.map((s) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F97316", flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, fontWeight: 500 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
