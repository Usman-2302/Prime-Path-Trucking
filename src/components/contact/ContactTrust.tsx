"use client";

import { motion } from "framer-motion";
import { Shield, MapPin, Clock, DollarSign } from "lucide-react";

const ITEMS = [
  { icon: Shield,    label: "FMCSA Compliant"    },
  { icon: MapPin,    label: "48 States Covered"  },
  { icon: Clock,     label: "24/7 Support"       },
  { icon: DollarSign,label: "No Sign-Up Fee"     },
];

export default function ContactTrust() {
  return (
    <section
      aria-label="Trust signals"
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

      <div className="relative section-container py-8 md:py-10">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className="flex items-center gap-2.5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.06 }}
              >
                <motion.div
                  className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/20"
                  animate={{ rotate: [0, 6, -6, 0] }}
                  transition={{ duration: 4, delay: i * 0.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Icon size={16} className="text-white" />
                </motion.div>
                <span className="text-white font-semibold text-sm">{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
