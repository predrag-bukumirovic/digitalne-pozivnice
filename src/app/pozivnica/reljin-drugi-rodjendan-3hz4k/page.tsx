import type { Metadata } from "next";
import { longDate } from "@/invitations/date";
import content from "@/invitations/orders/reljin-drugi-rodjendan/content";
import photo from "@/invitations/orders/reljin-drugi-rodjendan/relja.jpg";
import Template from "@/invitations/templates/rodjendan-dino/Template";

const title = content.subtitle ?? content.names;
const description = `Pozivamo vas na ${title}: ${longDate(content.date)}, ${content.events[0].place}.`;

// A customer's invitation: shared by link only, kept out of search engines and the sitemap.
// The photo doubles as the preview picture when the link is sent over Viber or WhatsApp.
export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
  openGraph: { title, description, images: [{ url: photo.src, width: photo.width, height: photo.height }] },
};

export default function Page() {
  return <Template content={content} photo={photo} demo={false} />;
}
