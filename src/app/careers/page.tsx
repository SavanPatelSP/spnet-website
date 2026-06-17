import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Careers | SPNET INC",
  description:
    "Join SPNET INC and help build the future of connected communities. We are hiring across engineering, product, operations, and business.",
  openGraph: {
    title: "Careers | SPNET INC",
    description:
      "Join the team building the future of connected communities.",
  },
};

export default function CareersPage() {
  return <PageClient />;
}
