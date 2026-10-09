import styles from "./Services.module.css";

const features = [
  {
    title: "Satnica i mapa",
    text: "Svaka lokacija ima dugme koje otvara Google mape, pa niko ne mora da pita kako se stiže.",
  },
  {
    title: "Kalendar i odbrojavanje",
    text: "Gosti vide datum u kalendaru i koliko je dana ostalo do proslave.",
  },
  {
    title: "Potvrda dolaska telefonom",
    text: "Dva broja telefona, jedan dodir za poziv ili poruku. Bez formulara i registracije.",
  },
  {
    title: "Oštro na svakom ekranu",
    text: "Pozivnica je web stranica, ne slika, pa se tekst lako čita i na najmanjem telefonu.",
  },
  {
    title: "Latinica ili ćirilica",
    text: "U paketu Po meri birate pismo, boje i stil koji odgovaraju vašoj proslavi.",
  },
  {
    title: "Jedan link za sve",
    text: "Isti link šaljete svim gostima. Ako se nešto promeni, ispravljamo ga, a link ostaje isti.",
  },
];

export default function Services() {
  return (
    <section className="section">
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <h2 className={styles.title}>Sve što gost treba da zna, na jednom ekranu</h2>
          <p className={styles.lead}>
            Umesto slike koju treba zumirati i poruka sa adresama, gosti dobijaju pozivnicu na kojoj je sve jasno i
            na dohvat ruke.
          </p>
        </div>

        <dl className={styles.list}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.item}>
              <dt className={styles.itemTitle}>{feature.title}</dt>
              <dd className={styles.itemText}>{feature.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
