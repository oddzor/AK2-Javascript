import { fetchData } from "./api.js";

// Globale variabler
const limitMaxRequest = 50;
const tickerCatalogue = document.getElementById("ticker-catalogue");
const filterInputs = document.querySelectorAll(
  "#nameFilter, #numberFilter, #limitPerRequest"
);
const errorMessage = document.createElement("div");

// Retrieves the DOM element with the accompanying ID/queryselector and assigns it to the variable

// Set up error message element
errorMessage.id = "error-message";
errorMessage.classList.add("error-message");
errorMessage.textContent = "Failed to fetch data. Please try again later";
errorMessage.style.display = "block";
//append error message element to body
document.body.appendChild(errorMessage);

const displayTickers = (tickers) => {
  console.log(tickers);

  const nameFilter = document.getElementById("nameFilter").value.toLowerCase();
  const numberFilter = document.getElementById("numberFilter").value;

  const filteredTickers = filterData(tickers, nameFilter, numberFilter);

  // Generates HTML string for display
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
  errorMessage.style.display = "none";
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
    updateDisplay();
  });
};

filterInputs.forEach(handleInput);

const filterData = (tickers, nameFilter, numberFilter) => {
  return tickers.filter((unit) => {
    const nameMatch = unit.name.toLowerCase().includes(nameFilter);
    const numberMatch = unit.id.toString().includes(numberFilter);
    return nameMatch && numberMatch;
  });
};

const updateDisplay = async () => {
  try {
    const limitPerRequest =
      document.getElementById("limitPerRequest").valueAsNumber;

    const url = `https://api.coinlore.net/api/tickers/?start=0&limit=${limitPerRequest}`;

    const results = await fetchData(url);

    if (Array.isArray(results)) {
      displayTickers(results);
    } else {
      console.error("Invalid data format returned from API");
    }
  } catch (error) {
    console.error("Error fetching tickers", error);
    errorMessage.style.display = "block";
  }
};

updateDisplay();
