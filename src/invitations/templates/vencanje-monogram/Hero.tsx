import { numericDate } from "@/invitations/date";
import content from "./content";
import styles from "./template.module.css";

export default function Hero({ compact = false }: { compact?: boolean }) {
  const [first, second] = content.names.split(" & ");
  const Title = compact ? "p" : "h1";
  const venue = content.events[0];

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <div className={styles.frame}>
        <p className={styles.kicker}>{content.subtitle}</p>
        <p className={styles.mono} aria-hidden="true">
          {first[0]}
          <span className={styles.amp}>&amp;</span>
          {second[0]}
        </p>
        <Title className={styles.names}>
          {first} i {second}
        </Title>
        <p className={styles.date}>{numericDate(content.date).split(".").join(" · ")}</p>
        <p className={styles.place}>
          {venue.place}, {venue.address}
        </p>
      </div>
    </header>
  );
}
