"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const INCLUDED = [
  "Load finding on DAT & Truckstop daily",
  "Rate negotiation with every broker",
  "Broker packet setup (MC, W-9, COI, NOA)",
  "BOL & POD document submission",
  "Billing & invoice generation",
  "Follow-up on unpaid broker payments",
  "Factoring company coordination",
  "Route optimization & deadhead reduction",
  "24/7 night & weekend dispatch coverage",
  "Compliance document management",
];

const NEVER_CHARGED = [
  "Sign-up or onboarding fee",
  "Cancellation fee",
  "Minimum load commitment",
  "Night or weekend surcharge",
  "Per-broker setup fee",
  "Document handling fee",
];

export default function ServicesAllIncluded() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="section-padding"
      style={{ background: "#F8F9FA" }}
      aria-label="What's included in the dispatch fee"
    >
      <div className="section-container" ref={ref}>
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">No Surprises</p>
          <h2 className="section-title">
            What&apos;s In Your{" "}
            <span className="text-gradient">Dispatch Fee</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            One flat percentage. Everything below is covered. Nothing hidden.
          </p>
        </motion.div>

        {/* Two-column breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Included */}
          <motion.div
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 20px rgba(15,23,42,0.06)",
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span
                className="flex items-center justify-center w-8 h-8 rounded-lg"
                style={{ background: "rgba(16,185,129,0.1)" }}
              >
                <CheckCircle size={16} className="text-green-500" />
              </span>
              <h3 className="font-bold text-slate-800 text-base">
                Always Included
              </h3>
            </div>
            <ul className="space-y-3">
              {INCLUDED.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm text-slate-600"
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.35 }}
                >
                  <CheckCircle
                    size={15}
                    className="text-green-500 flex-shrink-0 mt-0.5"
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Never charged */}
          <motion.div
            className="rounded-2xl p-6 md:p-8 flex flex-col"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 20px rgba(15,23,42,0.06)",
            }}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span
                className="flex items-center justify-center w-8 h-8 rounded-lg"
                style={{ background: "rgba(249,115,22,0.1)" }}
              >
                <XCircle size={16} className="text-orange-DEFAULT" />
              </span>
              <h3 className="font-bold text-slate-800 text-base">
                Never Charged
              </h3>
            </div>
            <ul className="space-y-3 flex-1">
              {NEVER_CHARGED.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm text-slate-600"
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.35 }}
                >
                  <XCircle
                    size={15}
                    className="text-orange-DEFAULT flex-shrink-0 mt-0.5"
                  />
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* CTA inside card */}
            <motion.div
              className="mt-8 pt-6"
              style={{ borderTop: "1px solid #E2E8F0" }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <p className="text-slate-500 text-sm mb-4">
                Ready to see the pricing breakdown?
              </p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <Link href="/pricing" className="btn-secondary text-sm px-5 py-3">
                  View Pricing <ArrowRight size={14} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-slate-400 text-sm mt-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          Standard plan: 4–10% of gross load &middot; Fleet plan: 3–6% &middot;
          Based on truck type &middot; No minimums
        </motion.p>
      </div>
    </section>
  );
}
