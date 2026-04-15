import type { Metadata } from "next";
import ThankYouHero    from "@/components/thank-you/ThankYouHero";
import ThankYouNext    from "@/components/thank-you/ThankYouNext";
import ThankYouContact from "@/components/thank-you/ThankYouContact";

export const metadata: Metadata = {
  title: "You're All Set | Prime Path Trucking",
  description:
    "Thank you for reaching out to Prime Path Trucking. We'll contact you within 1 hour and find your first load within 24–48 hours.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <ThankYouHero />
      <ThankYouNext />
      <ThankYouContact />
    </>
  );
}
