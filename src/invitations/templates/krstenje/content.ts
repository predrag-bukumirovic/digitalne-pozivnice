import type { InvitationContent } from "@/invitations/types";

const content: InvitationContent = {
  slug: "krstenje",
  category: "Krštenje",
  templateName: "Nebo",
  description: "Svetloplava i prozračna, sa tankim krstom i mnogo prostora oko imena.",
  names: "Luka",
  subtitle: "Sveto krštenje",
  date: "2027-05-16T11:00:00+02:00",
  intro: "Sa radošću vas pozivamo da budete uz nas na krštenju našeg sina Luke.",
  eventsTitle: "Mesto i vreme",
  events: [
    { icon: "crkva", title: "Krštenje", time: "11:00h", place: "Crkva Svetog Marka", address: "Tašmajdan, Beograd" },
    { icon: "rucak", title: "Svečani ručak", time: "13:00h", place: "Vila Lipa", address: "Dedinje, Beograd" },
  ],
  rsvpNote: "Molimo vas da dolazak potvrdite do 1. maja 2027. pozivom ili porukom:",
  rsvpContacts: [
    { name: "Milica", phone: "063 345 6789" },
    { name: "Stefan", phone: "064 456 7890" },
  ],
  countdownTitle: "Odbrojavamo!",
  countdownText: "Do krštenja je ostalo još",
};

export default content;
