import type { MonthPhoto } from "@/invitations/templates/rodjendan-prvi/Months";
import m1 from "./Slike/m1.jpeg";
import m2 from "./Slike/m2.jpeg";
import m3 from "./Slike/m3.jpeg";
import m4 from "./Slike/m4.jpeg";
import m5 from "./Slike/m5.jpeg";
import m6 from "./Slike/m6.jpeg";
import m7 from "./Slike/m7.jpeg";
import m8 from "./Slike/m8.jpeg";
import m9 from "./Slike/m9.jpeg";
import m10 from "./Slike/m10.jpeg";

/** Joca month by month, in order. The twelfth month is the party itself ("Uskoro"); add m11 here once it's taken. */
const months: MonthPhoto[] = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10].map((photo, i) => ({ month: i + 1, photo }));

export default months;
