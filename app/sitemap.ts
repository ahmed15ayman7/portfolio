import type { MetadataRoute } from "next";
import { projects } from "@/data";

const BASE = "https://www.ahmed15ayman7.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${BASE}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/cv`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // only projects that actually have a detail page worth indexing
  const detailed = projects.filter(
    (project) => project.sections && project.sections.length > 0
  );

  const projectRoutes: MetadataRoute.Sitemap = detailed.flatMap((project) => {
    const projectUrl = `${BASE}/projects/${project.slug}`;

    const sectionRoutes = project.sections.flatMap((section) => {
      const sectionUrl = `${projectUrl}/${section.slug}`;

      const pageRoutes = section.pages.map((page) => ({
        url: `${sectionUrl}/${page.slug}`,
        lastModified: now,
        changeFrequency: "yearly" as const,
        priority: 0.4,
      }));

      return [
        {
          url: sectionUrl,
          lastModified: now,
          changeFrequency: "yearly" as const,
          priority: 0.6,
        },
        ...pageRoutes,
      ];
    });

    return [
      {
        url: projectUrl,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      ...sectionRoutes,
    ];
  });

  return [...staticRoutes, ...projectRoutes];
}
