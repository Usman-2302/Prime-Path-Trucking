"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search, TrendingUp, FileText, Receipt,
  Route, Clock, FolderOpen, Shield,
} from "lucide-react";

const ITEMS = [
  { icon: Search,     label: "Load Finding"          },
  { icon: TrendingUp, label: "Rate Negotiation"       },
  { icon: FileText,   label: "Broker Packet Setup"    },
  { icon: Receipt,    label: "Billing & Invoicing"    },
  { icon: Route,      label: "Route Optimization"     },
  { icon: Clock,      label: "24/7 Dispatch"          },
  { icon: FolderOpen, label: "Document Management"    },
  { icon: Shield,     label: "Factoring Coordination" },
];

export default function PricingIncluded() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      aria-label="What's included at all tiers"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F97316 0%, #EA580C 60%, #C2410C 100%)" }}
    >
      {/* Shimmer sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.09) 50%, transparent 60%)" }}
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
      />

      <div ref={ref} className="relative section-container py-12 md:py-16">
        <motion.p
          className="text-center text-sm font-bold uppercase tracking-widest text-white/70 mb-3"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          Included at Every Tier
        </motion.p>
        <motion.h2
          className="text-center font-extrabold text-white mb-10"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", letterSpacing: "-0.02em" }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          Everything in One Fee
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className="flex flex-col items-center text-center gap-3 p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)" }}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                whileHover={{ scale: 1.06, background: "rgba(255,255,255,0.2)" }}
              >
                <motion.div
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 text-white"
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 4, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Icon size={18} />
                </motion.div>
                <p className="text-white font-semibold text-sm leading-snug">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
