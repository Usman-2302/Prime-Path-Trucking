"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, MapPin, Package } from "lucide-react";

const STATS = [
  { icon: TrendingUp, value: 3.24, prefix: "$", suffix: "",   decimals: 2, label: "Avg RPM",        sub: "This month"           },
  { icon: Users,      value: 47,   prefix: "",  suffix: "+",  decimals: 0, label: "Active Carriers", sub: "Currently dispatching"},
  { icon: MapPin,     value: 48,   prefix: "",  suffix: "",   decimals: 0, label: "States Covered",  sub: "Contiguous US"        },
  { icon: Package,    value: 4800, prefix: "",  suffix: "+",  decimals: 0, label: "Loads Dispatched",sub: "Lifetime"             },
];

function CountUp({ end, prefix = "", suffix = "", decimals = 0, run }: {
  end: number; prefix?: string; suffix?: string; decimals?: number; run: boolean;
}) {
  const [count, setCount] = useState(0);
  const raf = useRef<number>(0);
  useEffect(() => {
    if (!run) return;
    const duration = 2200;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(parseFloat((eased * end).toFixed(decimals)));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [run, end, decimals]);
  return (
    <span className="tabular-nums">
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}{suffix}
    </span>
  );
}

export default function AboutMission() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" style={{ background: "#F8F9FA" }} aria-label="Mission and stats">
      <div className="section-container" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Stats grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="relative flex flex-col gap-3 p-5 md:p-6 rounded-2xl overflow-hidden"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 4px 20px rgba(15,23,42,0.06)",
                  }}
                  initial={{ opacity: 0, scale: 0.88, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -4, borderColor: "rgba(249,115,22,0.35)", boxShadow: "0 16px 48px rgba(15,23,42,0.1)" }}
                >
                  {/* Radial glow bg */}
                  <div className="absolute inset-0 pointer-events-none rounded-2xl"
                    style={{ background: "radial-gradient(circle at 20% 20%, rgba(249,115,22,0.05), transparent 60%)" }} />

                  <motion.div
                    className="flex items-center justify-center w-10 h-10 rounded-xl text-orange-DEFAULT flex-shrink-0"
                    style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 4, delay: i * 0.7, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Icon size={18} />
                  </motion.div>

                  <div>
                    <p className="font-extrabold text-orange-DEFAULT tabular-nums leading-none"
                      style={{ fontSize: "clamp(1.6rem, 4vw, 2.25rem)", letterSpacing: "-0.03em" }}>
                      <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} run={inView} />
                    </p>
                    <p className="text-slate-700 font-semibold text-sm mt-1">{stat.label}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{stat.sub}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* RIGHT — Mission text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <p className="section-label">Our Mission</p>
            <h2 className="section-title mb-5">
              We Handle the Back Office.{" "}
              <span className="text-gradient">You Stay on the Road.</span>
            </h2>

            <p className="text-slate-500 text-base leading-relaxed mb-5">
              Prime Path Trucking was built to solve a real problem: owner-operators and small
              fleet owners spending hours on paperwork, broker calls, and load searching instead
              of driving and earning.
            </p>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              We built our entire operation around US freight standards, FMCSA compliance, and
              the systems your brokers use every day. Our dispatchers are available 24/7 —
              nights, weekends, and holidays — so you never miss a load window.
            </p>

            {/* Quote block */}
            <motion.blockquote
              className="relative pl-5 py-1"
              style={{ borderLeft: "3px solid #F97316" }}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
                style={{ background: "linear-gradient(to bottom, #F97316, #EA580C)" }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <p className="text-slate-700 font-semibold text-lg leading-snug italic">
                &ldquo;We handle the paperwork. You drive.&rdquo;
              </p>
              <p className="text-slate-400 text-sm mt-2">— Prime Path Trucking</p>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
