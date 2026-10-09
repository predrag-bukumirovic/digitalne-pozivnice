import type { InvitationContent } from "@/invitations/types";

const content: InvitationContent = {
  slug: "rodjendan",
  category: "Rođendan",
  templateName: "Plakat",
  description: "Rođendanski plakat: crna pozadina, ogromne narandžaste cifre i jasni podaci.",
  names: "Marija",
  subtitle: "slavi 25. rođendan",
  date: "2027-05-22T20:00:00+02:00",
  intro: "Pozivam vas da zajedno proslavimo moj 25. rođendan uz muziku, šampanjac i dobro društvo.",
  eventsTitle: "Mesto i vreme",
  events: [
    { icon: "koktel", title: "Koktel dobrodošlice", time: "20:00h", place: "Panorama bar", address: "Novi Beograd" },
    { icon: "torta", title: "Torta i zdravica", time: "22:00h", place: "Panorama bar", address: "Novi Beograd" },
  ],
  rsvpNote: "Molim vas da dolazak potvrdite do 15. maja pozivom ili porukom:",
  rsvpContacts: [
    { name: "Marija", phone: "062 567 8901" },
    { name: "Nikola", phone: "061 678 9012" },
  ],
  countdownTitle: "Odbrojavamo!",
  countdownText: "Do žurke je ostalo još",
};

export default content;
