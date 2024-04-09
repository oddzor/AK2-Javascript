// Globale variabler
const limitMaxRequest = 50;

// Retrieves the DOM element with the accompanying ID/queryselector and assigns it to the variable

const tickerCatalogue = document.getElementById("ticker-catalogue");
const filterInputs = document.querySelectorAll("#nameFilter, #numberFilter, #limitPerRequest");
console.log(tickerCatalogue);

// Create error message element
const errorMessage = document.createElement("div");
errorMessage.id = "error-message";
errorMessage.classList.add("error-message");
errorMessage.textContent = "Failed to fetch data. Please try again later";
errorMessage.style.display = "block";

//append error message element to body
document.body.appendChild(errorMessage);

const fetchTickers = async () => {
  try {
    const limitPerRequest = document.getElementById("limitPerRequest").valueAsNumber;
    const totalRequests = 1;

    const promises = [];
    for (let i = 1; i <= totalRequests; i++) {
      const url = `https://api.coinlore.net/api/tickers/?start=${
        (i - 1) * limitPerRequest
      }&limit=${limitPerRequest}`;

      const promise = fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to fetch ${url}: ${res.status}`);
          }
          return res.json();
        })
        .catch((error) => {
          console.error(error);
          return null;
        });
      promises.push(promise);
    }

    const results = await Promise.all(promises);
    const tickerInfo = results.flatMap((data) => data.data);

    displayTickers(tickerInfo);
    //Hide error message if fetching successful
    errorMessage.style.display = "none";
  } catch (error) {
    console.error("Error fetching tickers", error);
    //display error message
    errorMessage.style.display = "block";
  }
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

  tickerCatalogue.innerHTML = tickerHTMLString;
};

const handleInput = (input) => {
  input.addEventListener("input", () => {
    if (input.id === "limitPerRequest") {
      const limitValue = input.valueAsNumber;
      if (input.value.trim() === "") {
        console.error("Please enter a valid number (1-50)");

        return;
      } else if (limitValue < 1) {
        console.error("Value must be at least 1.");
        input.value = 1;
        return;
      } else if (limitValue > limitMaxRequest) {
        console.error("Limit exceeded. Setting value to maximum limit.");
        input.value = limitMaxRequest;
      }
    }
    fetchTickers();
  });
};

filterInputs.forEach(handleInput);

fetchTickers();