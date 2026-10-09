import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import prose from "@/components/Prose.module.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Uslovi korišćenja",
  description: "Uslovi poručivanja i korišćenja digitalnih pozivnica Lumière.",
};

export default function TermsPage() {
  const { company } = site;

  return (
    <>
      <PageHeader eyebrow="Pravne informacije" title="Uslovi korišćenja" />
      <article className={`container ${prose.prose}`}>
        <p className={prose.note}>Poslednja izmena: oktobar 2026.</p>

        <h2>Pružalac usluge</h2>
        <p>
          Uslugu izrade digitalnih pozivnica pruža {company.name || site.name}
          {company.address && `, ${company.address}`}
          {company.pib && `, PIB ${company.pib}`}
          {company.mb && `, MB ${company.mb}`}. Kontakt: <a href={`mailto:${site.email}`}>{site.email}</a>,{" "}
          <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>{site.phone}</a>.
        </p>

        <h2>Porudžbina</h2>
        <p>
          Porudžbinu šaljete putem <Link href="/kontakt">forme na sajtu</Link>, telefonom ili e-mailom. Nakon prijema
          potvrđujemo detalje i rok izrade. Za tačnost podataka na pozivnici (imena, datumi, adrese, telefoni) odgovoran
          je naručilac.
        </p>

        <h2>Izrada i izmene</h2>
        <p>
          Pre slanja gostima dobijate link na pregled. Ispravke teksta i podataka unosimo bez doplate. Veće izmene
          dizajna u paketu Šablon dogovaramo posebno.
        </p>

        <h2>Cene i plaćanje</h2>
        <p>
          Cene su istaknute na stranici <Link href="/cene">Cene</Link> u dinarima. Plaćanje je jednokratno i sledi nakon
          što odobrite pozivnicu. Podatke za uplatu dobijate uz potvrdu porudžbine.
        </p>

        <h2>Odustanak</h2>
        <p>
          Od porudžbine možete odustati bez troškova dok izrada pozivnice ne počne. Pošto je pozivnica digitalni sadržaj
          izrađen po vašoj specifikaciji, nakon odobrenja i isporuke povraćaj novca nije moguć, osim ako pozivnica ne
          odgovara dogovorenom.
        </p>

        <h2>Dostupnost pozivnice</h2>
        <p>
          Pozivnica je dostupna putem linka do dana proslave i razumno vreme nakon toga. Na vaš zahtev je uklanjamo
          ranije.
        </p>

        <h2>Autorska prava</h2>
        <p>
          Dizajn šablona pripada {company.name || site.name}. Pozivnicu možete slobodno deliti sa gostima, ali dizajn ne
          smete kopirati niti koristiti u druge svrhe.
        </p>
      </article>
    </>
  );
}
