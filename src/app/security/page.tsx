import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Security | SPNET INC",
  description:
    "SPNET security architecture — end-to-end encryption, privacy by design, content moderation, and planned enterprise security products.",
  openGraph: {
    title: "Security | SPNET INC",
    description:
      "SPNET security and trust architecture.",
  },
};

export default function SecurityPage() {
  return <PageClient />;
}
