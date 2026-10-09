import ModernInvitation from "@/invitations/modern/ModernInvitation";
import content from "./content";
import { display } from "./fonts";
import Hero from "./Hero";
import styles from "./template.module.css";

export default function Template() {
  return <ModernInvitation content={content} className={`${display.variable} ${styles.theme}`} hero={<Hero />} />;
}
