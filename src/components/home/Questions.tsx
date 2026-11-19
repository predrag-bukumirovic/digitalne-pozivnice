import { El, Section, type Box } from "@/components/canvas/Canvas";
import { Preview } from "./art";
import s from "./home.module.css";

type Card = {
  q: string;
  a: string;
  color: string;
  text: "light" | "dark";
  d: Box;
  m: Box;
  wide?: boolean;
  slug: string;
};

/* Laid out like the reference's review cards: three across, then two wide ones. */
const cards: Card[] = [
  {
    q: "Kako gosti dobijaju pozivnicu?",
    a: "Dobijate link koji šaljete Viberom, WhatsAppom, SMS-om ili e-mailom. Gosti ga otvaraju na telefonu ili računaru, bez ikakve aplikacije.",
    color: "var(--color-red)",
    text: "light",
    d: [30, 242, 369, 412],
    m: [29, 108, 261, 266],
    slug: "vencanje",
  },
  {
    q: "Da li gosti moraju nešto da instaliraju?",
    a: "Ne. Pozivnica je obična web stranica koja se otvara u pregledaču, na bilo kom telefonu.",
    color: "var(--color-blush)",
    text: "dark",
    d: [416, 242, 369, 412],
    m: [30, 383, 261, 266],
    slug: "krstenje",
  },
  {
    q: "Koliko brzo je pozivnica gotova?",
    a: "Pozivnica po šablonu je gotova u roku od 24 sata od kada dobijemo sve podatke. Dizajn po meri traje nekoliko dana, u zavisnosti od dogovora.",
    color: "var(--color-pink)",
    text: "light",
    d: [801, 242, 369, 412],
    m: [29, 658, 261, 280],
    slug: "rodjendan-prvi",
  },
  {
    q: "Mogu li da promenim podatke kada je pozivnica gotova?",
    a: "Da. Manje izmene, poput vremena, lokacije ili teksta, unosimo i nakon što je pozivnica gotova, a link ostaje isti, pa gosti uvek vide tačne podatke.",
    color: "var(--color-wine)",
    text: "light",
    d: [30, 677, 558, 433],
    m: [30, 946, 261, 314],
    wide: true,
    slug: "vencanje-terakota",
  },
  {
    q: "Kako gosti potvrđuju dolazak?",
    a: "Na pozivnici su istaknuta dva broja telefona. Gost jednim dodirom zove ili šalje poruku, a vi tačno znate ko dolazi.",
    color: "var(--color-cream)",
    text: "dark",
    d: [612, 677, 558, 387],
    m: [30, 1269, 261, 282],
    wide: true,
    slug: "proslava-bebe",
  },
];

export default function Questions() {
  return (
    <Section h={[1119, 1558]} className={s.questions} label="Česta pitanja">
      <El d={[321, 110, 558, 83]} m={[11, 48, 299, 32]} fs={[86, 35]} tag="h2" anim="fadeIn" className={`${s.serif} ${s.dark} ${s.center}`} style={{ letterSpacing: "-0.02em" }}>
        Česta pitanja
      </El>

      {cards.map((card, i) => (
        <El
          key={card.q}
          d={card.d}
          m={card.m}
          className={`${s.qCard} ${card.wide ? s.qWide : ""} ${card.text === "light" ? s.light : s.dark}`}
          style={{ background: card.color }}
        >
          <h3 data-anim="fadeIn" className={s.serif} style={{ fontSize: "calc(var(--q-fs) * var(--u))", lineHeight: 1.1 }}>
            „{card.q}“
          </h3>
          <p data-anim="fadeIn" className={`${s.para} ${s.qAnswer}`} style={{ fontSize: "calc(var(--a-fs) * var(--u))" }}>
            {card.a}
          </p>
          <div data-anim="fadeIn" className={s.qFoot}>
            <span className={s.qAvatar} aria-hidden="true">
              <Preview slug={card.slug} />
            </span>
            <span className={`${s.sub} ${s.qLabel}`} style={{ fontSize: "calc(var(--l-fs) * var(--u))" }}>
              Pitanje {String(i + 1).padStart(2, "0")}
              <br />
              Odgovara JustSend
            </span>
          </div>
        </El>
      ))}
    </Section>
  );
}
