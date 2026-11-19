export type InvitationEvent = {
  /** Key into the icon map the template passes to EventCards. */
  icon: string;
  title: string;
  time: string;
  place: string;
  address: string;
};

export type RsvpContact = {
  name: string;
  /** Displayed as written, e.g. "064 123 4567"; dialed without spaces. */
  phone: string;
};

export type InvitationContent = {
  slug: string;
  category: string;
  templateName: string;
  /** One sentence for the template gallery. */
  description: string;
  names: string;
  subtitle?: string;
  /** The birthday child's new age, for templates that show the number. */
  age?: number;
  /** ISO 8601 with offset, e.g. "2027-05-16T11:00:00+02:00". */
  date: string;
  /** When the celebration ends, same format. Used for the calendar entry; without it, three hours. */
  end?: string;
  intro: string;
  eventsTitle: string;
  events: InvitationEvent[];
  /** Short practical notes under the program, e.g. "Parking je besplatan". */
  notes?: string[];
  rsvpNote: string;
  rsvpContacts: RsvpContact[];
  countdownTitle: string;
  countdownText: string;
  /** Own background music for this invitation, a file under /public, e.g. "/muzika/relja.mp3". */
  music?: string;
  /** Closing message at the very bottom, signed by the hosts. */
  closing?: string;
  signature?: string;
};
