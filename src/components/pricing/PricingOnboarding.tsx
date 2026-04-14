"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClipboardList, FileCheck, Truck, ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Sign the Dispatch Agreement",
    desc: "Fill out our quick online form and sign the dispatch agreement digitally. Takes less than 10 minutes.",
    time: "Day 0",
    color: "#F97316",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Send Your Documents",
    desc: "Submit your MC Authority letter, W-9, and Certificate of Insurance. We review and set up your broker packets.",
    time: "Day 0–2",
    color: "#FB923C",
  },
  {
    icon: Truck,
    step: "03",
    title: "Start Hauling",
    desc: "Your dispatcher finds your first load within 24–48 hours of receiving your documents. You drive, we handle the rest.",
    time: "Within 48 hrs",
    color: "#FDBA74",
  },
];

export default function PricingOnboarding() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-section-alt" aria-label="Onboarding steps">
      <div className="section-container">
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="section-label">Getting Started</p>
          <h2 className="section-title">
            Up and Running in <span className="text-gradient">48 Hours</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Three steps from sign-up to your first load. No complicated onboarding.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connecting line — removed */}

          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                className="relative flex flex-col items-center md:items-start text-center md:text-left"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.18, ease: "easeOut" }}
              >
                {/* Step number + icon */}
                <div className="relative mb-6 flex-shrink-0">
                  <motion.div
                    className="flex items-center justify-center w-[3.5rem] h-[3.5rem] rounded-2xl text-white relative z-10"
                    style={{
                      background: `linear-gradient(135deg, ${s.color}, #C2410C)`,
                    }}
                    animate={inView ? {
                      boxShadow: [
                        "0 8px 24px rgba(249,115,22,0.3)",
                        "0 8px 40px rgba(249,115,22,0.65)",
                        "0 8px 24px rgba(249,115,22,0.3)",
                      ],
                    } : {}}
                    transition={{ duration: 2.5, delay: 0.6 + i * 0.25, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Icon size={26} />
                  </motion.div>
                  {/* Step badge */}
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white z-20"
                    style={{ background: "#F97316", border: "2px solid #F1F5F9" }}
                  >
                    {i + 1}
                  </span>
                </div>

                <span className="badge-orange mb-3 text-xs">{s.time}</span>
                <h3 className="text-lg font-bold text-slate-800 mb-3 leading-snug">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>

                {/* Mobile arrow */}
                {i < STEPS.length - 1 && (
                  <div className="flex justify-center w-full mt-6 md:hidden" aria-hidden="true">
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

        <motion.div className="text-center mt-14"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Start the Process Now <ArrowRight size={18} />
            </Link>
          </motion.div>
          <p className="text-slate-400 text-xs mt-3">No credit card. No commitment. Cancel anytime.</p>
        </motion.div>
      </div>
    </section>
  );
}
