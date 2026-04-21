"use client";

import { motion } from "framer-motion";

const PLATFORMS = [
  { name: "DAT",           desc: "Load Board" },
  { name: "Truckstop.com", desc: "Load Board" },
  { name: "Samsara",       desc: "ELD / TMS"  },
  { name: "Motive",        desc: "ELD / TMS"  },
  { name: "McLeod",        desc: "TMS"        },
  { name: "FMCSA",         desc: "Compliant"  },
];

const ITEMS = [...PLATFORMS, ...PLATFORMS, ...PLATFORMS, ...PLATFORMS];

export default function TrustBar() {
  return (
    <section
      aria-label="Platforms we work with"
      className="relative overflow-hidden border-y"
      style={{ borderColor: "rgba(15,23,42,0.08)", background: "#FFFFFF" }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #FFFFFF, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #FFFFFF, transparent)" }} />

      <div className="py-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">
          Platforms we work with
        </p>

        <div className="overflow-hidden" aria-hidden="true">
          <motion.div
            className="flex"
            style={{ width: "max-content" }}
            animate={{ x: ["0%", "-25%"] }}
            transition={{
              duration: 18,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {ITEMS.map((p, i) => (
              <div key={i} className="flex flex-col items-center flex-shrink-0 select-none px-10">
                <span className="text-base font-extrabold tracking-tight text-slate-400 leading-none whitespace-nowrap">
                  {p.name}
                </span>
                <span className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider mt-0.5 whitespace-nowrap">
                  {p.desc}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
