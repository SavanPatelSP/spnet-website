import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
    title: "Newsroom | SP NET INC",
  description:
    "Latest news, announcements, and updates from SP NET INC.",
  openGraph: {
  title: "Newsroom | SP NET INC",
    description:
      "Latest news and updates from SP NET INC.",
  },
  alternates: { canonical: "/newsroom" },
};

export default function NewsroomPage() {
  return <PageClient />;
}
