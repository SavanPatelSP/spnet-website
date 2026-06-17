import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
    title: "Admin Platform | SP NET INC",
  description:
    "SP NET Admin Platform — comprehensive community management, moderation tools, analytics, and user administration. Coming soon.",
  openGraph: {
  title: "Admin Platform | SP NET INC",
    description:
      "SP NET Admin Platform for community management.",
  },
  alternates: { canonical: "/admin" },
};

export default function AdminPage() {
  return <PageClient />;
}
