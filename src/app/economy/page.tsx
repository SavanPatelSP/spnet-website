import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Economy | SPNET INC",
  description:
    "SPNET digital economy — Coins & Diamonds system for earning, spending, and trading within the SPNET ecosystem. Coming soon.",
  openGraph: {
    title: "Economy | SPNET INC",
    description:
      "SPNET digital economy platform.",
  },
};

export default function EconomyPage() {
  return <PageClient />;
}
