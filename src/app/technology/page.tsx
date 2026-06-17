import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
    title: "Technology | SP NET INC",
  description:
    "SP NET technology stack — from real-time messaging infrastructure and end-to-end encryption to planned AI, cloud, and security capabilities.",
  openGraph: {
  title: "Technology | SP NET INC",
    description:
      "Current and planned technology powering the SP NET ecosystem.",
  },
  alternates: { canonical: "/technology" },
};

export default function TechnologyPage() {
  return <PageClient />;
}
