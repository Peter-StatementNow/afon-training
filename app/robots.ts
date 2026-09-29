import type { MetadataRoute } from "next";

// Preview site: keep it out of search engines until launch.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
