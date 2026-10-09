import type { ComponentType } from "react";
import { catalog } from "./catalog";
import type { InvitationContent } from "./types";
import VencanjePreview from "./templates/vencanje/Preview";
import VencanjeMonogramPreview from "./templates/vencanje-monogram/Preview";
import VencanjeTerakotaPreview from "./templates/vencanje-terakota/Preview";
import KrstenjePreview from "./templates/krstenje/Preview";
import KrstenjeMaslinaPreview from "./templates/krstenje-maslina/Preview";
import RodjendanPreview from "./templates/rodjendan/Preview";
import RodjendanKonfetePreview from "./templates/rodjendan-konfete/Preview";
import RodjendanOsamnaestPreview from "./templates/rodjendan-osamnaest/Preview";
import ProslavaBebePreview from "./templates/proslava-bebe/Preview";
import ProslavaBebeMesecPreview from "./templates/proslava-bebe-mesec/Preview";
import PoslovnoPreview from "./templates/poslovno/Preview";
import PoslovnoKonferencijaPreview from "./templates/poslovno-konferencija/Preview";

const previews: Record<string, ComponentType> = {
  "vencanje": VencanjePreview,
  "vencanje-monogram": VencanjeMonogramPreview,
  "vencanje-terakota": VencanjeTerakotaPreview,
  "krstenje": KrstenjePreview,
  "krstenje-maslina": KrstenjeMaslinaPreview,
  "rodjendan": RodjendanPreview,
  "rodjendan-konfete": RodjendanKonfetePreview,
  "rodjendan-osamnaest": RodjendanOsamnaestPreview,
  "proslava-bebe": ProslavaBebePreview,
  "proslava-bebe-mesec": ProslavaBebeMesecPreview,
  "poslovno": PoslovnoPreview,
  "poslovno-konferencija": PoslovnoKonferencijaPreview,
};

export const invitations: { content: InvitationContent; Preview: ComponentType }[] = catalog.map((content) => ({
  content,
  Preview: previews[content.slug],
}));
