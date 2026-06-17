import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
    title: "Contact | SP NET INC",
  description:
    "Get in touch with SP NET INC. Reach out to our team for partnerships, project inquiries, or general questions.",
  openGraph: {
  title: "Contact | SP NET INC",
    description:
      "Get in touch with SP NET INC.",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <PageClient />;
}
