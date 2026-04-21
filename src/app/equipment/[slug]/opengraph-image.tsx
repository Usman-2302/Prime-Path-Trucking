import { ImageResponse } from "next/og";
import { EQUIPMENT_TYPES, EQUIPMENT_DETAIL } from "@/lib/constants";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG_IMAGES: Record<string, string> = {
  "dry-van":             "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80",
  "reefer":              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  "flatbed":             "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=80",
  "step-deck":           "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
  "power-only":          "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80",
  "hotshot":             "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=80",
  "box-trucks":          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
  "sprinter-cargo-vans": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
};

export async function generateImageMetadata() {
  return EQUIPMENT_TYPES.map((eq) => ({
    id: eq.slug,
    alt: `${eq.label} Dispatch Service | Prime Path Trucking`,
  }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const eq = EQUIPMENT_TYPES.find((e) => e.slug === params.slug);
  const detail = EQUIPMENT_DETAIL[params.slug];
  const bgImg = BG_IMAGES[params.slug] || BG_IMAGES["dry-van"];

  if (!eq || !detail) return new ImageResponse(<div>Not found</div>, { ...size });

  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%", display: "flex",
        background: "#0A0F1E", padding: "60px 72px",
        position: "relative", overflow: "hidden",
      }}>
        <img
          src={bgImg}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.22 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,15,30,0.96) 0%, rgba(10,15,30,0.78) 100%)" }} />
        <div style={{ position: "absolute", top: -100, left: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)" }} />

        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          {/* Top */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Badge */}
            <div style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)",
              borderRadius: 999, padding: "8px 18px", width: "fit-content",
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80" }} />
              <span style={{ color: "#FB923C", fontSize: 14, fontWeight: 700 }}>{eq.label} Dispatch Service</span>
            </div>

            {/* Headline */}
            <span style={{ color: "#fff", fontSize: 58, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              {eq.label}{" "}
              <span style={{ color: "#F97316" }}>Dispatch</span>
            </span>
            <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 20, lineHeight: 1.5, maxWidth: 700 }}>
              {detail.sub}
            </span>
          </div>

          {/* Bottom stats */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 40 }}>
              {[
                { val: eq.rpm, label: "Avg RPM Range" },
                { val: "24/7", label: "Coverage" },
                { val: "$0", label: "Sign-Up Fee" },
                { val: "48 hrs", label: "First Load" },
              ].map((s) => (
                <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ color: "#F97316", fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em" }}>{s.val}</span>
                  <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, fontWeight: 500 }}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "linear-gradient(135deg,#F97316,#EA580C)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/>
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#fff", fontSize: 18, fontWeight: 800 }}>PRIME PATH</span>
                <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, letterSpacing: "0.12em" }}>TRUCKING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
