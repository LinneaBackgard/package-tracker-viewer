Package Tracking Viewer

Ett enkelt React-projekt som visar en lista med paketleveranser — ungefär som en liten spårningsapp.
Syftet är att lära sig grunderna i React, komponenter, state, datahämtning och responsiv design med Bootstrap.

Funktioner
Hämtar paketdata från ett API (Mockaroo).
Faller tillbaka till lokal JSON-fil om API:t inte svarar.
Visar varje order i ett tydligt kort:

Order-ID
Kundnamn
Telefonnummer
Avsändare
Leveransstatus (färgkodad)
Beräknad leveranstid (ETA)
Plats (pickup)

Responsivt upplägg med Bootstrap:
1 kolumn på mobil
2 kolumner på surfplatta
3 kolumner på dator

Teknik:
React
Bootstrap 5 (via CDN)
Fetch API för datahämtning
Fallback till lokal data (packagedata.json)

Projektstruktur: 

package-tracking-viewer/
├── src/
│   ├── api/
│   │   └── OrdersService.js
│   ├── components/
│   │   └── OrderCard.js
│   ├── pages/
│   │   └── OrdersPage.js
│   ├── data/
│   │   └── packagedata.json
│   ├── App.js
│   └── index.js
└── public/
    └── index.html

Så kör du projektet lokalt

1. Klona eller ladda ner projektet:
git clone https://github.com/LinneaBackgard/package-tracker-viewer.git


2. Gå in i projektmappen:
cd package-tracker-viewer


3. Installera beroenden:
npm install


4. Starta utvecklingsservern:
npm start


5. Öppna i webbläsaren:
http://localhost:3000

Exempel på kod:
const [orders, setOrders] = useState(null);

Responsiv layout
Bootstrap-klasserna i OrdersPage.js gör sidan automatisk responsiv:
<div className="col-12 col-md-6 col-lg-4">
  <OrderCard order={o} />
</div>

Mobil: 1 kolumn
Surfplatta: 2 kolumner
Dator: 3 kolumner

Lärdomar

Hur man hämtar data asynkront i React med useEffect.
Hur man lagrar data i komponenter med useState.
Hur man använder Bootstrap för layout och färger.
Hur man gör ett enkelt fallback-system med lokal JSON.


Förslag på framtida förbättringar

Filtrera paket efter status (t.ex. bara “på väg”).
Lägg till sökfält för kund eller ordernummer.
Sortera efter leveransdatum.
Lägg till liten karta (Leaflet eller Google Maps).

Skapad av

Linnéa Backgård
Utvecklingsprojekt inom utbildningen (React-grund).
Sverige, 2025
