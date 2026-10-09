import { longDate, timeOf } from "@/invitations/date";
import content from "./content";
import styles from "./template.module.css";

export default function Hero({ compact = false }: { compact?: boolean }) {
  const Title = compact ? "p" : "h1";

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <div className={styles.halo} aria-hidden="true" />
      <svg className={styles.cross} viewBox="0 0 24 40" aria-hidden="true">
        <path d="M12 1v38M3 12h18" fill="none" stroke="currentColor" strokeWidth="1.3" />
      </svg>
      <p className={styles.kicker}>{content.subtitle}</p>
      <Title className={styles.name}>{content.names}</Title>
      <p className={styles.date}>{longDate(content.date)}</p>
      <p className={styles.place}>
        {content.events[0].place} · {timeOf(content.date)}h
      </p>
    </header>
  );
}
