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
