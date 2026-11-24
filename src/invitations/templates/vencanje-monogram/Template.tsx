import ModernInvitation from "@/invitations/modern/ModernInvitation";
import type { InvitationContent } from "@/invitations/types";
import demoContent from "./content";
import { display } from "./fonts";
import Hero, { Seal } from "./Hero";
import styles from "./template.module.css";

export default function Template({ content = demoContent, demo = true }: { content?: InvitationContent; demo?: boolean }) {
  return (
    <ModernInvitation
      content={content}
      demo={demo}
      className={`${display.variable} ${styles.theme}`}
      hero={<Hero content={content} />}
      closingArt={<Seal names={content.names} className={styles.closingSeal} />}
      music={content.music}
    />
  );
}
