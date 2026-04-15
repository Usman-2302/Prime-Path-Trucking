"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Truck, FileText, Phone, CheckCircle } from "lucide-react";
import { EQUIPMENT_TYPES } from "@/lib/constants";

type FormData = {
  fullName: string;
  companyName: string;
  equipmentType: string;
  numTrucks: string;
  mcAge: string;
  mcNumber: string;
  usingDispatcher: string;
  frustration: string;
  phone: string;
  email: string;
  bestTime: string;
  hearAbout: string;
};

const INITIAL: FormData = {
  fullName: "", companyName: "", equipmentType: "", numTrucks: "",
  mcAge: "", mcNumber: "", usingDispatcher: "", frustration: "",
  phone: "", email: "", bestTime: "", hearAbout: "",
};

const STEPS = [
  { label: "Your Truck",     icon: Truck    },
  { label: "Your Authority", icon: FileText },
  { label: "Contact",        icon: Phone    },
];

const TRUCK_OPTIONS   = ["1 truck", "2–5 trucks", "6–10 trucks", "10+ trucks"];
const MC_AGE_OPTIONS  = ["Under 90 days", "3–6 months", "6 months–1 year", "Over 1 year"];
const DISPATCHER_OPTS = ["Yes", "No"];
const BEST_TIME_OPTS  = ["Morning (8–12 EST)", "Afternoon (12–5 EST)", "Evening (5–9 EST)", "Anytime"];
const HEAR_OPTS       = ["Google", "Facebook", "Referral", "Instagram", "Other"];

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 120, damping: 20 } },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.2 } }),
};

const fieldVariants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 18, delay: i * 0.07 },
  }),
};

function RadioGroup({ options, value, onChange, name }: {
  options: string[]; value: string; onChange: (v: string) => void; name: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <motion.button
          key={opt} type="button"
          onClick={() => onChange(opt)}
          className="px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-150 min-h-tap"
          style={{
            background: value === opt ? "linear-gradient(135deg,#F97316,#EA580C)" : "#FFFFFF",
            borderColor: value === opt ? "#F97316" : "#CBD5E1",
            color: value === opt ? "#FFFFFF" : "#475569",
            boxShadow: value === opt ? "0 4px 14px rgba(249,115,22,0.3)" : "none",
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          aria-pressed={value === opt}
          name={name}
        >
          {opt}
        </motion.button>
      ))}
    </div>
  );
}

