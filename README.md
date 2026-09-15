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

## Menu upgrade

Aggiunta una pagina dedicata `menu.html` per rispondere alla richiesta del proprietario e mostrare concretamente come potrebbe funzionare un menu digitale completo.

### Architettura scelta

- pagina `menu.html` separata, raggiungibile dalla navigazione principale;
- CTA contestuale nella sezione food della homepage;
- link nel footer;
- voce Menu nel dock mobile;
- navigazione interna sticky per categorie;
- scroll-spy / stato attivo della categoria;
- ritorno chiaro alla homepage e ai contatti.

La pagina è pensata prima di tutto come prodotto mobile: scansione rapida, titoli grandi, prezzi allineati, categorie thumb-friendly e nessuna interazione obbligatoria per leggere i contenuti.

### Contenuto simulato

Il menu NON è il menu ufficiale del locale.

Le sole categorie trattate come fatti documentati sono quelle emerse dalle fonti pubbliche: hamburger, panini, carne, birra, cocktail e vino.

Nomi dei piatti, descrizioni, allergeni e prezzi presenti in `menu.html` sono placeholder espliciti. La pagina usa etichette come `ESEMPIO`, `MENU DEMO`, `NON È IL MENU ATTUALE` e prezzi `€ —` per evitare che dati inventati vengano interpretati come offerta reale.

Nessuna voce demo viene inserita nei dati strutturati Schema.org.

### Direzione creativa

Il menu estende la grammatica visiva del sito invece di introdurre un template da ristorante:

- gig poster × pub menu × editorial typography;
- palette carbone / carta calda / ambra / rosso;
- numerazione verticale delle sezioni;
- categorie trattate come scaletta della serata;
- poster wall tipografico originale;
- niente food cards standard, chalkboard cliché o fotografie di terzi.

### Future replacement

Il contenuto è volutamente semplice da sostituire. Quando il proprietario fornirà il menu reale sarà possibile aggiornare:

- nomi;
- ingredienti / descrizioni;
- prezzi;
- allergeni;
- varianti;
- categorie;
- ordine delle categorie;

senza ridisegnare l'interfaccia e senza introdurre un CMS o backend per la demo statica.

### Accessibilità e performance

- HTML semantico e heading hierarchy;
- skip link;
- navigazione tastiera e focus visibile;
- touch target mobile minimi;
- categoria attiva non comunicata solo tramite colore;
- `prefers-reduced-motion`;
- progressive reveal con fail-safe;
- nessuna libreria o framework aggiuntivo;
- nessuna immagine o richiesta esterna necessaria al menu.

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
- dedicated simulated digital menu
- sticky menu category navigation
- active category state / scroll-spy

## Responsive QA

### Homepage — QA precedente

La homepage era già stata verificata localmente con Chromium sui viewport 320, 360, 375, 390, 430, 768, 1024 e 1440 px, senza overflow o errori JavaScript rilevati nella versione precedente. L'upgrade attuale modifica soltanto link/testo di ingresso al menu e non cambia il CSS della homepage.

### Menu page — QA upgrade 15/09/2026

QA browser-rendered eseguito con Chromium sulla versione finale di `menu.html`, `menu.css` e `menu.js` ai viewport:

- 320 px
- 360 px
- 375 px
- 390 px
- 430 px
- 768 px
- 1024 px
- 1440 px

Controlli eseguiti:

- overflow orizzontale;
- menu mobile open / close + Escape;
- menu mobile posizionato sotto l'header;
- sticky category navigation;
- category active state;
- scrolling orizzontale intenzionale della category bar;
- wrap di un nome menu volutamente molto lungo;
- descrizioni multilinea;
- categoria con più elementi;
- prezzi placeholder;
- touch target mobile;
- reveal completion;
- reduced-motion;
- ritorno a `index.html`;
- errori JavaScript / console.

Problemi trovati e corretti durante il primo pass:

1. overflow laterale a 320 e 360 px;
2. target footer troppo stretti;
3. reveal che potevano restare nascosti durante scroll sintetici estremamente rapidi;
4. stato attivo della categoria finale non sempre deterministico dopo click;
5. heading finale troppo largo a 320 px.

Fix applicati:

- contenimento della category navigation;
- riduzione/containment del poster wall su mobile;
- min-width dei link footer;
- fail-safe reveal a 1,2 secondi;
- sincronizzazione ritardata dello stato categoria dopo click;
- tipografia finale mobile ridimensionata e `overflow-wrap`.

Esito secondo pass: **PASS sugli 8 viewport** per la pagina menu, con zero overflow orizzontale, zero target mobile sotto soglia, zero reveal rimasti nascosti e zero errori console.

Nota ambiente QA: il runtime blocca la navigazione Chromium verso `localhost` e `file://`; per il test browser-rendered la stessa versione finale HTML/CSS/JS è stata caricata in-memory tramite Playwright `set_content`, quindi rendering e comportamento del menu sono stati effettivamente eseguiti in Chromium. Il controllo finale sul deployment Netlify resta consigliato per verificare anche routing/headers del server reale.

## Deploy Netlify

Sito statico, nessun build step.

- Base directory: vuota
- Build command: vuoto
- Publish directory: `.`
- Functions directory: vuota

Dopo il deploy aggiungere canonical, `og:url`, sitemap e `og:image` definitivo.
