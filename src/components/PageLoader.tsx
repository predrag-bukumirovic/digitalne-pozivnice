import Logo from "./Logo";
import s from "./PageLoader.module.css";

const SEEN = "justsend-loader";

/**
 * Opening screen on the first visit in a browser session: the logo rises into view, a line grows
 * under it, and the curtain lifts. Pure CSS, so it never waits on JavaScript; the inline script
 * only skips it on later page loads in the same session.
 */
export default function PageLoader() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `try{if(sessionStorage.getItem("${SEEN}"))document.documentElement.classList.add("${s.seen}");else sessionStorage.setItem("${SEEN}","1")}catch(e){}`,
        }}
      />
      <div className={s.loader} aria-hidden="true">
        <Logo className={s.logo} />
        <span className={s.line} />
      </div>
    </>
  );
}
