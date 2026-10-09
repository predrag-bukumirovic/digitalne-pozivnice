import { longDate, timeOf } from "@/invitations/date";
import content from "./content";
import styles from "./template.module.css";

export default function Hero({ compact = false }: { compact?: boolean }) {
  const Title = compact ? "p" : "h1";
  const age = content.subtitle?.match(/\d+/)?.[0] ?? "";

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <span className={`${styles.shape} ${styles.circle}`} aria-hidden="true" />
      <span className={`${styles.shape} ${styles.triangle}`} aria-hidden="true" />
      <span className={`${styles.shape} ${styles.square}`} aria-hidden="true" />
      <span className={`${styles.shape} ${styles.quarter}`} aria-hidden="true" />
      <p className={styles.kicker}>Rođendanska žurka</p>
      <Title className={styles.title}>
        <span className={styles.name}>{content.names}</span>
        <span className={styles.puni}>puni</span>
        <span className={styles.age}>{age}</span>
      </Title>
      <p className={styles.date}>
        {longDate(content.date)} · {timeOf(content.date)}h
      </p>
    </header>
  );
}
