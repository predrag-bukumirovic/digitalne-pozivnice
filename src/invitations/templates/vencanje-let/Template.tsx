import ModernInvitation from "@/invitations/modern/ModernInvitation";
import type { InvitationContent } from "@/invitations/types";
import { ClosingPlane } from "./art";
import demoContent from "./content";
import { mono } from "./fonts";
import Hero from "./Hero";
import styles from "./template.module.css";

export default function Template({ content = demoContent, demo = true }: { content?: InvitationContent; demo?: boolean }) {
  return (
    <ModernInvitation
      content={content}
      demo={demo}
      className={`${mono.variable} ${styles.theme}`}
      hero={<Hero content={content} />}
      closingArt={<ClosingPlane className={styles.closingPlane} />}
      music={content.music}
    />
  );
}
