import { numericDate, timeOf } from "@/invitations/date";
import content from "./content";
import styles from "./template.module.css";

export default function Hero({ compact = false }: { compact?: boolean }) {
  const Title = compact ? "p" : "h1";
  const venue = content.events[0].address.split(",")[0];

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <div className={styles.top}>
        <span>{content.subtitle}</span>
        <span>Pozivnica</span>
      </div>
      <Title className={styles.title}>{content.names}</Title>
      <dl className={styles.facts}>
        <div>
          <dt>Datum</dt>
          <dd>{numericDate(content.date)}</dd>
        </div>
        <div>
          <dt>Vreme</dt>
          <dd>{timeOf(content.date)}</dd>
        </div>
        <div>
          <dt>Mesto</dt>
          <dd>{venue}</dd>
        </div>
      </dl>
    </header>
  );
}
