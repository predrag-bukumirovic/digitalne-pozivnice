import type { InvitationContent } from "@/invitations/types";

// Porudžbina: Reljin drugi rođendan, šablon Dino. Roditelji: Milica i Predrag.
const place = "Igraonica Infinity Kids Dorćol";
const address = "Dunavski kej 19, Beograd";

const content: InvitationContent = {
  slug: "reljin-rodjendan",
  category: "Rođendan",
  templateName: "Dino",
  description: "Reljin rođendan",
  names: "Relja",
  subtitle: "Reljin drugi rođendan",
  age: 2,
  date: "2026-12-26T10:00:00+01:00",
  end: "2026-12-26T13:00:00+01:00",
  intro:
    "Dino avantura počinje! Pozivamo vas da nam se pridružite u svetu dinosaurusa, gde nas čekaju igra, smeh i mnogo nezaboravnih trenutaka. Radujemo se da ovaj poseban dan proslavimo zajedno sa vama!",
  eventsTitle: "Program proslave",
  events: [
    { icon: "balon", title: "Dolazak gostiju", time: "10:00h", place, address },
    {
      icon: "torta",
      title: "Torta i rođendanska pesma",
      time: "11:00h",
      place,
      address,
    },
    {
      icon: "kraj",
      title: "Završetak proslave",
      time: "13:00h",
      place,
      address,
    },
  ],
  notes: ["Parking je besplatan"],
  rsvpNote:
    "Molimo vas da dolazak potvrdite do 14. decembra 2026. pozivom ili porukom:",
  rsvpContacts: [
    { name: "Tata Predrag", phone: "065 628 7390" },
    { name: "Mama Milica", phone: "066 937 0071" },
  ],
  countdownTitle: "Odbrojavamo!",
  countdownText: "Do Reljine dino žurke je ostalo još",
  music: "/muzika/mali-paradajz.m4a",
  closing: "Jedva čekamo da zajedno rikamo, slavimo i jedemo tortu!",
  signature: "Relja sa mamom, tatom i batom",
};

export default content;
