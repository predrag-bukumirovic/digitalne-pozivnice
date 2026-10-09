import content from "@/invitations/templates/proslava-bebe-mesec/content";
import Template from "@/invitations/templates/proslava-bebe-mesec/Template";
import { invitationMetadata } from "@/invitations/metadata";

export const metadata = invitationMetadata(content);

export default function Page() {
  return <Template />;
}
