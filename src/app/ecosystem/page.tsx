import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Ecosystem | SPNET INC",
  description:
    "The SPNET ecosystem — a connected family of products spanning messaging, membership, economy, admin, AI, cloud, business, and security.",
  openGraph: {
    title: "Ecosystem | SPNET INC",
    description:
      "The SPNET ecosystem of connected products.",
  },
};

export default function EcosystemPage() {
  return <PageClient />;
}
