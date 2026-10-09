import content from "@/invitations/templates/rodjendan/content";
import Template from "@/invitations/templates/rodjendan/Template";
import { invitationMetadata } from "@/invitations/metadata";

export const metadata = invitationMetadata(content);

export default function Page() {
  return <Template />;
}
