// Fetching crypto data
function fetchCryptoData() {
    const coinloreApi = "https://api.coinlore.net/api/ticker/?id=90";

    return fetch(coinloreApi)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            return data;   
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            return null;
        }); 
        
}

fetchCryptoData()
    .then(data => {
        if (data) {
            console.log(data);
            cryptoInformationMain(data); 
        } else {
            console.log("No data retrieved.");
        }
    });

// Populating elements on index.html
function cryptoInformationMain(crypto) {
    const cryptoData = crypto[0];

    const rankElement = document.getElementById("crypto__rank__main");
    const iconElement = document.getElementById("crypto__icon__main");
    const nameElement = document.getElementById("crypto__name__main");
    const symbolElement = document.getElementById("crypto__symbol__main");
    const priceElement = document.getElementById("crypto__price__main");
    const change1hElement = document.getElementById("crypto__change1h");
    const change24hElement = document.getElementById("crypto__change24h");
    const change1dElement = document.getElementById("crypto__change1d");
    const marketcapElement = document.getElementById("crypto__marketcap");
    const volume24hElement = document.getElementById("crypto__volume24h");
    const csupplyElement = document.getElementById("crypto__csupply");
    const tsupplyElement = document.getElementById("crypto__tsupply");
    const msupplyElement = document.getElementById("crypto__msupply");

    rankElement.innerHTML = cryptoData.rank;
    nameElement.innerHTML = cryptoData.name;
    symbolElement.innerHTML = cryptoData.symbol;
    priceElement.innerHTML = cryptoData.price_usd;
    change1hElement.innerHTML = cryptoData.percent_change_1h;
    change24hElement.innerHTML = cryptoData.percent_change_24h;
    change1dElement.innerHTML = cryptoData.percent_change_7d;
    marketcapElement.innerHTML = cryptoData.market_cap_usd;
    volume24hElement.innerHTML = cryptoData.volume24;
    csupplyElement.innerHTML = cryptoData.csupply;
    tsupplyElement.innerHTML = cryptoData.tsupply;
    msupplyElement.innerHTML = cryptoData.msupply;
}

function fetchCryptoIcon () {
    
}
