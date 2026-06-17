export interface Value {
  title: string;
  description: string;
}

export interface CompanyData {
  mission: string;
  vision: string;
  values: Value[];
  founder: {
    name: string;
    role: string;
    bio: string;
  };
}

export const companyData: CompanyData = {
  mission: "To build technology that connects people, empowers communities, and creates economic opportunity through secure, accessible, and innovative products.",
  vision: "A world where every community has the tools it needs to communicate, collaborate, and thrive in the digital economy.",
  values: [
    {
      title: "Community First",
      description: "Every product we build starts with the community. We design for people, not just users — because strong communities are the foundation of everything meaningful.",
    },
    {
      title: "Privacy by Design",
      description: "Trust is earned through architecture, not promises. We embed privacy and encryption into every layer of every product from day one.",
    },
    {
      title: "Transparent Economy",
      description: "Digital economies only work when users trust the system. We build transparent, fair, and user-controlled economic models.",
    },
    {
      title: "Innovation with Purpose",
      description: "We don't innovate for its own sake. Every feature, every product, every platform decision is measured against real human needs.",
    },
  ],
  founder: {
    name: "Savan Patel",
    role: "Founder & CEO",
    bio: "Founder and CEO of SP NET INC. Building the future of connected communities through messaging, membership, and digital economy products. Focused on creating technology that empowers people and communities.",
  },
} as const;
