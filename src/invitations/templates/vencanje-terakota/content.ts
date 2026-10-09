import type { InvitationContent } from "@/invitations/types";

const content: InvitationContent = {
  slug: "vencanje-terakota",
  category: "Venčanje",
  templateName: "Terakota",
  description: "Topla terakota i elegantan kurziv, za venčanje u prirodi ili vinogradu.",
  names: "Jelena & Stefan",
  subtitle: "Venčanje",
  date: "2027-08-28T18:00:00+02:00",
  intro: "Sa ljubavlju vas pozivamo na naše venčanje pod vedrim nebom, u vinogradima Fruške gore.",
  eventsTitle: "Mesto i vreme",
  events: [
    { icon: "", title: "Venčanje u vrtu", time: "18:00h", place: "Imanje Hrast", address: "Fruška gora" },
    { icon: "", title: "Večera i igranka", time: "20:00h", place: "Imanje Hrast", address: "Fruška gora" },
  ],
  rsvpNote: "Molimo vas da dolazak potvrdite do 1. avgusta 2027. pozivom ili porukom:",
  rsvpContacts: [
    { name: "Jelena", phone: "064 101 2020" },
    { name: "Stefan", phone: "062 303 4040" },
  ],
  countdownTitle: "Odbrojavamo!",
  countdownText: "Do našeg venčanja je ostalo još",
};

export default content;
