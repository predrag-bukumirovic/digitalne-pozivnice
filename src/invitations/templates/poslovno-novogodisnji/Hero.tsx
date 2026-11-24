import { longDate, timeOf } from "@/invitations/date";
import type { InvitationContent } from "@/invitations/types";
import { Garland, Glasses } from "./art";
import demoContent from "./content";
import styles from "./template.module.css";

export default function Hero({ content = demoContent, compact = false }: { content?: InvitationContent; compact?: boolean }) {
  const Title = compact ? "p" : "h1";
  // "Novogodišnja proslava": the first word in script, the rest in spaced capitals.
  const [first, ...rest] = content.names.split(" ");
  const venue = content.events[0];

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <div className={styles.content}>
        {content.subtitle && <p className={styles.host}>{content.subtitle}</p>}
        <Title className={styles.title}>
          <span className={styles.titleScript}>{first}</span>
          {rest.length > 0 && <span className={styles.titleCaps}> {rest.join(" ")}</span>}
        </Title>
        <Glasses className={styles.glasses} />
        <p className={styles.date}>{longDate(content.date)}</p>
        <p className={styles.place}>
          {timeOf(content.date)} · {venue.place}, {venue.address.split(",").at(-1)?.trim()}
        </p>
      </div>
      <Garland className={styles.garland} tileClassName={styles.tile} />
    </header>
  );
}
