// Define current page based on URL
const currentPage = window.location.href.split("/").pop(); //Extracts the last part of the URL

//navigation data
const navItems = [
  { text: "Home", href: "index.html" },
  { text: "Watchlist", href: "list.html" },
];

// creating dynamic Nav
const dynamicNav = document.getElementById("dynamic-nav");
const navList = document.createElement("ul");

navItems.forEach((item) => {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.textContent = item.text;
  link.setAttribute("href", item.href);
  listItem.appendChild(link);

  if (item.href === currentPage) {
    listItem.classList.add("active");
  }

  navList.appendChild(listItem);
});
dynamicNav.appendChild(navList);
