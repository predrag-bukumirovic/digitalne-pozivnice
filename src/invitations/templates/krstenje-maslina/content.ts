import type { InvitationContent } from "@/invitations/types";

const content: InvitationContent = {
  slug: "krstenje-maslina",
  category: "Krštenje",
  templateName: "Maslina",
  description: "Maslinasto zelena i krupna slova, mirna i savremena pozivnica za krštenje devojčice.",
  names: "Sofija",
  subtitle: "Sveto krštenje",
  date: "2027-06-27T10:00:00+02:00",
  intro: "Sa radošću vas pozivamo da zajedno sa nama proslavite krštenje naše ćerke Sofije.",
  eventsTitle: "Mesto i vreme",
  events: [
    { icon: "", title: "Krštenje", time: "10:00h", place: "Crkva Svetog Nikole", address: "Zemun" },
    { icon: "", title: "Svečani ručak", time: "12:30h", place: "Kuća Maslina", address: "Zemun" },
  ],
  rsvpNote: "Molimo vas da dolazak potvrdite do 15. juna 2027. pozivom ili porukom:",
  rsvpContacts: [
    { name: "Tamara", phone: "064 777 8899" },
    { name: "Vladimir", phone: "065 111 2233" },
  ],
  countdownTitle: "Odbrojavamo!",
  countdownText: "Do krštenja je ostalo još",
};

export default content;
