import Link from "next/link";
import type { ReactNode } from "react";
import { El, Section, type Box } from "@/components/canvas/Canvas";
import { Polaroid } from "./art";
import s from "./home.module.css";

type Folder = {
  tab: string;
  tabX: [number, number];
  color: string;
  text: "light" | "dark";
  button: "pillWine" | "pillPink";
  title: ReactNode;
  description: string[];
  includes?: string[];
  cta: { label: string; href: string };
  slug: string;
  polaroid: [Box, Box];
};

const folders: Folder[] = [
  {
    tab: "Venčanja",
    tabX: [88, 20],
    color: "var(--color-pink)",
    text: "light",
    button: "pillWine",
    title: "Pozivnice za venčanje",
    description: [
      "Elegantna pozivnica za vaš najvažniji dan. Gosti otvaraju link i odmah vide satnicu, mapu do crkve i sale i odbrojavanje do venčanja. Cena 3.990 RSD, plaćate jednom.",
    ],
    includes: ["Satnica crkve, opštine i sale", "Mapa do svake lokacije", "Kalendar i odbrojavanje", "Dva kontakta za potvrdu dolaska"],
    cta: { label: "Pogledajte šablone", href: "/sabloni?kategorija=vencanje" },
    slug: "vencanje-monogram",
    polaroid: [
      [191, 239, 268, 407, 4],
      [141, 83, 90, 136, 6],
    ],
  },
  {
    tab: "Krštenja",
    tabX: [345, 90],
    color: "var(--color-red)",
    text: "light",
    button: "pillPink",
    title: "Krštenja i bebe",
    description: [
      "Nežna pozivnica za krštenje ili dolazak bebe.",
      "Ime deteta, crkva i restoran sa mapom, kalendar i brojevi za potvrdu dolaska, sve na jednom linku. Cena 3.990 RSD.",
    ],
    includes: ["Ime deteta i datum krštenja", "Crkva i restoran sa mapom", "Odbrojavanje do proslave", "Potvrda dolaska jednim pozivom"],
    cta: { label: "Pogledajte šablone", href: "/sabloni?kategorija=krstenje" },
    slug: "krstenje",
    polaroid: [
      [180, 246, 268, 407, -3],
      [172, 74, 85, 127, -1],
    ],
  },
  {
    tab: "Rođendani",
    tabX: [601, 160],
    color: "var(--color-cream)",
    text: "dark",
    button: "pillWine",
    title: "Rođendani",
    description: [
      "Veselje, bez stresa.",
      "Za prvi, osamnaesti ili pedeseti rođendan: pozivnica koja nosi raspoloženje žurke, i sa fotografijom slavljenika. Cena 3.990 RSD.",
    ],
    includes: ["Fotografija slavljenika", "Adresa i mapa do igraonice ili restorana", "Odbrojavanje do žurke", "Potvrda dolaska"],
    cta: { label: "Pogledajte šablone", href: "/sabloni?kategorija=rodjendan" },
    slug: "rodjendan-konfete",
    polaroid: [
      [191, 239, 268, 407, 4],
      [47, 72, 85, 129, 2],
    ],
  },
  {
    tab: "Po meri",
    tabX: [858, 230],
    color: "var(--color-wine)",
    text: "light",
    button: "pillPink",
    title: (
      <>
        Dizajn od nule, samo za <span className={s.italic}>vas</span>
      </>
    ),
    description: [
      "Imate svoju ideju? Pravimo pozivnicu od početka, u vašim bojama i fontovima, na latinici ili ćirilici. Za venčanja, krštenja, rođendane, proslave beba i poslovne događaje. Cena 5.990 RSD, plaćate jednom.",
    ],
    cta: { label: "Pošaljite ideju", href: "/kontakt?paket=po-meri" },
    slug: "vencanje-terakota",
    polaroid: [
      [180, 246, 268, 407, -3],
      [63, 85, 83, 115, -4],
    ],
  },
];

/**
 * Four window-tall folders pinned on top of each other. Each one slides up over the last,
 * and their tabs line up along the top like a stack of files.
 */
export default function Services() {
  return (
    <>
      {folders.map((folder, i) => (
        <Section key={folder.tab} h={[897, 581]} screen sticky className={i === 0 ? s.servicesBg : undefined} label={folder.tab}>
          <El d={[folder.tabX[0], 115, 254, 54]} m={[folder.tabX[1], 70, 70, 24]} className={s.tab} style={{ background: folder.color }}>
            <span className={`${s.sub} ${folder.text === "light" ? s.light : s.dark}`} style={{ fontSize: "calc(var(--tab-fs) * var(--u))" }}>
              {folder.tab}
            </span>
          </El>
          <El d={[88, 169, 1024, 568]} m={[20, 94, 280, 446]} style={{ background: folder.color }} decorative />

          <Polaroid d={folder.polaroid[0]} m={folder.polaroid[1]} slug={folder.slug} />

          <El d={[514, 282, 472]} m={[44, 232, 233]} className={`${s.column} ${folder.text === "light" ? s.light : s.dark}`}>
            <h3 data-anim="fadeIn" className={`${s.serif} ${s.upper} ${s.mCenter}`} style={{ fontSize: "calc(var(--title-fs) * var(--u))", width: "100%" }}>
              {folder.title}
            </h3>
            <div data-anim="fadeIn" className={`${s.para} ${s.loose}`} style={{ fontSize: "calc(var(--text-fs) * var(--u))" }}>
              {folder.description.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            {folder.includes && (
              <div data-anim="fadeIn" className={`${s.para} ${s.loose}`} style={{ fontSize: "calc(var(--list-fs) * var(--u))" }}>
                <p className={s.includes}>Uključeno:</p>
                <ul className={s.bullets}>
                  {folder.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            <Link href={folder.cta.href} className={`${s.pill} ${s[folder.button]} ${s.columnPill}`}>
              {folder.cta.label}
            </Link>
          </El>
        </Section>
      ))}

      {/* Keeps the last folder on screen for one more window height. */}
      <div className={s.spacer} aria-hidden="true" />
    </>
  );
}
