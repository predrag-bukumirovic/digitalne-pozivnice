import type { ComponentType } from "react";
import { catalog } from "./catalog";
import type { InvitationContent } from "./types";
import VencanjePreview from "./templates/vencanje/Preview";
import VencanjeMonogramPreview from "./templates/vencanje-monogram/Preview";
import VencanjeTerakotaPreview from "./templates/vencanje-terakota/Preview";
import VencanjeLetPreview from "./templates/vencanje-let/Preview";
import KrstenjePreview from "./templates/krstenje/Preview";
import KrstenjeMaslinaPreview from "./templates/krstenje-maslina/Preview";
import RodjendanPreview from "./templates/rodjendan/Preview";
import RodjendanKonfetePreview from "./templates/rodjendan-konfete/Preview";
import RodjendanOsamnaestPreview from "./templates/rodjendan-osamnaest/Preview";
import RodjendanPrviPreview from "./templates/rodjendan-prvi/Preview";
import RodjendanDinoPreview from "./templates/rodjendan-dino/Preview";
import ProslavaBebePreview from "./templates/proslava-bebe/Preview";
import ProslavaBebeMesecPreview from "./templates/proslava-bebe-mesec/Preview";
import PoslovnoPreview from "./templates/poslovno/Preview";
import PoslovnoKonferencijaPreview from "./templates/poslovno-konferencija/Preview";
import PoslovnoNovogodisnjiPreview from "./templates/poslovno-novogodisnji/Preview";
import PoslovnoGalaPreview from "./templates/poslovno-gala/Preview";

const previews: Record<string, ComponentType> = {
  "vencanje": VencanjePreview,
  "vencanje-monogram": VencanjeMonogramPreview,
  "vencanje-terakota": VencanjeTerakotaPreview,
  "vencanje-let": VencanjeLetPreview,
  "krstenje": KrstenjePreview,
  "krstenje-maslina": KrstenjeMaslinaPreview,
  "rodjendan": RodjendanPreview,
  "rodjendan-konfete": RodjendanKonfetePreview,
  "rodjendan-osamnaest": RodjendanOsamnaestPreview,
  "rodjendan-prvi": RodjendanPrviPreview,
  "rodjendan-dino": RodjendanDinoPreview,
  "proslava-bebe": ProslavaBebePreview,
  "proslava-bebe-mesec": ProslavaBebeMesecPreview,
  "poslovno": PoslovnoPreview,
  "poslovno-konferencija": PoslovnoKonferencijaPreview,
  "poslovno-novogodisnji": PoslovnoNovogodisnjiPreview,
  "poslovno-gala": PoslovnoGalaPreview,
};

export const invitations: { content: InvitationContent; Preview: ComponentType }[] = catalog.map((content) => ({
  content,
  Preview: previews[content.slug],
}));

export function invitationBySlug(slug: string) {
  const found = invitations.find(({ content }) => content.slug === slug);
  if (!found) throw new Error(`Nepoznat šablon: ${slug}`);
  return found;
}
