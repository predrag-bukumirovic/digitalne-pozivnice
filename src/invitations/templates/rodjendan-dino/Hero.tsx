import { longDate, timeOf } from "@/invitations/date";
import type { InvitationContent } from "@/invitations/types";
import { Confetti, Garland, Plates, Scene } from "./art";
import demoContent from "./content";
import styles from "./template.module.css";

const LETTER_COLORS = ["#5a9e3c", "#f08c3e", "#3fa69a", "#e5a92e"];

/** "17:00" → "17h", "17:30" → "17:30h" */
function hours(iso: string) {
  const time = timeOf(iso);
  return time.endsWith(":00") ? `${Number(time.slice(0, 2))}h` : `${time}h`;
}

export default function Hero({
  content = demoContent,
  compact = false,
}: {
  content?: InvitationContent;
  compact?: boolean;
}) {
  const Title = compact ? "p" : "h1";
  const venue = content.events[0];
  const letters = [...content.names.toUpperCase()];
  // Long names get smaller so they always fit on one line.
  const nameSize = Math.min(0.21, 0.86 / (0.66 * letters.length));

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <div className={styles.garland} aria-hidden="true">
        <Garland className={styles.tile} flip />
        <Garland className={styles.tile} />
        <Garland className={styles.tile} flip />
      </div>
      <Confetti
        className={styles.confetti}
        dot={styles.dot}
        wide={styles.wide}
      />

      <div className={styles.content}>
        <p className={styles.banner}>Dino žurka!</p>
        <p
          className={styles.name}
          style={{ fontSize: `calc(var(--w) * ${nameSize.toFixed(3)})` }}
          role="img"
          aria-label={content.names}
        >
          {letters.map((letter, i) => (
            <span
              key={i}
              style={{ color: LETTER_COLORS[i % LETTER_COLORS.length] }}
            >
              {letter}
            </span>
          ))}
        </p>
        {content.age !== undefined && (
          <p className={styles.age}>
            puni{" "}
            <span className={styles.balloon}>
              {/* The plates are traced on the top of a 2 or a 3; other digits stay smooth. */}
              {[2, 3].includes(content.age) && (
                <Plates className={styles.plates} />
              )}
              <span className={styles.number}>{content.age}</span>
            </span>
            !
          </p>
        )}
        <p className={styles.lead}>Pozivamo vas da proslavimo</p>
        <Title className={styles.who}>{content.subtitle}</Title>
        <p className={styles.when}>
          {longDate(content.date)} | {hours(content.date)}
        </p>
        <p className={styles.venue}>
          {venue.place}, {venue.address}
        </p>
      </div>

      <Scene />
    </header>
  );
}
