import content from "@/invitations/templates/rodjendan-osamnaest/content";
import Template from "@/invitations/templates/rodjendan-osamnaest/Template";
import { invitationMetadata } from "@/invitations/metadata";

export const metadata = invitationMetadata(content);

export default function Page() {
  return <Template />;
}
