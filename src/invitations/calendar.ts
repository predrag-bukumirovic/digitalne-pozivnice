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

const THREE_HOURS = 3 * 60 * 60 * 1000;

/** End of the celebration: the given end time, or three hours after the start. */
function endOf(content: InvitationContent) {
  return content.end ?? new Date(new Date(content.date).getTime() + THREE_HOURS).toISOString();
}

const titleOf = (content: InvitationContent) => content.subtitle ?? `${content.names} · ${content.category}`;
const locationOf = (content: InvitationContent) => (content.events[0] ? `${content.events[0].place}, ${content.events[0].address}` : "");

/** Opens Google Calendar with the event filled in; the .ics file covers iPhone and everything else. */
export function googleCalendarUrl(content: InvitationContent) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: titleOf(content),
    dates: `${timestamp(content.date)}/${timestamp(endOf(content))}`,
    location: locationOf(content),
    details: content.intro,
    ctz: "Europe/Belgrade",
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

export function invitationCalendar(content: InvitationContent, generatedAt = new Date()) {
  const location = locationOf(content);
  const contacts = content.rsvpContacts.map((contact) => `\n${contact.name}: ${contact.phone}`).join("");
  const program = content.events.map((event) => `${event.time} · ${event.title} · ${event.place}, ${event.address}`).join("\n");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//JustSend//Digitalne pozivnice//SR",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${escapeText(`${content.slug}-${timestamp(content.date)}@justsend`)}`,
    `DTSTAMP:${timestamp(generatedAt.toISOString())}`,
    `DTSTART:${timestamp(content.date)}`,
    `DTEND:${timestamp(endOf(content))}`,
    `SUMMARY:${escapeText(titleOf(content))}`,
    `LOCATION:${escapeText(location)}`,
    `DESCRIPTION:${escapeText(`${content.intro}\n\n${program}\n\n${content.rsvpNote}${contacts}`)}`,
    "BEGIN:VALARM",
    "ACTION:DISPLAY",
    `DESCRIPTION:${escapeText(`Sutra: ${titleOf(content)}`)}`,
    "TRIGGER:-P1D",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].map(foldLine).join("\r\n") + "\r\n";
}
