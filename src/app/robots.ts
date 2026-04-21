import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thank-you", "/api/"],
      },
    ],
    sitemap: "https://primepathtucking.com/sitemap.xml",
    host: "https://primepathtucking.com",
  };
}
