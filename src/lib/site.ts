/** Business details used across the site. Replace the placeholders with real data before launch. */
export const site = {
  name: "JustSend",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://justsend.rs",
  email: "kontakt@justsend.rs",
  phone: "+381 11 123 4567",
  /** Shown in the footer and terms once filled in. */
  company: { name: "", pib: "", mb: "", address: "" },
};

/** Left half and right half of the header, around the centered name. */
export const nav = [
  { href: "/sabloni", label: "Šabloni" },
  { href: "/kako-funkcionise", label: "Proces" },
  { href: "/cene", label: "Cene" },
  { href: "/cesta-pitanja", label: "Pitanja" },
  { href: "/o-nama", label: "O nama" },
  { href: "/kontakt", label: "Kontakt" },
];

export function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
