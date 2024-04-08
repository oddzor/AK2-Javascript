const tickerCatalogue = document.getElementById("ticker-catalogue");
console.log(tickerCatalogue);

const fetchTickers = async () => {
  /* promise variabel for bruk av Promise.all*/

  const promises = [];
  const totalRequests = 1;
  const limitPerRequest = 10;

  for (let i = 1; i <= totalRequests; i++) {
    const url = `https://api.coinlore.net/api/tickers/?start=${
      (i - 1) * limitPerRequest
    }&limit=${limitPerRequest}`;
    /* bruke forloop for å hente alle tickers til og med et visst tall, i stedet for å hente individuelle tickers*/
    const promise = fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Feiled to fetch ${url}: ${res.status}`);
          /* Error håndtering for promise*/
        }
        return res.json();
      })
      .catch((error) => {
        console.error(error);
        return null; // Catch for bad request
      });
    promises.push(promise);
  }

  const results = await Promise.all(promises);
  // Flatten the array of arrays into a single array of tickers
  const tickerInfo = results.flatMap((data) => data.data);

  displayTickers(tickerInfo);
};

const displayTickers = (tickers) => {
  console.log(tickers);

  const nameFilter = document.getElementById("nameFilter").value.toLowerCase();
  const numberFilter = document.getElementById("numberFilter").value;

  const filteredTickers = tickers.filter((unit) => {
    const nameMatch = unit.name.toLowerCase().includes(nameFilter);
    const numberMatch = unit.id.toString().includes(numberFilter);
    return nameMatch && numberMatch;
  });

  const tickerHTMLString = filteredTickers
    .map(
      //viser tickers basert på filterinput
      (unit) =>
        `
        <li class="card">
        <h2>${unit.rank}. ${unit.name}. (${unit.symbol})</h2>
        <p>(Price USD: ${unit.price_usd} $.)</p>
        <p> (Price change last 24 hours: "${unit.percent_change_24h}") </p>
        
        </li>
        `
    )
    .join("");
  /* Printer en liste med bilde, alt-text, h2, og p til HTML*/
  tickerCatalogue.innerHTML = tickerHTMLString;
};

// Input field eventlisteners

document.getElementById("nameFilter").addEventListener("input", fetchTickers);
document.getElementById("numberFilter").addEventListener("input", fetchTickers);

fetchTickers();
