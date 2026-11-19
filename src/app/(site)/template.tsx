import type { ReactNode } from "react";
import s from "./template.module.css";

/** Re-mounts on every page change, so each new page fades in. */
export default function Template({ children }: { children: ReactNode }) {
  return <div className={s.page}>{children}</div>;
}
