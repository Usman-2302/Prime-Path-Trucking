"use client";

import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function FloatingButtons() {
  return (
    <div
      className="fixed bottom-6 right-4 z-[200] flex flex-col gap-3 md:hidden"
      aria-label="Quick contact buttons"
    >
      {/* WhatsApp */}
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fab"
        style={{ background: "#25D366", boxShadow: "0 4px 16px rgba(37,211,102,0.4)" }}
      >
        <MessageCircle size={22} className="text-white" />
      </a>

      {/* Phone */}
      <a
        href={`tel:${SITE.phone}`}
        aria-label={`Call ${SITE.phoneDisplay}`}
        className="fab"
        style={{
          background: "linear-gradient(135deg, #F97316, #EA580C)",
          boxShadow: "0 4px 16px rgba(249,115,22,0.45)",
        }}
      >
        <Phone size={20} className="text-white" />
      </a>
    </div>
  );
}
