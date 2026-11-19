import type { InvitationContent } from "@/invitations/types";

const content: InvitationContent = {
  slug: "rodjendan-dino",
  category: "Rođendan",
  templateName: "Dino",
  description: "Akvarel dinosaurusi, lišće džungle i šarene zastavice, za dečji rođendan u dino fazonu.",
  names: "Luka",
  subtitle: "Lukin drugi rođendan",
  age: 2,
  date: "2027-05-15T17:00:00+02:00",
  end: "2027-05-15T20:00:00+02:00",
  intro: "Dino avantura počinje! Jelena i Nikola vas pozivaju da zajedno proslavimo Lukin drugi rođendan, uz tortu, igru i mnogo rikanja.",
  eventsTitle: "Gde i kada",
  events: [
    { icon: "balon", title: "Dino žurka", time: "17:00h", place: "Igraonica Džungla", address: "Novi Beograd" },
    { icon: "torta", title: "Torta i pesma", time: "18:30h", place: "Igraonica Džungla", address: "Novi Beograd" },
  ],
  notes: ["Parking je besplatan"],
  rsvpNote: "Molimo vas da dolazak potvrdite do 5. maja pozivom ili porukom:",
  rsvpContacts: [
    { name: "Mama Jelena", phone: "064 135 2468" },
    { name: "Tata Nikola", phone: "065 246 1357" },
  ],
  countdownTitle: "Odbrojavamo!",
  countdownText: "Do Lukine dino žurke je ostalo još",
  closing: "Jedva čekamo da zajedno rikamo, slavimo i jedemo tortu!",
  signature: "Luka, mama Jelena i tata Nikola",
};

export default content;
