"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  { q: "What is your dispatch fee?",              a: "Our Standard plan is 4–10% of gross load revenue based on truck type (for single trucks). Fleet plans for 3–10 trucks run 3–6%. There is no sign-up fee, no cancellation fee, and no minimum load commitment." },
  { q: "Do you force me to take loads?",          a: "Never. You have 100% final say on every load we present. We find it, we present it, you decide. No pressure, no penalties for passing. This is a core policy at Prime Path Trucking." },
  { q: "What if my authority is under 90 days?",  a: "We work with new authorities. Some brokers have restrictions for authorities under 90 days, but we have relationships with brokers who work with newer carriers. We'll be upfront about what's available for your authority age." },
  { q: "Do I need a factoring company?",          a: "No, but we can coordinate with one if you have it. We handle billing and invoicing directly. If you use a factoring company, we manage the NOA paperwork and communicate with them on your behalf." },
  { q: "What load boards do you use?",            a: "We primarily use DAT and Truckstop.com — the two largest load boards in the US. We also have direct broker relationships that give us access to loads not posted publicly." },
  { q: "How quickly can I get my first load?",    a: "Most carriers get their first load within 24–48 hours of submitting their documents (MC Authority, W-9, and Certificate of Insurance). The faster you send documents, the faster we get you loaded." },
];

export default function FAQStrip() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding" aria-label="Frequently asked questions">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label">FAQ</p>
            <h2 className="section-title mb-4">
              Common <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Everything owner-operators ask before signing up. Don&apos;t see your question?
            </p>
            <a href="mailto:dispatch@primepathtrucking.com"
              className="inline-flex items-center gap-2 text-orange-DEFAULT text-sm font-semibold mt-4 hover:underline min-h-tap">
              Ask us directly &rarr;
            </a>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <dl className="divide-y" style={{ borderColor: "#E2E8F0" }}>
              {FAQS.map((faq, i) => (
                <div key={i} className="faq-item">
                  <dt>
                    <button
                      className="faq-trigger"
                      onClick={() => setOpen(open === i ? null : i)}
                      aria-expanded={open === i}
                      aria-controls={`faq-${i}`}
                    >
                      <span className="pr-4">{faq.q}</span>
                      <motion.div
                        animate={{ rotate: open === i ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown size={18} className="text-orange-DEFAULT" />
                      </motion.div>
                    </button>
                  </dt>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.dd
                        id={`faq-${i}`}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="faq-content">{faq.a}</p>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
