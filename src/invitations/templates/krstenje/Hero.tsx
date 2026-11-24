import { longDate, timeOf } from "@/invitations/date";
import type { InvitationContent } from "@/invitations/types";
import { Cloud, Cross, Dove } from "./art";
import demoContent from "./content";
import styles from "./template.module.css";

export default function Hero({ content = demoContent, compact = false }: { content?: InvitationContent; compact?: boolean }) {
  const Title = compact ? "p" : "h1";
  const venue = content.events[0];

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <div className={styles.rays} aria-hidden="true" />
      <Cloud className={`${styles.cloud} ${styles.cloudA}`} opacity={0.75} />
      <Cloud className={`${styles.cloud} ${styles.cloudB}`} opacity={0.6} />
      <Cloud className={`${styles.cloud} ${styles.cloudC}`} />
      <Cloud className={`${styles.cloud} ${styles.cloudD}`} />
      <div className={styles.halo}>
        <Dove className={styles.dove} />
        <Cross className={styles.cross} />
        <p className={styles.kicker}>{content.subtitle}</p>
        <Title className={styles.name}>{content.names}</Title>
        <p className={styles.date}>{longDate(content.date)}</p>
        <p className={styles.place}>
          {venue?.place} · {timeOf(content.date)}
        </p>
      </div>
    </header>
  );
}
