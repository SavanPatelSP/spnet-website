import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
    title: "Services | SP NET INC",
  description:
    "Future enterprise services from SP NET INC — including infrastructure platform, API platform, SaaS products, and enterprise solutions.",
  openGraph: {
  title: "Services | SP NET INC",
    description:
      "Future enterprise services from SP NET INC.",
  },
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <PageClient />;
}
