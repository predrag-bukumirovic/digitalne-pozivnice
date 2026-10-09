import { DM_Serif_Display } from "next/font/google";

export const display = DM_Serif_Display({
  variable: "--font-monogram",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
});
