import type { InvitationContent } from "@/invitations/types";

const content: InvitationContent = {
  slug: "poslovno",
  category: "Poslovno",
  templateName: "Teget",
  description: "Teget, mreža i jasna hijerarhija, za gala večere i svečanosti.",
  names: "Gala večera",
  subtitle: "Aurora Tech",
  date: "2026-12-17T19:00:00+01:00",
  intro:
    "Kompanija Aurora Tech ima čast da vas pozove na svečanu gala večeru povodom uspešno završene poslovne godine.",
  eventsTitle: "Program večeri",
  events: [
    { icon: "koktel", title: "Koktel dobrodošlice", time: "19:00", place: "Lobi bar", address: "Hotel Aurora, Beograd" },
    { icon: "vecera", title: "Svečana večera", time: "20:00", place: "Kristalna sala", address: "Hotel Aurora, Beograd" },
    {
      icon: "priznanja",
      title: "Dodela godišnjih priznanja",
      time: "22:00",
      place: "Kristalna sala",
      address: "Hotel Aurora, Beograd",
    },
  ],
  rsvpNote: "Molimo vas da dolazak potvrdite do 1. decembra, pozivom ili porukom:",
  rsvpContacts: [
    { name: "Milica Jovanović", phone: "011 456 7890" },
    { name: "Stefan Petrović", phone: "064 321 0987" },
  ],
  countdownTitle: "Odbrojavanje",
  countdownText: "Do gala večeri je ostalo još",
};

/** Extra copy used only by this template's layout. */
export const gala = {
  heroPlace: "Hotel Aurora · Beograd",
  salutation: "Poštovani,",
  introClosing: "Biće nam zadovoljstvo da ovo veče provedemo u vašem društvu.",
  signOff: "S poštovanjem,",
  signature: "Aurora Tech",
  calendarTitle: "Sačuvajte datum",
  calendarLink: "Google kalendar",
  programNote: "Kodeks oblačenja",
  dressCode: "Black tie",
  rsvpTitle: "Potvrda dolaska",
  callLabel: "Pozovite",
  footerText: "Digitalne pozivnice za poslovne događaje, venčanja i sve vaše proslave.",
  footerTemplate: "Primer šablona „Teget elegancija“",
};

export default content;
