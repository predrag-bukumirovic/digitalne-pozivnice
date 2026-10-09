import Link from "next/link";
import styles from "./Pricing.module.css";

const tiers = [
  {
    id: "sablon",
    name: "Šablon",
    price: "3.990",
    description: "Izaberete jedan od naših šablona, a mi ga popunjavamo vašim podacima.",
    features: [
      "Satnica, mapa i kalendar sa odbrojavanjem",
      "Dva kontakta za potvrdu dolaska",
      "Neograničen broj gostiju",
      "Ispravke teksta bez doplate",
      "Gotovo za 24 sata",
    ],
    cta: "Poručite šablon",
    dark: false,
  },
  {
    id: "po-meri",
    name: "Po meri",
    price: "5.990",
    description: "Pozivnica dizajnirana od nule, samo za vašu proslavu.",
    features: [
      "Sve iz paketa Šablon",
      "Dizajn po vašoj ideji",
      "Boje i stil usklađeni sa proslavom",
      "Latinica ili ćirilica",
      "Prioritetna podrška",
    ],
    cta: "Poručite dizajn po meri",
    dark: true,
  },
];

export default function Pricing({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="section">
      <div className="container">
        {showHeading && (
          <div className={styles.head}>
            <h2 className={styles.title}>Dve cene. Bez pretplate.</h2>
            <p className={styles.lead}>Plaćate jednom, tek kada pogledate i odobrite pozivnicu.</p>
          </div>
        )}

        <div className={styles.grid}>
          {tiers.map((tier) => (
            <div key={tier.id} className={`${styles.card} ${tier.dark ? styles.dark : ""}`}>
              <div className={styles.top}>
                <h3 className={styles.name}>{tier.name}</h3>
                <p className={styles.price}>
                  {tier.price}
                  <span className={styles.currency}> RSD</span>
                </p>
              </div>
              <p className={styles.description}>{tier.description}</p>

              <ul className={styles.features}>
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <Link href={`/kontakt?paket=${tier.id}`} className={`btn ${tier.dark ? styles.ctaLight : "btnPrimary"} ${styles.cta}`}>
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
