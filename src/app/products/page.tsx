import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
    title: "Products | SP NET INC",
  description:
    "Explore SP NET products — from SP-NET-GRAMS messaging platform to Membership, Economy, Admin, AI, Cloud, Business, and Security products in development and on the roadmap.",
  openGraph: {
  title: "Products | SP NET INC",
    description:
      "Explore SP NET products — current, in development, planned, and future.",
  },
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return <PageClient />;
}
