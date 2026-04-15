"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { TEAM, SITE } from "@/lib/constants";

const COLORS = [
  { from: "#F97316", to: "#EA580C" },
  { from: "#FB923C", to: "#F97316" },
];

const SPECIALTIES = [
  ["Above-market RPM loads", "Broker relationship building", "Dry Van & Flatbed lanes", "DAT & Truckstop expert"],
  ["Carrier acquisition", "Digital marketing", "Freight sales strategy", "Client onboarding"],
];

export default function TeamMembers() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" style={{ background: "#F8F9FA" }} aria-label="Team members">
      <div className="section-container" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TEAM.map((member, i) => {
            const initials = member.name.split(" ").map((n) => n[0]).join("");
            const color = COLORS[i % COLORS.length];
            const specs = SPECIALTIES[i] || [];

            return (
              <motion.div
                key={member.name}
                className="relative flex flex-col rounded-2xl overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 8px 40px rgba(15,23,42,0.07)",
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                whileHover={{ y: -6, boxShadow: "0 24px 64px rgba(15,23,42,0.12), 0 0 0 1px rgba(249,115,22,0.2)" }}
              >
                {/* Top color band */}
                <div className="h-2 w-full"
                  style={{ background: `linear-gradient(135deg, ${color.from}, ${color.to})` }} />

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 30% 10%, rgba(249,115,22,0.05), transparent 60%)" }} />

                <div className="p-7 md:p-8 flex flex-col gap-6 flex-1">
                  {/* Avatar + name row */}
                  <div className="flex items-center gap-5">
                    <motion.div className="relative flex-shrink-0" whileHover={{ scale: 1.05 }}>
                      {/* Spinning ring */}
                      <motion.div
                        className="absolute -inset-1.5 rounded-full"
                        style={{ background: `conic-gradient(${color.from}, ${color.to}, transparent, ${color.from})`, opacity: 0.4 }}
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                      />
                      <div
                        className="relative flex items-center justify-center w-20 h-20 rounded-full text-white font-extrabold text-2xl"
                        style={{ background: `linear-gradient(135deg, ${color.from}, ${color.to})` }}
                      >
                        {initials}
                      </div>
                      {/* Online dot */}
                      <motion.span
                        className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white"
                        style={{ background: "#10B981" }}
                        animate={{ scale: [1, 1.35, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>

                    <div>
                      <h2 className="font-bold text-slate-800 text-xl leading-tight">{member.name}</h2>
                      <p className="text-orange-DEFAULT text-sm font-semibold mt-1">{member.title}</p>
                      <div className="flex items-center gap-1.5 mt-2">
                        <motion.span className="w-1.5 h-1.5 rounded-full bg-green-400"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1.8, repeat: Infinity }} />
                        <span className="text-xs text-slate-400 font-medium">Available 24/7</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full" style={{ background: "#E2E8F0" }} />

                  {/* Bio */}
                  <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>

                  {/* Specialties */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Specialties</p>
                    <div className="flex flex-wrap gap-2">
                      {specs.map((spec, si) => (
                        <motion.span key={si}
                          className="text-xs font-medium px-3 py-1.5 rounded-full"
                          style={{ background: "rgba(249,115,22,0.08)", color: "#EA580C", border: "1px solid rgba(249,115,22,0.2)" }}
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.4 + i * 0.15 + si * 0.07 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {spec}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-2">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex-1">
                      <Link href="/contact" className="btn-primary text-sm w-full justify-center">
                        Work With {member.name.split(" ")[0]} <ArrowRight size={14} />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"
                        className="btn-secondary text-sm px-4 py-3 flex items-center gap-2 justify-center">
                        <MessageCircle size={14} /> Chat
                      </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <a href={`tel:${SITE.phone}`}
                        className="btn-secondary text-sm px-4 py-3 flex items-center gap-2 justify-center">
                        <Phone size={14} /> Call
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
