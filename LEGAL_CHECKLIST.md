# LEGAL CHECKLIST — MICHELE SCHIANO MORIELLO | SITO WEB PROFESSIONALE

Questo documento riassume lo stato di conformità legale, privacy (GDPR, Regolamento UE 2016/679) ed ePrivacy (Linee guida Garante Privacy 10 giugno 2021) del sito web per l'interior designer Michele Schiano Moriello.

---

## 1. Elementi Implementati e Tecnicamente Verificati

- [x] **Privacy by Design & Default (Art. 25 GDPR):**
  - Il sito è realizzato con architettura statica ad alte prestazioni (Astro).
  - **Zero tracker di terze parti:** non sono stati installati Google Analytics, Meta Pixel, Hotjar o strumenti pubblicitari comportamentali.
  - **Font self-hosted al 100%:** le famiglie tipografiche *Space Grotesk* e *Cormorant Garamond* sono erogate in locale dal server in formato WOFF2; nessuna connessione verso Google Fonts CDN a runtime, azzerando il rischio di trasferimento illecito di indirizzi IP verso server extra-UE.
  - **Zero cookie di profilazione o marketing:** nessun cookie non tecnico o di terze parti viene rilasciato al caricamento della pagina o durante la navigazione.
  - **Esclusione del cookie banner preventivo:** in conformità alle Linee Guida del Garante Privacy del 10 giugno 2021 (doc. web n. 9677876), in assenza totale di tracciatori o cookie soggetti a consenso preventivo, non è dovuto alcun banner invasivo. L'esperienza di consultazione resta fluida ed etica.
- [x] **Contatto Diretto Funzionante:**
  - Nessun modulo contatti fittizio privo di destinazione o backend: l'utente contatta direttamente lo studio tramite collegamento telefonico esplicito (`tel:+393381013392`).
- [x] **Informativa Privacy Completa (Art. 13 GDPR):**
  - Pagina dedicata `/privacy-policy` raggiungibile da tutte le sezioni del sito tramite link nel footer.
  - Descrizione accurata dei trattamenti reali (log tecnici di rete del web server per diagnostica e sicurezza).
  - Indicazione dei diritti degli interessati (Artt. 15-22 GDPR) e diritto di reclamo al Garante italiano per la protezione dei dati personali.
- [x] **Informativa Cookie Dedicata:**
  - Pagina `/cookie-policy` raggiungibile dal footer, con descrizione trasparente delle tecnologie impiegate e istruzioni per la gestione dei cookie sui browser principali.
- [x] **Trasparenza Collegamenti Esterni:**
  - I link a servizi esterni (scheda Houzz, Google Maps) sono esclusivamente collegamenti testuali attivati dall'utente (`rel="noopener noreferrer"`); nessuna mappa terzi incorporata tramite iframe all'avvio.
- [x] **Autenticità dei Contenuti e Assenza di Rich Snippet Ingannevoli:**
  - Le 4 recensioni (tutte a 5 stelle) sono autentiche e attribuite chiaramente alla fonte Houzz.
  - Non è stato inserito markup Schema.org `aggregateRating` autocontrollato al solo fine di forzare recensioni nei motori di ricerca, in conformità alle Google Search Essentials.

---

## 2. Elementi da Confermare con Michele Schiano Moriello

Prima del go-live pubblico sul dominio ufficiale definitivo, occorre confermare con il professionista i seguenti dati di trasparenza fiscale e commerciale previsti dalla legge italiana:

| Elemento | Stato Attuale | Azione Richiesta |
|---|---|---|
| **Partita IVA** | Non presente nelle fonti pubbliche consultate | Inserire nel footer e nell'informativa (obbligo art. 35, comma 1, D.P.R. 633/1972 per chi esercita attività con sito web). |
| **Forma Giuridica / Ditta Individuale** | Ditta individuale / Libero professionista | Confermare esatta denominazione fiscale. |
| **Indirizzo PEC (Posta Elettronica Certificata)** | Non presente nelle fonti consultate | Indicare la PEC istituzionale da inserire tra i recapiti legali. |
| **Email di contatto istituzionale** | Non presente (previsto solo telefono cellulare) | Se disponibile, indicare l'indirizzo email di studio (es. `info@...` o personale). |
| **Iscrizione ad Albi o Ordini professionali** | Non dichiarata | Verificare se il professionista è iscritto ad albi o associazioni di categoria (es. AIPI, Ordine Architetti o legge 4/2013). |
| **Hosting Provider definitivo** | Ambiente locale di anteprima | Indicare il fornitore contrattualizzato definitivo (es. Cloudflare Pages, Vercel, Hetzner, Server dedicato UE) per aggiornare la clausola sul Responsabile del Trattamento (Art. 28 GDPR). |
| **Dominio ufficiale registrato** | `https://micheleschianomoriello.it` (impostato come canonico di default) | Verificare l'esatto dominio registrato o in fase di registrazione. |

---

## 3. Verifiche Giuridiche prima della Pubblicazione Definitiva

1. **Integrazione del numero di Partita IVA nella home page:** Ai sensi dell'art. 35, comma 1 del DPR n. 633/1972, l'indicazione del numero di partita IVA nella home page del sito web è obbligatoria per tutti i soggetti che svolgono attività commerciale o professionale in Italia.
2. **Aggiornamento dell'informativa privacy con i dati del provider di hosting:** Appena attivato il server di produzione definitivo, inserire la ragione sociale e la sede dell'hosting provider nel registro dei trattamenti e nella sezione "Destinatari dei dati".
3. **Eventuale introduzione futura di strumenti di analisi o marketing:** Qualora in futuro si decidesse di implementare strumenti di analytics non anonimizzati o tracciatori di conversione (es. Google Ads, Meta Pixel), sarà obbligatorio integrare una Consent Management Platform (CMP) a norma con blocco preventivo dei cookie e registro dei consensi. Nella configurazione attuale, nessun banner è necessario né opportuno.
