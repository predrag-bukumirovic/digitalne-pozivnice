import Slider from "@/components/Slider";
import { Preview } from "./art";
import s from "./home.module.css";

type Card = {
  q: string;
  a: string;
  color: string;
  text: "light" | "dark";
  slug: string;
};

const cards: Card[] = [
  {
    q: "Kako gosti dobijaju pozivnicu?",
    a: "Dobijate link koji šaljete Viberom, WhatsAppom, SMS-om ili e-mailom. Gosti ga otvaraju na telefonu ili računaru, bez ikakve aplikacije.",
    color: "var(--color-red)",
    text: "light",
    slug: "vencanje",
  },
  {
    q: "Da li gosti moraju nešto da instaliraju?",
    a: "Ne. Pozivnica je obična web stranica koja se otvara u pregledaču, na bilo kom telefonu.",
    color: "var(--color-blush)",
    text: "dark",
    slug: "krstenje",
  },
  {
    q: "Koliko brzo je pozivnica gotova?",
    a: "Pozivnica po šablonu je gotova u roku od 24 sata od kada dobijemo sve podatke. Dizajn po meri traje nekoliko dana, u zavisnosti od dogovora.",
    color: "var(--color-pink)",
    text: "light",
    slug: "rodjendan-prvi",
  },
  {
    q: "Mogu li da promenim podatke kada je pozivnica gotova?",
    a: "Da. Manje izmene, poput vremena, lokacije ili teksta, unosimo i nakon što je pozivnica gotova, a link ostaje isti, pa gosti uvek vide tačne podatke.",
    color: "var(--color-wine)",
    text: "light",
    slug: "vencanje-terakota",
  },
  {
    q: "Kako gosti potvrđuju dolazak?",
    a: "Na pozivnici su istaknuta dva broja telefona. Gost jednim dodirom zove ili šalje poruku, a vi tačno znate ko dolazi.",
    color: "var(--color-cream)",
    text: "dark",
    slug: "proslava-bebe",
  },
];

export default function Questions() {
  return (
    <section className={s.questions} aria-labelledby="cesta-pitanja">
      <h2
        id="cesta-pitanja"
        data-anim="fadeIn"
        className={`${s.serif} ${s.qTitle}`}
      >
        Česta pitanja
      </h2>
      <Slider label="Česta pitanja">
        {cards.map((card, i) => (
          <article
            key={card.q}
            className={`${s.qCard} ${card.text === "light" ? s.light : s.dark}`}
            style={{ background: card.color }}
          >
            <h3 className={s.serif}>„{card.q}“</h3>
            <p className={`${s.para} ${s.qAnswer}`}>{card.a}</p>
            <div className={s.qFoot}>
              <span className={s.qAvatar} aria-hidden="true">
                <Preview slug={card.slug} />
              </span>
              <span className={`${s.sub} ${s.qLabel}`}>
                Pitanje {String(i + 1).padStart(2, "0")}
                <br />
                Odgovara JustSend
              </span>
            </div>
          </article>
        ))}
      </Slider>
    </section>
  );
}
