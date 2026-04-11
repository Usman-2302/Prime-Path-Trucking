"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DollarSign, UserCheck, TrendingUp, Shield, ArrowRight } from "lucide-react";

const DIFFERENTIATORS = [
  { icon: DollarSign, title: "Competitive Pricing",          desc: "Standard 4–10%, Fleet 3–6% based on truck type. No sign-up fee, no cancellation fee, no minimum commitment.", highlight: "3–10% fee" },
  { icon: UserCheck,  title: "Dedicated 1-on-1 Dispatcher",  desc: "A named dispatcher who knows your lanes, preferences, and minimum RPM. Not a call center — a real person on your side.", highlight: "Named dispatcher" },
  { icon: TrendingUp, title: "Above-Market RPM Focus",       desc: "We don't just find loads — we find loads that pay. Your dispatcher negotiates to beat posted rates every time.", highlight: "Higher RPM" },
  { icon: Shield,     title: "No Forced Dispatch — Ever",    desc: "100% final say on every load we present. We find it, we present it, you decide. No pressure, no penalties.", highlight: "Your choice" },
];

const MINI_STATS = [
  { val: "24/7", label: "Dispatcher availability" },
  { val: "48hr", label: "First load guarantee"    },
  { val: "$0",   label: "Sign-up or cancel fee"   },
  { val: "48",   label: "States covered"          },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="section-padding" aria-label="Why choose Prime Path Trucking">
      <div className="section-container" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="section-label">Why Prime Path</p>
            <h2 className="section-title mb-6">
              Built for Drivers, <span className="text-gradient">Not Brokers</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Most dispatch services fill seats. We build relationships. Every carrier on our roster
              gets a dedicated dispatcher who treats your truck like their own business.
            </p>

            {/* Mini stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {MINI_STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="p-4 rounded-xl"
                  style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 1px 3px rgba(15,23,42,0.06)" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  whileHover={{ borderColor: "rgba(249,115,22,0.4)", y: -2 }}
                >
                  <p className="text-2xl font-extrabold text-orange-DEFAULT tabular-nums leading-none" style={{ letterSpacing: "-0.02em" }}>{s.val}</p>
                  <p className="text-xs text-slate-500 mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link href="/contact" className="btn-primary">
                Get Started Today <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DIFFERENTIATORS.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={d.title}
                  className="flex flex-col gap-3 p-5 rounded-xl border relative overflow-hidden"
                  style={{ background: "#FFFFFF", borderColor: "#E2E8F0", boxShadow: "0 1px 3px rgba(15,23,42,0.06)" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.12, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -4, borderColor: "rgba(249,115,22,0.3)", boxShadow: "0 12px 40px rgba(15,23,42,0.1)" }}
                >
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                    style={{ background: "radial-gradient(circle at 20% 20%, rgba(249,115,22,0.06), transparent 60%)" }} />
                  <div className="flex items-start justify-between gap-2 relative z-10">
                    <motion.div
                      className="flex items-center justify-center w-12 h-12 rounded-xl text-orange-DEFAULT flex-shrink-0"
                      style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon size={24} />
                    </motion.div>
                    <span className="badge-orange text-[10px]">{d.highlight}</span>
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm leading-snug relative z-10">{d.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed relative z-10">{d.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
