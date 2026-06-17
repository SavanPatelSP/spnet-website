import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Technology | SPNET INC",
  description:
    "SPNET technology stack — from real-time messaging infrastructure and end-to-end encryption to planned AI, cloud, and security capabilities.",
  openGraph: {
    title: "Technology | SPNET INC",
    description:
      "Current and planned technology powering the SPNET ecosystem.",
  },
};

export default function TechnologyPage() {
  return <PageClient />;
}
