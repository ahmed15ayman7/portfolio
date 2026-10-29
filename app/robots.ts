import type { MetadataRoute } from "next";

const BASE = "https://www.ahmed15ayman7.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // the Sentry example route is not content
        disallow: ["/api/", "/sentry-example-page"],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
