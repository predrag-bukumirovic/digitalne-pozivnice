import content from "@/invitations/templates/vencanje-monogram/content";
import Template from "@/invitations/templates/vencanje-monogram/Template";
import { invitationMetadata } from "@/invitations/metadata";

export const metadata = invitationMetadata(content);

export default function Page() {
  return <Template />;
}
