"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TEAM } from "@/lib/constants";

const COLORS = [
  { from: "#F97316", to: "#EA580C" },
  { from: "#FB923C", to: "#F97316" },
];

export default function AboutTeam() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-section-alt" aria-label="Our team">
      <div className="section-container">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">The Team</p>
          <h2 className="section-title">
            Your Dedicated <span className="text-gradient">Dispatchers</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Real people, not a call center. Every carrier gets a named dispatcher who knows their lanes.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {TEAM.map((member, i) => {
            const initials = member.name.split(" ").map((n) => n[0]).join("");
            const color = COLORS[i % COLORS.length];

            return (
              <motion.div
                key={member.name}
                className="relative flex flex-col gap-6 p-7 md:p-8 rounded-2xl overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 24px rgba(15,23,42,0.07)",
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                whileHover={{ y: -5, boxShadow: "0 20px 60px rgba(15,23,42,0.12), 0 0 0 1px rgba(249,115,22,0.2)" }}
              >
                {/* Hover radial glow */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ background: "radial-gradient(circle at 20% 10%, rgba(249,115,22,0.06), transparent 60%)" }} />

                {/* Top row — avatar + name */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <motion.div
                    className="relative flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Outer ring */}
                    <motion.div
                      className="absolute -inset-1 rounded-full"
                      style={{ background: `linear-gradient(135deg, ${color.from}, ${color.to})`, opacity: 0.3 }}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <div
                      className="relative flex items-center justify-center w-16 h-16 rounded-full text-white font-extrabold text-xl"
                      style={{ background: `linear-gradient(135deg, ${color.from}, ${color.to})` }}
                    >
                      {initials}
                    </div>
                    {/* Online dot */}
                    <motion.span
                      className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white"
                      style={{ background: "#10B981" }}
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>

                  <div>
                    <h3 className="font-bold text-slate-800 text-lg leading-tight">{member.name}</h3>
                    <p className="text-orange-DEFAULT text-sm font-semibold mt-0.5">{member.title}</p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-green-400"
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <span className="text-xs text-slate-400 font-medium">Available now</span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full" style={{ background: "#E2E8F0" }} />

                {/* Bio */}
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">{member.bio}</p>

                {/* Bottom badge */}
                <div className="flex items-center gap-2 mt-auto">
                  <span className="badge-orange text-xs">Senior Team</span>
                  <span className="badge-green text-xs">24/7 Available</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
