import type { InvitationContent } from "@/invitations/types";

const content: InvitationContent = {
  slug: "proslava-bebe-mesec",
  category: "Proslava bebe",
  templateName: "Mesec",
  description: "Teget noć i krupan mesec, smirena pozivnica za iščekivanje bebe.",
  names: "Ivana & Bojan",
  subtitle: "Stiže nam beba",
  date: "2027-05-09T17:00:00+02:00",
  intro: "Naša mala zvezda stiže uskoro. Pozivamo vas na popodne uz kolače i lepe želje za bebu.",
  eventsTitle: "Mesto i vreme",
  events: [
    { icon: "", title: "Druženje uz kolače", time: "17:00h", place: "Kafe Mesečina", address: "Zemun" },
    { icon: "", title: "Pogađanje imena", time: "18:30h", place: "Kafe Mesečina", address: "Zemun" },
  ],
  rsvpNote: "Molimo vas da dolazak potvrdite do 1. maja pozivom ili porukom:",
  rsvpContacts: [
    { name: "Ivana", phone: "064 321 4321" },
    { name: "Bojan", phone: "065 432 5432" },
  ],
  countdownTitle: "Odbrojavamo!",
  countdownText: "Do proslave je ostalo još",
};

export default content;
