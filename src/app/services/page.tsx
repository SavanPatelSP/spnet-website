import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Services | SPNET INC",
  description:
    "Future enterprise services from SPNET INC — including infrastructure platform, API platform, SaaS products, and enterprise solutions.",
  openGraph: {
    title: "Services | SPNET INC",
    description:
      "Future enterprise services from SPNET INC.",
  },
};

export default function ServicesPage() {
  return <PageClient />;
}
