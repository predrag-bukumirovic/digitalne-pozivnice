import content from "@/invitations/templates/krstenje-maslina/content";
import Template from "@/invitations/templates/krstenje-maslina/Template";
import { invitationMetadata } from "@/invitations/metadata";

export const metadata = invitationMetadata(content);

export default function Page() {
  return <Template />;
}
