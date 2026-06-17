import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Newsroom | SPNET INC",
  description:
    "Latest news, announcements, and updates from SPNET INC.",
  openGraph: {
    title: "Newsroom | SPNET INC",
    description:
      "Latest news and updates from SPNET INC.",
  },
};

export default function NewsroomPage() {
  return <PageClient />;
}
