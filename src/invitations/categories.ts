export type Category = {
  slug: string;
  label: string;
  /** Ends "primer digitalne pozivnice …", e.g. "za venčanje". */
  phrase: string;
  /** Landing page /sabloni/<slug>: what people type into Google, in our own words. */
  page: {
    title: string;
    description: string;
    heading: string;
    lead: string;
    textHeading: string;
    text: string[];
    faqHeading: string;
    faqs: { q: string; a: string }[];
  };
};

export const categories: Category[] = [
  {
    slug: "vencanje",
    label: "Venčanje",
    phrase: "za venčanje",
    page: {
      title: "Digitalne pozivnice za venčanje i svadbu",
      description:
        "Elegantne digitalne pozivnice za venčanje: satnica, crkva, matičar i restoran sa mapom, odbrojavanje i potvrda dolaska. Šaljete jednim linkom, od 3.990 RSD.",
      heading: "Digitalne pozivnice za venčanje",
      lead: "Pozivnica za venčanje koju gosti otvaraju jednim dodirom: satnica dana, sve lokacije sa mapom, odbrojavanje i brojevi za potvrdu dolaska.",
      textHeading: "Pozivnica za venčanje, bez štampe i čekanja",
      text: [
        "Digitalna pozivnica za venčanje izgleda kao luksuzna štampana pozivnica, a stiže do gostiju za nekoliko sekundi. Link šaljete preko Vibera, WhatsAppa, SMS-a ili e-maila, a gosti ga otvaraju na telefonu, bez aplikacije i prijave.",
        "Na jednoj stranici su imena mladenaca, datum, satnica venčanja i adrese crkve, matičara i restorana. Svaka lokacija ima dugme za mapu, pa niko ne luta. Gosti venčanje dodaju u kalendar telefona jednim dodirom, a dolazak potvrđuju pozivom ili porukom.",
        "Ako se nešto promeni, poput vremena ili sale, ispravku unosimo na istom linku i svi gosti odmah vide tačne podatke. Kod štampane pozivnice to nije moguće.",
      ],
      faqHeading: "Pitanja o pozivnicama za venčanje",
      faqs: [
        {
          q: "Da li je digitalna pozivnica za venčanje u redu i za starije goste?",
          a: "Jeste. Pozivnica se otvara kao obična stranica na telefonu, bez instaliranja i prijave. Gostima koji ne koriste Viber ili WhatsApp link možete poslati SMS-om.",
        },
        {
          q: "Mogu li na pozivnici da budu i crkva, matičar i restoran?",
          a: "Mogu. Svaka lokacija dobija svoje vreme, adresu i dugme za mapu, pa gosti znaju gde idu u svakom delu dana.",
        },
        {
          q: "Koliko ranije treba poslati pozivnicu za venčanje?",
          a: "Najčešće dva do tri meseca pre venčanja. Pozivnicu po šablonu pravimo za 24 sata, pa je možete poslati čim znate datum i lokacije.",
        },
      ],
    },
  },
  {
    slug: "krstenje",
    label: "Krštenje",
    phrase: "za krštenje",
    page: {
      title: "Pozivnice za krštenje",
      description:
        "Digitalne pozivnice za krštenje deteta: vreme i crkva, mesto proslave sa mapom i potvrda dolaska. Pošaljite ih kumovima i gostima jednim linkom.",
      heading: "Digitalne pozivnice za krštenje",
      lead: "Nežna pozivnica za krštenje deteta: ime, crkva i vreme obreda, mesto proslave sa mapom i brojevi za potvrdu dolaska.",
      textHeading: "Pozivnica za krštenje koju šaljete porukom",
      text: [
        "Digitalna pozivnica za krštenje sadrži ime deteta, datum, vreme i crkvu, kao i restoran ili mesto gde se proslava nastavlja. Za svaku lokaciju postoji dugme za mapu, a gosti krštenje jednim dodirom dodaju u kalendar telefona.",
        "Link šaljete kumovima, porodici i prijateljima preko Vibera, WhatsAppa, SMS-a ili e-maila. Dolazak potvrđuju pozivom ili porukom na jedan od dva istaknuta broja, pa tačno znate koliko gostiju dolazi.",
      ],
      faqHeading: "Pitanja o pozivnicama za krštenje",
      faqs: [
        {
          q: "Mogu li na pozivnici da budu i crkva i restoran?",
          a: "Mogu. Obred i proslava dobijaju svoje vreme, adresu i dugme za mapu.",
        },
        {
          q: "Da li pozivnica za krštenje može biti na ćirilici?",
          a: "Može. U paketu Po meri birate latinicu ili ćirilicu, kao i boje usklađene sa proslavom.",
        },
        {
          q: "Za koliko je pozivnica gotova?",
          a: "Pozivnica po šablonu je obično gotova u roku od 24 sata od kada dobijemo sve podatke.",
        },
      ],
    },
  },
  {
    slug: "rodjendan",
    label: "Rođendan",
    phrase: "za rođendan",
    page: {
      title: "Pozivnice za rođendan i dečiji rođendan",
      description:
        "Digitalne pozivnice za dečiji rođendan, prvi rođendan, punoletstvo i rođendanske žurke. Pošaljite ih preko Vibera ili WhatsAppa, sa mapom i potvrdom dolaska.",
      heading: "Digitalne pozivnice za rođendan",
      lead: "Pozivnice za dečiji rođendan, prvi rođendan, osamnaesti i svaku rođendansku žurku. Pošaljete link, a gosti imaju sve na jednom mestu.",
      textHeading: "Rođendanska pozivnica za telefon",
      text: [
        "Digitalna pozivnica za rođendan sadrži ime slavljenika, godine, datum, satnicu proslave i adresu igraonice, restorana ili kluba sa mapom. Roditelji je dodaju u kalendar telefona jednim dodirom i dolazak potvrđuju pozivom ili porukom.",
        "Za dečiji rođendan imamo vesele šablone poput Dino i Konfete, za prvi rođendan šablon Trake sa fotografijom deteta, a za punoletstvo šablon Osamnaest. Link šaljete u grupu roditelja iz vrtića ili škole, preko Vibera ili WhatsAppa.",
      ],
      faqHeading: "Pitanja o rođendanskim pozivnicama",
      faqs: [
        {
          q: "Mogu li da dodam fotografiju deteta?",
          a: "Možete. Šabloni Trake i Dino imaju mesto za fotografiju deteta, a u paketu Po meri fotografiju uklapamo u dizajn po vašoj ideji.",
        },
        {
          q: "Kako roditelji potvrđuju dolazak deteta?",
          a: "Na pozivnici su istaknuta dva broja, na primer mamin i tatin. Roditelji jednim dodirom zovu ili šalju poruku.",
        },
        {
          q: "Mogu li da pošaljem pozivnicu u Viber grupu vrtića?",
          a: "Možete. Isti link šaljete svima, u grupu ili pojedinačno, bez ograničenja broja gostiju.",
        },
      ],
    },
  },
  {
    slug: "proslava-bebe",
    label: "Proslava bebe",
    phrase: "za proslavu bebe",
    page: {
      title: "Pozivnice za proslavu bebe i baby shower",
      description:
        "Digitalne pozivnice za proslavu bebe i baby shower: datum, mesto okupljanja sa mapom i potvrda dolaska, u jednom linku za Viber i WhatsApp.",
      heading: "Pozivnice za proslavu bebe",
      lead: "Pozivnica za baby shower ili proslavu dolaska bebe: datum, mesto okupljanja sa mapom i brojevi za potvrdu dolaska.",
      textHeading: "Nežna pozivnica za radostan povod",
      text: [
        "Digitalna pozivnica za proslavu bebe sadrži imena budućih roditelja, datum i vreme okupljanja i adresu sa mapom. Gosti proslavu dodaju u kalendar telefona jednim dodirom i dolazak potvrđuju pozivom ili porukom.",
        "Birate između vedrog pastelnog šablona i smirenog šablona sa mesecom, ili dizajna po meri u bojama koje sami izaberete.",
      ],
      faqHeading: "Pitanja o pozivnicama za proslavu bebe",
      faqs: [
        {
          q: "Mogu li boje da budu roze ili plave?",
          a: "Mogu. U paketu Po meri boje i stil usklađujemo sa vašom proslavom.",
        },
        {
          q: "Kako gosti dobijaju pozivnicu?",
          a: "Dobijate link koji šaljete putem Vibera, WhatsAppa, SMS-a ili e-maila. Gosti ga otvaraju na telefonu, bez aplikacije.",
        },
      ],
    },
  },
  {
    slug: "poslovno",
    label: "Poslovno",
    phrase: "za poslovni događaj",
    page: {
      title: "Poslovne digitalne pozivnice za događaje",
      description:
        "Digitalne pozivnice za konferencije, gala večere, otvaranja i korporativne događaje. Program, lokacija sa mapom i potvrda dolaska u jednom linku.",
      heading: "Poslovne digitalne pozivnice",
      lead: "Pozivnice za konferencije, gala večere, otvaranja i korporativne proslave: program, lokacija sa mapom i kontakt za potvrdu dolaska.",
      textHeading: "Pozivnica za događaj, na jednom linku",
      text: [
        "Poslovna digitalna pozivnica sadrži naziv događaja, organizatora, program po satima i adresu sa mapom. Zvanice događaj dodaju u kalendar jednim dodirom, a dolazak potvrđuju pozivom ili porukom.",
        "Link šaljete e-mailom, u poruci ili ga delite na mrežama. Ako se program promeni, ispravku unosimo na istom linku, bez ponovnog slanja.",
      ],
      faqHeading: "Pitanja o poslovnim pozivnicama",
      faqs: [
        {
          q: "Može li pozivnica da bude u bojama našeg brenda?",
          a: "Može. U paketu Po meri dizajn pravimo od nule, u bojama i stilu vaše kompanije.",
        },
        {
          q: "Može li pozivnica da se pošalje e-mailom?",
          a: "Može. Link šaljete e-mailom, porukom ili ga delite na društvenim mrežama.",
        },
      ],
    },
  },
];

export function categorySlug(label: string) {
  return categories.find((category) => category.label === label)?.slug ?? "";
}

export function categoryByLabel(label: string) {
  return categories.find((category) => category.label === label);
}
