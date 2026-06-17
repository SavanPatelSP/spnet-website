import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
    title: "Ecosystem | SP NET INC",
  description:
    "The SP NET ecosystem — a connected family of products spanning messaging, membership, economy, admin, AI, cloud, business, and security.",
  openGraph: {
  title: "Ecosystem | SP NET INC",
    description:
      "The SP NET ecosystem of connected products.",
  },
  alternates: { canonical: "/ecosystem" },
};

export default function EcosystemPage() {
  return <PageClient />;
}
