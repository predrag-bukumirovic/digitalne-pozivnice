import { longDate, numericDate, timeOf } from "@/invitations/date";
import type { InvitationContent } from "@/invitations/types";
import { Grapes, Landscape } from "./art";
import demoContent from "./content";
import styles from "./template.module.css";

export default function Hero({ content = demoContent, compact = false }: { content?: InvitationContent; compact?: boolean }) {
  const [first, second] = content.names.split(" & ");
  const [day, month, year] = numericDate(content.date).split(".");
  const weekday = longDate(content.date).split(",")[0];
  const Title = compact ? "p" : "h1";
  const venue = content.events[0];

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <div className={styles.split}>
        <div className={styles.block}>
          <div className={styles.blockText}>
            <p className={styles.kicker}>{content.subtitle}</p>
            <Title className={styles.names}>
              {second ? (
                <>
                  <span>{first}</span>
                  <span>
                    <em>&amp;</em> {second}
                  </span>
                </>
              ) : (
                content.names
              )}
            </Title>
          </div>
          <Landscape className={styles.landscape} />
        </div>
        <div className={styles.side}>
          <Grapes className={styles.grapes} />
          <p className={styles.bigDate}>
            {day}.{month}.
          </p>
          <p className={styles.year}>{year}</p>
          <p className={styles.when}>
            {weekday} u {timeOf(content.date)}
          </p>
          {venue && (
            <p className={styles.place}>
              {venue.place}, {venue.address}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
