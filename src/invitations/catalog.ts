import vencanje from "./templates/vencanje/content";
import vencanjeMonogram from "./templates/vencanje-monogram/content";
import vencanjeTerakota from "./templates/vencanje-terakota/content";
import krstenje from "./templates/krstenje/content";
import krstenjeMaslina from "./templates/krstenje-maslina/content";
import rodjendan from "./templates/rodjendan/content";
import rodjendanKonfete from "./templates/rodjendan-konfete/content";
import rodjendanOsamnaest from "./templates/rodjendan-osamnaest/content";
import proslavaBebe from "./templates/proslava-bebe/content";
import proslavaBebeMesec from "./templates/proslava-bebe-mesec/content";
import poslovno from "./templates/poslovno/content";
import poslovnoKonferencija from "./templates/poslovno-konferencija/content";

/** Template content only (no components), for server code such as the order action. Ordered by category. */
export const catalog = [vencanje, vencanjeMonogram, vencanjeTerakota, krstenje, krstenjeMaslina, rodjendan, rodjendanKonfete, rodjendanOsamnaest, proslavaBebe, proslavaBebeMesec, poslovno, poslovnoKonferencija];
