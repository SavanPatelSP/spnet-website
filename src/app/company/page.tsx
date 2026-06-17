import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Company | SP NET INC",
  description:
    "SP NET INC is a multi-product technology company founded by Savan Patel — building secure communication, membership, economy, administration, AI, cloud, and enterprise products.",
  openGraph: {
    title: "Company | SP NET INC",
    description:
      "Who we are, what we stand for — SP NET INC's mission, vision, values, and leadership.",
  },
  alternates: {
    canonical: "/company",
  },
};

export default function CompanyPage() {
  return <PageClient />;
}
