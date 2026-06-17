export interface Technology {
  category: string;
  description: string;
  items: string[];
  accent: string;
  status: "current" | "planned";
}

export const technologies: Technology[] = [
  {
    category: "Messaging & Communications",
    description: "Real-time messaging infrastructure powering SP-NET-GRAMS with custom protocols and WebRTC optimization.",
    items: ["Custom messaging protocol", "WebRTC optimization", "End-to-end encryption", "Real-time sync engine"],
    accent: "#00d4ff",
    status: "current",
  },
  {
    category: "Cloud Infrastructure",
    description: "Planned distributed systems architecture for future SPNET Cloud products and global edge deployment.",
    items: ["Multi-region deployment", "Edge computing mesh", "Serverless architecture", "Container orchestration"],
    accent: "#7b61ff",
    status: "planned",
  },
  {
    category: "Artificial Intelligence",
    description: "Planned AI and ML capabilities for smart messaging, content moderation, and predictive features across the ecosystem.",
    items: ["Natural language processing", "Content moderation", "Predictive analytics", "Recommendation engine"],
    accent: "#f59e0b",
    status: "planned",
  },
  {
    category: "Security",
    description: "Current and planned security architecture with encryption, threat detection, and compliance automation.",
    items: ["End-to-end encryption", "Threat intelligence", "Compliance automation", "Security auditing"],
    accent: "#10b981",
    status: "planned",
  },
] as const;
