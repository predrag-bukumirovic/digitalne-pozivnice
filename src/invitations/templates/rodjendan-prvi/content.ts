import type { InvitationContent } from "@/invitations/types";

const content: InvitationContent = {
  slug: "rodjendan-prvi",
  category: "Rođendan",
  templateName: "Trake",
  description: "Šarene trake, razigrana slova i fotografija deteta umesto slova O, za prvi rođendan.",
  names: "Jovan",
  subtitle: "Jovanov prvi rođendan",
  date: "2027-02-14T12:00:00+01:00",
  intro: "Tijana i Marko vas pozivaju da zajedno proslavimo prvi rođendan našeg Jovana, uz tortu, balone i mnogo osmeha!",
  eventsTitle: "Gde i kada",
  events: [
    { icon: "", title: "Proslava", time: "12:00h", place: "Igraonica Oblačak", address: "Zvezdara, Beograd" },
    { icon: "", title: "Torta i pesma", time: "13:30h", place: "Igraonica Oblačak", address: "Zvezdara, Beograd" },
  ],
  rsvpNote: "Molimo vas da dolazak potvrdite do 1. februara pozivom ili porukom:",
  rsvpContacts: [
    { name: "Mama Tijana", phone: "064 246 8100" },
    { name: "Tata Marko", phone: "065 135 7900" },
  ],
  countdownTitle: "Odbrojavamo!",
  countdownText: "Do Jovanovog prvog rođendana je ostalo još",
};

export default content;
