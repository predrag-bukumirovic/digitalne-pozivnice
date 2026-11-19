import type { Metadata } from "next";
import { Archivo, Inter, Montserrat, Ms_Madi, Noto_Serif_Display, Poppins } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

/* Type of the reference design: a thin condensed display serif, Archivo, Poppins and a signature script. */
const serif = Noto_Serif_Display({
  variable: "--nf-serif",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["wdth"],
});

const archivo = Archivo({
  variable: "--nf-archivo",
  subsets: ["latin", "latin-ext"],
});

const poppins = Poppins({
  variable: "--nf-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
});

const script = Ms_Madi({
  variable: "--nf-script",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--nf-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});

/** Still used inside some invitation templates. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} – Digitalne pozivnice`, template: `%s | ${site.name}` },
  openGraph: { siteName: site.name, locale: "sr_RS", type: "website" },
  description:
    "Digitalne pozivnice za venčanja, krštenja, rođendane, proslave beba i poslovne događaje. Izaberite dizajn, a mi pripremamo pozivnicu koju šaljete jednim linkom.",
};

const fonts = [serif, archivo, poppins, script, montserrat, inter].map((font) => font.variable).join(" ");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sr-Latn" data-scroll-behavior="smooth" className={fonts} suppressHydrationWarning>
      <body>
        {/* Lets CSS hide scroll-in elements only when the script that reveals them can run. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {children}
      </body>
    </html>
  );
}
