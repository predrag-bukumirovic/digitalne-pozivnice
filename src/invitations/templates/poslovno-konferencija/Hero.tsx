import { numericDate, timeOf } from "@/invitations/date";
import content from "./content";
import styles from "./template.module.css";

export default function Hero({ compact = false }: { compact?: boolean }) {
  const Title = compact ? "p" : "h1";
  const venue = content.events[0];

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <div className={styles.top}>
        <span>{content.subtitle} predstavlja</span>
        <span>{numericDate(content.date)}</span>
      </div>
      <Title className={styles.title}>{content.names}</Title>
      <div className={styles.bottom}>
        <p className={styles.year}>{content.date.slice(0, 4)}</p>
        <p className={styles.meta}>
          {venue.place}
          <br />
          {venue.address} · {timeOf(content.date)}h
        </p>
      </div>
    </header>
  );
}
