"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Truck, Thermometer, Layers, ArrowUpRight,
  Zap, Package, Box, Caravan, ArrowRight,
} from "lucide-react";
import { EQUIPMENT_TYPES } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  "dry-van":             <Truck size={24} />,
  "reefer":              <Thermometer size={24} />,
  "flatbed":             <Layers size={24} />,
  "step-deck":           <ArrowUpRight size={24} />,
  "power-only":          <Zap size={24} />,
  "hotshot":             <Package size={24} />,
  "box-trucks":          <Box size={24} />,
  "sprinter-cargo-vans": <Caravan size={24} />,
};

const DESCRIPTIONS: Record<string, string> = {
  "dry-van":             "High-volume loads, consistent lanes",
  "reefer":              "Temperature-sensitive, premium rates",
  "flatbed":             "Project freight, specialized brokers",
  "step-deck":           "Oversized loads, higher-paying freight",
  "power-only":          "Drop-and-hook, trailer pool brokers",
  "hotshot":             "Expedited, time-critical loads",
  "box-trucks":          "Urban & last-mile delivery loads",
  "sprinter-cargo-vans": "Expedited small freight & e-commerce",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const card = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { type: "spring" as const, stiffness: 100, damping: 18 } },
};

export default function EquipmentSelector() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="equipment" className="section-padding bg-section-alt" aria-label="Equipment types we dispatch">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Equipment We Dispatch</p>
          <h2 className="section-title">
            Every Trailer Type,{" "}
            <span className="text-gradient">One Dedicated Dispatcher</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            We dispatch all major equipment types across the US. Select your trailer to see how we maximize your RPM.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {EQUIPMENT_TYPES.map((eq) => (
            <motion.div key={eq.slug} variants={card}>
              <Link
                href={`/equipment/${eq.slug}`}
                className="group relative flex flex-col items-start gap-3 p-4 md:p-5 rounded-xl border h-full"
                style={{ background: "#FFFFFF", borderColor: "#E2E8F0", boxShadow: "0 1px 3px rgba(15,23,42,0.06)" }}
              >
                {/* Hover glow bg */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 30% 40%, rgba(249,115,22,0.08), transparent 70%)" }}
                />

                {/* Icon */}
                <motion.div
                  className="flex items-center justify-center w-11 h-11 rounded-xl text-orange-DEFAULT flex-shrink-0 transition-all duration-200"
                  style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)" }}
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  {ICONS[eq.slug]}
                </motion.div>

                {/* Text */}
                <div className="flex-1 min-w-0 relative z-10">
                  <p className="font-semibold text-slate-800 text-sm md:text-base leading-tight group-hover:text-orange-DEFAULT transition-colors duration-150">
                    {eq.label}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 leading-snug line-clamp-2">
                    {DESCRIPTIONS[eq.slug]}
                  </p>
                </div>

                {/* RPM badge */}
                <div className="flex items-center justify-between w-full mt-1 relative z-10">
                  <span className="text-xs font-bold text-orange-DEFAULT tabular-nums">{eq.rpm} RPM</span>
                  <motion.div
                    className="text-gray-600 group-hover:text-orange-DEFAULT"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight size={14} />
                  </motion.div>
                </div>

                {/* Border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(249,115,22,0.35), 0 8px 30px rgba(0,0,0,0.4)" }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="text-slate-500 text-sm mb-4">Not sure which plan fits your equipment? We&apos;ll help you figure it out.</p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link href="/contact" className="btn-primary inline-flex">
              Talk to a Dispatcher <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
