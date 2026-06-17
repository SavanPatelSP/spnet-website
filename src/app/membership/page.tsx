import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
    title: "Membership | SP NET INC",
  description:
    "SP NET Premium Membership — tiered access, exclusive features, and community rewards. Coming soon.",
  openGraph: {
  title: "Membership | SP NET INC",
    description:
      "Premium membership platform from SP NET INC.",
  },
  alternates: { canonical: "/membership" },
};

export default function MembershipPage() {
  return <PageClient />;
}
