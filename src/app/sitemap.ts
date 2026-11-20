import type { MetadataRoute } from "next";
import { catalog } from "@/invitations/catalog";
import { categories } from "@/invitations/categories";
import { site } from "@/lib/site";

const pages: [path: string, priority: number][] = [
  ["", 1],
  ["/sabloni", 0.9],
  ["/cene", 0.8],
  ["/kako-funkcionise", 0.7],
  ["/cesta-pitanja", 0.7],
  ["/kontakt", 0.7],
  ["/o-nama", 0.5],
  ["/politika-privatnosti", 0.2],
  ["/uslovi-koriscenja", 0.2],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, priority: number) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority,
  });
  return [
    ...pages.map(([path, priority]) => entry(path, priority)),
    ...categories.map((category) => entry(`/sabloni/${category.slug}`, 0.9)),
    ...catalog.map((content) => entry(`/primer/${content.slug}`, 0.6)),
  ];
}
