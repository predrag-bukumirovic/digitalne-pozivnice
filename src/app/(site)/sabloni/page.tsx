import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";
import TemplateGallery from "@/components/TemplateGallery";
import { categories } from "@/invitations/categories";

export const metadata: Metadata = {
  title: "Šabloni pozivnica",
  description: "Digitalne pozivnice za venčanje, krštenje, rođendan, proslavu bebe i poslovne događaje. Otvorite primer i pogledajte pozivnicu na telefonu.",
};

export default async function TemplatesPage({ searchParams }: PageProps<"/sabloni">) {
  const { kategorija } = await searchParams;
  const category = categories.some((item) => item.slug === kategorija) ? String(kategorija) : "";

  return (
    <>
      <PageHeader eyebrow="Šabloni" title="Pozivnica za svaku proslavu">
        Otvorite primer i pogledajte kako pozivnica izgleda na telefonu vaših gostiju. Izaberite vrstu proslave, a mi šablon popunjavamo
        vašim imenima, datumom, satnicom i lokacijama.
      </PageHeader>
      <TemplateGallery category={category} />
      <CtaBand
        title="Niste pronašli pravi dizajn?"
        text="U paketu Po meri pravimo pozivnicu od nule, u bojama i stilu vaše proslave, na latinici ili ćirilici."
      />
    </>
  );
}
