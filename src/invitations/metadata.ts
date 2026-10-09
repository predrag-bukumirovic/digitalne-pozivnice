import type { Metadata } from "next";
import type { InvitationContent } from "./types";

export function invitationMetadata(content: InvitationContent): Metadata {
  return {
    title: `${content.names} – ${content.category} | Primer pozivnice`,
    description: content.intro,
  };
}
