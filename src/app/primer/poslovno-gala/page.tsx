import content from "@/invitations/templates/poslovno-gala/content";
import Template from "@/invitations/templates/poslovno-gala/Template";
import { invitationMetadata } from "@/invitations/metadata";

export const metadata = invitationMetadata(content);

export default function Page() {
  return <Template />;
}
