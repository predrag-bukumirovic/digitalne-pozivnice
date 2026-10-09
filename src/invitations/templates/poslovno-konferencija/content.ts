import type { InvitationContent } from "@/invitations/types";

const content: InvitationContent = {
  slug: "poslovno-konferencija",
  category: "Poslovno",
  templateName: "Samit",
  description: "Bela, crna i limeta zelena: jasna i savremena pozivnica za konferencije i lansiranja.",
  names: "Digitalni samit",
  subtitle: "Nova Tech",
  date: "2027-03-04T09:00:00+01:00",
  intro: "Pozivamo vas na celodnevni samit o digitalnom poslovanju, veštačkoj inteligenciji i budućnosti rada.",
  eventsTitle: "Program",
  events: [
    { icon: "", title: "Registracija i kafa", time: "09:00", place: "Kongresni centar Aurora", address: "Beograd" },
    { icon: "", title: "Otvaranje samita", time: "10:00", place: "Velika sala", address: "Kongresni centar Aurora, Beograd" },
    { icon: "", title: "Paneli i radionice", time: "11:30", place: "Sale A i B", address: "Kongresni centar Aurora, Beograd" },
    { icon: "", title: "Koktel za učesnike", time: "17:00", place: "Terasa", address: "Kongresni centar Aurora, Beograd" },
  ],
  rsvpNote: "Molimo vas da učešće potvrdite do 20. februara 2027. pozivom ili porukom:",
  rsvpContacts: [
    { name: "Jovana Ilić", phone: "011 222 3344" },
    { name: "Marko Đurić", phone: "064 555 0101" },
  ],
  countdownTitle: "Odbrojavamo!",
  countdownText: "Do samita je ostalo još",
};

export default content;
