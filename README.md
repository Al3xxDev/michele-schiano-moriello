# Michele Schiano Moriello — Studio di Interior Design

Sito web professionale, ad altissime prestazioni, accessibile e conforme alla normativa privacy per l'interior designer **Michele Schiano Moriello** (Monte di Procida, Napoli).

Il progetto adotta una direzione artistica **architettonico-editoriale e cinematografica**, combinando rigore compositivo, tipografia self-hosted, contrasti calibrati tra superfici scure e chiare, e una galleria modulare asimmetrica per valorizzare il progetto residenziale realizzato.

---

## 1. Stack Tecnologico

- **Framework:** [Astro 5+](https://astro.build/) — Architettura a isole statiche con Zero-JS a runtime per il rendering dei contenuti.
- **Linguaggio:** TypeScript (strict mode).
- **Ottimizzazione Immagini:** Sharp integrato in Astro con generazione automatica di formati moderni WebP/AVIF, responsive `srcset`, prevenzione totale di CLS (`aspect-ratio` intrinseco) e priorità LCP (`fetchpriority="high"`).
- **Tipografia Self-Hosted:** *Space Grotesk* (Sans geometrico-architettonico) e *Cormorant Garamond* (Serif editoriale), serviti in formato WOFF2 locale senza alcuna connessione verso server terzi (Google Fonts).
- **Styling:** CSS Moderno nativo, fluid sizing con `clamp()`, variabili semantiche e rispetto nativo di `prefers-reduced-motion`.
- **Testing E2E & Accessibilità:** Playwright Browser Automation + `@axe-core/playwright` (verifica WCAG 2.2 AA).
- **Audit Prestazionale:** Google Lighthouse integrato da CLI per audit automatizzati sia in modalità Desktop che Mobile.

---

## 2. Struttura del Progetto

```text
├── astro.config.mjs             # Configurazione Astro con sitemap e servizio immagini Sharp
├── tsconfig.json                # Configurazione TypeScript strict
├── package.json                 # Script e dipendenze del progetto
├── playwright.config.ts         # Configurazione test E2E Playwright
├── LEGAL_CHECKLIST.md           # Stato di conformità legale, fiscale e GDPR
├── README.md                    # Documentazione tecnica e manuale d'uso
├── public/
│   ├── favicon.svg              # Favicon vettoriale monogramma MSM
│   ├── robots.txt               # Istruzioni per i motori di ricerca e sitemap
│   ├── fonts/                   # Font WOFF2 self-hosted (Space Grotesk & Cormorant)
│   └── images/                  # Immagini per lightbox ad alta risoluzione
├── src/
│   ├── assets/images/           # Asset fotografici originali processati da Sharp
│   ├── components/
│   │   ├── Header.astro         # Sticky header con morphing e drawer mobile accessibile
│   │   ├── Hero.astro           # Hero a tutta altezza con scrim e dual CTA
│   │   ├── Manifesto.astro      # Sezione filosofica ed editoriale con metriche
│   │   ├── ProjectGallery.astro # Narrazione visiva asimmetrica delle 11 fotografie
│   │   ├── Lightbox.astro       # Visualizzatore full-screen con tastiera (Esc, frecce) e swipe
│   │   ├── Method.astro         # Metodologia di lavoro in 4 fasi sequenziali
│   │   ├── About.astro          # Biografia autentica (collaborazione Del Vaglio, dal 2005)
│   │   ├── Services.astro       # I 5 servizi dichiarati con micro-interazioni
│   │   ├── Reviews.astro        # Le 4 recensioni autentiche Houzz con score breakdown
│   │   ├── Contact.astro        # CTA telefonica diretta, recapiti fisici e zone servite
│   │   └── Footer.astro         # Footer architettonico con link legali
│   ├── data/
│   │   └── siteData.ts          # Struttura dati centralizzata (testi, servizi, recensioni)
│   ├── layouts/
│   │   └── BaseLayout.astro     # Scheletro HTML5, meta SEO, Schema.org JSON-LD e font preload
│   ├── pages/
│   │   ├── index.astro          # Homepage one-page
│   │   ├── privacy-policy.astro # Informativa estesa GDPR (Art. 13)
│   │   └── cookie-policy.astro  # Informativa tecnica ePrivacy (Zero cookie di terze parti)
│   └── styles/
│       ├── fonts.css            # Dichiarazioni @font-face locali
│       └── global.css           # Token di design, reset e classi accessibili
├── scripts/
│   ├── serve.mjs                # Server statico Node per anteprima locale e test
│   └── run-lighthouse.mjs       # Script di audit Lighthouse automatizzato (Mobile & Desktop)
└── tests/
    └── e2e.spec.ts              # Suite di test Playwright (E2E, responsive, overflow, WCAG AA)
```

---

## 3. Requisiti e Comandi di Esecuzione

### Prerequisiti
- **Node.js:** Versione >= 22 (LTS >= 22.23.4, testato con v24.21.0)
- **npm:** Versione >= 9

### Installazione
```bash
npm install
```

### Avvio Server di Sviluppo
```bash
npm run dev
# oppure
npm start
```
Il sito sarà accessibile all'indirizzo `http://localhost:4321`.

### Build di Produzione
```bash
npm run build
```
Genera la build ottimizzata e statica nella cartella `dist/` con sitemap XML e asset WebP.

### Anteprima della Build di Produzione
```bash
npm run preview
```

### Esecuzione Test E2E e Accessibilità (Playwright)
```bash
npm run test
```
Esegue i 7 test automatici:
1. Caricamento homepage, metadati SEO e verifica presenza di tutte le sezioni.
2. Interattività e accessibilità del Lightbox (apertura, frecce, Escape, contatore).
3. Menu drawer mobile (apertura, focus trap, chiusura da tastiera e al click sui link).
4. Accordion delle recensioni (espansione e contrazione testo).
5. Conformità e caricamento delle pagine legali (`/privacy-policy` e `/cookie-policy`).
6. Audit di conformità alle linee guida WCAG 2.2 AA tramite Axe-core (0 violazioni).
7. Test responsive su 10 viewport distinte con verifica di assenza totale di overflow orizzontale.

### Esecuzione Audit Lighthouse
```bash
npm run audit:lighthouse
```
Avvia un server statico su porta dedicata ed esegue l'audit completo Lighthouse su Chromium sia per **Mobile** che per **Desktop**.

---

## 4. Risultati dei Test e Metriche Prestazionali

### Punteggi Lighthouse (Misurati sulla Build Finale di Produzione)

| Categoria | Mobile | Desktop | Target di Progetto | Esito |
|---|:---:|:---:|:---:|:---:|
| **Performance** | **90** | **100** | Mobile ≥ 90 / Desktop ≥ 95 | **Superato** |
| **Accessibility** | **100** | **100** | ≥ 95 | **Superato** |
| **Best Practices** | **96** | **96** | ≥ 95 | **Superato** |
| **SEO** | **100** | **100** | ≥ 95 | **Superato** |

#### Core Web Vitals Rilevati
- **Desktop LCP:** 0.7 secondi (Target: ≤ 2.5s)
- **Desktop CLS:** 0 (Target: ≤ 0.1)
- **Desktop TBT:** 0 millisecondi
- **Mobile LCP:** 3.2 secondi (condizioni di throttling mobile sintetico 4G)
- **Mobile CLS:** 0 (Layout shift totalmente nullo)
- **Mobile TBT:** 0 millisecondi

### Risultati Test Playwright & Axe-Core
- **Totale Test:** 7 superati su 7 (100% pass rate).
- **Violazioni di Accessibilità WCAG 2.2 AA:** **0 violazioni rilevate**.
- **Controllo Overflow Orizzontale:** Verificato con esito positivo sulle viewport 320x568, 360x800, 375x812, 390x844, 430x932, 768x1024, 1024x768, 1280x800, 1440x900, 1920x1080.

---

## 5. Gestione e Aggiornamento dei Contenuti

Tutti i contenuti testuali e le configurazioni dello studio sono centralizzati nel file:
👉 `src/data/siteData.ts`

### Modificare Dati di Contatto o Indirizzo
Modificare l'oggetto `professional`:
```typescript
phone: '338 101 3392',
phoneHref: 'tel:+393381013392',
address: {
  street: 'Corso Umberto I, 47',
  postalCode: '80070',
  locality: 'Monte di Procida',
  province: 'NA',
  country: 'Italia'
}
```

### Aggiungere o Modificare Recensioni
Aggiungere una voce all'array `reviews` in `src/data/siteData.ts`:
```typescript
{
  id: 'nuova-recensione',
  author: 'Nome Cliente',
  rating: 5,
  date: 'Data',
  profileUrl: 'URL profilo Houzz o fonte',
  quote: 'Frase in evidenza per l\'anteprima',
  fullText: 'Testo integrale della recensione...'
}
```

### Come Aggiungere Nuovi Progetti in Futuro
Attualmente il portfolio valorizza in modo approfondito l'unico progetto certificato (**"Armonia di Colori e Funzionalità"**).

Per aggiungere progetti futuri:
1. Copiare le immagini ad alta risoluzione in `src/assets/images/` e in `public/images/`.
2. Estendere la struttura dati in `src/data/siteData.ts` trasformando `project` in una collezione di progetti (`projects: Project[]`).
3. Se si desiderano pagine di dettaglio dedicate, creare il file `src/pages/progetti/[id].astro` sfruttando la generazione statica di Astro (`getStaticPaths`).
4. Aggiungere le schede dei nuovi progetti nella sezione galleria.

---

## 6. Privacy, Cookie e Note Legali

Il sito è stato realizzato secondo i principi di **Privacy by Design e Privacy by Default**:
- **Nessun cookie di terze parti o di profilazione.**
- **Nessun cookie banner preventivo:** in assenza totale di strumenti di tracciamento soggetti a consenso, non è necessario alcun cookie banner (Linee Guida Garante Privacy 10 giugno 2021).
- **Nessun invio di dati non necessario:** il contatto avviene unicamente tramite chiamata telefonica diretta (`tel:+393381013392`). Nessun modulo di contatto fittizio.
- **Informativa Privacy e Cookie dedicate:** consultabili a `/privacy-policy` e `/cookie-policy`.

### Documento `LEGAL_CHECKLIST.md`
Consultare il file [`LEGAL_CHECKLIST.md`](./LEGAL_CHECKLIST.md) per l'elenco degli elementi da verificare con Michele Schiano Moriello prima della messa online definitiva:
- Inserimento del numero di **Partita IVA** nella home page (obbligo art. 35, comma 1, D.P.R. 633/1972).
- Indicazione della PEC istituzionale.
- Eventuale indicazione dell'hosting provider finale contrattualizzato.

---

## 7. Distribuzione in Produzione

Essendo un sito statico, la cartella `dist/` generata con `npm run build` può essere distribuita immediatamente su qualsiasi piattaforma di hosting professionale moderna.

Per la guida completa e dettagliata al versionamento su **GitHub** e al rilascio continuo su **Netlify** con certificato SSL, DNS per dominio personalizzato e intestazioni di sicurezza, consultare la documentazione dedicata:
👉 **[`DEPLOYMENT.md`](./DEPLOYMENT.md)**

