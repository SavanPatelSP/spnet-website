export const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Technology", href: "/technology" },
  { label: "Services", href: "/services" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Careers", href: "/careers" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

export const footerGroups = [
  {
    title: "Products",
    links: [
      { label: "SP-NET-GRAMS", href: "/products" },
      { label: "Membership", href: "/membership" },
      { label: "Economy", href: "/economy" },
      { label: "Admin Platform", href: "/admin" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Technology", href: "/technology" },
      { label: "Services", href: "/services" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
] as const;
