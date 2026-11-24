import { longDate, numericDate, timeOf } from "@/invitations/date";
import type { InvitationContent } from "@/invitations/types";
import { Branch, Cross } from "./art";
import demoContent from "./content";
import styles from "./template.module.css";

export default function Hero({ content = demoContent, compact = false }: { content?: InvitationContent; compact?: boolean }) {
  const Title = compact ? "p" : "h1";
  const venue = content.events[0];

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <span className={styles.disc} aria-hidden="true" />
      <Branch className={styles.branch} />
      <p className={styles.date}>{numericDate(content.date)}</p>
      <div className={styles.bottom}>
        <Cross className={styles.cross} />
        <p className={styles.kicker}>{content.subtitle}</p>
        <Title className={styles.name}>{content.names}</Title>
        <div className={styles.facts}>
          <p>
            {longDate(content.date)} u {timeOf(content.date)}
          </p>
          {venue && (
            <p>
              {venue.place}, {venue.address}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
