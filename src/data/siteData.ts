export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  profileUrl: string;
  quote: string;
  fullText: string;
}

export interface Service {
  id: string;
  num: string;
  title: string;
  description: string;
}

export interface MethodStep {
  step: string;
  title: string;
  description: string;
}

export interface ProjectPhoto {
  id: string;
  filename: string;
  title: string;
  caption: string;
  alt: string;
  orientation: 'landscape' | 'portrait';
  aspectRatio: string;
}

export const siteData = {
  meta: {
    siteTitle: 'Michele Schiano Moriello | Interior Designer Monte di Procida & Napoli',
    siteDescription: 'Studio dell\'interior designer Michele Schiano Moriello. Spazi che raccontano chi li abita: architettura d\'interni, arredi su misura e consulenza a Napoli e Monte di Procida.',
    siteUrl: 'https://micheleschianomoriello.it',
    author: 'Michele Schiano Moriello',
    locale: 'it_IT',
  },
  professional: {
    name: 'Michele Schiano Moriello',
    title: 'Interior Designer',
    experienceStartYear: 2005,
    delVaglioCollabYear: 2007,
    phone: '338 101 3392',
    phoneHref: 'tel:+393381013392',
    address: {
      street: 'Corso Umberto I, 47',
      postalCode: '80070',
      locality: 'Monte di Procida',
      province: 'NA',
      country: 'Italia',
      full: 'Corso Umberto I, 47 — 80070 Monte di Procida (NA), Italia',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Corso+Umberto+I+47+80070+Monte+di+Procida+NA'
    },
    serviceAreas: ['Monte di Procida', 'Napoli'],
    houzzProfileUrl: 'https://www.houzz.it/pro/webuser-709664557'
  },
  hero: {
    wordmark: 'MICHELE SCHIANO MORIELLO',
    descriptor: 'INTERIOR DESIGNER',
    headline: 'Spazi che raccontano chi li abita.',
    subheadline: 'Equilibrio armonico tra rigore architettonico, calore materico e personalizzazione sartoriale degli interni.',
    primaryCta: 'Scopri il progetto',
    secondaryCta: 'Parliamo della tua casa'
  },
  manifesto: {
    tag: 'Manifesto Progettuale',
    headline: 'L\'equilibrio tra forma, funzione e autenticità personale.',
    paragraphs: [
      'Una casa non è un catalogo di tendenze passeggere, ma un organismo vivo che deve accogliere e rispecchiare i ritmi, le memorie e la sensibilità di chi la vive quotidianamente.',
      'Ogni spazio nasce dal dialogo intimo con la committenza: ascoltiamo bisogni e visioni per poi distillare soluzioni dove la purezza delle linee dialoga con la morbidezza dei materiali e l\'eccellenza artigianale.'
    ]
  },
  project: {
    title: 'Armonia di Colori e Funzionalità',
    category: 'Residenza Privata',
    scope: 'Interior design, arredo su misura, illuminotecnica',
    lead: 'Un progetto residenziale che esplora il dialogo tra geometrie pure, partizioni vetrate cannettate e una palette sofisticata di terre cotte, sabbia e caldi accenti materici.',
    description: 'Dalla transizione fluida tra zona giorno e cucina alla riservatezza della suite padronale e degli ambienti di servizio, ogni elemento è stato disegnato e calibrato su misura per un\'esperienza abitativa raffinata e funzionale.',
    houzzSourceUrl: 'https://www.houzz.it/pro/webuser-709664557'
  },
  photos: [
    {
      id: 'armonia-02',
      filename: 'Armonia-di-colori-e-funzionalita2.png',
      title: 'Zona Living & Dining',
      caption: 'Prospettiva d\'insieme dalla zona living verso il varco architettonico della cucina a vista con ante scorrevoli.',
      alt: 'Zona living e sala da pranzo con tavolo moderno e portale architettonico verso la cucina luminosa.',
      orientation: 'landscape',
      aspectRatio: '2089 / 1394'
    },
    {
      id: 'armonia-03',
      filename: 'Armonia-di-colori-e-funzionalita3.png',
      title: 'Parete TV & Boiserie Cannettata',
      caption: 'Mobile contenitore su disegno con pannellatura cannettata rosa antico, vani a giorno illuminati e libreria sospesa.',
      alt: 'Soggiorno con parete TV su misura con listelli verticali color terracotta, mensole illuminate e divano moderno.',
      orientation: 'landscape',
      aspectRatio: '2089 / 1394'
    },
    {
      id: 'armonia-01',
      filename: 'Armonia-di-colori-e-funzionalita1.png',
      title: 'Inquadratura Prospettica della Sala da Pranzo',
      caption: 'Scorcio architettonico centrato attraverso l\'imbotte color terracotta sul tavolo da pranzo e la sospensione circolare.',
      alt: 'Inquadratura simmetrica attraverso cornice architettonica verso il tavolo da pranzo e lampadario a tamburo.',
      orientation: 'portrait',
      aspectRatio: '928 / 1394'
    },
    {
      id: 'armonia-04',
      filename: 'Armonia-di-colori-e-funzionalita4.png',
      title: 'Isola e Cucina su Misura',
      caption: 'Isola snack con rivestimento effetto marmo venato, sgabelli ergonomici e armadiature lineari fino a soffitto.',
      alt: 'Cucina contemporanea con penisola in marmo venato, apparecchiatura curata e colonne laccate chiare.',
      orientation: 'portrait',
      aspectRatio: '929 / 1394'
    },
    {
      id: 'armonia-05',
      filename: 'Armonia-di-colori-e-funzionalita5.png',
      title: 'Galleria d\'Ingresso & Corridoio',
      caption: 'Percorso distributivo valorizzato da cornici botaniche, pouf in velluto avorio e nicchia scenografica a fondo parete.',
      alt: 'Corridoio elegante con stampe incorniciate alle pareti, pouf tondo e nicchia con vasi decorativi.',
      orientation: 'portrait',
      aspectRatio: '927 / 1394'
    },
    {
      id: 'armonia-06',
      filename: 'Armonia-di-colori-e-funzionalita6.png',
      title: 'Scorrevole Cannettata & Dettaglio Sartoriale',
      caption: 'Particolare costruttivo delle ante scorrevoli intelaiate con listelli verticali laccati e cristallo fumé bronzato.',
      alt: 'Dettaglio ravvicinato di anta scorrevole con telaio rosa antico e partizioni vetrate verticali.',
      orientation: 'portrait',
      aspectRatio: '930 / 1394'
    },
    {
      id: 'armonia-07',
      filename: 'Armonia-di-colori-e-funzionalita7.png',
      title: 'Suite Padronale & Zona Vanity',
      caption: 'Cassettiera sospesa a giorno, specchio a tutta altezza e vista di passaggio verso gli ambienti notte.',
      alt: 'Camera da letto padronale con cassettiera scanalata in tonalità cipria, specchio verticale e vasi d\'arte.',
      orientation: 'landscape',
      aspectRatio: '2086 / 1394'
    },
    {
      id: 'armonia-08',
      filename: 'Armonia-di-colori-e-funzionalita8.png',
      title: 'Alcova Letto & Tonalità Ocra',
      caption: 'Zona letto con testata tessile, pittura materica giallo senape in nicchia e lampada a sospensione in vetro rigato.',
      alt: 'Letto matrimoniale in nicchia ocra caldo con cuscini decorativi e lampada a sospensione in vetro.',
      orientation: 'portrait',
      aspectRatio: '928 / 1394'
    },
    {
      id: 'armonia-09',
      filename: 'Armonia-di-colori-e-funzionalita9.png',
      title: 'Bagno Principale & Lavabo Terracotta',
      caption: 'Monoblocco portalavabo in laccato matt mattone con catino sagomato in finitura opaca e specchiera geometrica arcuata.',
      alt: 'Mobile bagno moderno color cotto con lavabo ovale e specchio sagomato geometrico a parete.',
      orientation: 'portrait',
      aspectRatio: '928 / 1394'
    },
    {
      id: 'armonia-10',
      filename: 'Armonia-di-colori-e-funzionalita10.png',
      title: 'Home Office & Nicchia Studio',
      caption: 'Scrittoio integrato su misura con mensole a sbalzo in legno massello naturale e cassettiera dedicata.',
      alt: 'Postazione di lavoro domestica con scrivania e mensole in legno caldo, sedia in pelle e arredi curati.',
      orientation: 'portrait',
      aspectRatio: '930 / 1394'
    },
    {
      id: 'armonia-11',
      filename: 'Armonia-di-colori-e-funzionalita11.png',
      title: 'Bagno En-Suite & Mobile Scanalato',
      caption: 'Mobile lavabo avorio con lavorazione millerighe, piano in quarzo chiaro, specchio circolare e lastre in gres statuario.',
      alt: 'Bagno con mobile cannettato bianco panna, specchio rotondo e rivestimento parete effetto marmo statuario.',
      orientation: 'portrait',
      aspectRatio: '930 / 1394'
    }
  ] as ProjectPhoto[],
  method: [
    {
      step: '01',
      title: 'Ascolto',
      description: 'Ogni progetto comincia dalla comprensione autentica delle vostre abitudini, delle esigenze pratiche e dell\'immaginario visivo desiderato per l\'abitare.'
    },
    {
      step: '02',
      title: 'Progettazione',
      description: 'Traduzione dell\'idea in schemi spaziali rigorosi, valorizzazione della luce naturale, ottimizzazione dei percorsi e studio attento delle volumetrie.'
    },
    {
      step: '03',
      title: 'Cura del Dettaglio',
      description: 'Accurata selezione materica: legni naturali, pietre, trame tessili, palette cromatiche calibrate e arredi su misura disegnati al millimetro.'
    },
    {
      step: '04',
      title: 'Realizzazione',
      description: 'Accompagnamento rigoroso verso l\'opera finita, affinché la visione concordata diventi realtà coerente, armoniosa e durevole nel tempo.'
    }
  ] as MethodStep[],
  about: {
    title: 'Dalla passione d\'infanzia all\'interior design internazionale.',
    lead: 'Oltre vent\'anni di dedizione alla progettazione degli spazi, guidati dalla ricerca dell\'eccellenza e dal dialogo continuo con la committenza.',
    paragraphs: [
      'La mia passione per l’architettura è nata da bambino: passavo ore a osservare cantieri e a costruire piccole ‘case’ con qualsiasi oggetto trovassi. Quella curiosità è diventata la base di un percorso che mi ha portato nel tempo a trasformare ciò che amo nel mio lavoro.',
      'Dal 2005 mi occupo di progettazione: ho iniziato collaborando con un’azienda campana specializzata in case prefabbricate, un’esperienza preziosa che mi ha insegnato l’importanza dell’ottimizzazione degli spazi e della gestione efficiente dei processi.',
      'Nel 2007 ho incontrato Pietro Del Vaglio, interior designer di fama internazionale: una sintonia immediata, umana e professionale, fondata su valori comuni come la cura del dettaglio, la dedizione e la ricerca dell’eccellenza. Questa collaborazione mi ha permesso di affrontare progetti sempre più ambiziosi, in Italia, negli Stati Uniti, in Svizzera e in Bulgaria.',
      'Negli ultimi anni mi sono specializzato nell’home design e home decor, con un approccio che intreccia architettura, interior design e personalizzazione totale degli spazi. Il mio obiettivo è creare ambienti unici, armoniosi e coerenti, dove ogni dettaglio rifletta davvero la personalità di chi li abita.'
    ]
  },
  services: [
    {
      id: 'servizio-1',
      num: '01',
      title: 'Design degli Interni',
      description: 'Progettazione integrale dell\'atmosfera domestica: combinazione di colori, texture materiche, illuminotecnica e arredi d\'autore per definire un carattere unico.'
    },
    {
      id: 'servizio-2',
      num: '02',
      title: 'Pianificazione degli Spazi',
      description: 'Analisi funzionale della pianta: studio dei flussi di movimento, ridistribuzione dei tramezzi ed eliminazione degli angoli morti per moltiplicare l\'ampiezza percepita.'
    },
    {
      id: 'servizio-3',
      num: '03',
      title: 'Progettazione Architettonica',
      description: 'Riconfigurazione strutturale ed estetica dell\'immobile: studio dei volumi, portali architettonici, nicchie e integrazione degli impianti tecnologici.'
    },
    {
      id: 'servizio-4',
      num: '04',
      title: 'Consulenza Online',
      description: 'Servizio di consulenza a distanza per clienti ovunque situati: revisione dei layout, proposte di palette, orientamento stilistico e selezione arredi.'
    },
    {
      id: 'servizio-5',
      num: '05',
      title: 'Progettazione Completa',
      description: 'Gestione a 360° del progetto d\'interni, dal primo concept schizzato fino al disegno esecutivo degli elementi artigianali su misura e alla posa finale.'
    }
  ] as Service[],
  reviewsSummary: {
    rating: '5,0',
    maxRating: '5',
    totalReviews: 4,
    headline: 'Le parole di chi ha scelto il suo lavoro',
    categories: [
      { name: 'Qualità del lavoro', score: '5,0' },
      { name: 'Comunicazione', score: '5,0' },
      { name: 'Rapporto qualità/prezzo', score: '5,0' }
    ],
    source: 'Valutazioni autentiche verificate su Houzz'
  },
  reviews: [
    {
      id: 'recensione-pugliese',
      author: 'Michela Pugliese',
      rating: 5,
      date: '5 ottobre 2026',
      profileUrl: 'https://www.houzz.it/user/michela-pugliese',
      quote: 'Riesce a trovare il giusto equilibrio tra gusto personale, funzionalità ed eleganza, mantenendo sempre una visione estetica coerente e raffinata.',
      fullText: 'Fin dal primo momento ho apprezzato la sua professionalità come Interior designer, la grande disponibilità, l’attenzione ai dettagli e la capacità di comprendere davvero ciò che desideravo. Riesce a trovare il giusto equilibrio tra gusto personale, funzionalità ed eleganza, mantenendo sempre una visione estetica coerente e raffinata. Ogni scelta è studiata con cura e il risultato finale è sempre personale, armonioso e ben progettato. Sa consigliare con grande sensibilità, proponendo soluzioni originali e perfettamente in linea con lo stile del progetto. Riesce inoltre a rendere ogni fase del lavoro piacevole e serena, trasmettendo professionalità, disponibilità e grande passione per ciò che fa.'
    },
    {
      id: 'recensione-giuseppe',
      author: 'Giuseppe',
      rating: 5,
      date: '3 ottobre 2026',
      profileUrl: 'https://www.houzz.it/user/webuser-443427172',
      quote: 'Un professionista della casa a 360 gradi. La sua marcia in più è l\'empatia: capisce al volo la tua visione e la trasforma in realtà.',
      fullText: 'Un professionista della casa a 360 gradi. La sua marcia in più è l\'empatia: capisce al volo la tua visione e la trasforma in realtà, potenziando gli angoli migliori dell\'abitazione e mutando i punti critici in soluzioni d\'arredo sorprendenti. Ho scelto la sua guida per rinnovare casa mia e, vedendo il progetto 3D prendere vita al millimetro nella realtà, ho capito di aver fatto la scelta perfetta. Le promesse le sanno fare tutti, a mantenerle fino in fondo sono in pochi. Se dovessi rifare casa altre dieci volte, scegliere sempre e solo lui.'
    },
    {
      id: 'recensione-marcello',
      author: 'Marcello',
      rating: 5,
      date: '3 ottobre 2026',
      profileUrl: 'https://www.houzz.it/user/webuser-890222379',
      quote: 'Affidare la progettazione della propria casa a qualcuno significa consegnargli idee, desideri e aspettative. Abbiamo avuto la fortuna di affidarci a un grande professionista.',
      fullText: 'Affidare la progettazione della propria casa a qualcuno significa affidargli molto più di un semplice lavoro: significa consegnargli idee, desideri e aspettative. Noi abbiamo avuto la fortuna di affidarci non solo a un grande professionista, ma anche a un amico, che è riuscito a trasformare quello che avevamo in mente nella casa che desideravamo. Competenza, disponibilità, attenzione ai dettagli e tanta pazienza ci hanno accompagnato in ogni fase, dalla progettazione fino alla realizzazione. Ha saputo ascoltarci, consigliarci e trovare sempre la soluzione giusta, senza perdere mai di vista i nostri gusti e le nostre esigenze. Oggi, vivendo la nostra casa ogni giorno, possiamo apprezzare ancora di più la qualità del lavoro fatto e la cura che c’è dietro ogni scelta. Grazie davvero per aver contribuito a realizzare un posto così importante per noi: la nostra casa. Un professionista che consigliamo senza esitazione e, per noi, anche un amico speciale. ❤️'
    },
    {
      id: 'recensione-cv',
      author: 'C. V.',
      rating: 5,
      date: '29 agosto 2025',
      profileUrl: 'https://www.houzz.it/user/webuser-809289846',
      quote: 'Ha dimostrato una grande professionalità, una competenza tecnica impeccabile e una notevole capacità di ascolto, riuscendo a tradurre le nostre idee in un progetto concreto.',
      fullText: 'Ci siamo rivolti all\' interior designer Michele Schiano Moriello per la ristrutturazione del nostro appartamento e siamo rimasti estremamente soddisfatti. Ha dimostrato una grande professionalità, una competenza tecnica impeccabile e una notevole capacità di ascolto, riuscendo a tradurre le nostre idee in un progetto concreto proprio come noi lo immaginavamo, infatti il risultato finale è stato esattamente quello che abbiamo sempre desiderato. Grazie anche alla sua attenzione ai dettagli e alla sua visione creativa. Consigliamo vivamente l\' interior designer Michele Schiano Moriello per la sua affidabilità, competenza e il suo approccio su misura.'
    }
  ] as Review[],
  navLinks: [
    { label: 'Progetto', href: '#progetto' },
    { label: 'Metodo', href: '#metodo' },
    { label: 'Studio', href: '#studio' },
    { label: 'Servizi', href: '#servizi' },
    { label: 'Recensioni', href: '#recensioni' },
    { label: 'Contatti', href: '#contatti' }
  ]
};
