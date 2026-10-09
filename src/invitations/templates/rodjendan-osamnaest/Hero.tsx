import { longDate, numericDate, timeOf } from "@/invitations/date";
import content from "./content";
import styles from "./template.module.css";

export default function Hero({ compact = false }: { compact?: boolean }) {
  const Title = compact ? "p" : "h1";

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <div className={styles.top}>
        <span>{content.subtitle}</span>
        <span>{numericDate(content.date)}</span>
      </div>
      <div>
        <p className={styles.outline} aria-hidden="true">
          18
        </p>
        <Title className={styles.name}>{content.names}</Title>
      </div>
      <p className={styles.meta}>
        {longDate(content.date).split(",")[0]} · {timeOf(content.date)}h · {content.events[0].place}
      </p>
    </header>
  );
}
