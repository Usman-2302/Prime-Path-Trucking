"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, MapPin } from "lucide-react";

const TESTIMONIALS = [
  { initials: "M.T.", name: "Marcus T.",  location: "Texas",      equipment: "Dry Van", rating: 5, quote: "Before Prime Path I was averaging $2.10 RPM finding my own loads. Now I'm consistently hitting $2.80–$3.10. My dispatcher Jeff knows exactly what lanes I run and never wastes my time with low-ball offers.", rpm: "$3.10 RPM" },
  { initials: "D.R.", name: "Darnell R.", location: "Georgia",    equipment: "Reefer",  rating: 5, quote: "I was skeptical at first but these guys are legit. They set up all my broker packets in two days and had me loaded within 48 hours. The 24/7 support is real — I called at 2am and got a response in minutes.", rpm: "$3.45 RPM" },
  { initials: "S.K.", name: "Steve K.",   location: "Illinois",   equipment: "Flatbed", rating: 5, quote: "Running a 3-truck flatbed operation, I needed someone who could handle the volume. Prime Path manages all three trucks without missing a beat. The fleet rate saves me real money.", rpm: "3 trucks" },
  { initials: "R.M.", name: "Rosa M.",    location: "California", equipment: "Hotshot", rating: 5, quote: "No forced dispatch is the big one for me. I've been burned by dispatchers who pressured me into bad loads. Prime Path presents the load, I decide. Simple as that.", rpm: "$2.85 RPM" },
];

const PROOF_STATS = [
  { val: "47+",   label: "Active Carriers"    },
  { val: "4.9",   label: "Average Rating"     },
  { val: "48",    label: "States Covered"     },
  { val: "$3.24", label: "Avg RPM This Month" },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={13} className="text-orange-DEFAULT fill-orange-DEFAULT" />
      ))}
    </div>
  );
}

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="testimonials" className="section-padding bg-section-alt" aria-label="Client testimonials">
      <div className="section-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Real Carriers, Real Results</p>
          <h2 className="section-title">
            What Our Drivers <span className="text-gradient">Are Saying</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Currently dispatching for 47+ carriers across 48 states.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className="relative flex flex-col gap-4 p-6 md:p-7 rounded-xl border overflow-hidden"
              style={{ background: "#FFFFFF", borderColor: "#E2E8F0", boxShadow: "0 1px 3px rgba(15,23,42,0.06)" }}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, borderColor: "rgba(249,115,22,0.25)", boxShadow: "0 16px 48px rgba(15,23,42,0.1)" }}
            >
              <span className="absolute top-3 right-5 text-7xl leading-none font-serif pointer-events-none select-none"
                style={{ color: "rgba(249,115,22,0.08)" }} aria-hidden="true">&ldquo;</span>
              <Stars n={t.rating} />
              <p className="text-slate-600 text-sm leading-relaxed relative z-10">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center justify-between gap-3 pt-3 border-t" style={{ borderColor: "#F1F5F9" }}>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold text-white flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#F97316,#EA580C)" }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin size={10} /><span>{t.location}</span><span>·</span><span>{t.equipment}</span>
                    </div>
                  </div>
                </div>
                <span className="badge-orange text-xs flex-shrink-0">{t.rpm}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proof stats bar */}
        <motion.div
          className="mt-10 p-5 md:p-6 rounded-xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
          style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 1px 3px rgba(15,23,42,0.06)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {PROOF_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08 }}
            >
              <span className="text-2xl font-extrabold text-orange-DEFAULT tabular-nums" style={{ letterSpacing: "-0.02em" }}>{s.val}</span>
              <span className="text-xs text-slate-500 mt-0.5">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
