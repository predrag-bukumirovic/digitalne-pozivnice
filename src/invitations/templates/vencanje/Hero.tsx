import { longDate, numericDate } from "@/invitations/date";
import content from "./content";
import styles from "./template.module.css";

export default function Hero({ compact = false }: { compact?: boolean }) {
  const [first, second] = content.names.split(" & ");
  const Title = compact ? "p" : "h1";
  const venue = content.events[0];

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <div className={styles.arch} aria-hidden="true" />
      <div className={styles.top}>
        <span>{content.subtitle}</span>
        <span>{numericDate(content.date)}</span>
      </div>
      <Title className={styles.names}>
        <span>{first}</span>
        <span className={styles.amp}>&amp;</span>
        <span>{second}</span>
      </Title>
      <p className={styles.meta}>
        {longDate(content.date)}
        <br />
        {venue.place}, {venue.address}
      </p>
    </header>
  );
}
