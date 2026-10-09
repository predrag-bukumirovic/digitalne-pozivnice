import content from "@/invitations/templates/proslava-bebe/content";
import Template from "@/invitations/templates/proslava-bebe/Template";
import { invitationMetadata } from "@/invitations/metadata";

export const metadata = invitationMetadata(content);

export default function Page() {
  return <Template />;
}
