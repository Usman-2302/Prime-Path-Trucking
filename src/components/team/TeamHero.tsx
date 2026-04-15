"use client";

import { motion } from "framer-motion";

const WORDS = ["Meet", "Your", "Dedicated", "Team."];

const wordVariants = {
  hidden: { opacity: 0, y: 32, rotateX: -12 },
  show: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { type: "spring" as const, stiffness: 110, damping: 18, delay: 0.08 + i * 0.11 },
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

export default function TeamHero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#F8F9FA" }} aria-label="Team hero">
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

      {/* Floating dots */}
      {[
        { x: "75%", y: "25%", size: 7, delay: 0 },
        { x: "83%", y: "60%", size: 4, delay: 1 },
        { x: "70%", y: "80%", size: 5, delay: 0.5 },
      ].map((dot, i) => (
        <motion.div key={i}
          className="absolute hidden lg:block rounded-full pointer-events-none"
          style={{ left: dot.x, top: dot.y, width: dot.size, height: dot.size, background: "rgba(249,115,22,0.4)" }}
          animate={{ y: [0, -14, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3.5 + i, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative section-container pt-10 pb-14 md:pt-14 md:pb-20">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-2xl">
          <motion.p variants={itemVariants} className="section-label">The People Behind Prime Path</motion.p>

          <h1 className="font-extrabold leading-[1.08] mb-5"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)", letterSpacing: "-0.03em", perspective: "800px" }}>
            <span className="flex flex-wrap gap-x-3 gap-y-1">
              {WORDS.map((word, i) =>
                word === "Team." ? (
                  <motion.span key={i} custom={i} variants={wordVariants} initial="hidden" animate="show"
                    className="text-gradient inline-block">{word}</motion.span>
                ) : (
                  <motion.span key={i} custom={i} variants={wordVariants} initial="hidden" animate="show"
                    className="text-slate-900 inline-block">{word}</motion.span>
                )
              )}
            </span>
          </h1>

          <motion.p variants={itemVariants} className="text-slate-500 text-lg leading-relaxed max-w-xl">
            Not a call center. Not a pool of random dispatchers. Every carrier at Prime Path
            gets a named, dedicated dispatcher who knows their lanes, their preferences, and
            their minimum RPM — available 24/7.
          </motion.p>
        </motion.div>
      </div>

      <div className="divider" />
    </section>
  );
}
