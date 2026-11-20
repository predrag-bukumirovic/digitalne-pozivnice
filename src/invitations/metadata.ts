import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { categoryByLabel } from "./categories";
import type { InvitationContent } from "./types";

/** A template's sample page, e.g. "Dino – primer digitalne pozivnice za rođendan | JustSend". */
export function invitationMetadata(content: InvitationContent): Metadata {
  const phrase = categoryByLabel(content.category)?.phrase ?? "";
  const title = `${content.templateName} – primer digitalne pozivnice ${phrase}`.trim();
  return pageMetadata({
    title,
    description: `${content.description} Pogledajte primer na telefonu i poručite pozivnicu sa svojim podacima.`,
    path: `/primer/${content.slug}`,
    image: { url: `/og/primer/${content.slug}.jpg`, width: 1200, height: 630, alt: `Šablon ${content.templateName}: ${title}` },
  });
}
