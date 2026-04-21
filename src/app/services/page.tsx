import type { Metadata } from "next";
import ServicesHero        from "@/components/services/ServicesHero";
import ServicesValueBar    from "@/components/services/ServicesValueBar";
import ServicesDetailList  from "@/components/services/ServicesDetailList";
import ServicesMidCTA      from "@/components/services/ServicesMidCTA";
import ServicesAllIncluded from "@/components/services/ServicesAllIncluded";
import FinalCTA            from "@/components/home/FinalCTA";
import ServiceSchema       from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Truck Dispatching Services | Prime Path Trucking",
  description:
    "Full-service truck dispatching: load finding, rate negotiation, broker packet setup, billing, route optimization, and 24/7 support. All included in one flat fee.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <ServiceSchema />
      <ServicesHero />
      <ServicesValueBar />
      <ServicesDetailList />
      <ServicesMidCTA />
      <ServicesAllIncluded />
      <FinalCTA />
    </>
  );
}
