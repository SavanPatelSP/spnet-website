import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Products | SPNET INC",
  description:
    "Explore SPNET products — from SP-NET-GRAMS messaging platform to Membership, Economy, Admin, AI, Cloud, Business, and Security products in development and on the roadmap.",
  openGraph: {
    title: "Products | SPNET INC",
    description:
      "Explore SPNET products — current, in development, planned, and future.",
  },
};

export default function ProductsPage() {
  return <PageClient />;
}
