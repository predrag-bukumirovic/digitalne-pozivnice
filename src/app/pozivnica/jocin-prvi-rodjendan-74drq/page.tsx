import type { Metadata } from "next";
import content from "@/invitations/orders/jocin-prvi-rodjendan/content";
import photo from "@/invitations/orders/jocin-prvi-rodjendan/joca.jpg";
import Template from "@/invitations/templates/rodjendan-prvi/Template";

const description = "Pozivamo vas na Jocin prvi rođendan, u nedelju 10. januara 2027. u 17h, Restoran DZO, Batajnica.";

// A customer's invitation: shared by link only, kept out of search engines and the sitemap.
export const metadata: Metadata = {
  title: "Jocin prvi rođendan",
  description,
  robots: { index: false, follow: false },
  openGraph: { title: "Jocin prvi rođendan", description, images: [{ url: photo.src, width: photo.width, height: photo.height }] },
};

export default function Page() {
  return <Template content={content} photo={photo} demo={false} />;
}
