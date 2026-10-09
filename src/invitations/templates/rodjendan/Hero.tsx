import { longDate, numericDate, timeOf } from "@/invitations/date";
import content from "./content";
import styles from "./template.module.css";

export default function Hero({ compact = false }: { compact?: boolean }) {
  const Title = compact ? "p" : "h1";
  const age = content.subtitle?.match(/\d+/)?.[0] ?? "";

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <div className={styles.top}>
        <span>Pozivnica</span>
        <span>{numericDate(content.date)}</span>
      </div>
      <Title className={styles.title}>
        <span className={styles.who}>{content.names} slavi</span>
        <span className={styles.number}>{age}</span>
        <span className={styles.word}>rođendan</span>
      </Title>
      <dl className={styles.facts}>
        <div>
          <dt>Dan</dt>
          <dd>{longDate(content.date).split(",")[0]}</dd>
        </div>
        <div>
          <dt>Vreme</dt>
          <dd>{timeOf(content.date)}h</dd>
        </div>
        <div>
          <dt>Mesto</dt>
          <dd>{content.events[0].place}</dd>
        </div>
      </dl>
    </header>
  );
}
