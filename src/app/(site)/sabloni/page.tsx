import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import TemplateGallery from "@/components/TemplateGallery";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Šabloni digitalnih pozivnica",
  description:
    "Šabloni digitalnih pozivnica za venčanje, krštenje, rođendan, proslavu bebe i poslovne događaje. Otvorite primer i pogledajte kako pozivnica izgleda na telefonu.",
  path: "/sabloni",
});

export default function TemplatesPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Šabloni", path: "/sabloni" }])} />
      <PageHeader eyebrow="Šabloni" title="Pozivnica za svaku proslavu">
        Otvorite primer i pogledajte kako pozivnica izgleda na telefonu vaših gostiju. Izaberite vrstu proslave, a mi šablon popunjavamo
        vašim imenima, datumom, satnicom i lokacijama.
      </PageHeader>
      <TemplateGallery category="" />
      <CtaBand
        title="Niste pronašli pravi dizajn?"
        text="U paketu Po meri pravimo pozivnicu od nule, u bojama i stilu vaše proslave, na latinici ili ćirilici."
      />
    </>
  );
}
