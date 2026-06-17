import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://spnetinc.in";

  const routes = [
    { path: "", priority: 1.0, changeFreq: "monthly" as const },
    { path: "/products", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/technology", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/services", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/roadmap", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/membership", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/economy", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/admin", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/security", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/ecosystem", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/newsroom", priority: 0.6, changeFreq: "weekly" as const },
    { path: "/careers", priority: 0.7, changeFreq: "weekly" as const },
    { path: "/company", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFreq: "yearly" as const },
  ];

  return routes.map(({ path, priority, changeFreq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }));
}
