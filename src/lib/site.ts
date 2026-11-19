/** Business details used across the site. Replace the placeholders with real data before launch. */
export const site = {
  name: "JustSend",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://justsend.rs",
  email: "info@justsend.rs",
  phone: "+381 66 937 0071",
  /** Instagram profile name without "@"; shown in the footer once filled in. */
  instagram: "",
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
