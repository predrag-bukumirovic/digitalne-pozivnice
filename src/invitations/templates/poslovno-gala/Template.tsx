import ModernInvitation from "@/invitations/modern/ModernInvitation";
import type { InvitationContent } from "@/invitations/types";
import { Mark } from "./art";
import demoContent from "./content";
import { script } from "./fonts";
import Hero from "./Hero";
import styles from "./template.module.css";

export default function Template({ content = demoContent, demo = true }: { content?: InvitationContent; demo?: boolean }) {
  return (
    <ModernInvitation
      content={content}
      demo={demo}
      className={`${script.variable} ${styles.theme}`}
      hero={<Hero content={content} />}
      closingArt={<Mark className={styles.closingMark} />}
      music={content.music}
    />
  );
}
