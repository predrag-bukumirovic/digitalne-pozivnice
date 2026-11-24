import type { InvitationContent } from "@/invitations/types";

const content: InvitationContent = {
  slug: "vencanje-let",
  category: "Venčanje",
  templateName: "Let",
  description: "Avionska karta u teget i beloj, sa globusom, pečatom i bar-kodom: pozivnica za let ka zajedničkom životu.",
  names: "Mina & Luka",
  subtitle: "Venčanje",
  date: "2027-06-12T15:00:00+02:00",
  end: "2027-06-13T01:00:00+02:00",
  intro: "Dragi prijatelji i porodico, naš najvažniji let polazi uskoro i želimo da baš vi budete sa nama u njemu.",
  eventsTitle: "Plan leta",
  events: [
    { icon: "", title: "Crkveno venčanje", time: "15:00", place: "Crkva Svetog Đorđa", address: "Beograd" },
    { icon: "", title: "Doček gostiju", time: "17:00", place: "Restoran Panorama", address: "Beograd" },
    { icon: "", title: "Građansko venčanje", time: "18:00", place: "Restoran Panorama", address: "Beograd" },
  ],
  notes: ["Dress code: nijanse plave i bež"],
  rsvpNote: "Molimo vas da dolazak potvrdite do 15. maja 2027. pozivom ili porukom:",
  rsvpContacts: [
    { name: "Mina", phone: "064 212 3434" },
    { name: "Luka", phone: "065 565 7878" },
  ],
  countdownTitle: "Odbrojavamo!",
  countdownText: "Do poletanja je ostalo još",
  closing: "Vežite pojaseve, ovo će biti najlepši let do sada. Vidimo se na ukrcavanju!",
  signature: "Mina & Luka",
};

export default content;
