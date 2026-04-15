"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle } from "lucide-react";
import { EQUIPMENT_TYPES, EQUIPMENT_DETAIL } from "@/lib/constants";

type Props = {
  eq: (typeof EQUIPMENT_TYPES)[number];
  detail: (typeof EQUIPMENT_DETAIL)[string];
};

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

// Floating RPM orbs — desktop only
const ORBS = [
  { x: "74%", y: "18%", delay: 0    },
  { x: "82%", y: "55%", delay: 1    },
  { x: "70%", y: "78%", delay: 0.5  },
];

export default function EquipmentHero({ eq, detail }: Props) {
  const words = detail.headline.split(" ");
  const lastTwo = words.slice(-2).join(" ");
  const firstPart = words.slice(0, -2);

  return (
    <section className="relative overflow-hidden" style={{ background: "#F8F9FA" }} aria-label={`${eq.label} dispatch hero`}>
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      {/* Glows */}
      <div className="absolute -top-24 -left-24 w-[460px] h-[460px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.09) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-16 -right-16 w-[340px] h-[340px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)" }} />

      {/* Floating RPM cards */}
      {ORBS.map((orb, i) => (
        <motion.div key={i}
          className="absolute hidden lg:flex flex-col items-center justify-center px-4 py-3 rounded-xl pointer-events-none"
          style={{
            left: orb.x, top: orb.y,
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            boxShadow: "0 4px 20px rgba(15,23,42,0.08)",
          }}
          animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3.5 + i * 0.6, delay: orb.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {i === 0 && <>
            <span className="text-lg font-extrabold text-orange-DEFAULT tabular-nums" style={{ letterSpacing: "-0.02em" }}>{eq.rpm}</span>
            <span className="text-[10px] text-slate-400 font-medium mt-0.5">Avg RPM Range</span>
          </>}
          {i === 1 && <>
            <span className="text-lg font-extrabold text-orange-DEFAULT">24/7</span>
            <span className="text-[10px] text-slate-400 font-medium mt-0.5">Dispatch Coverage</span>
          </>}
          {i === 2 && <>
            <span className="text-lg font-extrabold text-orange-DEFAULT">48 hrs</span>
            <span className="text-[10px] text-slate-400 font-medium mt-0.5">First Load</span>
          </>}
        </motion.div>
      ))}

      <div className="relative section-container pt-10 pb-14 md:pt-14 md:pb-20">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-2xl">

          {/* Breadcrumb */}
          <motion.nav variants={itemVariants}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-orange-DEFAULT transition-colors duration-150">Home</Link>
            <ChevronRight size={12} className="text-slate-300 flex-shrink-0" />
            <Link href="/equipment/dry-van" className="hover:text-orange-DEFAULT transition-colors duration-150">Equipment</Link>
            <ChevronRight size={12} className="text-slate-300 flex-shrink-0" />
            <span className="text-slate-600">{eq.label}</span>
          </motion.nav>

          {/* Equipment badge */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="badge-orange text-xs">{eq.label} Dispatch</span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-extrabold leading-[1.08] mb-5"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)", letterSpacing: "-0.03em", perspective: "800px" }}>
            <span className="flex flex-wrap gap-x-3 gap-y-1">
              {firstPart.map((word, i) => (
                <motion.span key={i} custom={i} variants={wordVariants} initial="hidden" animate="show"
                  className="text-slate-900 inline-block">{word}</motion.span>
              ))}
              {lastTwo.split(" ").map((word, i) => (
                <motion.span key={`last-${i}`} custom={firstPart.length + i} variants={wordVariants}
                  initial="hidden" animate="show" className="text-gradient inline-block">{word}</motion.span>
              ))}
            </span>
          </h1>

          <motion.p variants={itemVariants} className="text-slate-500 text-lg leading-relaxed mb-6 max-w-xl">
            {detail.sub}
          </motion.p>

          {/* RPM + focus pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: "rgba(249,115,22,0.1)", color: "#EA580C", border: "1px solid rgba(249,115,22,0.2)" }}>
              {eq.rpm} RPM
            </span>
            {["No Sign-Up Fee", "No Forced Dispatch", "First Load 48hrs"].map((p) => (
              <span key={p} className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-full"
                style={{ boxShadow: "0 1px 2px rgba(15,23,42,0.04)" }}>
                <CheckCircle size={11} className="text-orange-DEFAULT flex-shrink-0" />
                {p}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
            <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link href={`/contact?equipment=${eq.slug}`} className="btn-primary text-base px-7 py-4 w-full sm:w-auto">
                Get {eq.label} Dispatch <ArrowRight size={17} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link href="/pricing" className="btn-secondary text-base px-7 py-4 w-full sm:w-auto">
                See Pricing
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="divider" />
    </section>
  );
}
