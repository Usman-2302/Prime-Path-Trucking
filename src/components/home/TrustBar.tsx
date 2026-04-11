"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

const PLATFORMS = [
  { name: "DAT",           desc: "Load Board" },
  { name: "Truckstop.com", desc: "Load Board" },
  { name: "Samsara",       desc: "ELD / TMS"  },
  { name: "Motive",        desc: "ELD / TMS"  },
  { name: "McLeod",        desc: "TMS"        },
  { name: "FMCSA",         desc: "Compliant"  },
];

// Duplicate for seamless loop
const ITEMS = [...PLATFORMS, ...PLATFORMS];

const SPEED = 40; // pixels per second

export default function TrustBar() {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      // Width of ONE set (half the total duplicated track)
      setTrackWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (trackWidth === 0) return;
    const current = x.get();
    const next = current - (SPEED * delta) / 1000;
    // Reset when we've scrolled one full set width
    x.set(next <= -trackWidth ? 0 : next);
  });

  return (
    <section
      aria-label="Platforms we work with"
      className="relative overflow-hidden border-y"
      style={{ borderColor: "rgba(15,23,42,0.08)", background: "#FFFFFF" }}
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #FFFFFF, transparent)" }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #FFFFFF, transparent)" }} />

      <div className="py-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">
          Platforms we work with
        </p>

        <div className="overflow-hidden" aria-hidden="true">
          <motion.div
            ref={trackRef}
            className="flex gap-16 items-center"
            style={{ x, width: "max-content" }}
          >
            {ITEMS.map((p, i) => (
              <div key={i} className="flex flex-col items-center flex-shrink-0 select-none cursor-default">
                <span className="text-base font-extrabold tracking-tight text-slate-400 hover:text-orange-DEFAULT transition-colors duration-200 leading-none whitespace-nowrap">
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
