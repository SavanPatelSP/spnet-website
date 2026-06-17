export interface EcosystemItem {
  name: string;
  tagline: string;
  description: string;
  connections: string[];
  color: string;
  status: "current" | "in-development" | "planned" | "future";
}

export const ecosystemItems: EcosystemItem[] = [
  {
    name: "SP-NET-GRAMS",
    tagline: "Communication Layer",
    description: "The foundation of the ecosystem. Secure messaging, real-time communication, and community tools that connect people.",
    connections: ["Membership Platform", "Economy Platform"],
    color: "#00d4ff",
    status: "current",
  },
  {
    name: "Membership Platform",
    tagline: "Access Layer",
    description: "Premium membership system with tiered access, exclusive content, and community rewards.",
    connections: ["SP-NET-GRAMS", "Economy Platform"],
    color: "#7b61ff",
    status: "in-development",
  },
  {
    name: "Economy Platform",
    tagline: "Value Layer",
    description: "Digital economy powered by Coins & Diamonds. Earn, spend, and trade within the ecosystem.",
    connections: ["SP-NET-GRAMS", "Membership Platform", "Admin Platform"],
    color: "#f59e0b",
    status: "in-development",
  },
  {
    name: "Admin Platform",
    tagline: "Control Layer",
    description: "Comprehensive administration tools for managing communities, users, content, and moderation.",
    connections: ["SP-NET-GRAMS", "Economy Platform"],
    color: "#10b981",
    status: "in-development",
  },
  {
    name: "SP NET AI",
    tagline: "Intelligence Layer",
    description: "Planned AI capabilities across the ecosystem — smart assistants, moderation, and recommendations.",
    connections: ["SP-NET-GRAMS", "SP NET CLOUD", "SP NET SECURITY"],
    color: "#f59e0b",
    status: "planned",
  },
  {
    name: "SP NET CLOUD",
    tagline: "Infrastructure Layer",
    description: "Planned cloud infrastructure for distributed computing, edge deployment, and scalable storage.",
    connections: ["SP NET AI", "SP NET BUSINESS", "SP NET SECURITY"],
    color: "#7b61ff",
    status: "planned",
  },
  {
    name: "SP NET BUSINESS",
    tagline: "Enterprise Layer",
    description: "Planned enterprise suite with communication, collaboration, and management tools for organizations.",
    connections: ["SP NET CLOUD", "SP NET SECURITY"],
    color: "#00d4ff",
    status: "planned",
  },
  {
    name: "SP NET SECURITY",
    tagline: "Trust Layer",
    description: "Planned security products including zero-trust architecture, threat intelligence, and compliance tools.",
    connections: ["SP NET CLOUD", "SP NET AI", "SP NET BUSINESS"],
    color: "#ef4444",
    status: "planned",
  },
] as const;

export const ecosystemNodes = [
  { name: "SP-NET-GRAMS", desc: "Current", color: "#00d4ff", delay: 0 },
  { name: "Membership", desc: "In Development", color: "#7b61ff", delay: 0.1 },
  { name: "Economy", desc: "In Development", color: "#f59e0b", delay: 0.2 },
  { name: "Admin", desc: "In Development", color: "#10b981", delay: 0.3 },
  { name: "SP NET AI", desc: "Planned", color: "#f59e0b", delay: 0.4 },
  { name: "SP NET CLOUD", desc: "Planned", color: "#7b61ff", delay: 0.5 },
  { name: "SP NET BUSINESS", desc: "Planned", color: "#00d4ff", delay: 0.6 },
  { name: "SP NET SECURITY", desc: "Planned", color: "#ef4444", delay: 0.7 },
] as const;
