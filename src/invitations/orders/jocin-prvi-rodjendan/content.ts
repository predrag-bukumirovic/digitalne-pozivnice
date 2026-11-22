import type { InvitationContent } from "@/invitations/types";

const content: InvitationContent = {
  slug: "jocin-prvi-rodjendan-74drq",
  category: "Rođendan",
  templateName: "Trake",
  description: "Jocin prvi rođendan",
  names: "Jovan",
  subtitle: "Jocin prvi rođendan",
  date: "2027-01-10T17:00:00+01:00",
  intro:
    "Tijana i Marko vas pozivaju da zajedno proslavimo prvi rođendan našeg Jovana!",
  eventsTitle: "Gde i kada",
  events: [
    {
      icon: "",
      title: "Proslava prvog rođendana",
      time: "17:00h",
      place: "Restoran DZO",
      address: "Batajnica",
    },
  ],
  rsvpNote:
    "Molimo vas da Tijani ili Marku potvrdite dolazak do 25. decembra 2026.",
  rsvpContacts: [],
  countdownTitle: "Odbrojavamo!",
  countdownText: "Do Jocinog prvog rođendana je ostalo još",
};

export default content;
