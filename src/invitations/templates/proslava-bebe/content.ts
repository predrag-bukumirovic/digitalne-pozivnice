import type { InvitationContent } from "@/invitations/types";

const content: InvitationContent = {
  slug: "proslava-bebe",
  category: "Proslava bebe",
  templateName: "Pastel",
  description: "Meki pastelni krugovi i zaobljena slova, vedro i nežno.",
  names: "Jelena & Marko",
  subtitle: "Stiže nam beba",
  date: "2027-04-18T16:00:00+02:00",
  intro: "Uskoro nas je troje! Pozivamo vas da uz kolače, igre i osmehe zajedno proslavimo iščekivanje naše bebe.",
  eventsTitle: "Mesto i vreme",
  events: [
    { icon: "proslava", title: "Proslava", time: "16:00h", place: "Kafe Mala kuća", address: "Vračar, Beograd" },
    { icon: "pokloni", title: "Otvaranje poklona", time: "18:30h", place: "Kafe Mala kuća", address: "Vračar, Beograd" },
  ],
  rsvpNote: "Molimo vas da dolazak potvrdite do 10. aprila pozivom ili porukom:",
  rsvpContacts: [
    { name: "Jelena", phone: "064 789 0123" },
    { name: "Marko", phone: "065 890 1234" },
  ],
  countdownTitle: "Odbrojavamo!",
  countdownText: "Do proslave je ostalo još",
};

export default content;
