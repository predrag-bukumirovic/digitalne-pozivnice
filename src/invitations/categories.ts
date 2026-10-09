export const categories = [
  { slug: "vencanje", label: "Venčanje" },
  { slug: "krstenje", label: "Krštenje" },
  { slug: "rodjendan", label: "Rođendan" },
  { slug: "proslava-bebe", label: "Proslava bebe" },
  { slug: "poslovno", label: "Poslovno" },
];

export function categorySlug(label: string) {
  return categories.find((category) => category.label === label)?.slug ?? "";
}
