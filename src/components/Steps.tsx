import styles from "./Steps.module.css";

const steps = [
  {
    title: "Izaberite šablon",
    text: "Pogledajte primere i izaberite dizajn koji vam se dopada, ili tražite pozivnicu po meri.",
  },
  {
    title: "Pošaljite podatke",
    text: "Imena, datum, satnicu, lokacije i dva broja telefona za potvrdu dolaska. Dovoljno je pet minuta.",
  },
  {
    title: "Pogledajte pozivnicu",
    text: "Šaljemo vam link na pregled. Ako želite nešto da promenite, ispravljamo pre nego što je pošaljete.",
  },
  {
    title: "Podelite link",
    text: "Pošaljite ga Viberom, WhatsAppom ili SMS-om. Gosti pozivnicu otvaraju na telefonu, bez aplikacija.",
  },
];

export default function Steps() {
  return (
    <ol className={styles.steps}>
      {steps.map((step, i) => (
        <li key={step.title} className={styles.step}>
          <span className={styles.number} aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className={styles.title}>{step.title}</h3>
          <p className={styles.text}>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
