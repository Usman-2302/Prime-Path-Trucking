"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WORDS = ["Everything", "Except", "the", "Driving."];

const wordVariants = {
  hidden: { opacity: 0, y: 32, rotateX: -12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 110,
      damping: 18,
      delay: 0.1 + i * 0.1,
    },
  }),
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

export default function ServicesHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#F8F9FA" }}
      aria-label="Services page hero"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Orange glow top-left */}
      <div
        className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Orange glow bottom-right */}
      <div
        className="absolute -bottom-16 -right-16 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative section-container pt-10 pb-14 md:pt-14 md:pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Label */}
          <motion.p variants={itemVariants} className="section-label">
            What We Do
          </motion.p>

          {/* Headline — word-by-word reveal */}
          <h1
            className="font-extrabold leading-[1.08] mb-6"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              letterSpacing: "-0.03em",
              perspective: "800px",
            }}
          >
            <span className="flex flex-wrap gap-x-3 gap-y-1">
              {WORDS.map((word, i) =>
                word === "Driving." ? (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={wordVariants}
                    initial="hidden"
                    animate="show"
                    className="text-gradient inline-block"
                  >
                    {word}
                  </motion.span>
                ) : (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={wordVariants}
                    initial="hidden"
                    animate="show"
                    className="text-slate-900 inline-block"
                  >
                    {word}
                  </motion.span>
                )
              )}
            </span>
          </h1>

          {/* Sub */}
          <motion.p
            variants={itemVariants}
            className="text-slate-500 text-lg leading-relaxed mb-8 max-w-xl"
          >
            Every service below is included in your dispatch fee — no hidden
            charges, no à la carte pricing. We handle the back office so you
            stay on the road and earning.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link href="/contact" className="btn-primary text-base px-7 py-4 w-full sm:w-auto">
                Get Started Free <ArrowRight size={17} />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/pricing"
                className="btn-secondary text-base px-7 py-4 w-full sm:w-auto"
              >
                See Pricing
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom divider line */}
      <div className="divider" />
    </section>
  );
}
