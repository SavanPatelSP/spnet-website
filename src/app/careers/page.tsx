import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
    title: "Careers | SP NET INC",
  description:
    "Join SP NET INC and help build the future of connected communities. We are hiring across engineering, product, operations, and business.",
  openGraph: {
  title: "Careers | SP NET INC",
    description:
      "Join the team building the future of connected communities.",
  },
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return <PageClient />;
}
