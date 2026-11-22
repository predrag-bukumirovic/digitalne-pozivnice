import styles from "./Logo.module.css";

/**
 * The JUST / SEND logo from /public/logo.svg, drawn in the current text color: the file is used as
 * a mask, so one cached image serves the header, the menu, the footer and the loader in any color.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return <span className={`${styles.logo} ${className}`} role="img" aria-label="JustSend" />;
}
