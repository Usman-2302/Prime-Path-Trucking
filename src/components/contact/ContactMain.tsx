"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MessageCircle, Mail, Clock, CheckCircle } from "lucide-react";
import { SITE } from "@/lib/constants";
import LeadForm from "./LeadForm";

const CONTACT_METHODS = [
  {
    icon: Phone,
    label: "Call Us",
    value: SITE.phoneDisplay,
    href: `tel:${SITE.phone}`,
    sub: "Tap to call — available 24/7",
    color: "#F97316",
    pulse: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: SITE.whatsapp,
    sub: "Fastest response method",
    color: "#22C55E",
    pulse: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    sub: "We respond within 1 hour",
    color: "#3B82F6",
    pulse: false,
  },
];

const HOURS = [
  { day: "Monday – Friday",  hours: "8:00 AM – 10:00 PM EST" },
  { day: "Saturday",         hours: "9:00 AM – 8:00 PM EST"  },
  { day: "Sunday",           hours: "10:00 AM – 6:00 PM EST" },
  { day: "After Hours",      hours: "Emergency dispatch available 24/7" },
];

export default function ContactMain() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-padding" style={{ background: "#F8F9FA" }} aria-label="Contact form and methods">
      <div className="section-container" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* LEFT — Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="rounded-2xl p-6 md:p-8"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 8px 40px rgba(15,23,42,0.07)",
              }}>
              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-800 mb-1">Start Your Application</h2>
                <p className="text-slate-500 text-sm">Takes less than 3 minutes. No commitment required.</p>
              </div>
              <LeadForm />
            </div>
          </motion.div>

          {/* RIGHT — Contact methods */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-5"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            {/* Response guarantee */}
            <motion.div
              className="flex items-center gap-3 p-4 rounded-xl"
              style={{ background: "rgba(249,115,22,0.06)", border: "1px solid rgba(249,115,22,0.2)" }}
              animate={{ boxShadow: ["0 0 0px rgba(249,115,22,0)", "0 0 20px rgba(249,115,22,0.12)", "0 0 0px rgba(249,115,22,0)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <CheckCircle size={20} className="text-orange-DEFAULT flex-shrink-0" />
              </motion.div>
              <div>
                <p className="text-sm font-bold text-slate-800">We respond within 1 hour</p>
                <p className="text-xs text-slate-500">During business hours · Emergency line available 24/7</p>
              </div>
            </motion.div>

            {/* Contact method cards */}
            {CONTACT_METHODS.map((method, i) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-5 rounded-xl border transition-all duration-200 group"
                  style={{
                    background: "#FFFFFF",
                    borderColor: "#E2E8F0",
                    boxShadow: "0 2px 8px rgba(15,23,42,0.05)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{
                    y: -3,
                    borderColor: method.color,
                    boxShadow: `0 12px 32px rgba(15,23,42,0.1), 0 0 0 1px ${method.color}40`,
                  }}
                >
                  <div className="relative flex-shrink-0">
                    <motion.div
                      className="flex items-center justify-center w-12 h-12 rounded-xl"
                      style={{ background: `${method.color}15`, border: `1px solid ${method.color}30` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon size={22} style={{ color: method.color }} />
                    </motion.div>
                    {method.pulse && (
                      <motion.span
                        className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                        style={{ background: method.color }}
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">{method.label}</p>
                    <p className="text-sm font-semibold text-slate-800 truncate group-hover:text-orange-DEFAULT transition-colors duration-150">
                      {method.value}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{method.sub}</p>
                  </div>
                </motion.a>
              );
            })}

            {/* Office hours */}
            <motion.div
              className="rounded-xl p-5"
              style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(15,23,42,0.05)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-orange-DEFAULT" />
                <p className="text-sm font-bold text-slate-800">Office Hours (EST)</p>
              </div>
              <div className="space-y-2.5">
                {HOURS.map((h, i) => (
                  <motion.div
                    key={h.day}
                    className="flex items-start justify-between gap-3 text-xs"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + i * 0.07 }}
                  >
                    <span className="text-slate-500 font-medium flex-shrink-0">{h.day}</span>
                    <span className="text-slate-700 font-semibold text-right">{h.hours}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
