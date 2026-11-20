import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Kako funkcioniše digitalna pozivnica",
  description:
    "Izaberite šablon, pošaljite podatke, odobrite pozivnicu i podelite link sa gostima putem Vibera ili WhatsAppa. Gotovo za 24 sata.",
  path: "/kako-funkcionise",
});

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Kako funkcioniše", path: "/kako-funkcionise" }])} />
      <PageHeader eyebrow="Kako funkcioniše" title="Jednostavno, od prvog klika do poslednjeg gosta">
        Vi birate dizajn i šaljete podatke, a mi pripremamo pozivnicu. Za nekoliko minuta vašeg vremena dobijate link
        koji gosti otvaraju na telefonu.
      </PageHeader>
      <section className="section">
        <div className="container">
          <Steps />
        </div>
      </section>
      <Services />
      <CtaBand />
    </>
  );
}
