import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── Primitive Tokens ───────────────────────────────────────────────
      colors: {
        // Brand primitives
        orange: {
          DEFAULT: "#F97316",
          dark:    "#EA580C",
          darker:  "#C2410C",
          glow:    "rgba(249,115,22,0.15)",
          "glow-strong": "rgba(249,115,22,0.25)",
        },
        navy: {
          950:  "#0A0F1E",   // page background
          900:  "#0F172A",   // slightly lighter bg
          800:  "#111827",   // card surfaces
          700:  "#1F2937",   // borders / dividers
          600:  "#374151",   // subtle borders
          500:  "#4B5563",   // muted elements
        },
        // ─── Semantic Tokens ──────────────────────────────────────────────
        // Background
        "bg-base":      "#0A0F1E",
        "bg-surface":   "#111827",
        "bg-elevated":  "#1F2937",
        "bg-light":     "#F9FAFB",  // for contrast-break sections
        // Text
        "text-primary":   "#F9FAFB",
        "text-secondary": "#9CA3AF",
        "text-muted":     "#6B7280",
        "text-dark":      "#111827", // on light sections
        // Border
        "border-subtle":  "#1F2937",
        "border-default": "#374151",
        "border-strong":  "#4B5563",
        // Semantic states
        success:  "#10B981",
        warning:  "#F59E0B",
        error:    "#EF4444",
        info:     "#3B82F6",
      },

      // ─── Typography ───────────────────────────────────────────────────
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono:    ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        // Type scale — display down to caption
        "display": ["3.5rem",  { lineHeight: "1.1",  letterSpacing: "-0.03em", fontWeight: "800" }], // 56px
        "h1":      ["2.5rem",  { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }], // 40px
        "h2":      ["2rem",    { lineHeight: "1.2",  letterSpacing: "-0.02em", fontWeight: "700" }], // 32px
        "h3":      ["1.5rem",  { lineHeight: "1.3",  letterSpacing: "-0.01em", fontWeight: "600" }], // 24px
        "h4":      ["1.25rem", { lineHeight: "1.4",  letterSpacing: "0",       fontWeight: "600" }], // 20px
        "body-lg": ["1.125rem",{ lineHeight: "1.7",  letterSpacing: "0",       fontWeight: "400" }], // 18px
        "body":    ["1rem",    { lineHeight: "1.6",  letterSpacing: "0",       fontWeight: "400" }], // 16px — minimum
        "sm":      ["0.875rem",{ lineHeight: "1.5",  letterSpacing: "0",       fontWeight: "500" }], // 14px
        "caption": ["0.75rem", { lineHeight: "1.4",  letterSpacing: "0.01em",  fontWeight: "400" }], // 12px — minimum
      },

      // ─── Spacing (8dp rhythm) ─────────────────────────────────────────
      spacing: {
        "tap": "2.75rem",  // 44px — minimum touch target
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },

      // ─── Breakpoints ──────────────────────────────────────────────────
      screens: {
        "xs":  "375px",   // iPhone SE — hero must work here
        "sm":  "640px",
        "md":  "768px",
        "lg":  "1024px",
        "xl":  "1280px",
        "2xl": "1440px",
      },

      // ─── Border Radius ────────────────────────────────────────────────
      borderRadius: {
        "sm":  "6px",
        "md":  "10px",
        "lg":  "14px",
        "xl":  "18px",
        "2xl": "24px",
        "3xl": "32px",
      },

      // ─── Box Shadows ──────────────────────────────────────────────────
      boxShadow: {
        // Elevation scale
        "card":        "0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)",
        "card-hover":  "0 10px 30px rgba(0,0,0,0.5), 0 0 0 1px rgba(249,115,22,0.3)",
        "orange-glow": "0 0 20px rgba(249,115,22,0.35), 0 0 40px rgba(249,115,22,0.15)",
        "orange-sm":   "0 0 10px rgba(249,115,22,0.25)",
        "modal":       "0 25px 50px rgba(0,0,0,0.7)",
        "header":      "0 1px 0 rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.4)",
        "btn":         "0 4px 14px rgba(249,115,22,0.4)",
        "btn-hover":   "0 6px 20px rgba(249,115,22,0.55)",
        "inset-top":   "inset 0 1px 0 rgba(255,255,255,0.06)",
      },

      // ─── Background Images / Gradients ───────────────────────────────
      backgroundImage: {
        // Hero overlay
        "hero-overlay":    "linear-gradient(to bottom, rgba(10,15,30,0.7) 0%, rgba(10,15,30,0.85) 100%)",
        // Orange CTA gradient
        "orange-gradient": "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
        // Subtle card gradient
        "card-gradient":   "linear-gradient(135deg, rgba(31,41,55,0.8) 0%, rgba(17,24,39,0.9) 100%)",
        // Stats strip
        "stats-gradient":  "linear-gradient(135deg, #F97316 0%, #F59E0B 100%)",
        // Section divider gradient
        "fade-bottom":     "linear-gradient(to bottom, transparent, #0A0F1E)",
        "fade-top":        "linear-gradient(to top, transparent, #0A0F1E)",
        // Noise texture overlay (subtle)
        "noise":           "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },

      // ─── Z-Index Scale ────────────────────────────────────────────────
      zIndex: {
        "0":      "0",
        "10":     "10",    // cards, content
        "20":     "20",    // dropdowns
        "30":     "30",    // sticky elements
        "40":     "40",    // modals backdrop
        "50":     "50",    // modals
        "60":     "60",    // toasts
        "header": "100",   // sticky header
        "float":  "200",   // floating buttons (WhatsApp/phone)
        "top":    "1000",  // exit intent popup
      },

      // ─── Animations ───────────────────────────────────────────────────
      transitionDuration: {
        "100": "100ms",
        "150": "150ms",
        "200": "200ms",
        "300": "300ms",
        "400": "400ms",
      },
      transitionTimingFunction: {
        "out-smooth": "cubic-bezier(0.0, 0.0, 0.2, 1)",
        "in-smooth":  "cubic-bezier(0.4, 0.0, 1, 1)",
        "spring":     "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      animation: {
        "fade-in":      "fadeIn 0.4s ease-out forwards",
        "slide-up":     "slideUp 0.4s ease-out forwards",
        "slide-down":   "slideDown 0.3s ease-out forwards",
        "scale-in":     "scaleIn 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards",
        "glow-pulse":   "glowPulse 2s ease-in-out infinite",
        "float":        "float 3s ease-in-out infinite",
        "shimmer":      "shimmer 1.5s linear infinite",
        "count-up":     "countUp 2s ease-out forwards",
        "stagger-1":    "slideUp 0.4s 0.05s ease-out forwards",
        "stagger-2":    "slideUp 0.4s 0.10s ease-out forwards",
        "stagger-3":    "slideUp 0.4s 0.15s ease-out forwards",
        "stagger-4":    "slideUp 0.4s 0.20s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%":   { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%":   { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(249,115,22,0.3)" },
          "50%":      { boxShadow: "0 0 35px rgba(249,115,22,0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        countUp: {
          "0%":   { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
