"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function ThankYouContact() {
  return (
    <section
      aria-label="Contact while you wait"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F97316 0%, #EA580C 60%, #C2410C 100%)" }}
    >
      {/* Shimmer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.09) 50%, transparent 60%)" }}
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
      />

      <div className="relative section-container py-12 md:py-14">
        <motion.p
          className="text-center text-sm font-bold uppercase tracking-widest text-white/70 mb-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Can&apos;t Wait?
        </motion.p>
        <motion.h2
          className="text-center font-extrabold text-white mb-8"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", letterSpacing: "-0.02em" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          Reach Out Directly
        </motion.h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          {/* Phone */}
          <motion.a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-3 px-6 py-4 rounded-xl w-full sm:w-auto justify-center font-semibold text-base transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ background: "rgba(255,255,255,0.25)", scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div
              animate={{ rotate: [0, -12, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
            >
              <Phone size={18} />
            </motion.div>
            {SITE.phoneDisplay}
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-xl w-full sm:w-auto justify-center font-semibold text-base transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22 }}
            whileHover={{ background: "rgba(255,255,255,0.25)", scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <MessageCircle size={18} />
            </motion.div>
            Chat on WhatsApp
          </motion.a>
        </div>

        <motion.p
          className="text-center text-white/50 text-xs mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          Available 24/7 · Response within 1 hour during business hours
        </motion.p>
      </div>
    </section>
  );
}
