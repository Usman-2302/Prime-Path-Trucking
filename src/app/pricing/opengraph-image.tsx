import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Transparent Truck Dispatching Pricing | Prime Path Trucking";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%", display: "flex",
        background: "#0A0F1E", padding: "60px 72px",
        position: "relative", overflow: "hidden",
      }}>
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.18 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,15,30,0.97) 0%, rgba(10,15,30,0.8) 100%)" }} />

        <div style={{ position: "relative", display: "flex", width: "100%", gap: 60, alignItems: "center" }}>
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24, flex: 1 }}>
            <span style={{ color: "#F97316", fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>Pricing & Onboarding</span>
            <span style={{ color: "#fff", fontSize: 58, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Simple,{" "}
              <span style={{ color: "#F97316" }}>Transparent</span>{" "}
              Pricing.
            </span>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 20, lineHeight: 1.5 }}>
              No sign-up fee. No cancellation fee. No forced dispatch.
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg,#F97316,#EA580C)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/>
                </svg>
              </div>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, fontWeight: 700 }}>Prime Path Trucking</span>
            </div>
          </div>

          {/* Right — pricing tiers */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 300 }}>
            {[
              { name: "Standard", rate: "4–10%", note: "Single truck" },
              { name: "Fleet", rate: "3–6%", note: "3–10 trucks", highlight: true },
              { name: "Custom", rate: "Let's Talk", note: "10+ trucks" },
            ].map((t) => (
              <div key={t.name} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "16px 20px", borderRadius: 12,
                background: t.highlight ? "rgba(249,115,22,0.15)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${t.highlight ? "rgba(249,115,22,0.4)" : "rgba(255,255,255,0.08)"}`,
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>{t.name}</span>
                  <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 12 }}>{t.note}</span>
                </div>
                <span style={{ color: "#F97316", fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em" }}>{t.rate}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
