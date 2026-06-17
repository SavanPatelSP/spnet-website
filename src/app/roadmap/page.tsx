import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Roadmap | SPNET INC",
  description:
    "SPNET product roadmap — from SP-NET-GRAMS beta to Membership, Economy, Admin, AI, Cloud, Business, Security, and enterprise platform.",
  openGraph: {
    title: "Roadmap | SPNET INC",
    description:
      "SPNET product roadmap — what we are building and when.",
  },
};

export default function RoadmapPage() {
  return <PageClient />;
}
