import { dateParts, longDate, monthName, timeOf } from "@/invitations/date";
import type { InvitationContent } from "@/invitations/types";
import { Corner, Wreath } from "./art";
import demoContent from "./content";
import styles from "./template.module.css";

/** The couple's initials inside the laurel wreath. Also used, smaller, above the closing message. */
export function Seal({ names, className = "" }: { names: string; className?: string }) {
  const [first, second] = names.split(" & ");
  return (
    <div className={`${styles.seal} ${className}`} aria-hidden="true">
      <Wreath className={styles.wreath} />
      <p className={styles.mono}>
        {first?.[0]}
        {second && (
          <>
            <span className={styles.amp}>&amp;</span>
            {second[0]}
          </>
        )}
      </p>
    </div>
  );
}

export default function Hero({ content = demoContent, compact = false }: { content?: InvitationContent; compact?: boolean }) {
  const [first, second] = content.names.split(" & ");
  const Title = compact ? "p" : "h1";
  const { year, month, day } = dateParts(content.date);
  const weekday = longDate(content.date).split(",")[0];
  const venue = content.events[0];

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <div className={styles.frame}>
        {["tl", "tr", "bl", "br"].map((corner) => (
          <Corner key={corner} className={`${styles.corner} ${styles[corner]}`} />
        ))}
        <p className={styles.kicker}>{content.subtitle}</p>
        <Seal names={content.names} />
        <Title className={styles.names}>{second ? `${first} i ${second}` : content.names}</Title>
        <div className={styles.when}>
          <p className={styles.month}>{monthName(month)}</p>
          <p className={styles.dayRow}>
            <span className={styles.side}>{weekday}</span>
            <span className={styles.day}>{day}</span>
            <span className={styles.side}>{timeOf(content.date)}</span>
          </p>
          <p className={styles.year}>{year}</p>
        </div>
        {venue && (
          <p className={styles.place}>
            {venue.place}, {venue.address}
          </p>
        )}
      </div>
    </header>
  );
}
