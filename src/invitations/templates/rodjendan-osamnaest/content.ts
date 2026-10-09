import type { InvitationContent } from "@/invitations/types";

const content: InvitationContent = {
  slug: "rodjendan-osamnaest",
  category: "Rođendan",
  templateName: "Osamnaest",
  description: "Ljubičasta noć i ogromni obrisi brojeva, za punoletstvo koje se pamti.",
  names: "Ana",
  subtitle: "Punoletstvo",
  date: "2027-07-10T21:00:00+02:00",
  intro: "Punoletna sam! Pozivam vas na proslavu mog 18. rođendana. Ponesite dobro raspoloženje, ostalo je na meni.",
  eventsTitle: "Gde i kada",
  events: [
    { icon: "", title: "Proslava", time: "21:00h", place: "Klub Hangar", address: "Dorćol, Beograd" },
    { icon: "", title: "Torta u ponoć", time: "00:00h", place: "Klub Hangar", address: "Dorćol, Beograd" },
  ],
  rsvpNote: "Molim vas da dolazak potvrdite do 1. jula pozivom ili porukom:",
  rsvpContacts: [
    { name: "Ana", phone: "061 234 5678" },
    { name: "Teodora", phone: "062 987 6543" },
  ],
  countdownTitle: "Odbrojavamo!",
  countdownText: "Do žurke je ostalo još",
};

export default content;
