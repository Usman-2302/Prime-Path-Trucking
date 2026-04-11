"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, FileCheck, Truck, ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Sign Up & Send Documents",
    desc: "Fill out our quick online form and sign the dispatch agreement. Send your MC Authority, W-9, and COI. Takes less than 10 minutes.",
    time: "Day 0",
    color: "#F97316",
  },
  {
    icon: FileCheck,
    title: "We Set Up Your Broker Packets",
    desc: "Your dedicated dispatcher reviews your documents and sets up broker packets with our network. We handle all the paperwork.",
    time: "Day 1–2",
    color: "#FB923C",
  },
  {
    icon: Truck,
    title: "Start Hauling",
    desc: "We find your first load within 24–48 hours of receiving your documents. Your dispatcher works your lanes daily to keep you loaded.",
    time: "Within 48 hrs",
    color: "#FDBA74",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="section-padding" aria-label="How it works">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Simple Process</p>
          <h2 className="section-title">
            Up and Running in <span className="text-gradient">48 Hours</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Three steps from sign-up to your first load. No complicated onboarding, no waiting weeks.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="relative">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.2 + i * 0.18, ease: "easeOut" }}
                  className="relative flex flex-col items-center md:items-start text-center md:text-left"
                >
                  {/* Icon circle */}
                  <motion.div
                    className="relative mb-6 flex-shrink-0"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="flex items-center justify-center w-[3.25rem] h-[3.25rem] rounded-2xl text-white relative z-10"
                      style={{
                        background: `linear-gradient(135deg, ${s.color}, #C2410C)`,
                        boxShadow: `0 8px 28px rgba(249,115,22,0.4)`,
                      }}
                      animate={inView ? { boxShadow: ["0 8px 28px rgba(249,115,22,0.4)", "0 8px 40px rgba(249,115,22,0.7)", "0 8px 28px rgba(249,115,22,0.4)"] } : {}}
                      transition={{ duration: 2.5, delay: 0.6 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Icon size={26} />
                    </motion.div>
                    {/* Step badge */}
                    <span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white z-20"
                      style={{ background: "#F97316", border: "2px solid #FFFFFF" }}
                    >
                      {i + 1}
                    </span>
                  </motion.div>

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
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
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
