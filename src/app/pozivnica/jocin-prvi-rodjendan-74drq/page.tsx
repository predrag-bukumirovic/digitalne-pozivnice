import InvitationEnded from "@/invitations/InvitationEnded";
import content from "@/invitations/orders/jocin-prvi-rodjendan/content";
import { isExpired, orderMetadata } from "@/invitations/orders/expiry";
import photo from "@/invitations/orders/jocin-prvi-rodjendan/joca.jpg";
import Template from "@/invitations/templates/rodjendan-prvi/Template";

/*
 * A customer's invitation: shared by link only (the random end of the address can't be guessed),
 * kept out of search engines, and replaced by "Proslava je završena" 30 days after the party.
 */
export const revalidate = 3600;

const title = "Jocin prvi rođendan";
const description = "Pozivamo vas na Jocin prvi rođendan, u nedelju 10. januara 2027. u 17h, Restoran DZO, Batajnica.";

export function generateMetadata() {
  return orderMetadata({ content, photo, title, description });
}

export default function Page() {
  if (isExpired(content)) return <InvitationEnded />;
  return <Template content={content} photo={photo} demo={false} />;
}
