import content from "@/invitations/templates/poslovno-konferencija/content";
import Template from "@/invitations/templates/poslovno-konferencija/Template";
import { invitationMetadata } from "@/invitations/metadata";

export const metadata = invitationMetadata(content);

export default function Page() {
  return <Template />;
}
