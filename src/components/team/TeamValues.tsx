"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, UserCheck, TrendingUp, Shield } from "lucide-react";

const VALUES = [
  { icon: Clock,      title: "24/7 Availability",       desc: "Nights, weekends, holidays — we're always on. No surcharge, no excuses." },
  { icon: UserCheck,  title: "Dedicated 1-on-1",         desc: "You get a named dispatcher, not a ticket queue. One person who knows your operation." },
  { icon: TrendingUp, title: "RPM-First Mindset",        desc: "We don't just find loads — we find loads that pay. Your earnings are our metric." },
  { icon: Shield,     title: "No Forced Dispatch",       desc: "Every load is a suggestion. You have 100% final say, always." },
];

export default function TeamValues() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-section-alt" aria-label="Team values">
      <div className="section-container" ref={ref}>
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}>
          <p className="section-label">How We Work</p>
          <h2 className="section-title">
            The Standards We <span className="text-gradient">Hold Ourselves To</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                className="relative flex flex-col gap-4 p-6 rounded-2xl overflow-hidden"
                style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(15,23,42,0.06)" }}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, borderColor: "rgba(249,115,22,0.3)", boxShadow: "0 16px 48px rgba(15,23,42,0.1)" }}
              >
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ background: "radial-gradient(circle at 20% 20%, rgba(249,115,22,0.06), transparent 60%)" }} />

                <motion.div
                  className="flex items-center justify-center w-12 h-12 rounded-xl text-orange-DEFAULT flex-shrink-0"
                  style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}
                  animate={{
                    boxShadow: ["0 0 0px rgba(249,115,22,0)", "0 0 20px rgba(249,115,22,0.35)", "0 0 0px rgba(249,115,22,0)"],
                  }}
                  transition={{ duration: 3, delay: i * 0.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Icon size={22} />
                </motion.div>

                <div className="relative z-10">
                  <h3 className="font-bold text-slate-800 text-base mb-2">{v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
