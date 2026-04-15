"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

// Floating particles config
const PARTICLES = [
  { x: 12, y: 20, size: 6,   dur: 4,   delay: 0,    color: "rgba(249,115,22,0.6)"  },
  { x: 88, y: 15, size: 4,   dur: 5.5, delay: 0.8,  color: "rgba(249,115,22,0.4)"  },
  { x: 75, y: 70, size: 7,   dur: 3.5, delay: 0.3,  color: "rgba(249,115,22,0.5)"  },
  { x: 20, y: 75, size: 3.5, dur: 6,   delay: 1.2,  color: "rgba(255,255,255,0.15)"},
  { x: 55, y: 88, size: 5,   dur: 4.5, delay: 0.6,  color: "rgba(249,115,22,0.35)" },
  { x: 92, y: 50, size: 3,   dur: 7,   delay: 1.8,  color: "rgba(255,255,255,0.1)" },
  { x: 8,  y: 50, size: 4.5, dur: 5,   delay: 0.4,  color: "rgba(249,115,22,0.45)" },
  { x: 40, y: 10, size: 3,   dur: 6.5, delay: 2,    color: "rgba(255,255,255,0.12)"},
];

export default function ThankYouHero() {
  return (
    <section
      className="relative min-h-[90svh] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#0A0F1E" }}
      aria-label="Thank you confirmation"
    >
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }} />

      {/* Center glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
          className="w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, background: p.color }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 section-container py-20 flex flex-col items-center text-center">

        {/* Animated checkmark */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.2 }}
        >
          {/* Outer ring pulse */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: "rgba(16,185,129,0.15)" }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
          />
          {/* Middle ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: "rgba(16,185,129,0.1)" }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.5, delay: 0.4, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="relative flex items-center justify-center w-24 h-24 rounded-full"
            style={{ background: "rgba(16,185,129,0.15)", border: "2px solid rgba(16,185,129,0.4)" }}
            animate={{ boxShadow: ["0 0 0px rgba(16,185,129,0)", "0 0 40px rgba(16,185,129,0.5)", "0 0 0px rgba(16,185,129,0)"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <CheckCircle size={44} className="text-green-400" />
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-extrabold text-white mb-4"
          style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", letterSpacing: "-0.03em" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
        >
          You&apos;re{" "}
          <span className="text-gradient">All Set!</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          className="text-lg leading-relaxed mb-4 max-w-lg"
          style={{ color: "rgba(255,255,255,0.65)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          We&apos;ll reach out within <strong className="text-white">1 hour</strong> to confirm your details.
          Your dispatcher will find your first load within{" "}
          <strong className="text-white">24–48 hours</strong> of receiving your documents.
        </motion.p>

        {/* Response badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10 text-sm font-semibold"
          style={{ background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)", color: "#FB923C" }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.65, type: "spring", stiffness: 120 }}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-green-400"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          Dispatcher notified — standing by
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 w-full max-w-sm"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          <motion.a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 justify-center"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle size={17} />
            Chat on WhatsApp
          </motion.a>
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 font-semibold text-base px-6 py-3 rounded-lg min-h-tap transition-all duration-200 w-full"
              style={{ color: "#fff", border: "1.5px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.06)" }}
            >
              Back to Home <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
