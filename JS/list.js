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

// function to display data from local storage in the ul element with id saved-crypto-container
function displaySavedCryptoData() {
  const keys = Object.keys(localStorage);

  const container = document.getElementById("saved-crypto-container");

  keys.forEach((key) => {
    if (key.startsWith("watchlist_")) {
      const cryptoData = JSON.parse(localStorage.getItem(key));

      console.log("Crypto data", cryptoData);

      const listItem = document.createElement("li");

      //create a remove button for each lsit element
      const removeButton = document.createElement("button");
      removeButton.textContent = "X";
      removeButton.addEventListener("click", () => {
        //remove item from local storage
        localStorage.removeItem(key);
        // remove the list item from display
        container.removeChild(listItem);
        showPopup(`${cryptoData.name} has been removed from your watchlist.`);
      });

      listItem.textContent = `${cryptoData.rank}. ${cryptoData.name}. (${cryptoData.symbol}). $${cryptoData.price_usd}`;

      //append the remove button to the list item
      listItem.appendChild(removeButton);
      // append listitem to container
      container.appendChild(listItem);
    }
  });
}

displaySavedCryptoData();
