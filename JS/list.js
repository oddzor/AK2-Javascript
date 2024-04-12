// Checks if button was clicked on last page, then console.logs("button clicked", and removes item from localstorage)
document.addEventListener("DOMContentLoaded", function () {
  // Check if the flag is set
  const goToWatchListClicked = localStorage.getItem("goToWatchListClicked");

  // If flag is set, log the message
  if (goToWatchListClicked === "true") {
    console.log("transitioned to watchlist");

    //Clear the flag after logging the message
    localStorage.removeItem("goToWatchListClicked");

    //display sorted data
    displaySavedCryptoData(sortByRank);
  } else {
    // if flag i not set, just display data without sorting
    displaySavedCryptoData();
  }
});

// Function to sort crypto data by rank
function sortByRank(cryptoA, cryptoB) {
  return parseInt(cryptoA.rank) - parseInt(cryptoB.rank);
}

// Function to sort crypto data by price
function sortByPrice(cryptoA, cryptoB) {
  return parseFloat(cryptoA.price_usd) - parseFloat(cryptoB.price_usd);
}

// Function to sort crypto data by name
function sortByName(cryptoA, cryptoB) {
  const nameA = cryptoA.name.toLowerCase();
  const nameB = cryptoB.name.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
}

// function to display data from local storage in the ul element with id saved-crypto-container
function displaySavedCryptoData(sortFunction) {
  const keys = Object.keys(localStorage);
  const container = document.getElementById("saved-crypto-container");

  // Get the crypto data and sort it using the provided sort function
  const sortedCryptoData = keys
    .filter((key) => key.startsWith("watchlist_"))
    .map((key) => JSON.parse(localStorage.getItem(key)))
    .sort(sortFunction);

  console.log("Sorted Crypto data: ", sortedCryptoData);

  // Clear the container before adding sorted items
  container.innerHTML = "";

  // Check if sorting by price, and reverse order if true
  const shouldReverse = sortFunction === sortByPrice;

  //iterate over sorted data and create list items for each
  sortedCryptoData.forEach((cryptoData) => {
    const listItem = document.createElement("li");

    //create a remove button for each lsit element
    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.addEventListener("click", () => {
      //remove item from local storage
      localStorage.removeItem(`watchlist_${cryptoData.name}`);
      // remove the list item from display
      container.removeChild(listItem);
      showPopup(`${cryptoData.name} has been removed from your watchlist.`);
    });

    // creates elements for each cryptodata.attribute
    listItem.textContent = `${cryptoData.rank}. ${cryptoData.name}. (${cryptoData.symbol}). $${cryptoData.price_usd}. ${cryptoData.percentage_change24h}`;

    //append the remove button to the list item
    listItem.appendChild(removeButton);

    if (shouldReverse) {
      container.prepend(listItem); //prepend to display from top down
    } else {
      // append listitem to container
      container.appendChild(listItem); // append to display from bottom up
    }
  });
}

// Event listeners for sorting buttons
document.getElementById("sortRankButton").addEventListener("click", () => {
  displaySavedCryptoData(sortByRank);
});

document.getElementById("sortPriceButton").addEventListener("click", () => {
  displaySavedCryptoData(sortByPrice);
});

document.getElementById("sortNameButton").addEventListener("click", () => {
  displaySavedCryptoData(sortByName);
});
