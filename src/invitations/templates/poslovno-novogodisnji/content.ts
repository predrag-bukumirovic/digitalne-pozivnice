import type { InvitationContent } from "@/invitations/types";

const content: InvitationContent = {
  slug: "poslovno-novogodisnji",
  category: "Poslovno",
  templateName: "Somot",
  description: "Bordo somot, šampanjac i jelova grančica: svečana pozivnica za novogodišnju proslavu firme.",
  names: "Novogodišnja proslava",
  subtitle: "Aurora Group",
  date: "2027-12-17T19:00:00+01:00",
  end: "2027-12-18T01:00:00+01:00",
  intro: "Dragi kolege, ispratimo zajedno godinu punu uspeha i dočekajmo novu uz večeru, muziku i pregršt iznenađenja.",
  eventsTitle: "Satnica",
  events: [
    { icon: "", title: "Doček gostiju i koktel", time: "19:00", place: "Hotel Aurora", address: "Beograd" },
    { icon: "", title: "Svečana večera", time: "20:00", place: "Hotel Aurora", address: "Beograd" },
    { icon: "", title: "Tim godine i nagradna igra", time: "21:30", place: "Hotel Aurora", address: "Beograd" },
    { icon: "kraj", title: "Žurka do kasno u noć", time: "23:00", place: "Hotel Aurora", address: "Beograd" },
  ],
  notes: ["Dress code: svečano, uz detalj crvene", "Parking u garaži hotela je obezbeđen"],
  rsvpNote: "Molimo vas da dolazak potvrdite do 6. decembra 2027. pozivom ili porukom:",
  rsvpContacts: [
    { name: "Jelena Marković", phone: "064 123 4567" },
    { name: "Marko Petrović", phone: "065 987 6543" },
  ],
  countdownTitle: "Odbrojavamo!",
  countdownText: "Do proslave je ostalo još",
  closing: "Hvala vam na svemu što smo zajedno postigli ove godine. Vidimo se uz šampanjac!",
  signature: "Vaša Aurora Group",
};

export default content;
