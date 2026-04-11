import Link from "next/link";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Truck,
  ArrowRight,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";
import { SITE, EQUIPMENT_TYPES } from "@/lib/constants";

/* ── Social icon SVGs (inline — no extra dep) ─────────────────────── */
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ── Trust badges data ─────────────────────────────────────────────── */
const TRUST_BADGES = [
  { icon: <Shield size={14} />,       label: "No Forced Dispatch" },
  { icon: <Clock size={14} />,        label: "24/7/365 Support"   },
  { icon: <CheckCircle size={14} />,  label: "No Sign-Up Fees"    },
  { icon: <Truck size={14} />,        label: "FMCSA Compliant"    },
];

/* ── Footer link columns ───────────────────────────────────────────── */
const FOOTER_COLS = [
  {
    heading: "Services",
    links: [
      { label: "Load Finding",           href: "/services#load-finding"    },
      { label: "Rate Negotiation",        href: "/services#rate-negotiation"},
      { label: "Broker Packet Setup",     href: "/services#broker-packet"  },
      { label: "Billing & Invoicing",     href: "/services#billing"        },
      { label: "Factoring Coordination",  href: "/services#factoring"      },
      { label: "24/7 Dispatch",           href: "/services#247-dispatch"   },
      { label: "Document Management",     href: "/services#documents"      },
    ],
  },
  {
    heading: "Equipment",
    links: EQUIPMENT_TYPES.map((eq) => ({
      label: eq.label,
      href:  `/equipment/${eq.slug}`,
    })),
  },
  {
    heading: "Company",
    links: [
      { label: "About Us",        href: "/about"           },
      { label: "Our Team",        href: "/about#team"      },
      { label: "Pricing",         href: "/pricing"         },
      { label: "How It Works",    href: "/#how-it-works"   },
      { label: "Testimonials",    href: "/#testimonials"   },
      { label: "FAQ",             href: "/#faq"            },
      { label: "Get Started",     href: "/contact"         },
    ],
  },
];

/* ── Platform logos (text-based trust bar) ─────────────────────────── */
const PLATFORMS = ["DAT", "Truckstop.com", "Samsara", "Motive", "McLeod"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer aria-label="Site footer" className="relative overflow-hidden">
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(249,115,22,0.4), transparent)" }}
        aria-hidden="true"
      />

      {/* ── Main Footer Body ── */}
      <div
        style={{ background: "#080D1A" }}
        className="relative"
      >
        <div className="section-container pt-14 pb-10">

          {/* ── Top row: Brand + Columns ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

            {/* Brand column */}
            <div className="lg:col-span-3">
              {/* Logo */}
              <Link href="/" className="inline-flex items-center gap-2.5 min-h-0 group mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-gradient shadow-orange-sm flex-shrink-0">
                  <Truck size={20} className="text-white" />
                </div>
                <div className="leading-none">
                  <span className="block text-base font-extrabold tracking-tight text-white">
                    PRIME PATH
                  </span>
                  <span className="block text-[10px] font-semibold tracking-[0.15em] uppercase text-gray-500">
                    Trucking
                  </span>
                </div>
              </Link>

              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Dedicated truck dispatching for owner-operators and fleets across the United States.
                We handle the paperwork. You drive.
              </p>

              {/* Contact info */}
              <ul className="space-y-3">
                <li>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors duration-150 group"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-md bg-navy-800 border border-navy-700 text-orange-DEFAULT group-hover:bg-orange-DEFAULT group-hover:text-white transition-all duration-150">
                      <Phone size={13} />
                    </span>
                    <span className="tabular-nums">{SITE.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors duration-150 group"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-md bg-navy-800 border border-navy-700 text-orange-DEFAULT group-hover:bg-orange-DEFAULT group-hover:text-white transition-all duration-150">
                      <Mail size={13} />
                    </span>
                    <span className="truncate">{SITE.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors duration-150 group"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-md bg-navy-800 border border-navy-700 text-orange-DEFAULT group-hover:bg-orange-DEFAULT group-hover:text-white transition-all duration-150">
                      <MessageCircle size={13} />
                    </span>
                    Chat on WhatsApp
                  </a>
                </li>
                {SITE.address && (
                  <li className="flex items-start gap-2.5 text-sm text-gray-400">
                    <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-md bg-navy-800 border border-navy-700 text-orange-DEFAULT mt-0.5">
                      <MapPin size={13} />
                    </span>
                    <span>{SITE.address}</span>
                  </li>
                )}
              </ul>

              {/* Social links */}
              <div className="flex items-center gap-2 mt-6">
                {[
                  { icon: <FacebookIcon />, href: "#", label: "Facebook" },
                  { icon: <InstagramIcon />, href: "#", label: "Instagram" },
                  { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Prime Path Trucking on ${s.label}`}
                    className="flex items-center justify-center w-9 h-9 rounded-lg border border-navy-700 text-gray-500 hover:text-white hover:border-orange-DEFAULT hover:bg-orange-DEFAULT/10 transition-all duration-150"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {FOOTER_COLS.map((col) => (
              <div key={col.heading} className="lg:col-span-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                  {col.heading}
                </h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white hover:translate-x-0.5 transition-all duration-150 inline-flex items-center gap-1 group"
                      >
                        <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-150 text-orange-DEFAULT">
                          <ArrowRight size={10} />
                        </span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Trust badges row ── */}
          <div
            className="mt-12 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2.5 text-sm text-gray-400"
              >
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-md bg-orange-DEFAULT/10 border border-orange-DEFAULT/20 text-orange-DEFAULT">
                  {badge.icon}
                </span>
                <span className="font-medium">{badge.label}</span>
              </div>
            ))}
          </div>

          {/* ── Platform trust bar ── */}
          <div
            className="mt-8 pt-6 flex flex-wrap items-center gap-x-6 gap-y-2"
            style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-600">
              Platforms we work with
            </span>
            {PLATFORMS.map((p) => (
              <span
                key={p}
                className="text-xs font-bold text-gray-600 hover:text-gray-400 transition-colors duration-150 cursor-default tracking-wide"
              >
                {p}
              </span>
            ))}
          </div>

          {/* ── Bottom bar ── */}
          <div
            className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
          >
            <p className="text-xs text-gray-600 text-center sm:text-left">
              © {year} Prime Path Trucking. All rights reserved. Operating in the United States.
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {[
                { label: "Privacy Policy",    href: "/privacy"  },
                { label: "Terms of Service",  href: "/terms"    },
                { label: "FMCSA Compliance",  href: "/about#compliance" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-150"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
