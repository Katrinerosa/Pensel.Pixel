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
