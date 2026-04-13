"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, DollarSign, Clock, Truck } from "lucide-react";

const ITEMS = [
  { icon: Layers,     value: "7",       label: "Services Included",   sub: "All in one fee"         },
  { icon: DollarSign, value: "$0",      label: "Hidden Fees",         sub: "Ever"                   },
  { icon: Clock,      value: "24/7",    label: "Dispatcher Coverage", sub: "Nights, weekends, holidays" },
  { icon: Truck,      value: "48 hrs",  label: "First Load",          sub: "After docs received"    },
];

export default function ServicesValueBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      aria-label="Service highlights"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F97316 0%, #EA580C 60%, #C2410C 100%)",
      }}
    >
      {/* Shimmer sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.09) 50%, transparent 60%)",
        }}
        animate={{ x: ["-100%", "200%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "easeInOut",
        }}
      />

      <div className="relative section-container py-10 md:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              >
                <motion.div
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/20 text-white mb-3"
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon size={20} />
                </motion.div>
                <p
                  className="font-extrabold text-white leading-none tabular-nums"
                  style={{
                    fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {item.value}
                </p>
                <p className="text-white/90 font-semibold text-sm mt-1.5">
                  {item.label}
                </p>
                <p className="text-white/55 text-xs mt-0.5">{item.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
