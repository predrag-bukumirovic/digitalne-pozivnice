import { dateParts, longDate, monthName, timeOf } from "@/invitations/date";
import type { InvitationContent } from "@/invitations/types";
import { Mark, Veins } from "./art";
import demoContent from "./content";
import styles from "./template.module.css";

export default function Hero({ content = demoContent, compact = false }: { content?: InvitationContent; compact?: boolean }) {
  const Title = compact ? "p" : "h1";
  const { year, month, day } = dateParts(content.date);
  const weekday = longDate(content.date).split(",")[0];
  const venue = content.events[0];

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <Veins className={styles.veins} />
      <Veins className={`${styles.veins} ${styles.veinsRight}`} />
      <div className={styles.card}>
        <Mark className={styles.mark} />
        {content.subtitle && <p className={styles.host}>{content.subtitle}</p>}
        <p className={styles.lead}>Sa zadovoljstvom vas pozivamo na</p>
        <Title className={styles.title}>{content.names}</Title>
        <div className={styles.facts}>
          <p className={styles.day}>
            <span className={styles.weekday}>{weekday}</span>
            <span className={styles.fullDate}>
              {day}. {monthName(month)} {year}.
            </span>
          </p>
          <p className={styles.time}>{timeOf(content.date)}</p>
        </div>
        <p className={styles.venue}>{venue.place}</p>
        <p className={styles.address}>{venue.address}</p>
      </div>
    </header>
  );
}
