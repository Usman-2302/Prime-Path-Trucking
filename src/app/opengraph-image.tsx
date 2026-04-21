import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Prime Path Trucking | Dedicated Truck Dispatching Service USA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0F1E",
          padding: "60px 72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", opacity: 0.25,
          }}
        />

        {/* Overlay gradient */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(10,15,30,0.95) 0%, rgba(10,15,30,0.75) 100%)",
        }} />

        {/* Orange glow */}
        <div style={{
          position: "absolute", top: -100, left: -100,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 70%)",
        }} />

        {/* Content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 0 }}>
          {/* Logo row */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 12,
              background: "linear-gradient(135deg, #F97316, #EA580C)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              </svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#fff", fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em" }}>PRIME PATH</span>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>Trucking</span>
            </div>
          </div>

          {/* Headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)",
              borderRadius: 999, padding: "8px 18px", width: "fit-content",
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80" }} />
              <span style={{ color: "#FB923C", fontSize: 14, fontWeight: 700 }}>Now Dispatching in 48 States</span>
            </div>

            <span style={{
              color: "#fff", fontSize: 64, fontWeight: 800,
              letterSpacing: "-0.03em", lineHeight: 1.05,
            }}>
              We Handle the{" "}
              <span style={{ color: "#F97316" }}>Paperwork.</span>
            </span>
            <span style={{ color: "#fff", fontSize: 64, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              You Drive.
            </span>
          </div>
        </div>

        {/* Bottom stats row */}
        <div style={{ position: "relative", display: "flex", gap: 32 }}>
          {[
            { val: "$3.24", label: "Avg RPM" },
            { val: "24/7", label: "Dispatch Coverage" },
            { val: "48 States", label: "Covered" },
            { val: "$0", label: "Sign-Up Fee" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ color: "#F97316", fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>{s.val}</span>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, fontWeight: 500 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
