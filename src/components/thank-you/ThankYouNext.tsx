"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, FileCheck, Truck, ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: Phone,
    step: "01",
    title: "We Call You Within 1 Hour",
    desc: "Your dedicated dispatcher will call to confirm your details, understand your preferred lanes, and answer any questions before getting started.",
    time: "Within 1 hr",
    color: "#F97316",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Send Your Documents",
    desc: "Email your MC Authority letter, W-9, and Certificate of Insurance. We'll set up your broker packets and get you ready to haul.",
    time: "Day 0–1",
    color: "#FB923C",
  },
  {
    icon: Truck,
    step: "03",
    title: "First Load Found",
    desc: "Within 24–48 hours of receiving your documents, your dispatcher will present your first load. You decide — no forced dispatch, ever.",
    time: "24–48 hrs",
    color: "#FDBA74",
  },
];

export default function ThankYouNext() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" style={{ background: "#F8F9FA" }} aria-label="What happens next">
      <div className="section-container">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">What Happens Next</p>
          <h2 className="section-title">
            Here&apos;s What to <span className="text-gradient">Expect</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Three simple steps from now to your first load.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                className="relative flex flex-col items-center md:items-start text-center md:text-left p-6 rounded-2xl"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 20px rgba(15,23,42,0.06)",
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.18, ease: "easeOut" }}
                whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(15,23,42,0.1), 0 0 0 1px rgba(249,115,22,0.2)" }}
              >
                {/* Icon */}
                <div className="relative mb-5 flex-shrink-0">
                  <motion.div
                    className="flex items-center justify-center w-14 h-14 rounded-2xl text-white"
                    style={{ background: `linear-gradient(135deg, ${s.color}, #C2410C)` }}
                    animate={inView ? {
                      boxShadow: [
                        "0 8px 24px rgba(249,115,22,0.3)",
                        "0 8px 40px rgba(249,115,22,0.65)",
                        "0 8px 24px rgba(249,115,22,0.3)",
                      ],
                    } : {}}
                    transition={{ duration: 2.5, delay: 0.5 + i * 0.25, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Icon size={26} />
                  </motion.div>
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white"
                    style={{ background: "#F97316", border: "2px solid #F8F9FA" }}
                  >
                    {i + 1}
                  </span>
                </div>

                <span className="badge-orange mb-3 text-xs">{s.time}</span>
                <h3 className="text-base font-bold text-slate-800 mb-2 leading-snug">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>

                {/* Mobile arrow */}
                {i < STEPS.length - 1 && (
                  <div className="flex justify-center w-full mt-5 md:hidden" aria-hidden="true">
                    <motion.div
                      animate={{ y: [0, 6, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight size={18} className="text-orange-DEFAULT rotate-90" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
