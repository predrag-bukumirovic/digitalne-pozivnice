const MONTHS = [
  "Januar",
  "Februar",
  "Mart",
  "April",
  "Maj",
  "Jun",
  "Jul",
  "Avgust",
  "Septembar",
  "Oktobar",
  "Novembar",
  "Decembar",
];

const MONTHS_GENITIVE = [
  "januara",
  "februara",
  "marta",
  "aprila",
  "maja",
  "juna",
  "jula",
  "avgusta",
  "septembra",
  "oktobra",
  "novembra",
  "decembra",
];

const WEEKDAYS = ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"];

/** Calendar parts read straight from the ISO string, so they never shift with the viewer's time zone. */
export function dateParts(iso: string) {
  const [year, month, day] = iso.slice(0, 10).split("-").map(Number);
  return { year, month, day };
}

export function monthName(month: number) {
  return MONTHS[month - 1];
}

/** ["16", "05", "27"] for the "16 | 05 | 27" hero date. */
export function shortDateParts(iso: string) {
  const { year, month, day } = dateParts(iso);
  return [String(day).padStart(2, "0"), String(month).padStart(2, "0"), String(year).slice(2)];
}

/** "Nedelja, 16. maja 2027." */
export function longDate(iso: string) {
  const { year, month, day } = dateParts(iso);
  const weekday = WEEKDAYS[new Date(Date.UTC(year, month - 1, day)).getUTCDay()];
  return `${weekday}, ${day}. ${MONTHS_GENITIVE[month - 1]} ${year}.`;
}

/** "12.06.2027" */
export function numericDate(iso: string) {
  const { year, month, day } = dateParts(iso);
  return `${String(day).padStart(2, "0")}.${String(month).padStart(2, "0")}.${year}`;
}

export function timeOf(iso: string) {
  return iso.slice(11, 16);
}

export function dayWord(count: number) {
  return count % 10 === 1 && count % 100 !== 11 ? "dan" : "dana";
}

/** Calendar days in the event's time zone, independent of the guest's location. */
export function daysUntil(iso: string, now = new Date(), timeZone = "Europe/Belgrade") {
  const { year, month, day } = dateParts(iso);
  const parts = new Intl.DateTimeFormat("en", {
    timeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(now);
  const value = (type: string) => Number(parts.find((part) => part.type === type)?.value);
  const today = Date.UTC(value("year"), value("month") - 1, value("day"));
  return Math.round((Date.UTC(year, month - 1, day) - today) / 86_400_000);
}

export function mapUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
