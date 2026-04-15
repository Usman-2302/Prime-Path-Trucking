import type { Metadata } from "next";
import AboutHero      from "@/components/about/AboutHero";
import AboutMission   from "@/components/about/AboutMission";
import AboutTeam      from "@/components/about/AboutTeam";
import AboutCompliance from "@/components/about/AboutCompliance";
import TrustBar       from "@/components/home/TrustBar";
import FinalCTA       from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About Us | Prime Path Trucking",
  description:
    "Prime Path Trucking is a US-focused truck dispatching company built around FMCSA compliance, 24/7 availability, and above-market RPM. Meet our team.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutTeam />
      <AboutCompliance />
      <TrustBar />
      <FinalCTA />
    </>
  );
}
