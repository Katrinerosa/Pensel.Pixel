# Pensel & Pixel

Pensel & Pixel er et kreativt webstudio med fokus på inkluderende læring, storytelling og ReadFlow-konceptet. Denne Next.js-app præsenterer studiets ydelser, udvalgte projekter og en kontaktvej til nye samarbejder.

[Personligt portfolio](https://katrinerosa.com) · [ReadFlow](https://readflow.dk)

## Det viser projektet

- En komponentopdelt forside med services, cases, founder-sektion og kontakt.
- Navigation tilpasset både desktop og mobil.
- En ReadFlow-case, der forbinder produktidé og visuel fortælling.
- En kontaktformular med validering, serverbehandling og fejlfeedback.

## Teknologier

Next.js 16 med App Router, React 19, TypeScript og Tailwind CSS 4. Kontaktformularen bruger Zod til servervalidering og Nodemailer til SMTP.

## Routes

| Route | Indhold |
| --- | --- |
| `/` | Forside med services og udvalgte projekter |
| `/readflow` | ReadFlow-case |
| `/story` | My Story |
| `/about` | Om studiet |
| `/contact` | Kontaktformular |
| `/contact/thanks` | Kvittering efter vellykket afsendelse |

## Start lokalt

```bash
git clone https://github.com/Katrinerosa/Pensel.Pixel.git
cd Pensel.Pixel
npm ci
npm run dev
```

Åbn [http://localhost:3000](http://localhost:3000). Kontaktformularens mailafsendelse kræver SMTP-opsætningen nedenfor.

## Kontrol og build

```bash
npm run lint
npm run test:contact
npm run build
```

Kontaktformularens automatiske tests bruger en simuleret mailtransport og dækker ugyldige felter, manglende konfiguration, STARTTLS, afsender og reply-to samt fejlet afsendelse og afvist modtager. De sender ikke rigtige mails og bekræfter derfor ikke levering hos mailudbyderen.

## Find vej i koden

| Område | Filer |
| --- | --- |
| Sidens opbygning | [app/page.tsx](app/page.tsx) og [components/](components) |
| Kontaktformularens UI | [app/contact/contact-form.tsx](app/contact/contact-form.tsx) |
| Validering og mailafsendelse | [app/contact/actions.ts](app/contact/actions.ts) |
| Automatiske kontakt-tests | [scripts/contact.test.mjs](scripts/contact.test.mjs) |
| Mailopsætning | [docs/simply-smtp.md](docs/simply-smtp.md) |

## Navigation og services

Hovedmenuen bruger Services (`/#services`), Work (`/#selected-work`), ReadFlow (`https://readflow.dk`), About og Let's talk (kontakt). De samme punkter vises i mobilens bundnavigation. Services præsenterer tre ydelser uden prisliste, med en genvej til kontakt. ReadFlow har sin egen case på `/readflow` og er det første projekt i Selected Work. Founder-sektionen linker til det personlige portfolio på `https://katrinerosa.com`.

Projektbillederne bruger Katrines originale illustrationer. Tarot- og Haunted House-billeder er kopier fra portfolioets offentlige projektfiler; Luna-omslagene er kopier fra ReadFlow-frontenden. Originalerne er bevaret.

De responsive WebP-filer og faneikoner genereres med `npm run images:optimize`. Find originaler og de ønskede billedbredder i [billedoversigten](components/studio-images.json).

## Kontaktformular og mailopsætning

Formularen validerer felter både i browseren og på serveren og viser kun takkesiden, når mailafsendelsen er lykkedes. Mailafsendelse kræver miljøvariabler hos hostingudbyderen eller i en lokal `.env.local`:

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- `SMTP_SECURE`: `true` for implicit TLS, normalt port 465; ellers STARTTLS, normalt port 587.
- `CONTACT_TO`: modtageradressen.
- `CONTACT_FROM`: en afsenderadresse godkendt af mailudbyderen; SMTP-brugeren bruges som fallback.

Adgangskoder og `.env`-filer skal holdes uden for Git. Manglende mailopsætning giver en reel fejlbesked; formularen foregiver ikke, at beskeden er sendt. Endelig maillevering kræver kontrol med den valgte mailudbyder.

Den konkrete opsætning for hello@penselogpixel.dk på Simply.com og den nuværende Netlify-hosting findes i [docs/simply-smtp.md](docs/simply-smtp.md).
