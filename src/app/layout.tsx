import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Lumière – Digitalne pozivnice", template: "%s | Lumière" },
  openGraph: { siteName: "Lumière", locale: "sr_RS", type: "website" },
  description:
    "Digitalne pozivnice za venčanja, krštenja, rođendane, proslave beba i poslovne događaje. Izaberite dizajn i pošaljite upit za svoju proslavu.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sr-Latn" data-scroll-behavior="smooth" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
