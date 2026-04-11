"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, TrendingUp, FileText, Receipt, Route, Clock, FolderOpen, ArrowRight } from "lucide-react";

const SERVICES = [
  { icon: Search,     title: "Load Finding",              desc: "Active searching on DAT and Truckstop based on your preferred lanes and minimum RPM. We don't stop until we find a load worth your time." },
  { icon: TrendingUp, title: "Rate Negotiation",           desc: "We negotiate with brokers to beat posted rates wherever possible. Your dispatcher is incentivized to find higher-paying loads — not just any loads." },
  { icon: FileText,   title: "Broker Packet Setup",        desc: "We handle your MC, W-9, COI, and NOA paperwork with every new broker — once, correctly. No more filling out the same forms over and over." },
  { icon: Receipt,    title: "Billing & Invoicing",        desc: "We generate and send invoices, then follow up on unpaid loads so you get paid faster. No more chasing brokers for money you've already earned." },
  { icon: Route,      title: "Route Optimization",         desc: "We plan routes that minimize deadhead miles and maximize earnings. Dead miles are lost money — we keep them as low as possible." },
  { icon: Clock,      title: "24/7 Night & Weekend",       desc: "We cover nights, weekends, and holidays so you never miss a load window. No premium surcharge — it's included in your standard rate." },
  { icon: FolderOpen, title: "Document Management",        desc: "We keep your compliance documents current and on file for brokers. Rate confirmations, BOLs, PODs — all handled and organized." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { type: "spring" as const, stiffness: 90, damping: 18 } },
};

export default function ServicesOverview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="section-padding bg-section-alt" aria-label="Our services">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="section-label">What We Handle</p>
            <h2 className="section-title">
              Everything Except <span className="text-gradient">the Driving</span>
            </h2>
            <p className="section-subtitle">
              Every service is included in your dispatch fee. No hidden charges, no à la carte pricing.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="self-start md:self-auto flex-shrink-0">
            <Link href="/services" className="btn-secondary text-sm px-5 py-3 whitespace-nowrap">
              View All Services <ArrowRight size={15} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                variants={item}
                className="group flex flex-col gap-4 p-5 rounded-xl border relative overflow-hidden cursor-default"
                style={{ background: "#FFFFFF", borderColor: "#E2E8F0", boxShadow: "0 1px 3px rgba(15,23,42,0.06)" }}
                whileHover={{ y: -4, borderColor: "rgba(249,115,22,0.3)", boxShadow: "0 12px 40px rgba(15,23,42,0.1), 0 0 0 1px rgba(249,115,22,0.15)" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Hover radial glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                  style={{ background: "radial-gradient(circle at 20% 20%, rgba(249,115,22,0.07), transparent 60%)" }} />

                <motion.div
                  className="flex items-center justify-center w-11 h-11 rounded-xl text-orange-DEFAULT flex-shrink-0 relative z-10"
                  style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}
                  whileHover={{ scale: 1.15, rotate: 8, background: "#F97316", color: "#fff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon size={22} />
                </motion.div>
                <div className="relative z-10">
                  <h3 className="font-semibold text-slate-800 text-base mb-2 leading-snug group-hover:text-orange-DEFAULT transition-colors duration-150">{svc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </motion.div>
            );
          })}

          {/* All-included card */}
          <motion.div
            variants={item}
            className="flex flex-col justify-between gap-4 p-5 rounded-xl sm:col-span-2 lg:col-span-1"
            style={{ background: "linear-gradient(135deg,rgba(249,115,22,0.08) 0%,rgba(234,88,12,0.04) 100%)", border: "1px solid rgba(249,115,22,0.2)" }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div>
              <p className="text-orange-DEFAULT font-bold text-sm uppercase tracking-wider mb-2">All Included</p>
              <p className="text-slate-800 font-semibold text-base leading-snug">Every service above is covered in your dispatch fee.</p>
              <p className="text-slate-500 text-sm mt-2">No hidden fees. No surprises.</p>
            </div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/pricing" className="btn-primary text-sm w-full justify-center">
                See Pricing <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
