import type { Metadata } from "next";
import { faqs } from "./faq";
import { site } from "./site";

export const defaultImage = {
  url: "/og/justsend.jpg",
  width: 1200,
  height: 630,
  alt: "JustSend – digitalne pozivnice",
};

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  image = defaultImage,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  image?: { url: string; width: number; height: number; alt: string };
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      locale: "sr_RS",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}

const absolute = (path: string) => `${site.url}${path}`;

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": absolute("/#organizacija"),
  name: site.name,
  url: site.url,
  logo: absolute("/icon.png"),
  image: absolute(defaultImage.url),
  email: site.email,
  telephone: site.phone.replace(/\s/g, ""),
  description:
    "Digitalne pozivnice za venčanja, krštenja, rođendane, proslave beba i poslovne događaje, koje se šalju jednim linkom.",
  areaServed: { "@type": "Country", name: "Srbija" },
  knowsLanguage: "sr",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: site.email,
    telephone: site.phone.replace(/\s/g, ""),
    availableLanguage: ["sr"],
  },
  ...(site.instagram
    ? { sameAs: [`https://www.instagram.com/${site.instagram}/`] }
    : {}),
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absolute("/#sajt"),
  name: site.name,
  alternateName: "JustSend digitalne pozivnice",
  url: site.url,
  inLanguage: "sr-Latn",
  publisher: { "@id": absolute("/#organizacija") },
};

/** Breadcrumb trail shown by Google instead of the bare URL; the home page is added automatically. */
export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Početna", path: "/" }, ...trail].map(
      (item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: absolute(item.path),
      }),
    ),
  };
}

export function faqLd(items: { q: string; a: string }[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function serviceLd(
  offers: { name: string; price: string; description: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digitalne pozivnice",
    serviceType: "Izrada digitalnih pozivnica",
    provider: { "@id": absolute("/#organizacija") },
    areaServed: { "@type": "Country", name: "Srbija" },
    url: absolute("/cene"),
    offers: offers.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      description: offer.description,
      price: offer.price,
      priceCurrency: "RSD",
      availability: "https://schema.org/InStock",
      url: absolute(offer.path),
    })),
  };
}
