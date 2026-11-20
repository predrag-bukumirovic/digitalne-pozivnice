import OrderForm from "@/components/OrderForm";
import PageHeader from "@/components/PageHeader";
import { MailIcon, PhoneIcon } from "@/components/icons";
import { catalog } from "@/invitations/catalog";
import { site } from "@/lib/site";
import styles from "./page.module.css";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Poručite digitalnu pozivnicu",
  description:
    "Poručite digitalnu pozivnicu za venčanje, krštenje ili rođendan. Pošaljite podatke preko forme, a mi vam se javljamo u roku od 24 sata.",
  path: "/kontakt",
});

export default async function ContactPage({ searchParams }: PageProps<"/kontakt">) {
  const params = await searchParams;
  const selectedTemplate = catalog.find((content) => content.slug === params.sablon)?.slug ?? "";
  const selectedPackage = params.paket === "po-meri" ? "po-meri" : "sablon";
  const text = (value: string | string[] | undefined) => (typeof value === "string" ? value.slice(0, 100) : undefined);
  const prefill = { name: text(params.ime), phone: text(params.telefon) };

  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Kontakt", path: "/kontakt" }])} />
      <PageHeader eyebrow="Kontakt" title="Poručite svoju pozivnicu">
        Popunite formu i javićemo vam se u roku od 24 sata. Plaćanje sledi tek kada odobrite pozivnicu.
      </PageHeader>

      <section className={`container ${styles.layout}`}>
        <aside className={styles.info}>
          <h2 className={styles.infoTitle}>Radije razgovarate?</h2>
          <p>Pozovite nas ili pišite. Rado ćemo pomoći da izaberete šablon i odgovoriti na sva pitanja.</p>
          <ul className={styles.contactList}>
            <li>
              <PhoneIcon className={styles.contactIcon} />
              <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>{site.phone}</a>
            </li>
            <li>
              <MailIcon className={styles.contactIcon} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
          <ol className={styles.next}>
            <li>Javljamo vam se i potvrđujemo detalje.</li>
            <li>Šaljemo link na pregled pozivnice.</li>
            <li>Kada odobrite, plaćate i delite link gostima.</li>
          </ol>
        </aside>

        <div className={styles.formCard}>
          <OrderForm
            templates={catalog.map((content) => ({ slug: content.slug, name: content.templateName, category: content.category }))}
            selectedTemplate={selectedTemplate}
            selectedPackage={selectedPackage}
            prefill={prefill}
          />
        </div>
      </section>
    </>
  );
}
