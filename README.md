# Pensel & Pixel

Pensel & Pixel er en Next.js-app med fokus pa inkluderende laering, storytelling og ReadFlow-konceptet.

## Routes

- `/` - landing page
- `/readflow` - ReadFlow-side
- `/story` - My Story-side

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build

```bash
npm run build
```

## Lille forklaring om TypeScript

TypeScript er JavaScript med typer.

Kort sagt betyder det:

- Du kan beskrive, hvilken type data en variabel eller funktion forventer.
- Du far fejl tidligere (mens du koder), i stedet for forst i browseren.
- Koden bliver lettere at vedligeholde, nar projektet vokser.

Eksempel:

```ts
function greet(name: string): string {
	return `Hello ${name}`;
}
```

Her siger `name: string`, at funktionen forventer tekst, og `: string` efter parentesen siger, at funktionen returnerer tekst.

## Navigation og services

Hovedmenuen bruger Services (`/#services`), Work (`/#selected-work`), ReadFlow (`https://readflow.dk`), About og Let's talk (kontakt). De samme punkter vises i mobilens bundnavigation. Services præsenterer tre ydelser uden prisliste, med en genvej til kontakt. ReadFlow har sin egen case på `/readflow` og er det første projekt i Selected Work. Founder-sektionen linker til det personlige portfolio på `https://katrinerosa.com`.

Projektbillederne bruger Katrines originale illustrationer. Tarot- og Haunted House-billeder er kopier fra portfolioets offentlige projektfiler; Luna-omslagene er kopier fra ReadFlow-frontenden. Originalerne er bevaret.

## Kontaktformular og mailopsætning

Formularen validerer felter både i browseren og på serveren og viser kun takkesiden, når mailafsendelsen er lykkedes. Mailafsendelse kræver miljøvariabler hos hostingudbyderen eller i en lokal `.env.local`:

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- `SMTP_SECURE`: `true` for implicit TLS, normalt port 465; ellers STARTTLS, normalt port 587.
- `CONTACT_TO`: modtageradressen.
- `CONTACT_FROM`: en afsenderadresse godkendt af mailudbyderen; SMTP-brugeren bruges som fallback.

Adgangskoder og `.env`-filer skal holdes uden for Git. Manglende mailopsætning giver en reel fejlbesked; formularen foregiver ikke, at beskeden er sendt. Endelig maillevering kræver kontrol med den valgte mailudbyder.

Den konkrete opsætning for hello@penselogpixel.dk på Simply.com og den nuværende Netlify-hosting findes i [docs/simply-smtp.md](docs/simply-smtp.md).
