"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  TrendingUp,
  FileText,
  Receipt,
  Route,
  Clock,
  FolderOpen,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const SERVICES = [
  {
    icon: Search,
    title: "Load Finding & Rate Negotiation",
    outcome: "We find loads that pay above-market RPM so you don't settle.",
    desc: "Your dispatcher actively searches DAT and Truckstop based on your preferred lanes and minimum RPM — every single day. We don't stop until we find a load worth your time.",
    bullets: [
      "Active searching on DAT and Truckstop.com daily",
      "Dispatcher negotiates to beat posted rates wherever possible",
      "We only present loads that meet your minimum RPM threshold",
    ],
    badge: "Core Service",
  },
  {
    icon: FileText,
    title: "Broker Packet Setup",
    outcome: "We handle your MC, W-9, COI, and NOA paperwork — once, correctly.",
    desc: "Every new broker requires a carrier packet before they'll work with you. We handle all of it — MC Authority, W-9, Certificate of Insurance, and Notice of Assignment — so you never fill out the same form twice.",
    bullets: [
      "Full carrier packet setup with every new broker",
      "MC Authority, W-9, COI, and NOA handled for you",
      "We maintain your broker relationships on your behalf",
    ],
    badge: "Core Service",
  },
  {
    icon: Receipt,
    title: "Billing & Invoicing",
    outcome: "We send invoices and follow up on payments so you get paid faster.",
    desc: "We generate and send invoices after every load, then follow up with brokers on unpaid balances. No more chasing money you've already earned.",
    bullets: [
      "Invoice generated and sent after every completed load",
      "Active follow-up on unpaid or delayed broker payments",
      "BOL and POD document submission handled for you",
    ],
    badge: "Core Service",
  },
  {
    icon: Route,
    title: "Route Optimization",
    outcome: "We plan routes that minimize deadhead miles and maximize earnings.",
    desc: "Deadhead miles are lost money. Your dispatcher plans routes that keep empty miles as low as possible, stacking loads back-to-back in your preferred lanes.",
    bullets: [
      "Back-to-back load stacking to reduce empty miles",
      "Lane-specific planning based on your home base and preferences",
      "Fuel stop and rest area awareness built into route planning",
    ],
    badge: "Core Service",
  },
  {
    icon: Clock,
    title: "24/7 Night & Weekend Dispatch",
    outcome: "We cover nights, weekends, and holidays so you never miss a load.",
    desc: "Freight doesn't stop at 5pm and neither do we. Our dispatchers are available around the clock — including nights, weekends, and US holidays — at no extra charge.",
    bullets: [
      "Full coverage nights, weekends, and all US holidays",
      "No night or weekend surcharge — included in your standard rate",
      "Real-time response to load windows and broker calls",
    ],
    badge: "24/7 Included",
  },
  {
    icon: TrendingUp,
    title: "Factoring Coordination",
    outcome: "We work directly with your factoring company to manage NOAs and payment flow.",
    desc: "If you use a factoring company, we handle the Notice of Assignment paperwork and communicate directly with them so your cash flow stays uninterrupted.",
    bullets: [
      "NOA setup and management with your factoring company",
      "Direct communication between dispatcher and factor",
      "No extra steps for you — we handle the paperwork chain",
    ],
    badge: "Core Service",
  },
  {
    icon: FolderOpen,
    title: "Document Management",
    outcome: "We keep your compliance documents current and on file for brokers.",
    desc: "Rate confirmations, Bills of Lading, Proofs of Delivery — we organize and submit every document brokers need, keeping your compliance file clean and current.",
    bullets: [
      "Rate confirmations, BOLs, and PODs organized and submitted",
      "Compliance documents kept current for broker requirements",
      "Document history maintained for your records",
    ],
    badge: "Core Service",
  },
];

function ServiceRow({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={isEven ? "" : "bg-section-alt"}
      style={{ borderTop: "1px solid #E2E8F0" }}
    >
      <div className="section-container py-14 md:py-20">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
            isEven ? "" : "lg:[&>*:first-child]:order-2"
          }`}
        >
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="badge-orange text-xs mb-4 inline-flex">
              {service.badge}
            </span>
            <h2 className="section-title mb-3">{service.title}</h2>
            <p
              className="text-orange-DEFAULT font-semibold text-base mb-4 leading-snug"
              style={{ fontStyle: "italic" }}
            >
              &ldquo;{service.outcome}&rdquo;
            </p>
            <p className="text-slate-500 text-base leading-relaxed mb-6">
              {service.desc}
            </p>

            {/* Bullets */}
            <ul className="space-y-2.5 mb-8">
              {service.bullets.map((b, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm text-slate-600"
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                >
                  <CheckCircle
                    size={16}
                    className="text-orange-DEFAULT flex-shrink-0 mt-0.5"
                  />
                  {b}
                </motion.li>
              ))}
            </ul>

            <motion.div
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link href="/contact" className="btn-primary text-sm px-6 py-3">
                Get This Service Free <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(249,115,22,0.1) 0%, transparent 70%)",
                }}
                animate={{ scale: [1, 1.04, 1], opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Card */}
              <div
                className="relative rounded-2xl p-8 md:p-10 flex flex-col items-center text-center gap-5"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow:
                    "0 8px 40px rgba(15,23,42,0.08), 0 1px 3px rgba(15,23,42,0.04)",
                }}
              >
                {/* Icon */}
                <motion.div
                  className="flex items-center justify-center w-20 h-20 rounded-2xl text-orange-DEFAULT"
                  style={{
                    background: "rgba(249,115,22,0.08)",
                    border: "1.5px solid rgba(249,115,22,0.2)",
                  }}
                  animate={
                    inView
                      ? {
                          boxShadow: [
                            "0 0 0px rgba(249,115,22,0)",
                            "0 0 24px rgba(249,115,22,0.3)",
                            "0 0 0px rgba(249,115,22,0)",
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <Icon size={36} />
                </motion.div>

                <div>
                  <p className="font-bold text-slate-800 text-lg leading-snug">
                    {service.title}
                  </p>
                  <p className="text-slate-400 text-sm mt-1.5 leading-relaxed">
                    Included in your dispatch fee
                  </p>
                </div>

                {/* Included badge */}
                <span className="badge-green text-xs">
                  <CheckCircle size={11} />
                  Always Included
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesDetailList() {
  return (
    <section aria-label="Service details">
      {SERVICES.map((service, i) => (
        <ServiceRow key={service.title} service={service} index={i} />
      ))}
    </section>
  );
}
