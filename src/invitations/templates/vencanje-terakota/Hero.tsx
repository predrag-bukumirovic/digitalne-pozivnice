import { numericDate } from "@/invitations/date";
import content from "./content";
import styles from "./template.module.css";

export default function Hero({ compact = false }: { compact?: boolean }) {
  const [first, second] = content.names.split(" & ");
  const [day, month, year] = numericDate(content.date).split(".");
  const Title = compact ? "p" : "h1";
  const venue = content.events[0];

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <div className={styles.split}>
        <div className={styles.block}>
          <p className={styles.kicker}>{content.subtitle}</p>
          <Title className={styles.names}>
            <span>{first}</span>
            <span>
              <em>&amp;</em> {second}
            </span>
          </Title>
        </div>
        <div className={styles.side}>
          <p className={styles.bigDate}>
            {day}.{month}.
          </p>
          <p className={styles.year}>{year}</p>
          <p className={styles.place}>
            {venue.place}, {venue.address}
          </p>
        </div>
      </div>
    </header>
  );
}
