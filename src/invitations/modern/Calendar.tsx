import { dateParts, longDate, monthName, timeOf } from "../date";
import styles from "./modern.module.css";

const WEEKDAYS = ["P", "U", "S", "Č", "P", "S", "N"];

export default function Calendar({ date }: { date: string }) {
  const { year, month, day } = dateParts(date);
  const firstWeekday = (new Date(Date.UTC(year, month - 1, 1)).getUTCDay() + 6) % 7;
  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();

  return (
    <div className={styles.calendar}>
      <p className={styles.calendarMonth}>
        {monthName(month)} {year}
      </p>
      <div className={styles.calendarGrid} aria-hidden="true">
        {WEEKDAYS.map((weekday, i) => (
          <span key={`w${i}`} className={styles.calendarWeekday}>
            {weekday}
          </span>
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => (
          <span
            key={d}
            className={d === day ? styles.calendarActive : undefined}
            style={d === 1 ? { gridColumnStart: firstWeekday + 1 } : undefined}
          >
            {d}
          </span>
        ))}
      </div>
      <p className={styles.calendarCaption}>
        {longDate(date)} u {timeOf(date)}h
      </p>
    </div>
  );
}
