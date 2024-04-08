## Arbeidskrav 2

-I dette arbeidskravet skal dere i gruppe sette sammen alt dere har lært i timene til å utvikle en web
side. Temaet til denne siden står dere fritt til å velge selv innad i gruppen, men kriteriene under
skal fremheves i koden deres. 

Til slutt skal dere lage en video presentasjon eller skrive en rapport
som beskriver hvordan dere har implementert løsning for kriteriene under. Det legges ikke vekt på
estetikk i resultatet men det legges vekt på funksjonalitet og manipulerings evne i html og css.


## Oppgave 1

Web siden skal minimum en side hvor dere presenterer en liste med temaet dere har valgt. 

Ved å velge en av elementene på denne siden skal brukeren tas til en annen side hvor dere viser detaljer om det spesifikke elementet som er valgt, samt muligheten til å velge å lagre dette elementet til en personlig liste som pierssisterers. 

På den tredje siden skal dere liste alle de pierssisterte elementene, denne listen skal kunne manipuleres.


## Eksempel - pokedex

- Side 1 - lister alle pokemon fra https://pokeapi.co/ som kan filtreres på pokemon karakteristikk

- Side 2 - detaljert informasjon om en valgt pokemon fra side 1, med mulighet til å velge denne pokemon til egen pokedex som er persistert.

- Side 3 - egen pokedeks side med editerbar pokedeks navn og liste av valgte pokemon fra Side 1 og 2.


## Oppgave 2

Lag en video eller skriv en rapport som

• Presenterer alle på gruppen
• Hva dere har valgt som tema
• Hva dere ble enige om å lage før dere begynte å kode, henvis til skisser osv.
• Hvordan dere ble enige om å jobbe under prosjektet. Ansvar, fordeling, møter, rutiner osv
• Hvordan dere har jobbet sammen underveis, faktisk fordeling osv.
• Hva følte dere gikk bra å samarbeide, hva var positivt? Hvilke momenter trenger dere å forbedre
til neste gang?
• Presenterer resultatet og hvordan dere har løst kriteriene under.
Videoen skal være på maks 5 minutter.


Alle på gruppen skal være med på videoen eller rapporten.


## Innlevering

Slutt resultatet inkludert video eller rapport skal zippes og levers i wiseflow av alle i gruppen.
Husk å inkludere .git mappen så commit loggen er inkludert.

OBS! Det er bare default branch som blir vurdert, derfor må alle huske på å merge branchene sine
til default branch før innlevering. Dere stå fritt til å velge merge strategi som passer for dere, men
de må kom klart og tydelig fram at alle har bidratt.

OBS!OBS! Huske å sette username og email i git config til ditt navn og gokstad epost for at det
skal være mulig for oss å skjønne hvem som er hvem.

https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git


## Vurderingskriterier

- DOM MANIPULERING.

Dere skal vise at dere behersker å styre html og css funksjonalitet
via javascript.
• Legget til, oppdatere og slette elementer i DOM
• Håndtere eventer fra DOM
• Style elementer i DOM


- FETCH FRA EKSTERN API.

Gruppen skal vise at de behersker å kommunisere med eksterne api over
REST.

Dere kan bruke hvilken som helst API dere ønsker som kan gi dere den
dataen dere trenger for applikasjonen deres, feks; . I tillegg kan dere også
bruke api tjenester som https://crudapi.co.uk/ for å simulere deres egen
backend api.

• Opprett, Les, Endre, Slette (CRUD)
• Kan bruke async/await eller promiss for å håndtere blokkerende kode.
• Kan bruke HTTP verbene GET, POST, PUT, DELETE
• Kan bruke endepunkter og spørre parametere for spesifisere

- PERSISTERING AV DATA

Gruppen skal vise at de behersker å persistere data enten til en av
lagrings metodene i nettleseren som session/local/index storage eller til
disk på klienten (hard disk på datamaskinen).

• Opprette, Lese, Oppdatere og Slette data fra persistent lagring

- VERSJONS KONTROLL (GitHub)


Gruppen skal vise at de behersker å bruke versjonskontroll i samarbeidet.
Alle i gruppen skal kunne vise via commit historien at de har bidratt, husk
å committe ofte og skrive tydelige og fornuftige meldinger.
Tips: 10 best practice for git commit, deepdive
• Kan samarbeide i en kodebase
• Kan vise til bidrag fra alle i gruppen.