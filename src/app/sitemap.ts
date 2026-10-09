import type { MetadataRoute } from "next";
import { catalog } from "@/invitations/catalog";
import { site } from "@/lib/site";

const pages = ["", "/sabloni", "/kako-funkcionise", "/cene", "/cesta-pitanja", "/kontakt", "/o-nama", "/politika-privatnosti", "/uslovi-koriscenja"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((path) => ({ url: `${site.url}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 })),
    ...catalog.map((content) => ({ url: `${site.url}/primer/${content.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
