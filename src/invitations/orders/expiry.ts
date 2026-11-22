import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import { endOf } from "../calendar";
import type { InvitationContent } from "../types";

/**
 * A customer's invitation stays up for this many days after the celebration ends; after that its
 * link shows only "Proslava je završena", with no names, photo, phone numbers or address.
 * Order pages re-render hourly (`export const revalidate = 3600`), so the switch needs no deploy.
 */
export const KEEP_DAYS = 30;

const DAY = 24 * 60 * 60 * 1000;

export function expiresAt(content: InvitationContent) {
  return new Date(new Date(endOf(content)).getTime() + KEEP_DAYS * DAY);
}

export function isExpired(content: InvitationContent, now = Date.now()) {
  return now >= expiresAt(content).getTime();
}

/**
 * Metadata for an order page: the preview picture and text while the invitation is live,
 * a neutral title once it has ended. Never indexed either way.
 */
export function orderMetadata({
  content,
  photo,
  title,
  description,
}: {
  content: InvitationContent;
  photo?: StaticImageData;
  title: string;
  description: string;
}): Metadata {
  const robots = { index: false, follow: false };
  if (isExpired(content)) {
    return { title: "Proslava je završena", description: "Ova pozivnica je istekla.", robots };
  }
  return {
    title,
    description,
    robots,
    openGraph: { title, description, ...(photo && { images: [{ url: photo.src, width: photo.width, height: photo.height }] }) },
  };
}
