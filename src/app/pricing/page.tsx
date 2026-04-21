import type { Metadata } from "next";
import PricingHero       from "@/components/pricing/PricingHero";
import PricingCards      from "@/components/pricing/PricingCards";
import PricingIncluded   from "@/components/pricing/PricingIncluded";
import NoForcedDispatch  from "@/components/pricing/NoForcedDispatch";
import PricingOnboarding from "@/components/pricing/PricingOnboarding";
import PricingFAQ        from "@/components/pricing/PricingFAQ";
import FinalCTA          from "@/components/home/FinalCTA";
import FAQSchema         from "@/components/seo/FAQSchema";

const PRICING_FAQS = [
  { question: "How is the dispatch percentage calculated?", answer: "The percentage is taken from your gross load revenue — the total amount the broker pays before any deductions. On a $2,000 load at 8%, our fee is $160. You keep the rest." },
  { question: "What if my MC authority is under 90 days?", answer: "We work with new authorities. Some brokers restrict carriers under 90 days, but we have relationships with brokers who work with newer carriers and will be upfront about what's available." },
  { question: "Do I need a factoring company to work with you?", answer: "No. We handle billing and invoicing directly. If you already use a factoring company, we coordinate with them — managing NOA paperwork and payment flow." },
  { question: "Is there a difference in rate between equipment types?", answer: "Yes. The rate within each range varies based on equipment type and load complexity. Flatbed and step deck typically sit at the lower end due to higher RPM. Contact us for a type-specific breakdown." },
  { question: "Can I cancel anytime?", answer: "Yes. There is no cancellation fee and no minimum commitment. You can cancel at any time with no penalty." },
];

export const metadata: Metadata = {
  title: "Pricing & Onboarding | Prime Path Trucking",
  description:
    "Transparent truck dispatching pricing: 4–10% Standard, 3–6% Fleet. No sign-up fee, no cancellation fee, no forced dispatch. First load in 24–48 hours.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <FAQSchema faqs={PRICING_FAQS} />
      <PricingHero />
      <PricingCards />
      <PricingIncluded />
      <NoForcedDispatch />
      <PricingOnboarding />
      <PricingFAQ />
      <FinalCTA />
    </>
  );
}
