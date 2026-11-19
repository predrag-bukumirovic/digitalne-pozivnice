import s from "./PageLoader.module.css";

const SEEN = "justsend-loader";
const WORD = [..."JUSTSEND"];

/**
 * Opening screen on the first visit in a browser session: an envelope draws itself, a heart seals
 * it, the name rises letter by letter, and the curtain lifts. Pure CSS, so it never waits on
 * JavaScript; the inline script only skips it on later page loads in the same session.
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
        <svg className={s.envelope} viewBox="0 0 64 46">
          <path className={s.body} pathLength={1} d="M5 2h54a3 3 0 0 1 3 3v36a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Z" />
          <path className={s.flap} pathLength={1} d="M3.5 4 32 25 60.5 4" />
          <path
            className={s.heart}
            d="M32 33s-6.5-3.9-6.5-8.3c0-2 1.5-3.5 3.4-3.5 1.3 0 2.4.7 3.1 1.8.7-1.1 1.8-1.8 3.1-1.8 1.9 0 3.4 1.5 3.4 3.5 0 4.4-6.5 8.3-6.5 8.3Z"
          />
        </svg>
        <p className={s.word}>
          {WORD.map((letter, i) => (
            <span key={i} style={{ animationDelay: `${0.8 + i * 0.06}s` }}>
              {letter}
            </span>
          ))}
        </p>
        <span className={s.line} />
      </div>
    </>
  );
}
