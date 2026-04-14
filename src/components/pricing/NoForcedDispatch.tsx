"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";

const POINTS = [
  "We present the load — you decide, always",
  "No penalties for passing on a load",
  "No minimum load commitments",
  "Your lanes, your preferences, your call",
];

export default function NoForcedDispatch() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#0A0F1E" }}
      aria-label="No forced dispatch policy"
    >
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }} />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 65%)" }} />

      <div className="relative section-container py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">

          {/* Animated shield icon */}
          <motion.div
            className="flex items-center justify-center w-20 h-20 rounded-2xl mx-auto mb-8"
            style={{ background: "rgba(249,115,22,0.12)", border: "1.5px solid rgba(249,115,22,0.3)" }}
            animate={{
              boxShadow: [
                "0 0 0px rgba(249,115,22,0)",
                "0 0 40px rgba(249,115,22,0.5)",
                "0 0 0px rgba(249,115,22,0)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Shield size={36} className="text-white" />
            </motion.div>
          </motion.div>

          <motion.p
            className="text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: "#FB923C" }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Our Core Policy
          </motion.p>

          <motion.h2
            className="font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", letterSpacing: "-0.03em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
          >
            100% No Forced Dispatch.{" "}
            <span className="text-gradient">Ever.</span>
          </motion.h2>

          <motion.p
            className="text-base leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            You have 100% final say on every load we present. We find it, we present it,
            you decide. No pressure, no penalties, no exceptions.
          </motion.p>

          {/* Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
            {POINTS.map((point, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl text-left"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ background: "rgba(249,115,22,0.08)", borderColor: "rgba(249,115,22,0.25)" }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <CheckCircle size={16} className="text-orange-DEFAULT flex-shrink-0" />
                </motion.div>
                <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
