import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EQUIPMENT_TYPES, EQUIPMENT_DETAIL } from "@/lib/constants";
import EquipmentHero      from "@/components/equipment/EquipmentHero";
import EquipmentStats     from "@/components/equipment/EquipmentStats";
import EquipmentLoadTypes from "@/components/equipment/EquipmentLoadTypes";
import EquipmentChallenges from "@/components/equipment/EquipmentChallenges";
import EquipmentCTA       from "@/components/equipment/EquipmentCTA";
import FinalCTA           from "@/components/home/FinalCTA";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return EQUIPMENT_TYPES.map((eq) => ({ slug: eq.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const eq   = EQUIPMENT_TYPES.find((e) => e.slug === slug);
  const detail = EQUIPMENT_DETAIL[slug];
  if (!eq || !detail) return {};
  return {
    title: `${eq.label} Dispatch Service | Prime Path Trucking`,
    description: `${detail.sub} RPM range: ${eq.rpm}. No sign-up fee, no forced dispatch. First load in 24–48 hours.`,
    alternates: { canonical: `/equipment/${slug}` },
    keywords: [detail.seoKeyword, "truck dispatcher USA", "owner operator dispatching", eq.label.toLowerCase() + " dispatcher"],
  };
}

export default async function EquipmentPage({ params }: Props) {
  const { slug } = await params;
  const eq     = EQUIPMENT_TYPES.find((e) => e.slug === slug);
  const detail = EQUIPMENT_DETAIL[slug];
  if (!eq || !detail) notFound();

  return (
    <>
      <EquipmentHero     eq={eq} detail={detail} />
      <EquipmentStats    eq={eq} detail={detail} />
      <EquipmentLoadTypes detail={detail} />
      <EquipmentChallenges detail={detail} />
      <EquipmentCTA      eq={eq} />
      <FinalCTA />
    </>
  );
}
