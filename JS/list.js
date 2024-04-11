// Checks if button was clicked on last page, then console.logs("button clicked", and removes item from localstorage)
document.addEventListener("DOMContentLoaded", function () {
  // Check if the flag is set
  const goToWatchListClicked = localStorage.getItem("goToWatchListClicked");

  // If flag is set, log the message
  if (goToWatchListClicked === "true") {
    console.log("transitioned to watchlist");

    //Clear the flag after logging the message
    localStorage.removeItem("goToWatchListClicked");
  }
});

function displaySavedCryptoData() {
  const keys = Object.keys(localStorage)

  const container = document.getElementById("saved-crypto-container");

  keys.forEach((key) => {
    if (key.startsWith("watchlist_")) {
      const cryptoData = JSON.parse(localStorage.getItem(key));

      console.log("Crypto data", cryptoData);

      const listItem = document.createElement("li");

      listItem.textContent = `${cryptoData.rank}. ${cryptoData.name}. (${cryptoData.symbol}). $${cryptoData.price_usd}`;

      container.appendChild(listItem);
    }
  });
}

displaySavedCryptoData ();


