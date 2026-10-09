import type { InvitationContent } from "@/invitations/types";

const content: InvitationContent = {
  slug: "rodjendan-konfete",
  category: "Rođendan",
  templateName: "Konfete",
  description: "Vesele boje i jednostavni oblici za dečiji rođendan, bez kiča.",
  names: "Vuk",
  subtitle: "puni 5 godina",
  date: "2027-03-13T11:00:00+01:00",
  intro: "Vuk puni 5 godina i poziva te na žurku punu igre, balona i torte!",
  eventsTitle: "Gde i kada",
  events: [
    { icon: "", title: "Žurka u igraonici", time: "11:00h", place: "Igraonica Lavirint", address: "Novi Beograd" },
    { icon: "", title: "Torta i pesma", time: "12:30h", place: "Igraonica Lavirint", address: "Novi Beograd" },
  ],
  rsvpNote: "Javite nam do 6. marta da li dolazite, pozivom ili porukom:",
  rsvpContacts: [
    { name: "Mama Ivana", phone: "064 444 5566" },
    { name: "Tata Petar", phone: "063 777 1122" },
  ],
  countdownTitle: "Odbrojavamo!",
  countdownText: "Do žurke je ostalo još",
};

export default content;
