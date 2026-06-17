export interface Service {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  status: "planned" | "future";
}

export const services: Service[] = [
  {
    id: "infrastructure",
    title: "Infrastructure Platform",
    description: "Future infrastructure services designed to provide scalable, reliable, and secure foundations for digital products and communities.",
    capabilities: ["Cloud deployment", "Edge networking", "Distributed storage", "Infrastructure monitoring"],
    status: "future",
  },
  {
    id: "api",
    title: "API Platform",
    description: "Planned API services enabling third-party developers and businesses to build on top of the SP NET ecosystem.",
    capabilities: ["RESTful APIs", "WebSocket services", "Developer documentation", "Integration tools"],
    status: "future",
  },
  {
    id: "saas",
    title: "SaaS Products",
    description: "Future software-as-a-service offerings designed for businesses seeking communication, collaboration, and community management solutions.",
    capabilities: ["Communication tools", "Community management", "Analytics platforms", "Enterprise integration"],
    status: "future",
  },
  {
    id: "enterprise",
    title: "Enterprise Solutions",
    description: "Planned enterprise-grade solutions including dedicated infrastructure, custom integrations, and premium support for organizations.",
    capabilities: ["Dedicated deployment", "Custom integration", "Premium support", "SLA agreements"],
    status: "future",
  },
] as const;
