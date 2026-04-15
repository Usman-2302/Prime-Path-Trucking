"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Package, Building2, CheckCircle } from "lucide-react";
import { EQUIPMENT_DETAIL } from "@/lib/constants";

type Props = { detail: (typeof EQUIPMENT_DETAIL)[string] };

export default function EquipmentLoadTypes({ detail }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-padding" style={{ background: "#F8F9FA" }} aria-label="Load types and industries">
      <div className="section-container" ref={ref}>
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}>
          <p className="section-label">What We Haul</p>
          <h2 className="section-title">
            Load Types &{" "}
            <span className="text-gradient">Industries Served</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Load types */}
          <motion.div
            className="rounded-2xl p-6 md:p-8"
            style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2.5 mb-6">
              <motion.div
                className="flex items-center justify-center w-9 h-9 rounded-xl text-orange-DEFAULT"
                style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Package size={17} />
              </motion.div>
              <h3 className="font-bold text-slate-800 text-base">Typical Load Types</h3>
            </div>
            <ul className="space-y-3">
              {detail.loadTypes.map((item, i) => (
                <motion.li key={i}
                  className="flex items-center gap-3 text-sm text-slate-600"
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07 }}>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <CheckCircle size={14} className="text-orange-DEFAULT flex-shrink-0" />
                  </motion.div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Industries */}
          <motion.div
            className="rounded-2xl p-6 md:p-8"
            style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2.5 mb-6">
              <motion.div
                className="flex items-center justify-center w-9 h-9 rounded-xl text-orange-DEFAULT"
                style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}
                animate={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 4, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Building2 size={17} />
              </motion.div>
              <h3 className="font-bold text-slate-800 text-base">Industries Served</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {detail.industries.map((ind, i) => (
                <motion.span key={i}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700"
                  style={{ background: "#F1F5F9", border: "1px solid #E2E8F0" }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.25 + i * 0.08 }}
                  whileHover={{ borderColor: "rgba(249,115,22,0.4)", color: "#EA580C", background: "rgba(249,115,22,0.06)", scale: 1.04 }}
                >
                  {ind}
                </motion.span>
              ))}
            </div>

            {/* Dispatch focus */}
            <div className="mt-6 pt-5" style={{ borderTop: "1px solid #E2E8F0" }}>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Dispatch Focus</p>
              <p className="text-sm text-slate-600 leading-relaxed">{detail.dispatchFocus}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
