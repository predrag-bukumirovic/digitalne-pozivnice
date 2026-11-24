import Image, { type StaticImageData } from "next/image";
import { dayMonth } from "@/invitations/date";
import { Cake } from "./art";
import s from "./months.module.css";

/** Letters of headings, one color after another, like "Imate poziv!". */
const LETTERS = ["#1f9d55", "#f6c026", "#2f6fe4", "#e03a3e", "#8b4fd8", "#f2792b"];
/** Month numbers: the same colors, a shade darker so they read on white. */
const NUMBERS = ["#1f8f4e", "#e09a00", "#2457c5", "#e03a3e", "#8b4fd8", "#ef6c1a"];

export type MonthPhoto = { month: number; photo: StaticImageData };

function Colorful({ text }: { text: string }) {
  return (
    <>
      {[...text].map((letter, i) => (
        <span key={i} style={{ color: LETTERS[i % LETTERS.length] }}>
          {letter}
        </span>
      ))}
    </>
  );
}

function Caption({ month }: { month: number }) {
  return (
    <>
      <span className={s.num} style={{ color: NUMBERS[(month - 1) % NUMBERS.length] }}>
        {month}.
      </span>{" "}
      mesec
    </>
  );
}

/**
 * "Moja prva godina": the child's photo for every month, each in a small white cloud on the
 * hero's stripes. The last card is the twelfth month, the party itself: a cake and "Uskoro!".
 */
export default function Months({ name, months, date }: { name: string; months: MonthPhoto[]; date: string }) {
  return (
    <section className={s.months} aria-labelledby="prva-godina">
      <div className={s.headWrap}>
        <div className={`${s.cloud} ${s.head}`}>
          <h2 id="prva-godina" className={s.title}>
            <Colorful text="Moja prva godina" />
          </h2>
          <p className={s.sub}>Mesec po mesec, do prve svećice</p>
        </div>
      </div>

      <ol className={s.grid}>
        {months.map(({ month, photo }) => (
          <li key={month} className={s.item}>
            <figure className={s.cloud}>
              <span className={s.shot}>
                <Image
                  src={photo}
                  alt={`${name}, ${month}. mesec`}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 960px) 30vw, 240px"
                  placeholder="blur"
                  className={s.img}
                />
              </span>
              <figcaption className={s.caption}>
                <Caption month={month} />
              </figcaption>
            </figure>
          </li>
        ))}

        <li className={`${s.item} ${s.soon}`}>
          <div className={s.cloud}>
            <span className={`${s.shot} ${s.soonShot}`}>
              <Cake className={s.cake} />
              <span className={s.soonWord}>
                <Colorful text="Uskoro!" />
              </span>
              <span className={s.soonDate}>Slavimo {dayMonth(date)}</span>
            </span>
            <p className={s.caption}>
              <Caption month={12} />
            </p>
          </div>
        </li>
      </ol>
    </section>
  );
}
