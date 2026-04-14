"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const WORDS = ["Simple,", "Transparent", "Pricing."];

const TRUST_PILLS = [
  "No Sign-Up Fee",
  "No Cancellation Fee",
  "No Forced Dispatch",
  "First Load in 48hrs",
];

const wordVariants = {
  hidden: { opacity: 0, y: 32, rotateX: -12 },
  show: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { type: "spring" as const, stiffness: 110, damping: 18, delay: 0.1 + i * 0.11 },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function PricingHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#F8F9FA" }}
      aria-label="Pricing hero"
    >
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      {/* Glows */}
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-16 -right-16 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)" }} />

      {/* Floating price tags — infinite loop */}
      {[
        { label: "4–10%", sub: "Standard", x: "78%", y: "18%", delay: 0 },
        { label: "3–6%",  sub: "Fleet",    x: "85%", y: "62%", delay: 1.2 },
        { label: "$0",    sub: "Sign-up",  x: "72%", y: "82%", delay: 0.6 },
      ].map((tag, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex flex-col items-center justify-center rounded-xl px-4 py-2.5 pointer-events-none"
          style={{
            left: tag.x, top: tag.y,
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            boxShadow: "0 4px 20px rgba(15,23,42,0.08)",
          }}
          animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3.5, delay: tag.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-lg font-extrabold text-orange-DEFAULT tabular-nums" style={{ letterSpacing: "-0.02em" }}>{tag.label}</span>
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{tag.sub}</span>
        </motion.div>
      ))}

      <div className="relative section-container pt-10 pb-14 md:pt-14 md:pb-20">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-3xl">

          <motion.p variants={itemVariants} className="section-label">Pricing & Onboarding</motion.p>

          {/* Headline */}
          <h1 className="font-extrabold leading-[1.08] mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", letterSpacing: "-0.03em", perspective: "800px" }}>
            <span className="flex flex-wrap gap-x-3 gap-y-1">
              {WORDS.map((word, i) =>
                word === "Pricing." ? (
                  <motion.span key={i} custom={i} variants={wordVariants} initial="hidden" animate="show"
                    className="text-gradient inline-block">{word}</motion.span>
                ) : (
                  <motion.span key={i} custom={i} variants={wordVariants} initial="hidden" animate="show"
                    className="text-slate-900 inline-block">{word}</motion.span>
                )
              )}
            </span>
          </h1>

          <motion.p variants={itemVariants} className="text-slate-500 text-lg leading-relaxed mb-8 max-w-xl">
            One percentage of your gross load. No hidden fees, no minimums, no surprises.
            Your dispatcher starts finding loads within 24–48 hours of sign-up.
          </motion.p>

          {/* Trust pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
            {TRUST_PILLS.map((pill) => (
              <span key={pill} className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-full"
                style={{ boxShadow: "0 1px 2px rgba(15,23,42,0.04)" }}>
                <CheckCircle size={11} className="text-orange-DEFAULT flex-shrink-0" />
                {pill}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
            <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link href="/contact" className="btn-primary text-base px-7 py-4 w-full sm:w-auto">
                Get Started Free <ArrowRight size={17} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link href="/services" className="btn-secondary text-base px-7 py-4 w-full sm:w-auto">
                View All Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="divider" />
    </section>
  );
}
