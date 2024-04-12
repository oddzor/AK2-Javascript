// function for creating popup elements on different pages
function showPopup(message) {
  //Create a popup div when element clicked
  const popup = document.createElement("div");
  popup.textContent = message;
  popup.className = "popup";
  popup.timeoutID = null;

  // check if a popup already exists
  const existingPopup = document.querySelector(".popup");

  // if a popup exists, remove it
  if (existingPopup) {
    existingPopup.parentNode.removeChild(existingPopup);
  }

  // Append popup to document body
  document.body.appendChild(popup);

  //log message to console
  console.log(message);

  //remove popup after x seconds (x=4000)
  popup.timeoutID = setTimeout(() => {
    if (popup.parentNode) {
      popup.parentNode.removeChild(popup);
    }
  }, 3000);
}
