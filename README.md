# Lumière — digitalne pozivnice

Sajt za prodaju digitalnih pozivnica (Next.js 16, App Router, TypeScript, CSS Modules).

## Stranice

- `/` početna · `/sabloni` galerija sa filterima po kategoriji · `/kako-funkcionise` · `/cene` · `/cesta-pitanja`
- `/kontakt` forma za porudžbinu (`?sablon=…` i `?paket=po-meri` unapred popunjavaju formu)
- `/o-nama`, `/politika-privatnosti`, `/uslovi-koriscenja`
- `/primer/<šablon>` 12 primera pozivnica (venčanje, krštenje, rođendan, proslava bebe, poslovno)

## Pokretanje

```bash
npm install
npm run dev
```

Otvorite http://localhost:3000.

## Slanje porudžbina

Forma šalje e-mail preko [Resend](https://resend.com). Kopirajte `.env.example` u `.env.local` i popunite:

- `RESEND_API_KEY`: ključ sa Resend naloga
- `ORDER_EMAIL_TO`: adresa na koju stižu porudžbine
- `ORDER_EMAIL_FROM`: pošiljalac (posle verifikacije domena u Resend-u)
- `NEXT_PUBLIC_SITE_URL`: adresa sajta (za sitemap)

Bez ovih podešavanja forma kupcu prikazuje telefon i e-mail za kontakt.

## Podaci firme

Kontakt telefon, e-mail i podatke o firmi (naziv, PIB, MB, adresa) menjate u `src/lib/site.ts`.

## Novi šablon pozivnice

Svaki šablon je folder u `src/invitations/templates/<slug>/`:

- `content.ts`: imena, datum, program, kontakti
- `Hero.tsx` i `template.module.css`: naslovni deo i boje/fontovi (CSS promenljive `--inv-*`)
- `fonts.ts`, `Template.tsx`, `Preview.tsx`

Zatim dodajte šablon u `src/invitations/catalog.ts` i `src/invitations/registry.ts`, i napravite rutu `src/app/primer/<slug>/page.tsx`.
Sekcije ispod naslovnog dela (odbrojavanje, kalendar, program, potvrda dolaska) su zajedničke, u `src/invitations/modern/`.
