"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, MapPin, TrendingUp, Clock } from "lucide-react";

const WORDS = ["Built", "Around", "Your", "Schedule."];

const FLOATING_STATS = [
  { label: "Active Carriers", value: "47+", icon: Users,     x: "72%", y: "22%", delay: 0    },
  { label: "States Covered",  value: "48",  icon: MapPin,    x: "78%", y: "58%", delay: 1    },
  { label: "Avg RPM",         value: "$3.24",icon: TrendingUp,x: "68%", y: "80%", delay: 0.5 },
  { label: "Support",         value: "24/7", icon: Clock,    x: "85%", y: "38%", delay: 1.5  },
];

const wordVariants = {
  hidden: { opacity: 0, y: 36, rotateX: -14 },
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

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#F8F9FA" }}
      aria-label="About hero"
    >
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      {/* Glows */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.09) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)" }} />

      {/* Floating stat cards — desktop only */}
      {FLOATING_STATS.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={i}
            className="absolute hidden lg:flex items-center gap-2.5 px-4 py-3 rounded-xl pointer-events-none"
            style={{
              left: stat.x, top: stat.y,
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 20px rgba(15,23,42,0.08)",
            }}
            animate={{ y: [0, -10, 0], opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 3.5 + i * 0.5, delay: stat.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0"
              style={{ background: "rgba(249,115,22,0.1)" }}>
              <Icon size={15} className="text-orange-DEFAULT" />
            </div>
            <div>
              <p className="text-base font-extrabold text-orange-DEFAULT tabular-nums leading-none"
                style={{ letterSpacing: "-0.02em" }}>{stat.value}</p>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5">{stat.label}</p>
            </div>
          </motion.div>
        );
      })}

      <div className="relative section-container pt-10 pb-14 md:pt-14 md:pb-20">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-2xl">
          <motion.p variants={itemVariants} className="section-label">About Prime Path</motion.p>

          <h1 className="font-extrabold leading-[1.08] mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", letterSpacing: "-0.03em", perspective: "800px" }}>
            <span className="flex flex-wrap gap-x-3 gap-y-1">
              {WORDS.map((word, i) =>
                word === "Schedule." ? (
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
            Prime Path Trucking is a US-based dispatching company built around one principle —
            your truck stays loaded and your earnings stay high. We operate on your schedule,
            24 hours a day, 7 days a week.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
            <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link href="/contact" className="btn-primary text-base px-7 py-4 w-full sm:w-auto">
                Work With Us <ArrowRight size={17} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link href="/services" className="btn-secondary text-base px-7 py-4 w-full sm:w-auto">
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="divider" />
    </section>
  );
}
