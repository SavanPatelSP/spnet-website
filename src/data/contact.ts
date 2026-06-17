export interface ContactChannel {
  label: string;
  email: string;
  description: string;
  iconName: "mail" | "users" | "briefcase" | "shield";
}

export const contactChannels: ContactChannel[] = [
  {
    label: "General Inquiries",
    email: "contact@sp-net.in",
    description: "For general questions, feedback, and information about our products and services.",
    iconName: "mail",
  },
  {
    label: "Business & Partnerships",
    email: "hello@sp-net.in",
    description: "For partnership opportunities, business development, and strategic collaborations.",
    iconName: "users",
  },
  {
    label: "Careers",
    email: "careers@sp-net.in",
    description: "For job applications, recruitment inquiries, and talent partnerships.",
    iconName: "briefcase",
  },
  {
    label: "Security Reports",
    email: "security@sp-net.in",
    description: "For responsible disclosure of security vulnerabilities and security-related inquiries.",
    iconName: "shield",
  },
];

export const contactInfo = {
  ctaText: "We are building the future of connected communities. If you share our vision, have a project in mind, or just want to say hello — we would love to hear from you.",
  responseTime: "Usually within 24 hours. Often faster.",
} as const;
