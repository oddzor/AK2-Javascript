# Arbeidskrav 2 - Javascript og API - Gruppeoppgave 

### Group participants: 

- Odd Grimholt
>
- Ole Thomas Sundet
>
- Frederic Næss Bendixen
>
- Oskar Rebård Gjelstad


### Project Overview

- Cryptocurrency portal showing limited data for up to 100 tokens (adjustable amount)
- Tokens can be selected from list view to display expanded data.
- On the expanded data element, you will also see the tokens graphical icon.
- Tokens can be added to watchlist which will remain saved until the next time you visit page, you can also elect to remove specific tokens


---


# API & Dependencies


### CoinLore API  

This API is contains public information about cryptocurrencies and provides realtime updates about a bunch of factors including: price, market cap, volume, ranking etc.

https://www.coinlore.com/cryptocurrency-data-api


### Cryptofonts API 

This API is for icons related to cryptocurrencies and works together with a "freemium" RapidAPI key 

https://cryptofonts.com/


### Allow CORS Plugin


Plugin for your browser to work bypass CORS issues.


---

# General

### Project Description 

Cryptocurrency information webpage with three separate pages.

- Page 1: Listing of the current top cryptocurrencies and 4 main information points like price, ranking, name and symbol. 
(CoinLore and Cryptofonts API integrated) Clicking a list item will provide a more detailed breakdown of your selected cryptocurrency from the list this will include more specific information like 24h volume, token to BTC ratio and supply caps. 
```

From detailed breakdown, you can elect to add your selected cryptocurrency to watchlist (localStorage) and either return to list or go to your watchlist.

```

- Page 2: Watchlist-style page where data is persisted from the CoinLore API and saved to other storage mediums. 

```

Watchlist data will remain persisted in local storage, so when closing and opening browser, your selected tokens will still be available for viewing.

```
---
### Main Functionality and Code Snippets

1. #### Coinlore API data is fetched as a first step. Data is retrieved and parsed into JSON format like this, up to 16 data points:



`  [  `

`  {"id":"90",  `

`  "symbol":"BTC",  `

`  "name":"Bitcoin",  `

`  "nameid":"bitcoin",  `

`  "rank":1,"  `

`  price_usd":"70678.41",  `

`  ...  ` 

`  ]  `

2. #### A limited selection from the API data is populated into a HTML template element, using cloneNode to ensure duplication of elements and populating until all objects are listed. The identifier "crypto" is the main API data.

`  const listTemplate = document.getElementById("main__list__template").content.cloneNode(true);  `

`  listTemplate.querySelector(".crypto__symbol__index").textContent = crypto.symbol;  `

`  listTemplate.querySelector(".crypto__name__index").textContent = crypto.name;  `

`  listTemplate.querySelector(".crypto__rank__index").textContent = crypto.rank;  `

`  listTemplate.querySelector(".crypto__price__index").textContent = crypto.price_usd;  `



3. #### Onclick functionality to target a specific token from the list and displaying additional information fetched from the previous API request by "display: none" on list element and "display: block" on additional information element. This onclick function also contains an API request to CryptoFonts API to retrieve an image based on the specific token clicked.


`  listTemplate.querySelector(".crypto__list__wrapper").addEventListener("click", () => {  `

`  document.getElementById("main__list__element").style.display = "none";  `

`  document.querySelector(".crypto__additional__info").style.display = "block";  `

`  cryptoInformationMain(crypto);  `

`  });  `

`  listElement.appendChild(listTemplate);  `

`  }  `


4. #### Fetch request for token icon based on clicked element.



`  const url = https://cryptofonts-token-icon-api1.p.rapidapi.com/${cryptoObj.address};  `

```

The last portion of this fetch URL is replaced by a crypto token address that has been hardcoded into an array, the array contains a "symbol" and an "address", symbol is cross referenced with API data symbol as they are identical per token,then address is retrieved from the array to allow the API request to be sent.
```
```

As shown in the array excerpt below, symbol from the API data is matched with symbol in the array data, then address is retrieved and populated into the image fetch url.

```

`  { symbol: "SOL", address: "0x570A5D26f7765Ecb712C0924E4De545B89fD43dF" }  `

```

Then the imageURL from the API data is directly used as the image src for the corresponding HTML element. 

```

``  const iconElement = document.getElementById("crypto__icon__main").querySelector("img");  ``

``  if (iconElement) {  ``

``  iconElement.src = imageUrl;  ``

``  } else {  ``

``  const imgElement = document.createElement("img");  ``

``  imgElement.src = imageUrl;  ``

``  document.getElementById("crypto__icon__main").appendChild(imgElement);  ``

``  }  ``

5. #### Persisting displayed data to localStorage.


```

After selecting a token from the list, a button on the additional information page will allow you to store the data for this specific token into a watchlist.
```

``  document.getElementById("add-to-watchlist").addEventListener("click", function () {  ``

``  const cryptoData = {  ``

``  rank: document.getElementById("crypto__rank__main").textContent.replace("Rank: ", ""),  ``

``  name: document.getElementById("crypto__name__main").textContent.replace("Name: ", ""),  ``

``  symbol: document.getElementById("crypto__symbol__main").textContent.replace("Symbol: ", ""),  ``

``  price_usd: document  ``

``  .getElementById("crypto__price__main")  ``

``  .textContent.replace("Price USD: ", ""),  ``

``  };  ``

``  const name = cryptoData.name.replace(/ /g, "_");  ``

``  const key = `watchlist_${name}`;  ``

``  localStorage.setItem(key, JSON.stringify(cryptoData));  ``

``  });  ``


6. #### Removing persisted data from localStorage

```
When clicking removeButton you can delete selected data from localStorage.
```

``  const removeButton = document.createElement("button");  ``

``  removeButton.textContent = "Remove";  ``

``  removeButton.addEventListener("click", () => {  ``

``  localStorage.removeItem(key);  ``

``  container.removeChild(listItem);  ``

``  });  ``


---

