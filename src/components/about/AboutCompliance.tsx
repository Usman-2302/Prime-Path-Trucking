"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, FileText, Monitor, Truck } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SIGNALS = [
  {
    icon: Shield,
    title: "FMCSA Compliant",
    desc: "We operate within Federal Motor Carrier Safety Administration standards. Every carrier we work with is properly licensed and insured.",
    tag: "Federal Compliance",
  },
  {
    icon: FileText,
    title: "MC Authority & DOT",
    desc: "We understand the dual-number system, authority age requirements, and how they affect your broker credit limits and load access.",
    tag: "Carrier Licensing",
  },
  {
    icon: Monitor,
    title: "DAT & Truckstop",
    desc: "We actively search the two largest load boards in the US daily. We also have direct broker relationships for loads not publicly posted.",
    tag: "Load Boards",
  },
  {
    icon: Truck,
    title: "Samsara & Motive ELD",
    desc: "We work inside the same ELD and TMS platforms your brokers use — Samsara, Motive (formerly KeepTruckin), and McLeod Software.",
    tag: "Technology",
  },
];

export default function AboutCompliance() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative overflow-hidden section-padding"
      style={{ background: "#0A0F1E" }}
      aria-label="US compliance and technology"
    >
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }} />

      {/* Glow left */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.14) 0%, transparent 65%)" }} />
      {/* Glow right */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 65%)" }} />

      <div className="relative section-container" ref={ref}>
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#FB923C" }}>
            US-Focused Operation
          </p>
          <h2 className="font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", letterSpacing: "-0.03em" }}>
            We Speak Your{" "}
            <span className="text-gradient">Broker&apos;s Language</span>
          </h2>
          <p className="text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.55)" }}>
            Built around US freight standards, FMCSA compliance, and the platforms
            your brokers use every day.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mb-12">
          {SIGNALS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                className="relative flex flex-col gap-4 p-6 md:p-7 rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                initial={{ opacity: 0, y: 36 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.12, ease: "easeOut" }}
                whileHover={{
                  background: "rgba(249,115,22,0.07)",
                  borderColor: "rgba(249,115,22,0.3)",
                  y: -4,
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "radial-gradient(circle at 20% 20%, rgba(249,115,22,0.08), transparent 60%)" }} />

                <div className="flex items-start justify-between gap-3 relative z-10">
                  <motion.div
                    className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0"
                    style={{ background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.25)" }}
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(249,115,22,0)",
                        "0 0 20px rgba(249,115,22,0.4)",
                        "0 0 0px rgba(249,115,22,0)",
                      ],
                    }}
                    transition={{ duration: 3, delay: i * 0.6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Icon size={22} className="text-orange-DEFAULT" />
                  </motion.div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex-shrink-0"
                    style={{ background: "rgba(249,115,22,0.12)", color: "#FB923C", border: "1px solid rgba(249,115,22,0.2)" }}>
                    {s.tag}
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="font-bold text-white text-base mb-2 leading-snug">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Commitment quote */}
        <motion.div
          className="relative p-7 md:p-8 rounded-2xl text-center max-w-3xl mx-auto"
          style={{
            background: "rgba(249,115,22,0.07)",
            border: "1px solid rgba(249,115,22,0.2)",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            animate={{ boxShadow: ["0 0 0px rgba(249,115,22,0)", "0 0 40px rgba(249,115,22,0.12)", "0 0 0px rgba(249,115,22,0)"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="text-base md:text-lg leading-relaxed font-medium italic mb-4"
            style={{ color: "rgba(255,255,255,0.75)" }}>
            &ldquo;At Prime Path Trucking, we&apos;ve built our entire operation around US freight standards,
            FMCSA compliance, and the systems your brokers use every day. Our dispatchers are available
            24/7 — nights, weekends, and holidays — so you never miss a load window.&rdquo;
          </p>
          <p className="text-sm font-bold" style={{ color: "#FB923C" }}>— Prime Path Trucking</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85 }}
        >
          <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get Started Today <ArrowRight size={17} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
