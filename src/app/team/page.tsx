import type { Metadata } from "next";
import TeamHero    from "@/components/team/TeamHero";
import TeamMembers from "@/components/team/TeamMembers";
import TeamValues  from "@/components/team/TeamValues";
import FinalCTA    from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Our Team | Prime Path Trucking",
  description:
    "Meet the dedicated dispatchers behind Prime Path Trucking. Real people, available 24/7, committed to keeping your truck loaded.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamMembers />
      <TeamValues />
      <FinalCTA />
    </>
  );
}
