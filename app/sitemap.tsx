
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    "https://marketing-portfolio-gamma-six.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/skyline-properties`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/work/skyline-properties`,
      lastModified: new Date(),
    },
  ];
}
