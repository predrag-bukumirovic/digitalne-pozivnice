import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} – Digitalne pozivnice`,
    short_name: site.name,
    description: "Digitalne pozivnice za venčanja, krštenja, rođendane i proslave, koje šaljete jednim linkom.",
    lang: "sr-Latn",
    start_url: "/",
    display: "browser",
    background_color: "#f6f5df",
    theme_color: "#63111c",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
