import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import prose from "@/components/Prose.module.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description: "Kako Lumière prikuplja, koristi i čuva podatke o ličnosti.",
};

export default function PrivacyPage() {
  const owner = site.company.name || site.name;

  return (
    <>
      <PageHeader eyebrow="Pravne informacije" title="Politika privatnosti" />
      <article className={`container ${prose.prose}`}>
        <p className={prose.note}>Poslednja izmena: oktobar 2026.</p>

        <h2>Ko obrađuje podatke</h2>
        <p>
          Rukovalac podacima je {owner}
          {site.company.address && `, ${site.company.address}`}. Za sva pitanja o podacima o ličnosti pišite na{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <h2>Koje podatke prikupljamo</h2>
        <ul>
          <li>Podatke iz forme za poručivanje: ime i prezime, broj telefona, e-mail adresu i opis proslave.</li>
          <li>Podatke koje nam dostavite za izradu pozivnice: imena, datum, satnicu, lokacije i kontakt telefone.</li>
        </ul>
        <p>Na sajtu ne koristimo kolačiće za praćenje niti reklamne alate.</p>

        <h2>Zašto ih koristimo</h2>
        <p>
          Podatke koristimo isključivo da bismo odgovorili na vaš upit, izradili i isporučili pozivnicu i dogovorili
          plaćanje. Osnov obrade je preduzimanje radnji na vaš zahtev i izvršenje ugovora, u skladu sa Zakonom o zaštiti
          podataka o ličnosti.
        </p>

        <h2>Koliko dugo ih čuvamo</h2>
        <p>
          Podatke iz upita čuvamo dok traje komunikacija i izrada pozivnice. Pozivnica je javno dostupna putem linka koji
          delite sa gostima, a na vaš zahtev je uklanjamo. Podatke koje smo zakonski dužni da čuvamo (na primer za
          računovodstvo) čuvamo u propisanom roku.
        </p>

        <h2>Kome ih dajemo</h2>
        <p>
          Podatke ne prodajemo niti ustupamo trećim licima u marketinške svrhe. Za slanje e-mailova i hosting sajta
          koristimo pouzdane pružaoce usluga koji podatke obrađuju samo po našem nalogu.
        </p>

        <h2>Vaša prava</h2>
        <p>
          Imate pravo da zatražite pristup, ispravku ili brisanje svojih podataka, kao i ograničenje obrade. Zahtev
          pošaljite na <a href={`mailto:${site.email}`}>{site.email}</a>. Pritužbu možete podneti i Povereniku za
          informacije od javnog značaja i zaštitu podataka o ličnosti.
        </p>
      </article>
    </>
  );
}
