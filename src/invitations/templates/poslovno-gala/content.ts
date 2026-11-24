import type { InvitationContent } from "@/invitations/types";

const content: InvitationContent = {
  slug: "poslovno-gala",
  category: "Poslovno",
  templateName: "Gala",
  description: "Teget i zlato, tanak okvir i rukopisni naslov: elegantna pozivnica za gala večeri i poslovne forume.",
  names: "Gala veče",
  subtitle: "Aurora Group",
  date: "2027-10-15T19:30:00+02:00",
  end: "2027-10-16T00:30:00+02:00",
  intro: "Sa zadovoljstvom vas pozivamo na veče u čast partnera, saradnika i svega što smo zajedno izgradili.",
  eventsTitle: "Program večeri",
  events: [
    { icon: "", title: "Doček i koktel dobrodošlice", time: "19:30", place: "Hotel Aurora", address: "Bulevar umetnosti 12, Beograd" },
    { icon: "", title: "Svečana večera", time: "20:30", place: "Hotel Aurora", address: "Bulevar umetnosti 12, Beograd" },
    { icon: "", title: "Dodela godišnjih priznanja", time: "21:30", place: "Hotel Aurora", address: "Bulevar umetnosti 12, Beograd" },
    { icon: "kraj", title: "Muzika i ples", time: "22:30", place: "Hotel Aurora", address: "Bulevar umetnosti 12, Beograd" },
  ],
  notes: ["Dress code: black tie", "Ulaz uz ličnu pozivnicu"],
  rsvpNote: "Molimo vas da dolazak potvrdite do 1. oktobra 2027. pozivom ili porukom:",
  rsvpContacts: [
    { name: "Ana Stojanović", phone: "064 321 7654" },
    { name: "Nikola Jovanović", phone: "063 555 0202" },
  ],
  countdownTitle: "Odbrojavamo!",
  countdownText: "Do gala večeri je ostalo još",
  closing: "Radujemo se večeri u vašem društvu.",
  signature: "Aurora Group",
};

export default content;
