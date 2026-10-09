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
  /** ISO 8601 with offset, e.g. "2027-05-16T11:00:00+02:00". */
  date: string;
  intro: string;
  eventsTitle: string;
  events: InvitationEvent[];
  rsvpNote: string;
  rsvpContacts: RsvpContact[];
  countdownTitle: string;
  countdownText: string;
};
