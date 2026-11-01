import type { StaticImageData } from "next/image";
import ModernInvitation from "@/invitations/modern/ModernInvitation";
import type { InvitationContent } from "@/invitations/types";
import demoContent from "./content";
import demoPhoto from "./primer-foto.jpg";
import { display } from "./fonts";
import Hero from "./Hero";
import styles from "./template.module.css";

export default function Template({
  content = demoContent,
  photo = demoPhoto,
  demo = true,
}: {
  content?: InvitationContent;
  photo?: StaticImageData;
  demo?: boolean;
}) {
  return (
    <ModernInvitation
      content={content}
      demo={demo}
      className={`${display.variable} ${styles.theme}`}
      hero={<Hero content={content} photo={photo} />}
    />
  );
}