export default function LeadForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const set = (field: keyof FormData) => (val: string) =>
    setData((d) => ({ ...d, [field]: val }));

  const validateStep = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (step === 0) {
      if (!data.fullName.trim())    e.fullName    = "Name is required";
      if (!data.equipmentType)      e.equipmentType = "Select equipment type";
      if (!data.numTrucks)          e.numTrucks   = "Select number of trucks";
    }
    if (step === 1) {
      if (!data.mcAge)              e.mcAge       = "Select MC authority age";
      if (!data.usingDispatcher)    e.usingDispatcher = "Please select one";
    }
    if (step === 2) {
      if (!data.phone.trim())       e.phone       = "Phone number is required";
      if (!data.email.trim())       e.email       = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(data.email)) e.email = "Enter a valid email";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validateStep()) return;
    setDir(1);
    setStep((s) => s + 1);
  };

  const back = () => {
    setDir(-1);
    setStep((s) => s - 1);
    setErrors({});
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    setLoading(true);
    // Small delay for UX — shows loading state before redirect
    setTimeout(() => router.push("/thank-you"), 600);
  };

  const progress = ((step) / (STEPS.length - 1)) * 100;

  return (
    <div className="w-full">
      {/* Step indicators */}
      <div className="flex items-center justify-between mb-6 gap-2">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const active = i === step;
          const done   = i < step;
          return (
            <div key={s.label} className="flex items-center gap-1.5 flex-1">
              <motion.div
                className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
                animate={{
                  background: done ? "#10B981" : active ? "#F97316" : "#E2E8F0",
                  scale: active ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {done
                  ? <CheckCircle size={14} className="text-white" />
                  : <Icon size={14} style={{ color: active ? "#fff" : "#94A3B8" }} />
                }
              </motion.div>
              <span className="text-xs font-semibold hidden sm:block"
                style={{ color: active ? "#F97316" : done ? "#10B981" : "#94A3B8" }}>
                {s.label}
              </span>
              {i < STEPS.length - 1 && (
                <div className="flex-1 h-px mx-1" style={{ background: done ? "#10B981" : "#E2E8F0" }} />
              )}
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="progress-bar mb-8">
        <motion.div
          className="progress-fill"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Step label */}
      <motion.p
        key={step}
        className="text-xs font-bold uppercase tracking-widest text-orange-DEFAULT mb-5"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Step {step + 1} of {STEPS.length} — {STEPS[step].label}
      </motion.p>

      <form onSubmit={submit} noValidate>
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            {step === 0 && (
              <motion.div key="step0" custom={dir} variants={slideVariants}
                initial="enter" animate="center" exit="exit" className="space-y-5">

                <motion.div custom={0} variants={fieldVariants} initial="hidden" animate="show">
                  <label className="input-label">Full Name *</label>
                  <input className={`input ${errors.fullName ? "error" : ""}`}
                    type="text" placeholder="John Smith" value={data.fullName}
                    onChange={(e) => set("fullName")(e.target.value)} />
                  {errors.fullName && <p className="input-error">{errors.fullName}</p>}
                </motion.div>

                <motion.div custom={1} variants={fieldVariants} initial="hidden" animate="show">
                  <label className="input-label">Company Name <span className="text-slate-400 font-normal">(optional)</span></label>
                  <input className="input" type="text" placeholder="Leave blank if owner-operator"
                    value={data.companyName} onChange={(e) => set("companyName")(e.target.value)} />
                </motion.div>

                <motion.div custom={2} variants={fieldVariants} initial="hidden" animate="show">
                  <label className="input-label">Equipment Type *</label>
                  <select className={`input ${errors.equipmentType ? "error" : ""}`}
                    value={data.equipmentType} onChange={(e) => set("equipmentType")(e.target.value)}>
                    <option value="">Select equipment type</option>
                    {EQUIPMENT_TYPES.map((eq) => (
                      <option key={eq.slug} value={eq.label}>{eq.label}</option>
                    ))}
                  </select>
                  {errors.equipmentType && <p className="input-error">{errors.equipmentType}</p>}
                </motion.div>

                <motion.div custom={3} variants={fieldVariants} initial="hidden" animate="show">
                  <label className="input-label">Number of Trucks *</label>
                  <RadioGroup options={TRUCK_OPTIONS} value={data.numTrucks}
                    onChange={set("numTrucks")} name="numTrucks" />
                  {errors.numTrucks && <p className="input-error">{errors.numTrucks}</p>}
                </motion.div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="step1" custom={dir} variants={slideVariants}
                initial="enter" animate="center" exit="exit" className="space-y-5">

                <motion.div custom={0} variants={fieldVariants} initial="hidden" animate="show">
                  <label className="input-label">MC Authority Age *</label>
                  <RadioGroup options={MC_AGE_OPTIONS} value={data.mcAge}
                    onChange={set("mcAge")} name="mcAge" />
                  {errors.mcAge && <p className="input-error">{errors.mcAge}</p>}
                </motion.div>

                <motion.div custom={1} variants={fieldVariants} initial="hidden" animate="show">
                  <label className="input-label">MC Number <span className="text-slate-400 font-normal">(optional)</span></label>
                  <input className="input" type="text" placeholder="MC-XXXXXXX"
                    value={data.mcNumber} onChange={(e) => set("mcNumber")(e.target.value)} />
                  <p className="input-helper">Helps us prepare your broker packets faster</p>
                </motion.div>

                <motion.div custom={2} variants={fieldVariants} initial="hidden" animate="show">
                  <label className="input-label">Currently using a dispatcher? *</label>
                  <RadioGroup options={DISPATCHER_OPTS} value={data.usingDispatcher}
                    onChange={set("usingDispatcher")} name="usingDispatcher" />
                  {errors.usingDispatcher && <p className="input-error">{errors.usingDispatcher}</p>}
                </motion.div>

                <AnimatePresence>
                  {data.usingDispatcher === "Yes" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <label className="input-label">What&apos;s your biggest frustration?</label>
                      <textarea
                        className="input h-auto py-3 resize-none"
                        rows={3}
                        placeholder="Tell us what's not working with your current dispatcher..."
                        value={data.frustration}
                        onChange={(e) => set("frustration")(e.target.value)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" custom={dir} variants={slideVariants}
                initial="enter" animate="center" exit="exit" className="space-y-5">

                <motion.div custom={0} variants={fieldVariants} initial="hidden" animate="show">
                  <label className="input-label">Phone Number *</label>
                  <input className={`input ${errors.phone ? "error" : ""}`}
                    type="tel" placeholder="+1 (555) 000-0000"
                    value={data.phone} onChange={(e) => set("phone")(e.target.value)} />
                  {errors.phone && <p className="input-error">{errors.phone}</p>}
                </motion.div>

                <motion.div custom={1} variants={fieldVariants} initial="hidden" animate="show">
                  <label className="input-label">Email Address *</label>
                  <input className={`input ${errors.email ? "error" : ""}`}
                    type="email" placeholder="you@example.com"
                    value={data.email} onChange={(e) => set("email")(e.target.value)} />
                  {errors.email && <p className="input-error">{errors.email}</p>}
                </motion.div>

                <motion.div custom={2} variants={fieldVariants} initial="hidden" animate="show">
                  <label className="input-label">Best Time to Call <span className="text-slate-400 font-normal">(optional)</span></label>
                  <select className="input" value={data.bestTime}
                    onChange={(e) => set("bestTime")(e.target.value)}>
                    <option value="">Select a time</option>
                    {BEST_TIME_OPTS.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </motion.div>

                <motion.div custom={3} variants={fieldVariants} initial="hidden" animate="show">
                  <label className="input-label">How did you hear about us? <span className="text-slate-400 font-normal">(optional)</span></label>
                  <select className="input" value={data.hearAbout}
                    onChange={(e) => set("hearAbout")(e.target.value)}>
                    <option value="">Select one</option>
                    {HEAR_OPTS.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-3 mt-8">
          {step > 0 ? (
            <motion.button type="button" onClick={back}
              className="btn-ghost px-5 py-3 flex items-center gap-2"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <ArrowLeft size={16} /> Back
            </motion.button>
          ) : <div />}

          {step < STEPS.length - 1 ? (
            <motion.button type="button" onClick={next}
              className="btn-primary px-7 py-3"
              whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
              Next Step <ArrowRight size={16} />
            </motion.button>
          ) : (
            <motion.button type="submit"
              className="btn-primary px-7 py-3"
              disabled={loading}
              whileHover={loading ? {} : { scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}>
              {loading ? (
                <>
                  <motion.span
                    className="w-4 h-4 rounded-full border-2 border-white border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                  />
                  Submitting...
                </>
              ) : (
                <>Submit — Get Started <ArrowRight size={16} /></>
              )}
            </motion.button>
          )}
        </div>
      </form>
    </div>
  );
}
