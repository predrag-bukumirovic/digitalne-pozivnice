import { longDate, timeOf } from "@/invitations/date";
import content from "./content";
import styles from "./template.module.css";

export default function Hero({ compact = false }: { compact?: boolean }) {
  const [first, second] = content.names.split(" & ");
  const Title = compact ? "p" : "h1";

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <span className={`${styles.blob} ${styles.blobA}`} aria-hidden="true" />
      <span className={`${styles.blob} ${styles.blobB}`} aria-hidden="true" />
      <span className={`${styles.blob} ${styles.blobC}`} aria-hidden="true" />
      <p className={styles.pill}>{content.subtitle}</p>
      <Title className={styles.names}>
        {first}
        <span className={styles.amp}> &amp; </span>
        {second}
      </Title>
      <p className={styles.date}>
        {longDate(content.date)} · {timeOf(content.date)}h
      </p>
    </header>
  );
}
