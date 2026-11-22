import { longDate } from "@/invitations/date";
import InvitationEnded from "@/invitations/InvitationEnded";
import content from "@/invitations/orders/reljin-drugi-rodjendan/content";
import { isExpired, orderMetadata } from "@/invitations/orders/expiry";
import photo from "@/invitations/orders/reljin-drugi-rodjendan/relja.jpg";
import Template from "@/invitations/templates/rodjendan-dino/Template";

/*
 * A customer's invitation: shared by link only (the random end of the address can't be guessed),
 * kept out of search engines, and replaced by "Proslava je završena" 30 days after the party.
 * The photo doubles as the preview picture when the link is sent over Viber or WhatsApp.
 */
export const revalidate = 3600;

const title = content.subtitle ?? content.names;
const description = `Pozivamo vas na ${title}: ${longDate(content.date)}, ${content.events[0].place}.`;

export function generateMetadata() {
  return orderMetadata({ content, photo, title, description });
}

export default function Page() {
  if (isExpired(content)) return <InvitationEnded />;
  return <Template content={content} photo={photo} demo={false} />;
}
