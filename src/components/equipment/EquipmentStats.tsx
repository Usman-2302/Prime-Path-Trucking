"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EQUIPMENT_TYPES, EQUIPMENT_DETAIL } from "@/lib/constants";

type Props = {
  eq: (typeof EQUIPMENT_TYPES)[number];
  detail: (typeof EQUIPMENT_DETAIL)[string];
};

export default function EquipmentStats({ eq, detail }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      aria-label={`${eq.label} dispatch stats`}
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F97316 0%, #EA580C 60%, #C2410C 100%)" }}
    >
      {/* Shimmer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.09) 50%, transparent 60%)" }}
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
      />

      <div className="relative section-container py-10 md:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {detail.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <motion.p
                className="font-extrabold text-white leading-none tabular-nums"
                style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", letterSpacing: "-0.03em" }}
                animate={inView ? { scale: [0.8, 1.05, 1] } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-white/90 font-semibold text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
