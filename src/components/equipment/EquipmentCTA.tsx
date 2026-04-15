"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { EQUIPMENT_TYPES, SITE } from "@/lib/constants";

type Props = { eq: (typeof EQUIPMENT_TYPES)[number] };

export default function EquipmentCTA({ eq }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden section-padding"
      style={{ background: "#0A0F1E" }}
      aria-label={`Get ${eq.label} dispatch`}
    >
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }} />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 65%)" }} />

      {/* Shimmer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)" }}
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }}
      />

      <div className="relative section-container">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-5"
            style={{ background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)", color: "#FB923C" }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            <motion.span className="w-2 h-2 rounded-full bg-green-400"
              animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
            Now Dispatching {eq.label}
          </motion.span>

          <motion.h2
            className="font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)", letterSpacing: "-0.03em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
          >
            Ready to Get Your{" "}
            <span className="text-gradient">{eq.label} Loaded?</span>
          </motion.h2>

          <motion.p
            className="text-base leading-relaxed mb-8 max-w-lg mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Sign up today and your dedicated dispatcher starts finding {eq.label.toLowerCase()} loads
            within 24–48 hours. No sign-up fee, no forced dispatch.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.28 }}
          >
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link href={`/contact?equipment=${eq.slug}`} className="btn-primary text-base px-8 py-4 w-full sm:w-auto">
                Get Started Free <ArrowRight size={17} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <a href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 font-semibold text-base px-7 py-4 rounded-lg min-h-tap transition-all duration-200 w-full sm:w-auto"
                style={{ color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.06)" }}>
                <Phone size={16} />{SITE.phoneDisplay}
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold text-base px-7 py-4 rounded-lg min-h-tap transition-all duration-200 w-full sm:w-auto"
                style={{ color: "#fff", border: "1.5px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.06)" }}>
                <MessageCircle size={16} />WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
