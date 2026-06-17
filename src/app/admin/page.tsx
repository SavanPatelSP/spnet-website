import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Admin Platform | SPNET INC",
  description:
    "SPNET Admin Platform — comprehensive community management, moderation tools, analytics, and user administration. Coming soon.",
  openGraph: {
    title: "Admin Platform | SPNET INC",
    description:
      "SPNET Admin Platform for community management.",
  },
};

export default function AdminPage() {
  return <PageClient />;
}
