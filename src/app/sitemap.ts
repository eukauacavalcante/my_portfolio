import { MetadataRoute } from "next";
import { locales } from "@/i18n/i18n";

const baseUrl = "https://kauacavalcante.vercel.app";
const projectIds = [
  "morpheus-env",
  "cars-project",
  "parking-service",
  "flix-api",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/${locale}#about`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${locale}#projects`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...projectIds.map((id) => ({
      url: `${baseUrl}/${locale}/projects/${id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]);
}
