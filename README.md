# Osteria del Vicolo Stretto Pub — Demo

Concept website demo progettato e sviluppato da Punto Due Studio per Osteria del Vicolo Stretto Pub, Colorno (PR).

> Concept dimostrativo non commissionato · Punto Due Studio

## Creative thesis

**Il sito è un vicolo: stretto all'ingresso, si apre nella serata.**

Il concept trasforma il nome del locale in struttura visiva: due “pareti” comprimono l'hero e un corridoio centrale conduce verso burger, birra e nightlife. È volutamente diverso dalle altre demo Punto Due Studio.

## Dati pubblici utilizzati

Verifica effettuata il 15/09/2026.

- Nome: Osteria del Vicolo Stretto Pub
- Indirizzo: Via XX Settembre 23, 43052 Colorno PR
- Telefono principale usato: +39 366 734 9781
- Facebook: https://www.facebook.com/vicolo.pub/
- Instagram: @vicolostrettopub
- Categorie ricorrenti: pub, birreria / beer hall, gastropub, hamburger restaurant, steakhouse
- Fascia indicativa riportata da Restaurant Guru: €10–20 a persona
- Google rating riportato da Restaurant Guru: 4,4/5 su 256 recensioni
- Offerta citata dalle fonti: hamburger, panini, carne, birra, cocktail, vino
- Le recensioni e schede pubbliche associano il locale a musica, karaoke, DJ e serate vivaci; la programmazione corrente va verificata sui social.

## Orari usati nella demo

Fonte principale: Restaurant Guru, aggiornato 28/06/2026.

- Lunedì: chiuso
- Martedì: 17:00–01:30
- Mercoledì: 17:00–01:30
- Giovedì: 17:00–01:30
- Venerdì: 17:00–03:00
- Sabato: 17:00–03:00
- Domenica: 17:00–01:30

## Conflitti tra fonti

Una pagina Eatbu ancora online mostra orari 17:00–03:00 tutti i giorni, un numero 348 864 7615 e l'email `vicolostrettopub@alice.it`. Fonti più recenti convergono invece su +39 366 734 9781; Restaurant Guru mostra un calendario più dettagliato ed è stato aggiornato nel giugno 2026. La demo usa quindi il numero 366 734 9781 e gli orari di Restaurant Guru. L'email non viene mostrata.

## Fonti principali

- Restaurant Guru — https://restaurantguru.it/Vicolo-Stretto-Pub-Colorno
- Wanderlog — https://wanderlog.com/place/details/2762780/osteria-del-vicolo-stretto-pub
- Facebook — https://www.facebook.com/vicolo.pub/
- Eatbu — https://vicolo-stretto-pub.eatbu.com/?lang=it

## Distinctive decisions

1. Hero costruito come un vicolo prospettico.
2. Sistema visuale late-night pub: carbone, carta calda, ambra-birra e rosso segnale.
3. Artwork originale CSS per burger e spillatore; nessun re-hosting di fotografie di terzi.
4. Nightlife resa con ritmo, equalizer e segnaletica, non gallery standard.
5. Orari e social diventano elementi di conversione con mobile action dock.

## Funzionalità

- responsive navigation
- click-to-call
- Google Maps
- Instagram e Facebook
- mobile action dock
- scroll progress
- subtle pointer interaction nell'hero desktop
- progressive reveal animations
- `prefers-reduced-motion`
- keyboard focus states
- Schema.org `BarOrPub`
- SEO / Open Graph base
- custom 404
- Netlify configuration
- security headers

## Responsive QA

Eseguito localmente con Chromium sui viewport: 320, 360, 375, 390, 430, 768, 1024 e 1440 px. Verificati overflow orizzontale, menu mobile, console/page errors e layout principali. Nessun overflow o errore JS rilevato nella versione caricata.

## Deploy Netlify

Sito statico, nessun build step.

- Base directory: vuota
- Build command: vuoto
- Publish directory: `.`
- Functions directory: vuota

Dopo il deploy aggiungere canonical, `og:url`, sitemap e `og:image` definitivo.
