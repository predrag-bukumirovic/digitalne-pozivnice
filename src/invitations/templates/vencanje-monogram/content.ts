import type { InvitationContent } from "@/invitations/types";

const content: InvitationContent = {
  slug: "vencanje-monogram",
  category: "Venčanje",
  templateName: "Monogram",
  description: "Crno-bela, sa velikim monogramom i tankim okvirom, kao luksuzna štampana pozivnica.",
  names: "Milica & Nikola",
  subtitle: "Venčanje",
  date: "2027-09-18T15:00:00+02:00",
  intro: "Uz radost i ljubav, pozivamo vas da sa nama proslavite dan kada postajemo porodica.",
  eventsTitle: "Mesto i vreme",
  events: [
    { icon: "", title: "Crkveno venčanje", time: "15:00h", place: "Saborna crkva", address: "Stari grad, Beograd" },
    { icon: "", title: "Svečana večera", time: "19:00h", place: "Vila Jorgovan", address: "Senjak, Beograd" },
  ],
  rsvpNote: "Molimo vas da dolazak potvrdite do 15. avgusta 2027. pozivom ili porukom:",
  rsvpContacts: [
    { name: "Milica", phone: "064 222 3344" },
    { name: "Nikola", phone: "063 555 6677" },
  ],
  countdownTitle: "Odbrojavamo!",
  countdownText: "Do venčanja je ostalo još",
};

export default content;
