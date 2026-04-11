"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Phone, ChevronDown,
  Shield, Star, Clock, Truck,
  CheckCircle, MapPin, DollarSign,
} from "lucide-react";
import { SITE } from "@/lib/constants";

const PARTICLES = [
  { id: 0, x: 72, y: 15, size: 2.5, dur: 9,  delay: 0   },
  { id: 1, x: 85, y: 40, size: 1.5, dur: 7,  delay: 1.2 },
  { id: 2, x: 60, y: 70, size: 3,   dur: 11, delay: 0.5 },
  { id: 3, x: 90, y: 60, size: 2,   dur: 8,  delay: 2   },
  { id: 4, x: 78, y: 85, size: 1.8, dur: 10, delay: 0.8 },
  { id: 5, x: 65, y: 25, size: 2.2, dur: 6,  delay: 1.5 },
  { id: 6, x: 95, y: 30, size: 1.2, dur: 12, delay: 3   },
  { id: 7, x: 55, y: 55, size: 2.8, dur: 8,  delay: 0.3 },
];

const TRUST_PILLS = [
  { icon: Shield, label: "FMCSA Compliant" },
  { icon: Star,   label: "4.9 Rated"       },
  { icon: Clock,  label: "24/7 Support"    },
  { icon: Truck,  label: "48 States"       },
];

const HEADLINE_WORDS = ["We", "Handle", "the", "PAPERWORK.", "You", "Drive."];

const FEED_ITEMS = [
  { icon: CheckCircle, color: "#10B981", label: "Load Found",      detail: "Chicago \u2192 Dallas \u00b7 Dry Van \u00b7 $3.12/mi",  time: "just now"   },
  { icon: DollarSign,  color: "#F97316", label: "Rate Negotiated", detail: "Posted $2.80 \u2192 Secured $3.45/mi",                  time: "2 min ago"  },
  { icon: MapPin,      color: "#3B82F6", label: "Route Optimized", detail: "Saved 87 deadhead miles \u00b7 +$210 earned",           time: "5 min ago"  },
  { icon: CheckCircle, color: "#10B981", label: "Load Found",      detail: "Atlanta \u2192 Memphis \u00b7 Reefer \u00b7 $3.28/mi",  time: "8 min ago"  },
  { icon: DollarSign,  color: "#F97316", label: "Invoice Sent",    detail: "Broker paid \u00b7 $4,200 cleared",                     time: "12 min ago" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
};
const wordVariants = {
  hidden: { opacity: 0, y: 36, rotateX: -15 },
  show: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 18, delay: i * 0.09 },
  }),
};

function DispatchFeed({ inView }: { inView: boolean }) {
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    if (!inView) return;
    FEED_ITEMS.forEach((_, i) => {
      setTimeout(() => setVisible((v) => [...v, i]), 600 + i * 500);
    });
  }, [inView]);

  return (
    <div className="w-full max-w-sm mx-auto space-y-2.5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.5)" }}>
            Live Dispatch Activity
          </span>
        </div>
        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full"
          style={{ background: "rgba(16,185,129,0.15)", color: "#34D399", border: "1px solid rgba(16,185,129,0.25)" }}>
          Active
        </span>
      </div>

      <AnimatePresence>
        {FEED_ITEMS.map((item, i) => {
          if (!visible.includes(i)) return null;
          const Icon = item.icon;
          return (
            <motion.div key={i}
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="flex items-start gap-3 p-3 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg mt-0.5"
                style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}>
                <Icon size={13} style={{ color: item.color }} />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-bold text-white">{item.label}</p>
                  <span className="text-[10px] flex-shrink-0"
                    style={{ color: "rgba(255,255,255,0.3)" }}>{item.time}</span>
                </div>
                <p className="text-[11px] mt-0.5 leading-snug"
                  style={{ color: "rgba(255,255,255,0.5)" }}>{item.detail}</p>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {visible.length === FEED_ITEMS.length && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="flex items-center gap-2 px-3 py-2">
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.span key={i} className="w-1.5 h-1.5 rounded-full"
                style={{ background: "rgba(249,115,22,0.6)" }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 0.8, delay: i * 0.15, repeat: Infinity }} />
            ))}
          </div>
          <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>
            Dispatcher finding next load...
          </span>
        </motion.div>
      )}
    </div>
  );
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section ref={ref}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
      style={{ background: "#0A0F1E" }}>

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80"
          alt="Highway trucking at night"
          fill priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(105deg, rgba(10,15,30,0.92) 0%, rgba(10,15,30,0.80) 55%, rgba(10,15,30,0.60) 100%)",
        }} />
      </div>

      {/* Glows */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none z-[1]"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[1]"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)" }} />

      {/* Grid */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Particles */}
      {!reducedMotion && PARTICLES.map((p) => (
        <motion.div key={p.id} className="absolute rounded-full pointer-events-none z-[2]"
          style={{
            left: `${p.x}%`, top: `${p.y}%`,
            width: p.size, height: p.size,
            background: p.id % 3 === 0 ? "rgba(249,115,22,0.7)" : "rgba(255,255,255,0.25)",
          }}
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 section-container w-full pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "show" : "hidden"}>
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold"
                style={{ background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)", color: "#FB923C" }}>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                Now Dispatching in 48 States
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-extrabold leading-[1.05] mb-5"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.25rem)", letterSpacing: "-0.03em", perspective: "800px" }}>
              <span className="flex flex-wrap gap-x-3 gap-y-1">
                {HEADLINE_WORDS.map((word, i) =>
                  word === "PAPERWORK." ? (
                    <motion.span key={i} custom={i} variants={wordVariants}
                      initial="hidden" animate={isInView ? "show" : "hidden"}
                      className="text-gradient inline-block"
                      style={{ filter: reducedMotion ? "none" : "drop-shadow(0 0 24px rgba(249,115,22,0.6))" }}>
                      {word}
                    </motion.span>
                  ) : (
                    <motion.span key={i} custom={i} variants={wordVariants}
                      initial="hidden" animate={isInView ? "show" : "hidden"}
                      className="text-white inline-block">
                      {word}
                    </motion.span>
                  )
                )}
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mb-8 max-w-lg text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.72)" }}>
              Prime Path Trucking finds you top-paying loads, handles all broker
              communication, and keeps your truck moving so you can focus on the road.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 mb-10">
              <motion.div whileHover={reducedMotion ? {} : { scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" className="btn-primary text-base px-7 py-4">
                  Get Started &mdash; It&apos;s Free <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={reducedMotion ? {} : { scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <a href={`tel:${SITE.phone}`}
                  className="inline-flex items-center justify-center gap-2 font-semibold text-base px-7 py-4 rounded-lg min-h-tap transition-all duration-200 select-none cursor-pointer"
                  style={{ color: "#fff", border: "1.5px solid rgba(255,255,255,0.35)", background: "rgba(255,255,255,0.06)" }}>
                  <Phone size={17} />
                  {SITE.phoneDisplay}
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {TRUST_PILLS.map((pill, i) => (
                <motion.div key={pill.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.65 + i * 0.08, duration: 0.35 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "#CBD5E1" }}>
                  <pill.icon size={13} className="text-orange-400" />
                  {pill.label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div className="flex flex-col items-center justify-center w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}>
            <DispatchFeed inView={isInView} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {!reducedMotion && (
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
          <span className="text-[10px] text-white/25 uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown size={18} className="text-white/25" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
