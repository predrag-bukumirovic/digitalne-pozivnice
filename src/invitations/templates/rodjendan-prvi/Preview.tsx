import { display } from "./fonts";
import Hero from "./Hero";
import demoPhoto from "./primer-foto.jpg";
import styles from "./template.module.css";

/** Homepage card: the real hero at thumbnail size. */
export default function Preview() {
  return (
    <div className={`${display.variable} ${styles.theme} ${styles.preview}`} aria-hidden="true">
      <Hero compact photo={demoPhoto} />
    </div>
  );
}
