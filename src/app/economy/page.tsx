import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
    title: "Economy | SP NET INC",
  description:
    "SP NET digital economy — Coins & Diamonds system for earning, spending, and trading within the SP NET ecosystem. Coming soon.",
  openGraph: {
  title: "Economy | SP NET INC",
    description:
      "SP NET digital economy platform.",
  },
  alternates: { canonical: "/economy" },
};

export default function EconomyPage() {
  return <PageClient />;
}
