"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

const TRUST_ITEMS = [
  "No Sign-Up Fee",
  "No Forced Dispatch",
  "Cancel Anytime",
  "First Load in 24–48 hrs",
];

export default function FinalCTA() {
  return (
    <section
      aria-label="Get started with Prime Path Trucking"
      className="relative overflow-hidden section-padding"
      style={{ background: "#F1F5F9" }}
    >
      {/* Subtle orange tint top */}
      <div
        className="absolute top-0 left-0 right-0 h-1 pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, #F97316, transparent)" }}
        aria-hidden="true"
      />

      <div className="section-container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Label */}
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            Ready to Get Started?
          </motion.p>

          <h2
            className="font-extrabold leading-tight mb-5"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              letterSpacing: "-0.03em",
              color: "#0F172A",
            }}
          >
            Ready to Haul More{" "}
            <span className="text-gradient">and Stress Less?</span>
          </h2>

          <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Join 47+ carriers who let Prime Path handle the paperwork while they focus on driving.
            First load within 24–48 hours of signing up.
          </p>

          {/* Trust pills */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {TRUST_ITEMS.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-full"
                style={{ boxShadow: "0 1px 2px rgba(15,23,42,0.04)" }}
              >
                <CheckCircle size={11} className="text-orange-DEFAULT flex-shrink-0" />
                {item}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            {[
              {
                el: (
                  <Link href="/contact" className="btn-primary text-base px-8 py-4 w-full sm:w-auto">
                    Get Started Free <ArrowRight size={18} />
                  </Link>
                ),
              },
              {
                el: (
                  <a
                    href={`tel:${SITE.phone}`}
                    className="btn-secondary text-base px-8 py-4 w-full sm:w-auto"
                  >
                    <Phone size={16} />
                    Call {SITE.phoneDisplay}
                  </a>
                ),
              },
              {
                el: (
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-medium text-base px-6 py-4 w-full sm:w-auto rounded-lg border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all duration-150 min-h-tap"
                    style={{ boxShadow: "0 1px 3px rgba(15,23,42,0.06)" }}
                  >
                    <MessageCircle size={16} className="text-green-500" />
                    WhatsApp Us
                  </a>
                ),
              },
            ].map((b, i) => (
              <motion.div
                key={i}
                className="w-full sm:w-auto"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {b.el}
              </motion.div>
            ))}
          </div>

          <p className="text-slate-400 text-xs">
            FMCSA compliant &middot; Operating across all 48 contiguous states &middot; Response within 1 hour
          </p>
        </motion.div>
      </div>
    </section>
  );
}
