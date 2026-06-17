import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
    title: "Roadmap | SP NET INC",
  description:
    "SP NET product roadmap — from SP-NET-GRAMS beta to Membership, Economy, Admin, AI, Cloud, Business, Security, and enterprise platform.",
  openGraph: {
  title: "Roadmap | SP NET INC",
    description:
      "SP NET product roadmap — what we are building and when.",
  },
  alternates: { canonical: "/roadmap" },
};

export default function RoadmapPage() {
  return <PageClient />;
}
