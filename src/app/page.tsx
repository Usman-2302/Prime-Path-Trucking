import type { Metadata } from "next";
import HeroSection       from "@/components/home/HeroSection";
import StatsStrip        from "@/components/home/StatsStrip";
import TrustBar          from "@/components/home/TrustBar";
import EquipmentSelector from "@/components/home/EquipmentSelector";
import HowItWorks        from "@/components/home/HowItWorks";
import ServicesOverview  from "@/components/home/ServicesOverview";
import WhyChooseUs       from "@/components/home/WhyChooseUs";
import SocialProof       from "@/components/home/SocialProof";
import FAQStrip          from "@/components/home/FAQStrip";
import FinalCTA          from "@/components/home/FinalCTA";
import FAQSchema         from "@/components/seo/FAQSchema";

const HOME_FAQS = [
  { question: "What is your dispatch fee?", answer: "Our Standard plan is 4–10% of gross load revenue based on truck type. Fleet plans for 3–10 trucks run 3–6%. There is no sign-up fee, no cancellation fee, and no minimum load commitment." },
  { question: "Do you force me to take loads?", answer: "Never. You have 100% final say on every load we present. We find it, we present it, you decide. No pressure, no penalties for passing." },
  { question: "What if my authority is under 90 days?", answer: "We work with new authorities. Some brokers have restrictions for authorities under 90 days, but we have relationships with brokers who work with newer carriers." },
  { question: "Do I need a factoring company?", answer: "No. We handle billing and invoicing directly. If you use a factoring company, we manage the NOA paperwork and communicate with them on your behalf." },
  { question: "What load boards do you use?", answer: "We primarily use DAT and Truckstop.com — the two largest load boards in the US. We also have direct broker relationships for loads not posted publicly." },
  { question: "How quickly can I get my first load?", answer: "Most carriers get their first load within 24–48 hours of submitting their documents — MC Authority, W-9, and Certificate of Insurance." },
];

export const metadata: Metadata = {
  title: "Prime Path Trucking | Dedicated Truck Dispatching Service USA",
  description:
    "Prime Path Trucking offers 24/7 dedicated truck dispatching for owner-operators and fleets across the USA. Higher RPM, no forced dispatch, no sign-up fees. First load in 24–48 hours.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <FAQSchema faqs={HOME_FAQS} />
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Live Stats Strip */}
      <StatsStrip />

      {/* 3. Trust Logo Bar */}
      <TrustBar />

      {/* 4. Equipment Type Selector */}
      <EquipmentSelector />

      {/* 5. How It Works */}
      <HowItWorks />

      {/* 6. Services Overview */}
      <ServicesOverview />

      {/* 7. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. Social Proof / Testimonials */}
      <SocialProof />

      {/* 9. FAQ Strip */}
      <FAQStrip />

      {/* 10. Final CTA */}
      <FinalCTA />
    </>
  );
}
