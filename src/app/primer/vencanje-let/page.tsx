import content from "@/invitations/templates/vencanje-let/content";
import Template from "@/invitations/templates/vencanje-let/Template";
import { invitationMetadata } from "@/invitations/metadata";

export const metadata = invitationMetadata(content);

export default function Page() {
  return <Template />;
}
