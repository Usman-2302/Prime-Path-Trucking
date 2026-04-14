"use client";

import { motion } from "framer-motion";
import { Clock, Shield, Truck, Star } from "lucide-react";

const WORDS = ["Let's", "Get", "You", "Loaded."];

const PILLS = [
  { icon: Clock,   label: "Response in 1 Hour"  },
  { icon: Shield,  label: "No Sign-Up Fee"       },
  { icon: Truck,   label: "First Load in 48 hrs" },
  { icon: Star,    label: "4.9 Rated"            },
];

const wordVariants = {
  hidden: { opacity: 0, y: 32, rotateX: -12 },
  show: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { type: "spring" as const, stiffness: 110, damping: 18, delay: 0.08 + i * 0.1 },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#F8F9FA" }} aria-label="Contact hero">
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

      {/* Floating decorative dots */}
      {[
        { x: "75%", y: "20%", size: 8, delay: 0 },
        { x: "82%", y: "55%", size: 5, delay: 1 },
        { x: "68%", y: "75%", size: 6, delay: 0.5 },
      ].map((dot, i) => (
        <motion.div key={i}
          className="absolute hidden lg:block rounded-full pointer-events-none"
          style={{ left: dot.x, top: dot.y, width: dot.size, height: dot.size, background: "rgba(249,115,22,0.35)" }}
          animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3 + i, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative section-container pt-10 pb-12 md:pt-14 md:pb-16">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-2xl">
          <motion.p variants={itemVariants} className="section-label">Get Started</motion.p>

          <h1 className="font-extrabold leading-[1.08] mb-5"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)", letterSpacing: "-0.03em", perspective: "800px" }}>
            <span className="flex flex-wrap gap-x-3 gap-y-1">
              {WORDS.map((word, i) =>
                word === "Loaded." ? (
                  <motion.span key={i} custom={i} variants={wordVariants} initial="hidden" animate="show"
                    className="text-gradient inline-block">{word}</motion.span>
                ) : (
                  <motion.span key={i} custom={i} variants={wordVariants} initial="hidden" animate="show"
                    className="text-slate-900 inline-block">{word}</motion.span>
                )
              )}
            </span>
          </h1>

          <motion.p variants={itemVariants} className="text-slate-500 text-lg leading-relaxed mb-7 max-w-lg">
            Fill out the form below and your dedicated dispatcher will reach out within 1 hour.
            First load found within 24–48 hours of receiving your documents.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
            {PILLS.map((pill) => (
              <span key={pill.label}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-full"
                style={{ boxShadow: "0 1px 2px rgba(15,23,42,0.04)" }}>
                <pill.icon size={11} className="text-orange-DEFAULT flex-shrink-0" />
                {pill.label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="divider" />
    </section>
  );
}
