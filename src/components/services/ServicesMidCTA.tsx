"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function ServicesMidCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      aria-label="Get started with all services"
      className="relative overflow-hidden"
      style={{ background: "#0A0F1E" }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Orange glow left */}
      <div
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Shimmer sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)",
        }}
        animate={{ x: ["-100%", "200%"] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 6,
          ease: "easeInOut",
        }}
      />

      <div className="relative section-container py-16 md:py-20">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: "#FB923C" }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            All 7 Services. One Fee.
          </motion.p>

          <motion.h2
            className="font-extrabold text-white leading-tight mb-5"
            style={{
              fontSize: "clamp(1.75rem, 4.5vw, 3rem)",
              letterSpacing: "-0.03em",
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
          >
            Want All of This{" "}
            <span className="text-gradient">Handled for You?</span>
          </motion.h2>

          <motion.p
            className="text-base leading-relaxed mb-8"
            style={{ color: "rgba(255,255,255,0.6)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Sign up today and your dedicated dispatcher starts finding loads
            within 24–48 hours of receiving your documents. No sign-up fee, no
            commitment.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.28 }}
          >
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link href="/contact" className="btn-primary text-base px-8 py-4 w-full sm:w-auto">
                Get Started Free <ArrowRight size={17} />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 font-semibold text-base px-7 py-4 rounded-lg min-h-tap transition-all duration-200 w-full sm:w-auto"
                style={{
                  color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                <Phone size={16} />
                {SITE.phoneDisplay}
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
