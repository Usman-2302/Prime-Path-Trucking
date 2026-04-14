"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "How is the percentage calculated?",
    a: "The percentage is taken from your gross load revenue — the total amount the broker pays for the load before any deductions. For example, on a $2,000 load at 8%, our fee is $160. You keep the rest.",
  },
  {
    q: "What if my MC authority is under 90 days?",
    a: "We work with new authorities. Some brokers restrict carriers under 90 days, but we have relationships with brokers who work with newer carriers. We'll be upfront about what's available for your authority age and work to get you loaded as quickly as possible.",
  },
  {
    q: "Do I need a factoring company to work with you?",
    a: "No. We handle billing and invoicing directly. If you already use a factoring company, we coordinate with them on your behalf — managing NOA paperwork and payment flow so nothing falls through the cracks.",
  },
  {
    q: "Is there a difference in rate between equipment types?",
    a: "Yes. The rate within each range (4–10% Standard, 3–6% Fleet) varies based on equipment type and load complexity. Flatbed and step deck typically sit at the lower end of the range due to higher RPM. Contact us for a type-specific breakdown.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There is no cancellation fee and no minimum commitment. If you decide to stop using our service, you can cancel at any time with no penalty. We earn your business every load.",
  },
];

export default function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding" style={{ background: "#F8F9FA" }} aria-label="Pricing FAQ">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left */}
          <motion.div className="lg:col-span-4"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="section-label">FAQ</p>
            <h2 className="section-title mb-4">
              Pricing <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Common questions about how our fees work and what&apos;s included.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 text-orange-DEFAULT text-sm font-semibold hover:underline min-h-tap">
              Ask us directly &rarr;
            </Link>
          </motion.div>

          {/* Right */}
          <motion.div className="lg:col-span-8"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <dl className="divide-y" style={{ borderColor: "#E2E8F0" }}>
              {FAQS.map((faq, i) => (
                <div key={i} className="faq-item">
                  <dt>
                    <button
                      className="faq-trigger"
                      onClick={() => setOpen(open === i ? null : i)}
                      aria-expanded={open === i}
                      aria-controls={`pfaq-${i}`}
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
                        id={`pfaq-${i}`}
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
