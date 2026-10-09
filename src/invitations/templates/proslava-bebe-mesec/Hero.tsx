import { longDate, timeOf } from "@/invitations/date";
import content from "./content";
import styles from "./template.module.css";

// [left %, top %, size in cqi]
const STARS = [
  [12, 18, 1.4],
  [82, 12, 1],
  [90, 42, 1.6],
  [8, 56, 1],
  [20, 84, 1.2],
  [76, 80, 1.4],
  [58, 24, 0.9],
];

export default function Hero({ compact = false }: { compact?: boolean }) {
  const [first, second] = content.names.split(" & ");
  const Title = compact ? "p" : "h1";

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      {STARS.map(([left, top, size]) => (
        <span
          key={`${left}-${top}`}
          className={styles.star}
          style={{ left: `${left}%`, top: `${top}%`, width: `${size}cqi` }}
          aria-hidden="true"
        />
      ))}
      <span className={styles.moon} aria-hidden="true" />
      <p className={styles.kicker}>{content.subtitle}</p>
      <Title className={styles.names}>
        {first}
        <span className={styles.amp}>&amp;</span>
        {second}
      </Title>
      <p className={styles.date}>
        {longDate(content.date)} · {timeOf(content.date)}h
      </p>
    </header>
  );
}
