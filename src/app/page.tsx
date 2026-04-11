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

export const metadata: Metadata = {
  title: "Prime Path Trucking | Dedicated Truck Dispatching Service USA",
  description:
    "Prime Path Trucking offers 24/7 dedicated truck dispatching for owner-operators and fleets across the USA. Higher RPM, no forced dispatch, no sign-up fees. First load in 24–48 hours.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
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
