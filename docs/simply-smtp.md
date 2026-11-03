# Simply.com SMTP på den eksisterende Netlify-hosting

Det offentlige site på `https://www.penselogpixel.dk` returnerede `server: Netlify` og `x-powered-by: Next.js` ved kontrollen 3. november 2026. Kontaktformularen er en Next.js Server Action i Node.js-runtime; Netlify understøtter dette via sine serverfunktioner. Mailkontoen kan fortsat ligge hos Simply.com. Der er ikke tilføjet en ny mailtjeneste.

## Netlify-miljøvariabler

Sæt følgende i Netlify-projektets miljøvariabler. De skal være tilgængelige for **Functions** i den relevante deploy-kontekst, og ændringer kræver et nyt deploy. De må ikke hedde `NEXT_PUBLIC_…`.

```dotenv
SMTP_HOST=smtp.simply.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=hello@penselogpixel.dk
SMTP_PASS=<mailkontoens adgangskode, indtastet privat i Netlify>
CONTACT_FROM=hello@penselogpixel.dk
CONTACT_TO=hello@penselogpixel.dk
```

`SMTP_SECURE=false` på port 587 betyder STARTTLS. Koden kræver TLS-opgradering, validerer certifikatet og tillader mindst TLS 1.2. Brugernavn og adgangskode er den eksisterende mailkontos login. Afsenderen er den godkendte egen adresse; besøgendes adresse bruges kun som `Reply-To`.

`websmtp.simply.com` må ikke bruges fra Netlify: Simply begrænser den til egne webservere. Den almindelige SMTP-server er `smtp.simply.com`.

Simply.coms Linux-webhotel kan hoste statiske filer, men kan ikke køre denne apps Next.js-server eller Server Actions. Der er derfor ikke ændret hosting eller lavet en statisk eksport/PHP-omskrivning. Netlify bevares som hjemmesidehosting, Simply som mailudbyder.

## Kontrol

`npm run test:contact` tester servervalidering, manglende opsætning, sikker SMTP-konfiguration, korrekt Reply-To samt fejl og afviste modtagere. Nodemailer erstattes i testen; den kontakter ingen server og sender ingen mail.

En lokal `.env.local` er klargjort med ovenstående ikke-hemmelige værdier og tom adgangskode. Filen er Git-ignoreret og kun læsbar for den lokale bruger. Indtast adgangskoden privat, og kontrollér login uden at sende en mail:

```bash
node --env-file=.env.local scripts/verify-smtp.mjs
```

Dette er en lokal forbindelseskontrol. Endelig kontrol skal ske med miljøvariablerne på Netlify og en godkendt testhenvendelse efter deploy; lokal adgang til SMTP beviser ikke Netlifys netværksadgang eller levering til indbakken.

Der er ikke sendt testmail, ændret DNS eller gemt adgangskode i kildekoden. Formel succes gives kun, når SMTP accepterer modtageren. SMTP-accept er ikke en garanti for senere levering til indbakken.

## Officielle kilder

- [Simply.com: mailopsætning](https://www.simply.com/dk/support/faq/mail/115-opsaetning-af-mail/)
- [Simply.com: websmtp til egne webservere](https://www.simply.com/dk/support/faq/mail/23-udgaende-mailserver-til-scripts/)
- [Simply.com: begrænsninger for Node.js på webhotel](https://www.simply.com/dk/support/faq/general/837-kan-jeg-kore-nodejs-applikationer-pa-mit-webhotel/)
- [Netlify: Next.js og Server Actions](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/)
- [Nodemailer: SMTP og STARTTLS](https://nodemailer.com/smtp)
