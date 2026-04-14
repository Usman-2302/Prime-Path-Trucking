"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, ArrowRight, Star, Truck, Building2 } from "lucide-react";

const TIERS = [
  {
    icon: Truck,
    name: "Standard",
    rate: "4–10%",
    rateNote: "of gross load revenue",
    bestFor: "Owner-operators & single trucks",
    highlight: false,
    badge: null,
    features: [
      "1 dedicated dispatcher",
      "Load finding on DAT & Truckstop",
      "Rate negotiation on every load",
      "Broker packet setup",
      "Billing & invoicing",
      "24/7 coverage included",
    ],
    cta: "Get Started",
    note: "Rate varies by truck type & load complexity",
  },
  {
    icon: Star,
    name: "Fleet",
    rate: "3–6%",
    rateNote: "of gross load revenue",
    bestFor: "3–10 trucks",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Dedicated dispatcher per truck",
      "Load finding on DAT & Truckstop",
      "Rate negotiation on every load",
      "Broker packet setup for all trucks",
      "Billing & invoicing for full fleet",
      "24/7 coverage included",
    ],
    cta: "Get Fleet Rate",
    note: "Lower rate for higher volume",
  },
  {
    icon: Building2,
    name: "Custom",
    rate: "Let's Talk",
    rateNote: "tailored to your operation",
    bestFor: "10+ trucks or dedicated lanes",
    highlight: false,
    badge: null,
    features: [
      "Custom dispatcher team",
      "Dedicated lane optimization",
      "Priority load access",
      "Full fleet management",
      "Custom reporting & visibility",
      "24/7 priority coverage",
    ],
    cta: "Contact Us",
    note: "Custom quote based on fleet size",
  },
];

export default function PricingCards() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-padding" style={{ background: "#F8F9FA" }} aria-label="Pricing tiers">
      <div className="section-container">
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="section-label">Choose Your Plan</p>
          <h2 className="section-title">
            Pricing That <span className="text-gradient">Works for You</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Pay only a percentage of what you earn. No load, no fee.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {TIERS.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.name}
                className="relative flex flex-col rounded-2xl overflow-hidden"
                style={{
                  background: tier.highlight ? "#FFFFFF" : "#FFFFFF",
                  border: tier.highlight ? "2px solid #F97316" : "1px solid #E2E8F0",
                  boxShadow: tier.highlight
                    ? "0 20px 60px rgba(249,115,22,0.15), 0 4px 12px rgba(15,23,42,0.08)"
                    : "0 4px 20px rgba(15,23,42,0.06)",
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
                whileHover={{
                  y: -6,
                  boxShadow: tier.highlight
                    ? "0 28px 70px rgba(249,115,22,0.2), 0 4px 12px rgba(15,23,42,0.1)"
                    : "0 16px 48px rgba(15,23,42,0.1), 0 0 0 1px rgba(249,115,22,0.2)",
                }}
              >
                {/* Popular badge */}
                {tier.badge && (
                  <div className="absolute top-0 left-0 right-0 flex justify-center">
                    <motion.span
                      className="text-[11px] font-bold uppercase tracking-widest text-white px-4 py-1.5 rounded-b-lg"
                      style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
                      animate={{ opacity: [1, 0.8, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {tier.badge}
                    </motion.span>
                  </div>
                )}

                {/* Highlight glow bg */}
                {tier.highlight && (
                  <div className="absolute inset-0 pointer-events-none rounded-2xl"
                    style={{ background: "radial-gradient(circle at 50% 0%, rgba(249,115,22,0.06) 0%, transparent 60%)" }} />
                )}

                <div className={`flex flex-col flex-1 p-7 md:p-8 ${tier.badge ? "pt-10" : ""}`}>
                  {/* Icon + name */}
                  <div className="flex items-center gap-3 mb-5">
                    <motion.div
                      className="flex items-center justify-center w-11 h-11 rounded-xl text-orange-DEFAULT flex-shrink-0"
                      style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, delay: i * 0.8, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Icon size={22} />
                    </motion.div>
                    <div>
                      <p className="font-bold text-slate-800 text-base">{tier.name}</p>
                      <p className="text-xs text-slate-400">{tier.bestFor}</p>
                    </div>
                  </div>

                  {/* Rate */}
                  <div className="mb-6">
                    <div className="flex items-end gap-1.5 mb-1">
                      <motion.span
                        className="font-extrabold text-orange-DEFAULT tabular-nums leading-none"
                        style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", letterSpacing: "-0.03em" }}
                        animate={tier.highlight ? { scale: [1, 1.03, 1] } : {}}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {tier.rate}
                      </motion.span>
                    </div>
                    <p className="text-xs text-slate-400">{tier.rateNote}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 flex-1 mb-7">
                    {tier.features.map((f, fi) => (
                      <motion.li
                        key={fi}
                        className="flex items-start gap-2.5 text-sm text-slate-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + i * 0.12 + fi * 0.05 }}
                      >
                        <CheckCircle size={14} className="text-orange-DEFAULT flex-shrink-0 mt-0.5" />
                        {f}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Note */}
                  <p className="text-[11px] text-slate-400 mb-5 italic">{tier.note}</p>

                  {/* CTA */}
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href="/contact"
                      className={tier.highlight ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}
                    >
                      {tier.cta} <ArrowRight size={15} />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p className="text-center text-slate-400 text-sm mt-8"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.4 }}>
          Exact rate within each range determined by equipment type and load complexity.{" "}
          <Link href="/contact" className="text-orange-DEFAULT font-semibold hover:underline">
            Contact us for a type-specific breakdown.
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
