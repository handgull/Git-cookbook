# Introduzione al versioning

Tutto il software che viene scritto passa attraverso diverse versioni: ne creiamo una quando editiamo un ﬁle sorgente, ne creiamo diverse versioni all’interno di un ciclo di sviluppo, dalle versioni di test contenenti possibilmente codice per il debug ﬁno alle versioni alpha, beta e ﬁnali;<br> creiamo versioni diverse per diverse piattaforme e creiamo diversi **rilasci** di prodotto.<br>
Il versionamento(versioning) del codice, o controllo delle versioni(**version control**), è la pratica che consente di gestire e **tenere traccia** di tutte queste versioni, consentendo di recuperare una vecchia versione del software, per esempio per risolvere un bug introdotto nelle versioni più recenti,o di far convivere più versioni per esempio la versione in uso presso i clienti e la nuova versione in corso di sviluppo per il prossimo rilascio.<br>
Tipicamente gli strumenti che si usano per il versionamento del codice **facilitano** anche lo **sviluppo concorrente** da parte di più programmatori,facilitando la fusione dei vari contributi e il lavoro di gruppo.<br>
Gli strumenti per il versionamento del codice si preoccupano di gestire versioni multiple di documenti, e programmi,e sebbene siano particolarmente utili per documenti di purotesto si possono applicare anche a ﬁle binari come per esempio le immagini.<br>
Il versionamento del codice è una **buona pratica** di sviluppo ormai di uso comune,ed è utile da usare anche nel caso di progetti personali in cui si è l’unico sviluppatore.<br>
È bene non usare la pratica solo per il codice sorgente ma perl’intera **codebase**, che include anche la documentazione, le istruzioni per la costruzione del software(es. compilazione e linking, espresse in Makeﬁle, CMake o altri strumenti), ﬁle di conﬁgurazione,etc.

## Tipi di sistemi di versionamento
Esistono diversi sistemi per il controllo di versione(version controlsystems-**VCS**):
1. **Locali**: mantengono un archivio dei cambiamenti del software sul disco del computer usato per lo sviluppo. Ambienti di sviluppo integrato come Eclipse e CLion offrono di default questa funzionalità per i ﬁle di ogni progetto. Hanno il vantaggio di essere molto **facili** da usare perché non è richiesta nessuna attività al programmatore, ma lo svantaggio di **non consentire la collaborazione** con altri utenti, la mancanza di sicurezza dato che offrono una funzione di backup data dalla duplicazione dell’archivio su un’altra macchina e il fatto che la storia della codebase è vista ﬁle per ﬁle,**senza la possibilità di sapere quali ﬁle fossero in quale versione** in un certo momento dello sviluppo.
2. **Centralizzati**: sono gli strumenti più "tradizionali", come **CVS** o **Subversion**.<br>
L'archivio è mantenuto su di un **server centrale**, mentre gli sviluppatori lavorano su una copia locale di uno degli stati del software.<br>
Si usano delle operazioni di **checkout** per prelevare uno stato del sistema dal server(es.la versione più recente),e con un'operazione di **commit** si inviano le proprie modiﬁche per aggiornare lo stato sul server.
3. **Distribuiti**: sono i sistemi, come **Git** o **Mercurial**, in cui il **sistema locale ha una copia completa** della storia dello sviluppo,per cui si può lavorare con sistema diversionamento **anche senza connessione**.<br>
Dato che sono distribuiti non si ha più un server centrale di riferimento se non per convenzione comune.

## Git vs TFVC(TFS)/Subversion(SVN)
git rispetto agli altri sistemi di versioning ha una curva di apprendimento maggiore, non è affatto intuitivo inizialmente se si arriva da precedenti esperienze con TFS/SVN.<br>
> "In the end, it’s all about the quality of people. Git is more powerful but harder"

### DVCS vs CVCS
Come già visto sopra le differenze tra un sistema di versioning distribuito ed uno centralizzato principali sono:<br>

#### DVCS
DVCS = Distributed Version Control System<br>

- Ogni developer ha l'intera repo, con l'intera **history** dei cambiamenti, sulla sua macchina e possono modificarla in locale, anche con commit effettive, ovvero salvando le modifiche nella history **OFFLINE**, che può essere poi caricata sul server.<br>
Riassumendo: tutto è fatto in locale e poi pushato.
- Le operazioni sono estremamente **veloci** anche a livello di performance :rocket: (commit, visione dei cambiamenti, ...) questo è dato da due fattori:
  1. dato che non serve aspettare risposte dal server
  2. dato che git lavora con gli [snapshot](https://stackoverflow.com/questions/4964099/what-is-a-git-snapshot) e non con i cambiamenti

#### CVCS
CVCS = Centralized Version Control System<br>

- Lo sviluppatore ha una copia della repo, **ma non del versioning**, le azioni offline sono impossibili:
  - Niente commit offline
  - Niente visione della history offline
  - **Niente revert** a vecchie versioni offline

### Check-in vs Commit and Push
Per fare l'equivalente git del check-in di TFS dobbiamo passare **2 fasi**, questo inizialmente **può sembrare** inutilmente complesso ma aiuta a **migliorare il workflow**: con queste fasi il developer può committare in locale ciò che vuole (codice funzionante ma brutto, commenti...) in modo da **salvare poco alla volta** ogni piccola feature e monitorare al meglio il codice ed all'occorrenza **tornare al punto salvato**. Una volta sistemato completamente il codice lo si può pushare, tenendo sempre e solo codice pulito sul server.
> "Once I got over the initial Git shock, my working flow became faster. There are a number of reasons for that. First of all, Git itself is really fast. Second, with
> Git I do local commits which saves me time. I can commit my work in progress code without worrying it’s buggy and will disrupt another developer’s work."<br>

> "The third reason Git made my life better is branches. Creating merges and working on a side branch become a part of my workflow.<br>
> "I am definitely falling in love with Git. Full disclosure: I also fell in love with TFVC and TFS when I started working with those."

### .gitignore vs .tfignore
In questo caso è un pareggio, le soluzioni (che aiutano ad escludere dal versioning determinati file) sono pressochè identiche.

### Branches e Merge
Nella gestione dei branch la potenza di git si nota molto:
su TFVC(TFS) un branch crea una nuova cartella con una copia dei file del branch padre e per lavorare su quel nuovo branch il developer deve copiare quella directory sul suo hard disk, avendo essenzialmente un altra cartella con quel sorgente.<br>
Su git ogni branch non è una copia, è un puntatore alla commit. Questo è molto veloce e possibile grazie al fatto che git contiene ogni branch in locale.<br>
Come detto sopra quindi io posso spostarmi molto velocemente ed **IN LOCALE** da un branch all'altro. (comando checkout)

#### Merging
Mergiare è un operazione molto leggera in git. Possiamo mergiare ogni branch, mergiando l'intera differenza o la specifica commit, e git ci fornira una gestione dei conflitti (come TFS del resto)

### Last but not least: community
git ha una community estremamente più vasta, specie di questi tempi. Documentazione ottima(come TFS/SVN) ma soprattutto è più facile incontrare gente esperta di git nelle varie community online.
