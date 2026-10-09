import { numericDate, timeOf } from "@/invitations/date";
import content from "./content";
import styles from "./template.module.css";

export default function Hero({ compact = false }: { compact?: boolean }) {
  const Title = compact ? "p" : "h1";

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <span className={styles.disc} aria-hidden="true" />
      <p className={styles.vertical}>{content.subtitle}</p>
      <p className={styles.date}>{numericDate(content.date)}</p>
      <div className={styles.bottom}>
        <Title className={styles.name}>{content.names}</Title>
        <p className={styles.place}>
          {content.events[0].place} · {timeOf(content.date)}h
        </p>
      </div>
    </header>
  );
}
