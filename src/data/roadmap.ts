export interface RoadmapItem {
  title: string;
  date: string;
  description: string;
  status: "current" | "upcoming" | "completed";
}

export interface RoadmapPhase {
  phase: string;
  period: string;
  title: string;
  items: RoadmapItem[];
}

export const roadmapPhases: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    period: "Current",
    title: "Foundation",
    items: [
      { title: "SP-NET-GRAMS Beta Launch", date: "Q2 2026", description: "Initial beta release with core messaging features and end-to-end encryption.", status: "current" },
      { title: "Developer API v1", date: "Q3 2026", description: "First public API release for third-party integrations and community tools.", status: "upcoming" },
    ],
  },
  {
    phase: "Phase 2",
    period: "In Development",
    title: "Ecosystem Expansion",
    items: [
      { title: "Membership Platform", date: "Q4 2026", description: "Premium membership system with tiered access and exclusive community features.", status: "upcoming" },
      { title: "Economy Platform", date: "Q1 2027", description: "Coins & Diamonds digital economy with earning, spending, and trading mechanics.", status: "upcoming" },
      { title: "Admin Platform", date: "Q1 2027", description: "Comprehensive admin dashboard for community management and moderation.", status: "upcoming" },
    ],
  },
  {
    phase: "Phase 3",
    period: "Planned",
    title: "Product Expansion",
    items: [
      { title: "SP NET AI", date: "Q2 2027", description: "AI-powered features including smart assistants, content moderation, and recommendations.", status: "upcoming" },
      { title: "SP NET CLOUD", date: "Q2 2027", description: "Cloud infrastructure platform for distributed computing and global deployment.", status: "upcoming" },
      { title: "SP NET BUSINESS", date: "Q3 2027", description: "Enterprise suite for team collaboration and organizational communication.", status: "upcoming" },
      { title: "SP NET SECURITY", date: "Q3 2027", description: "Security products including zero-trust architecture and compliance tools.", status: "upcoming" },
    ],
  },
  {
    phase: "Phase 4",
    period: "Future",
    title: "Platform Scale",
    items: [
      { title: "API Platform", date: "2028", description: "Comprehensive API platform for third-party developers and enterprise integration.", status: "upcoming" },
      { title: "Infrastructure Platform", date: "2028", description: "Dedicated infrastructure services for enterprise and high-scale deployments.", status: "upcoming" },
      { title: "Enterprise Solutions", date: "2028", description: "Full enterprise product suite with dedicated support and custom integrations.", status: "upcoming" },
      { title: "SaaS Products", date: "2028", description: "Software-as-a-service offerings for businesses of all sizes.", status: "upcoming" },
    ],
  },
] as const;

export const roadmapMilestones = [
  { date: "Current", title: "SP-NET-GRAMS Beta Launch", description: "Initial beta release with core messaging and encryption.", status: "current" as const },
  { date: "Q4 2026", title: "Membership Platform", description: "Premium membership system with tiered access.", status: "upcoming" as const },
  { date: "Q1 2027", title: "Economy & Admin Platforms", description: "Digital economy and admin dashboard.", status: "upcoming" as const },
  { date: "2027", title: "AI, Cloud, Business, Security", description: "Expanded product suite.", status: "upcoming" as const },
  { date: "2028", title: "APIs, Infrastructure & SaaS", description: "Enterprise-scale platform services.", status: "upcoming" as const },
] as const;
