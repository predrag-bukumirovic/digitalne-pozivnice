import { numericDate, timeOf } from "@/invitations/date";
import type { InvitationContent } from "@/invitations/types";
import { Barcode, Globe, Route, Stamp } from "./art";
import demoContent from "./content";
import styles from "./template.module.css";

export default function Hero({ content = demoContent, compact = false }: { content?: InvitationContent; compact?: boolean }) {
  const Title = compact ? "p" : "h1";
  const date = `${numericDate(content.date)}.`;

  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <Route className={`${styles.route} ${styles.routeTop}`} />
      <Route className={`${styles.route} ${styles.routeBottom}`} flip />
      <div className={styles.ticket}>
        <p className={styles.ticketHead}>Karta za venčanje</p>
        <div className={styles.perf} />
        <Globe className={styles.globe} />
        <Title className={styles.names}>{content.names}</Title>
        <div className={styles.info}>
          <span className={styles.tab}>Informacije</span>
          <dl className={styles.fields}>
            <div>
              <dt>Datum leta</dt>
              <dd>{date}</dd>
            </div>
            <div>
              <dt>Klasa</dt>
              <dd>Prva klasa</dd>
            </div>
            <div className={styles.wide}>
              <dt>Odredište</dt>
              <dd>Sreća, u jednom pravcu</dd>
            </div>
          </dl>
          <Stamp className={styles.stamp} text={`${content.names} · ${date} · `.toUpperCase()} />
        </div>
        <div className={styles.perf} />
        <div className={styles.stub}>
          <p>
            <span>Ukrcavanje</span>
            <b>{timeOf(content.date)}</b>
          </p>
          <p>
            <span>Sedište</span>
            <b>Uz nas</b>
          </p>
        </div>
        <Barcode className={styles.barcode} />
      </div>
    </header>
  );
}
