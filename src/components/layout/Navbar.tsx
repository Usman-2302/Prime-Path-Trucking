"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  Truck,
  Thermometer,
  Layers,
  ArrowUpRight,
  Zap,
  Package,
  Box,
  Caravan,
  ArrowRight,
} from "lucide-react";
import { SITE, EQUIPMENT_TYPES } from "@/lib/constants";
import { cn } from "@/lib/utils";

/* ── Equipment icon map ─────────────────────────────────────────────── */
const equipmentIcons: Record<string, React.ReactNode> = {
  "dry-van":             <Truck size={18} />,
  "reefer":              <Thermometer size={18} />,
  "flatbed":             <Layers size={18} />,
  "step-deck":           <ArrowUpRight size={18} />,
  "power-only":          <Zap size={18} />,
  "hotshot":             <Package size={18} />,
  "box-trucks":          <Box size={18} />,
  "sprinter-cargo-vans": <Caravan size={18} />,
};

/* ── Nav structure ──────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { label: "Services",  href: "/services",  hasMega: false },
  { label: "Equipment", href: "/equipment", hasMega: true  },
  { label: "Pricing",   href: "/pricing",   hasMega: false },
  { label: "About",     href: "/about",     hasMega: false },
  { label: "Contact",   href: "/contact",   hasMega: false },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [megaOpen, setMegaOpen]         = useState(false);
  const [mobileEquip, setMobileEquip]   = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTriggerRef = useRef<HTMLButtonElement>(null);

  /* close mega on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        megaRef.current &&
        !megaRef.current.contains(e.target as Node) &&
        megaTriggerRef.current &&
        !megaTriggerRef.current.contains(e.target as Node)
      ) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* close mobile on route change */
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[100]"
        style={{
          background: "#FFFFFF",
          borderBottom: "1px solid rgba(15,23,42,0.08)",
          boxShadow: "0 1px 12px rgba(15,23,42,0.06)",
        }}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex items-center min-h-0"
              aria-label="Prime Path Trucking — Home"
            >
              <Image
                src="/logoa.png"
                alt="Prime Path Trucking"
                width={140}
                height={48}
                className="object-contain h-10 w-auto"
                priority
              />
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_ITEMS.map((item) =>
                item.hasMega ? (
                  <div key={item.label} className="relative">
                    <button
                      ref={megaTriggerRef}
                      onClick={() => setMegaOpen((v) => !v)}
                      onKeyDown={(e) => e.key === "Escape" && setMegaOpen(false)}
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                      className={cn(
                        "nav-link gap-1 select-none",
                        isActive(item.href) && "!text-orange-DEFAULT"
                      )}
                    >
                      {item.label}
                      <ChevronDown size={14} className={cn("transition-transform duration-200", megaOpen && "rotate-180")} />
                    </button>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn("nav-link", isActive(item.href) && "!text-orange-DEFAULT")}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* ── Desktop Right: Phone + CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors duration-150 min-h-tap px-2"
                aria-label={`Call us: ${SITE.phoneDisplay}`}
              >
                <Phone size={15} className="text-orange-DEFAULT flex-shrink-0" />
                <span className="tabular-nums">{SITE.phoneDisplay}</span>
              </a>
              <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
                Get Started
              </Link>
            </div>

            {/* ── Mobile: Phone icon + Hamburger ── */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center justify-center w-11 h-11 rounded-lg text-orange-DEFAULT hover:bg-slate-100 transition-colors"
                aria-label={`Call ${SITE.phoneDisplay}`}
              >
                <Phone size={20} />
              </a>
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="flex items-center justify-center w-11 h-11 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mega Menu (Desktop) ── */}
        {megaOpen && (
          <div
            ref={megaRef}
            id="equipment-mega-menu"
            role="region"
            aria-label="Equipment types"
            className="hidden lg:block absolute top-full left-0 right-0 animate-slide-down"
            style={{
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(15,23,42,0.08)",
              boxShadow: "0 20px 60px rgba(15,23,42,0.12)",
            }}
          >
            <div className="section-container py-8">
              <div className="grid grid-cols-12 gap-8">

                {/* Left: heading + CTA */}
                <div className="col-span-3 flex flex-col justify-between">
                  <div>
                    <p className="section-label">Equipment Types</p>
                    <h3 className="text-xl font-bold leading-snug" style={{ color: "#0F172A" }}>
                      We dispatch all major equipment types
                    </h3>
                    <p className="text-sm mt-2 leading-relaxed" style={{ color: "#475569" }}>
                      Dedicated dispatchers for every trailer type. Higher RPM, less hassle.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-primary text-sm mt-6 w-fit"
                    onClick={() => setMegaOpen(false)}
                  >
                    Get Started Free
                    <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Right: equipment grid */}
                <div className="col-span-9 grid grid-cols-4 gap-2">
                  {EQUIPMENT_TYPES.map((eq) => (
                    <Link
                      key={eq.slug}
                      href={`/equipment/${eq.slug}`}
                      onClick={() => setMegaOpen(false)}
                      className="group flex items-start gap-3 p-3.5 rounded-xl transition-all duration-150 hover:bg-slate-50 border border-transparent hover:border-slate-200"
                    >
                      <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 text-orange-DEFAULT group-hover:bg-orange-DEFAULT group-hover:text-slate-900 group-hover:border-orange-DEFAULT transition-all duration-150">
                        {equipmentIcons[eq.slug]}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-800 group-hover:text-orange-DEFAULT transition-colors duration-150 leading-tight">
                          {eq.label}
                        </p>
                        <p className="text-xs text-slate-400 mt-0.5 tabular-nums">
                          {eq.rpm} RPM
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ── Mobile Menu Drawer ── */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-[99] lg:hidden transition-all duration-300",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/60 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer panel */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[85vw] max-w-sm flex flex-col transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
          style={{
            background: "#FFFFFF",
            borderLeft: "1px solid rgba(15,23,42,0.08)",
            boxShadow: "-8px 0 40px rgba(15,23,42,0.12)",
          }}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100">
            <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
              <Image src="/logoa.png" alt="Prime Path Trucking" width={120} height={40} className="object-contain h-9 w-auto" />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer nav */}
          <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile navigation">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/services"
                  className={cn(
                    "flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors duration-150",
                    isActive("/services")
                      ? "bg-orange-DEFAULT/10 text-orange-DEFAULT"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  Services
                </Link>
              </li>

              {/* Equipment accordion */}
              <li>
                <button
                  onClick={() => setMobileEquip((v) => !v)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-150"
                  aria-expanded={mobileEquip}
                >
                  Equipment
                  <ChevronDown
                    size={16}
                    className={cn("transition-transform duration-200 text-slate-400", mobileEquip && "rotate-180")}
                  />
                </button>
                {mobileEquip && (
                  <ul className="mt-1 ml-4 space-y-0.5 border-l border-slate-200 pl-4">
                    {EQUIPMENT_TYPES.map((eq) => (
                      <li key={eq.slug}>
                        <Link
                          href={`/equipment/${eq.slug}`}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-150"
                        >
                          <span className="text-orange-DEFAULT">{equipmentIcons[eq.slug]}</span>
                          <span>{eq.label}</span>
                          <span className="ml-auto text-xs text-slate-400 tabular-nums">{eq.rpm}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {[
                { label: "Pricing", href: "/pricing" },
                { label: "About",   href: "/about"   },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors duration-150",
                      isActive(item.href)
                        ? "bg-orange-DEFAULT/10 text-orange-DEFAULT"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Drawer footer CTAs */}
          <div className="px-4 py-5 border-t border-slate-100 space-y-3">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors duration-150 min-h-tap"
            >
              <Phone size={16} className="text-orange-DEFAULT" />
              {SITE.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="btn-primary w-full text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Get Started Free
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
