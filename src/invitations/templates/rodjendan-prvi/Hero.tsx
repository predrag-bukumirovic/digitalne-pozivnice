import Image, { type StaticImageData } from "next/image";
import { numericDate, timeOf } from "@/invitations/date";
import type { InvitationContent } from "@/invitations/types";
import { Brush, Decorations, Panel, PartyHat, Squiggle } from "./art";
import demoContent from "./content";
import styles from "./template.module.css";

const LETTER_COLORS = ["#1f9d55", "#f6c026", "#2f6fe4", "#e03a3e", "#8b4fd8", "#f2792b"];

/** "17:00" → "17h", "17:30" → "17:30h" */
function hours(iso: string) {
  const time = timeOf(iso);
  return time.endsWith(":00") ? `${Number(time.slice(0, 2))}h` : `${time}h`;
}

export default function Hero({
  content = demoContent,
  photo,
  compact = false,
}: {
  content?: InvitationContent;
  /** The child's photo replaces the first "O" of the name (or stands before it). Without it, a placeholder. */
  photo?: StaticImageData;
  compact?: boolean;
}) {
  const Title = compact ? "p" : "h1";
  const venue = content.events[0];
  const name = [...content.names.toUpperCase()];
  const photoAt = Math.max(name.indexOf("O"), 0);
  const withPhoto = name.indexOf("O") >= 0 ? name : ["", ...name];
  // Shrink the name row for longer names so it always fits the panel.
  const nameSize = Math.min(0.3, 0.78 / (0.68 * (withPhoto.length - 1) + 1.35));

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <div className={styles.panel}>
        <Panel className={styles.panelShape} />
        <div className={styles.content}>
          <p className={styles.fun}>Žurka!</p>
          <p
            className={styles.name}
            style={{ fontSize: `calc(var(--p) * ${nameSize.toFixed(3)})` }}
            role="img"
            aria-label={content.names}
          >
            {withPhoto.map((letter, i) =>
              i === photoAt ? (
                <span key={i} className={styles.photo}>
                  {photo ? (
                    <Image src={photo} alt="" fill sizes="(max-width: 600px) 45vw, 240px" className={styles.photoImg} priority={!compact} />
                  ) : (
                    <span className={styles.placeholder}>
                      <PartyHat className={styles.hat} />
                      <span className={styles.face}>Vaša fotografija</span>
                    </span>
                  )}
                </span>
              ) : (
                <span key={i} className={styles.letter} style={{ color: LETTER_COLORS[i % LETTER_COLORS.length] }}>
                  {letter}
                </span>
              ),
            )}
          </p>
          <p className={styles.toBe}>
            <Brush className={styles.brush} />
            puni 1!
          </p>
          <Squiggle className={styles.squiggle} />
          <p className={styles.lead}>Pozivamo vas na</p>
          <Title className={styles.who}>{content.subtitle}</Title>
          <p className={styles.date}>{numericDate(content.date)}. godine</p>
          <p className={styles.venue}>
            {venue.place} {venue.address.split(",")[0]}
          </p>
          <p className={styles.time}>sa početkom u {hours(content.date)}</p>
        </div>
      </div>
      <Decorations className={styles.decor} />
    </header>
  );
}
