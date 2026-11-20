import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import prose from "@/components/Prose.module.css";
import TemplateGallery from "@/components/TemplateGallery";
import { categories } from "@/invitations/categories";
import { breadcrumbLd, faqLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({ kategorija: category.slug }));
}

function find(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export async function generateMetadata({ params }: PageProps<"/sabloni/[kategorija]">): Promise<Metadata> {
  const category = find((await params).kategorija);
  if (!category) return {};
  return pageMetadata({ title: category.page.title, description: category.page.description, path: `/sabloni/${category.slug}` });
}

export default async function CategoryPage({ params }: PageProps<"/sabloni/[kategorija]">) {
  const category = find((await params).kategorija);
  if (!category) notFound();
  const { page } = category;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Šabloni", path: "/sabloni" },
            { name: page.heading, path: `/sabloni/${category.slug}` },
          ]),
          faqLd(page.faqs),
        ]}
      />
      <PageHeader eyebrow={`Šabloni · ${category.label}`} title={page.heading}>
        {page.lead}
      </PageHeader>
      <TemplateGallery category={category.slug} />
      <article className={`container ${prose.prose}`}>
        <h2>{page.textHeading}</h2>
        {page.text.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
        <h2>Šta dobijate</h2>
        <ul>
          <li>Satnicu sa vremenom i adresom svake lokacije</li>
          <li>Mapu do svake lokacije, jednim dodirom</li>
          <li>Odbrojavanje i dodavanje u kalendar telefona</li>
          <li>Dva kontakta za potvrdu dolaska</li>
          <li>Jedan link za neograničen broj gostiju</li>
        </ul>
        <p>
          Pozivnica po šablonu košta 3.990 RSD, a dizajn po meri 5.990 RSD. Plaćate jednom, bez pretplate.{" "}
          <Link href="/cene">Pogledajte cene</Link> ili <Link href="/kako-funkcionise">kako poručivanje izgleda</Link>.
        </p>
      </article>
      <section className="section">
        <div className="container">
          <div className="sectionHead center">
            <h2>{page.faqHeading}</h2>
          </div>
          <Faq items={page.faqs} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
