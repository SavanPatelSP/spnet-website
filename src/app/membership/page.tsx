import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Membership | SPNET INC",
  description:
    "SPNET Premium Membership — tiered access, exclusive features, and community rewards. Coming soon.",
  openGraph: {
    title: "Membership | SPNET INC",
    description:
      "Premium membership platform from SPNET INC.",
  },
};

export default function MembershipPage() {
  return <PageClient />;
}
