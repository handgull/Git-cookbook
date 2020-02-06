# Creare un proprio Git Server
:::warning
Questa guida elenca i passaggi da fare su un sistema debian-based (nello specifico è presa da un sito che usa un rasperry pi, con **raspbian**)<br>
Link tra le fonti.
:::

## Installazione e configurazione di Git
```sh
sudo apt-get install git-core
```
Per motivi di sicurezza e semplicità, è bene che i repository Git appartengano ad un **apposito utente**, che chiamiamo git. Tale utente avrà come home personale, che è poi la directory dove andranno i repository, `/mnt/disco/git` (assumendo che /mnt/disco sia la directory sulla quale è montato il disco esterno).<br>
Creiamo l’utente (e il relativo gruppo):
```sh
adduser --system --shell /bin/bash --gecos 'git version control by pi' --group --home /mnt/disco/git git
passwd git # Diamo una password al nuovo utente/gruppo
```

## Creare un repository

Siamo dunque pronti a creare il nostro primissimo repository. Esistono due tipi di repository Git: quelli **semplici**, che contengono i file della versione attuale e una directory .git con le informazioni necessarie al versionamento, e i repository **bare**, che espongono tutta la struttura del versionamento e non mostrano comodamente la versione corrente. Il primo tipo viene utilizzato per i repository locali, mentre il secondo è per i server, come in questo caso.<br>

Il nostro primo repository sarà chiamato test. Per crearlo, dobbiamo prima di tutto creare una directory test.git nella home dell’utente git, per poi inizializzarci dentro un repository bare. Passiamo dunque all’utente git e creiamo il repository:
```sh
su git # Accesso come utente git
cd
mkdir test.git
cd test.git
git --bare init # l'opzione --bare serve per le repo remote, come detto sopra
```
Ora è possibile clonare la repo in locale ed utilizzare il server git come `remote`!
> Si assume che `raspberrypi.local` sia l’indirizzo [mDNS](https://en.wikipedia.org/wiki/Multicast_DNS) del nostro dispsitivo:
```sh
git clone git@raspberrypi.local:/mnt/disco/git/test.git
```

## Comandi utili ad interfacciarsi via SSH
```sh
$ nmap -sn 192.168.1.0/24 # Scannerizza la rete per trovare l'ip del raspberry pi
$ ssh pi@<ip> # Instaura una connessione ssh con il raspberry, password di default: raspberry
```
