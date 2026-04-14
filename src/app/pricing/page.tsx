import type { Metadata } from "next";
import PricingHero      from "@/components/pricing/PricingHero";
import PricingCards     from "@/components/pricing/PricingCards";
import PricingIncluded  from "@/components/pricing/PricingIncluded";
import NoForcedDispatch from "@/components/pricing/NoForcedDispatch";
import PricingOnboarding from "@/components/pricing/PricingOnboarding";
import PricingFAQ       from "@/components/pricing/PricingFAQ";
import FinalCTA         from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Pricing & Onboarding | Prime Path Trucking",
  description:
    "Transparent truck dispatching pricing: 4–10% Standard, 3–6% Fleet. No sign-up fee, no cancellation fee, no forced dispatch. First load in 24–48 hours.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
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
