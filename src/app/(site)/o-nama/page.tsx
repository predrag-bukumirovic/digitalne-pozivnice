import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";
import prose from "@/components/Prose.module.css";

export const metadata: Metadata = {
  title: "O nama",
  description: "Lumière pravi digitalne pozivnice za venčanja, krštenja, rođendane i poslovne događaje.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="O nama" title="Pozivnica je prvi utisak o vašoj proslavi" />
      <article className={`container ${prose.prose}`}>
        <p>
          Lumière je nastao iz jednostavne ideje: pozivnica treba da bude lepa kao i događaj koji najavljuje, a da je
          gosti otvore za sekund, na telefonu koji ionako drže u ruci.
        </p>
        <p>
          Svaku pozivnicu pripremamo ručno. Popunjavamo je vašim imenima, satnicom i lokacijama, proveravamo da li sve
          izgleda savršeno na telefonu i računaru, i šaljemo vam link na pregled pre nego što ga podelite sa gostima.
        </p>
        <h2>Šta nam je važno</h2>
        <ul>
          <li>Dizajn koji izgleda kao luksuzna štampana pozivnica, prilagođen ekranu telefona.</li>
          <li>Svi detalji na jednom mestu: satnica, mapa do lokacije, kalendar i odbrojavanje.</li>
          <li>Jednostavna potvrda dolaska, jednim dodirom na broj telefona.</li>
          <li>Jasna cena, plaćanje jednom i bez pretplate.</li>
        </ul>
      </article>
      <CtaBand />
    </>
  );
}
