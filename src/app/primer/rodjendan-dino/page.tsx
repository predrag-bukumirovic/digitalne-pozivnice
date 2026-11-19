import content from "@/invitations/templates/rodjendan-dino/content";
import Template from "@/invitations/templates/rodjendan-dino/Template";
import { invitationMetadata } from "@/invitations/metadata";

export const metadata = invitationMetadata(content);

export default function Page() {
  return <Template />;
}
