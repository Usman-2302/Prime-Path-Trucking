"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Package, Users, MapPin } from "lucide-react";

const STATS = [
  { icon: TrendingUp, value: 3.24, prefix: "$", suffix: "",  decimals: 2, label: "Avg RPM This Month",  sub: "Rate Per Mile"         },
  { icon: Package,    value: 4800, prefix: "",  suffix: "+", decimals: 0, label: "Loads Dispatched",    sub: "Lifetime"              },
  { icon: Users,      value: 47,   prefix: "",  suffix: "+", decimals: 0, label: "Active Carriers",     sub: "Currently Dispatching" },
  { icon: MapPin,     value: 48,   prefix: "",  suffix: "",  decimals: 0, label: "States Covered",      sub: "Contiguous US"         },
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

export default function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} aria-label="Live statistics" className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,#F97316 0%,#EA580C 60%,#C2410C 100%)" }}>
      {/* Animated shimmer sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)" }}
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
      />

      <div className="relative section-container py-10 md:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/20 text-white mb-3"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon size={20} />
                </motion.div>
                <div className="font-extrabold text-white leading-none tabular-nums"
                  style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)", letterSpacing: "-0.03em" }}>
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} run={inView} />
                </div>
                <p className="text-white/90 font-semibold text-sm mt-1.5">{stat.label}</p>
                <p className="text-white/55 text-xs mt-0.5">{stat.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
