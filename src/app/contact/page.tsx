import type { Metadata } from "next";
import ContactHero    from "@/components/contact/ContactHero";
import ContactMain    from "@/components/contact/ContactMain";
import ContactTrust   from "@/components/contact/ContactTrust";
import FinalCTA       from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Contact & Get Started | Prime Path Trucking",
  description:
    "Get started with Prime Path Trucking. Fill out our quick form and your dedicated dispatcher will find your first load within 24–48 hours. No sign-up fee.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMain />
      <ContactTrust />
      <FinalCTA />
    </>
  );
}
