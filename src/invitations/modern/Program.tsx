import type { ReactNode } from "react";
import { mapUrl } from "../date";
import type { InvitationEvent } from "../types";
import styles from "./modern.module.css";

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;

/** Small line icons for the timeline, picked by the event's `icon` key. Unknown keys get a dot. */
const ICONS: Record<string, ReactNode> = {
  balon: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12 3c3.2 0 5.5 2.5 5.5 5.6 0 3.4-2.6 6.4-5.5 6.4s-5.5-3-5.5-6.4C6.5 5.5 8.8 3 12 3Z" />
      <path d="m12 15-1 1.6h2L12 15Zm0 1.6c0 2.1 1.6 2.3 1.6 4.4" />
    </svg>
  ),
  torta: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M4 20.5h16M5.5 20.5V13h13v7.5M5.5 16.2c1.1 0 1.1 1 2.2 1s1.1-1 2.2-1 1.1 1 2.1 1 1.1-1 2.2-1 1.1 1 2.2 1 1-1 2.1-1" />
      <path d="M12 13V9.5M12 7c.9-.9.9-1.9 0-3-.9 1.1-.9 2.1 0 3Z" />
    </svg>
  ),
  kraj: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="m12 3.5 2.3 5 5.4.6-4 3.7 1.1 5.4L12 15.5l-4.8 2.7 1.1-5.4-4-3.7 5.4-.6Z" />
    </svg>
  ),
};

function Notes({ notes }: { notes: string[] }) {
  return (
    <ul className={styles.notes}>
      {notes.map((note) => (
        <li key={note}>{note}</li>
      ))}
    </ul>
  );
}

/**
 * The day's program. When everything happens in one place, the place is shown once (with the
 * notes and a single map button) next to a timeline of times; otherwise each stop gets its own row.
 */
export default function Program({ events, notes = [] }: { events: InvitationEvent[]; notes?: string[] }) {
  const first = events[0];
  const onePlace = first && events.every((event) => event.place === first.place && event.address === first.address);

  if (!onePlace) {
    return (
      <>
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
        {notes.length > 0 && <Notes notes={notes} />}
      </>
    );
  }

  const where = `${first.place}, ${first.address}`;
  return (
    <div className={styles.agenda}>
      <ol className={styles.timeline}>
        {events.map((event) => (
          <li key={`${event.time}-${event.title}`} className={styles.step}>
            <span className={styles.stepTime}>{event.time.replace(/h$/, "")}</span>
            <span className={styles.stepMark} aria-hidden="true">
              {ICONS[event.icon] ?? <span className={styles.stepDot} />}
            </span>
            <h3 className={styles.stepTitle}>{event.title}</h3>
          </li>
        ))}
      </ol>

      <div className={styles.placeCard}>
        <p className={styles.placeLabel}>Mesto proslave</p>
        <p className={styles.placeName}>{first.place}</p>
        <p className={styles.placeAddress}>{first.address}</p>
        {notes.length > 0 && (
          <ul className={styles.placeNotes}>
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        )}
        <a className={styles.placeMap} href={mapUrl(where)} target="_blank" rel="noopener noreferrer" aria-label={`Otvori mapu: ${where}`}>
          Otvori mapu <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
