import type { InvitationContent } from "@/invitations/types";

const place = "Restoran Džo";
const address = "Batajnica";

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
      place,
      address,
    },
    {
      icon: "",
      title: "Torta i rođendanska pesma",
      time: "19:30h",
      place,
      address,
    },
  ],
  rsvpNote:
    "Molimo vas da dolazak potvrdite do 25. decembra 2026. pozivom ili porukom:",
  rsvpContacts: [
    { name: "Tata Marko", phone: "063 165 4394" },
    { name: "Mama Tijana", phone: "063 1538 058" },
  ],
  countdownTitle: "Odbrojavamo!",
  countdownText: "Do Jocinog prvog rođendana je ostalo još",
};

export default content;
