import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Contact | SPNET INC",
  description:
    "Get in touch with SPNET INC. Reach out to our team for partnerships, project inquiries, or general questions.",
  openGraph: {
    title: "Contact | SPNET INC",
    description:
      "Get in touch with SPNET INC.",
  },
};

export default function ContactPage() {
  return <PageClient />;
}
