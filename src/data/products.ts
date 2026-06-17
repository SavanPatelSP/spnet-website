export type ProductStatus = "current" | "in-development" | "planned" | "future";

export interface Product {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  accent: string;
  status: ProductStatus;
}

export const products: Product[] = [
  {
    name: "SP-NET-GRAMS",
    tagline: "Messaging. Reimagined.",
    description:
      "A next-generation messaging platform combining end-to-end encryption with intuitive design. Real-time messaging, media sharing, and group communication built for communities that value privacy and performance.",
    features: ["End-to-end encryption", "Real-time messaging", "Rich media sharing", "Cross-platform sync"],
    accent: "#00d4ff",
    status: "current",
  },
  {
    name: "Membership Platform",
    tagline: "Access. Elevated.",
    description:
      "A premium membership system with tiered access, exclusive features, and community perks. Designed to reward engagement and empower creators.",
    features: ["Tiered membership levels", "Exclusive content access", "Reward systems", "Member analytics"],
    accent: "#7b61ff",
    status: "in-development",
  },
  {
    name: "Economy Platform",
    tagline: "Value. Exchanged.",
    description:
      "A digital economy powered by Coins & Diamonds. Earn, spend, and trade within the SP NET ecosystem. Built for transparency, fairness, and user control.",
    features: ["Coins & Diamonds system", "Peer-to-peer transactions", "Reward mechanics", "Transaction history"],
    accent: "#f59e0b",
    status: "in-development",
  },
  {
    name: "Admin Platform",
    tagline: "Control. Simplified.",
    description:
      "A comprehensive admin dashboard for managing communities, users, content, and moderation. Enterprise-grade controls with an intuitive interface.",
    features: ["User management", "Content moderation", "Analytics dashboard", "Permission controls"],
    accent: "#10b981",
    status: "in-development",
  },
  {
    name: "SP NET AI",
    tagline: "Intelligence. Embedded.",
    description:
      "AI-powered features planned across the ecosystem — from smart messaging assistants to content moderation, recommendation engines, and predictive analytics.",
    features: ["Smart assistants", "Content moderation", "Recommendations", "Predictive analytics"],
    accent: "#f59e0b",
    status: "planned",
  },
  {
    name: "SP NET CLOUD",
    tagline: "Infrastructure. Everywhere.",
    description:
      "Planned cloud infrastructure platform for distributed computing, edge deployment, and scalable storage — powering the next generation of SP NET products.",
    features: ["Distributed storage", "Edge computing", "Auto-scaling", "Global deployment"],
    accent: "#7b61ff",
    status: "planned",
  },
  {
    name: "SP NET BUSINESS",
    tagline: "Enterprise. Unified.",
    description:
      "A planned enterprise suite bringing together communication, collaboration, and management tools for organizations of all sizes.",
    features: ["Team collaboration", "Unified workspace", "Business analytics", "Enterprise security"],
    accent: "#00d4ff",
    status: "planned",
  },
  {
    name: "SP NET SECURITY",
    tagline: "Trust. Engineered.",
    description:
      "Planned security products including zero-trust architecture, threat intelligence, compliance automation, and advanced encryption services.",
    features: ["Zero-trust architecture", "Threat intelligence", "Compliance automation", "Security auditing"],
    accent: "#ef4444",
    status: "planned",
  },
] as const;
