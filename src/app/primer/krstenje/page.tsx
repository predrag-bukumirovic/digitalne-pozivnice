import content from "@/invitations/templates/krstenje/content";
import Template from "@/invitations/templates/krstenje/Template";
import { invitationMetadata } from "@/invitations/metadata";

export const metadata = invitationMetadata(content);

export default function Page() {
  return <Template />;
}
