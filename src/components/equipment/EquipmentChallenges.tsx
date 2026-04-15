"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertCircle, CheckCircle } from "lucide-react";
import { EQUIPMENT_DETAIL } from "@/lib/constants";

type Props = { detail: (typeof EQUIPMENT_DETAIL)[string] };

export default function EquipmentChallenges({ detail }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-section-alt" aria-label="Challenges and solutions">
      <div className="section-container" ref={ref}>
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}>
          <p className="section-label">How We Help</p>
          <h2 className="section-title">
            Common Challenges,{" "}
            <span className="text-gradient">Real Solutions</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Every equipment type has unique challenges. Here&apos;s how we handle them for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {detail.challenges.map((c, i) => (
            <motion.div
              key={i}
              className="relative flex flex-col gap-5 p-6 rounded-2xl overflow-hidden"
              style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.15, ease: "easeOut" }}
              whileHover={{ y: -5, boxShadow: "0 20px 56px rgba(15,23,42,0.1), 0 0 0 1px rgba(249,115,22,0.2)" }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(circle at 20% 10%, rgba(249,115,22,0.06), transparent 60%)" }} />

              {/* Challenge */}
              <div className="flex items-start gap-3 relative z-10">
                <motion.div
                  className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <AlertCircle size={15} className="text-red-400" />
                </motion.div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1">Challenge</p>
                  <p className="text-sm font-semibold text-slate-700 leading-snug">{c.title}</p>
                </div>
              </div>

              {/* Divider with arrow */}
              <div className="flex items-center gap-2 relative z-10">
                <div className="flex-1 h-px" style={{ background: "#E2E8F0" }} />
                <motion.div
                  className="flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0"
                  style={{ background: "rgba(249,115,22,0.1)" }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-orange-DEFAULT text-xs font-bold">↓</span>
                </motion.div>
                <div className="flex-1 h-px" style={{ background: "#E2E8F0" }} />
              </div>

              {/* Solution */}
              <div className="flex items-start gap-3 relative z-10">
                <motion.div
                  className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}
                  animate={{
                    boxShadow: ["0 0 0px rgba(249,115,22,0)", "0 0 16px rgba(249,115,22,0.35)", "0 0 0px rgba(249,115,22,0)"],
                  }}
                  transition={{ duration: 2.5, delay: 0.5 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <CheckCircle size={15} className="text-orange-DEFAULT" />
                </motion.div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-orange-DEFAULT mb-1">Our Solution</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{c.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
