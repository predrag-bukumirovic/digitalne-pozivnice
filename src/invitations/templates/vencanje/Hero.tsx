import { longDate, numericDate, timeOf } from "@/invitations/date";
import type { InvitationContent } from "@/invitations/types";
import { Sprig } from "./art";
import demoContent from "./content";
import styles from "./template.module.css";

export default function Hero({ content = demoContent, compact = false }: { content?: InvitationContent; compact?: boolean }) {
  const [first, second] = content.names.split(" & ");
  const Title = compact ? "p" : "h1";
  const venue = content.events[0];

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <div className={styles.top}>
        <span>{content.subtitle}</span>
        <span>{numericDate(content.date)}</span>
      </div>
      <div className={styles.arch}>
        <Sprig className={`${styles.sprig} ${styles.sprigLeft}`} />
        <Sprig className={`${styles.sprig} ${styles.sprigRight}`} />
        <div className={styles.archInner}>
          <Title className={styles.names}>
            {second ? (
              <>
                <span>{first}</span>
                <span className={styles.amp}>&amp;</span>
                <span>{second}</span>
              </>
            ) : (
              content.names
            )}
          </Title>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.meta}>
            {longDate(content.date)}
            <br />
            {timeOf(content.date)} · {venue?.place}
          </p>
        </div>
      </div>
    </header>
  );
}
