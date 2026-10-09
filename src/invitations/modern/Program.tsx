import { mapUrl } from "../date";
import type { InvitationEvent } from "../types";
import styles from "./modern.module.css";

export default function Program({ events }: { events: InvitationEvent[] }) {
  return (
    <ol className={styles.program}>
      {events.map((event) => (
        <li key={`${event.time}-${event.title}`} className={styles.event}>
          <span className={styles.eventTime}>{event.time.replace(/h$/, "")}</span>
          <div>
            <h3 className={styles.eventTitle}>{event.title}</h3>
            <p className={styles.eventPlace}>
              {event.place}, {event.address}
            </p>
          </div>
          <a
            className={styles.mapButton}
            href={mapUrl(`${event.place}, ${event.address}`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Mapa: ${event.place}, ${event.address}`}
          >
            Mapa <span aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ol>
  );
}
