import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
    title: "Security | SP NET INC",
  description:
    "SP NET security architecture — end-to-end encryption, privacy by design, content moderation, and planned enterprise security products.",
  openGraph: {
  title: "Security | SP NET INC",
    description:
      "SP NET security and trust architecture.",
  },
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  return <PageClient />;
}
