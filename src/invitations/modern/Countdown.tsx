"use client";

import { useSyncExternalStore } from "react";
import styles from "./modern.module.css";

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 1000);
  return () => clearInterval(id);
}

/** Serbian noun form for a count: [1, 2–4, 5+], e.g. ["sat", "sata", "sati"]. */
function plural(n: number, [one, few, many]: [string, string, string]) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

export default function Countdown({ date }: { date: string }) {
  const seconds = useSyncExternalStore(
    subscribe,
    () => Math.floor((new Date(date).getTime() - Date.now()) / 1000),
    () => null,
  );

  if (seconds !== null && seconds <= 0) {
    return <p className={styles.countdownDone}>Proslava je počela!</p>;
  }

  const units =
    seconds === null
      ? null
      : [
          { value: Math.floor(seconds / 86400), forms: ["dan", "dana", "dana"] as [string, string, string] },
          { value: Math.floor((seconds % 86400) / 3600), forms: ["sat", "sata", "sati"] as [string, string, string] },
          { value: Math.floor((seconds % 3600) / 60), forms: ["minut", "minuta", "minuta"] as [string, string, string] },
          { value: seconds % 60, forms: ["sekunda", "sekunde", "sekundi"] as [string, string, string] },
        ];

  return (
    <div className={styles.countdown} role="timer" aria-live="off">
      {(units ?? [0, 1, 2, 3].map(() => null)).map((unit, i) => (
        <div key={i} className={styles.countdownUnit}>
          <span className={styles.countdownNumber}>{unit ? String(unit.value).padStart(2, "0") : "––"}</span>
          <span className={styles.countdownLabel}>{unit ? plural(unit.value, unit.forms) : " "}</span>
        </div>
      ))}
    </div>
  );
}
