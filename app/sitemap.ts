import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const sections = [
    "",
    "#empresa",
    "#productos",
    "#beneficios",
    "#clientes",
    "#contacto",
  ];

  return sections.map((section) => ({
    url: `${SITE.url}/${section}`,
    lastModified,
    changeFrequency: "monthly",
    priority: section === "" ? 1 : 0.8,
  }));
}
