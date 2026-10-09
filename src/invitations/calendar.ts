import type { InvitationContent } from "./types";

const escapeText = (value: string) => value.replace(/\\/g, "\\\\").replace(/\r\n|\r|\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
const timestamp = (date: string) => new Date(date).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

/** Fold UTF-8 content lines at 75 octets so names with Serbian accents stay intact. */
function foldLine(line: string) {
  const lines: string[] = [];
  let current = "";
  let size = 0;
  for (const character of line) {
    const length = new TextEncoder().encode(character).length;
    if (size + length > 75) {
      lines.push(current);
      current = " ";
      size = 1;
    }
    current += character;
    size += length;
  }
  lines.push(current);
  return lines.join("\r\n");
}

export function invitationCalendar(content: InvitationContent, generatedAt = new Date()) {
  const firstEvent = content.events[0];
  const location = firstEvent ? `${firstEvent.place}, ${firstEvent.address}` : "";
  const program = content.events.map((event) => `${event.time} · ${event.title} · ${event.place}, ${event.address}`).join("\n");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Lumiere//Digitalne pozivnice//SR",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${escapeText(`${content.slug}-${timestamp(content.date)}@lumiere-invitations`)}`,
    `DTSTAMP:${timestamp(generatedAt.toISOString())}`,
    `DTSTART:${timestamp(content.date)}`,
    `SUMMARY:${escapeText(`${content.names} · ${content.category}`)}`,
    `LOCATION:${escapeText(location)}`,
    `DESCRIPTION:${escapeText(`${content.intro}\n\n${program}\n\n${content.rsvpNote}`)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].map(foldLine).join("\r\n") + "\r\n";
}
