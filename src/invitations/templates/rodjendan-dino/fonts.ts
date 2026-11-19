import { Grandstander, Pacifico } from "next/font/google";

export const display = Grandstander({
  variable: "--font-dino",
  subsets: ["latin", "latin-ext"],
});

export const script = Pacifico({
  variable: "--font-dino-script",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});
