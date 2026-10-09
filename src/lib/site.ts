/** Business details used across the site. Replace the placeholders with real data before launch. */
export const site = {
  name: "Lumière",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lumiere.rs",
  email: "kontakt@lumiere.app",
  phone: "+381 11 123 4567",
  /** Shown in the footer and terms once filled in. */
  company: { name: "", pib: "", mb: "", address: "" },
};

export const nav = [
  { href: "/sabloni", label: "Šabloni" },
  { href: "/kako-funkcionise", label: "Kako funkcioniše" },
  { href: "/cene", label: "Cene" },
  { href: "/cesta-pitanja", label: "Pitanja" },
  { href: "/kontakt", label: "Kontakt" },
];

export function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
