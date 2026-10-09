import type { InvitationContent } from "@/invitations/types";

const content: InvitationContent = {
  slug: "vencanje",
  category: "Venčanje",
  templateName: "Žalfija",
  description: "Krupna serifna slova i luk boje žalfije. Mirna, urednička pozivnica za venčanje.",
  names: "Ana & Jovan",
  subtitle: "Venčaćemo se",
  date: "2027-06-12T13:00:00+02:00",
  intro: "Sa radošću vas pozivamo da svojim prisustvom uveličate najlepši dan u našem životu.",
  eventsTitle: "Mesto i vreme",
  events: [
    { icon: "crkva", title: "Crkveno venčanje", time: "13:00h", place: "Hram Svetog Save", address: "Vračar, Beograd" },
    { icon: "prstenje", title: "Građansko venčanje", time: "17:00h", place: "Vila Dunav", address: "Zemun, Beograd" },
    { icon: "vecera", title: "Svečana večera", time: "18:00h", place: "Vila Dunav", address: "Zemun, Beograd" },
  ],
  rsvpNote: "Molimo vas da nam dolazak potvrdite najkasnije do 15. maja 2027. pozivom ili porukom:",
  rsvpContacts: [
    { name: "Ana", phone: "064 123 4567" },
    { name: "Jovan", phone: "065 234 5678" },
  ],
  countdownTitle: "Odbrojavamo!",
  countdownText: "Do našeg venčanja je ostalo još",
};

export default content;
