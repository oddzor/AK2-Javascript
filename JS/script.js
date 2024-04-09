// Pre-loading DOM

document.addEventListener("DOMContentLoaded", function () {
  getCryptoData();
  // cryptoLogo();
});

// API Integration //

// Cryptofonts API source and async function to GET data

fetch(
  "https://cryptofonts-token-icon-api1.p.rapidapi.com/1/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
  {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "38161647f8mshac755c891c6ebc7p1c5811jsndfa434d77468",
      "X-RapidAPI-Host": "cryptofonts-token-icon-api1.p.rapidapi.com",
    },
  }
)
  .then((response) => response.json())
  .then((data) => {
    addImageToHTML(data[0].logoURI);
  })
  .catch((error) => console.error("Error:", error));

async function getCryptoData() {
  const apiUrl = "https://api.coinlore.net/api/tickers/?start=0&limit=50";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    data.data.forEach((crypto) => {
      addCrypto(crypto);
    });
  } catch (error) {
    console.error("Error retrieving information", error);
  }
}

// Populating elements on index.html

function addCrypto(crypto) {
  const listElement = document.getElementById("main__list__element");
  const listTemplate = document.getElementById("main__list__template").content.cloneNode(true);

  // listTemplate.querySelector(".crypto__symbol__icon").textContent = IMPORT ICON DATA SOMEHOW
  listTemplate.querySelector(".crypto__symbol__index").textContent = crypto.symbol;
  listTemplate.querySelector(".crypto__name__index").textContent = crypto.name;
  listTemplate.querySelector(".crypto__rank__index").textContent = crypto.rank;
  listTemplate.querySelector(".crypto__price__index").textContent = crypto.price_usd;

  listElement.appendChild(listTemplate);
}

const cryptoAddressList = [
  { name: "BTC", address: 0x321162cd933e2be498cd2267a90534a804051b11 },
  { name: "ETH", address: 0x74b23882a30290451a17c44f4f05243b6b58c76d },
  { name: "USDT", address: 0xdac17f958d2ee523a2206206994597c13d831ec7 },
  { name: "BNB", address: 0xb8c77482e45f1f44de1745f52c74426c631bdd52 },
  { name: "SOL", address: 0x570a5d26f7765ecb712c0924e4de545b89fd43df },
  { name: "STETH", address: 0xae7ab96520de3a18e5e111b5eaab095312d7fe84 },
  { name: "DOGE", address: 0xba2ae424d960c26247dd6c32edc70b295c744c43 },
  { name: "USDC", address: 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48 },
  { name: "XRP", address: 0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe },
  { name: "ADA", address: 0x3ee2200efb3400fabb9aacf31297cbdd1d435d47 },
  { name: "TON", address: 0x76a797a59ba2c17726896976b7b3747bfd1d220f },
  { name: "AVAX", address: 0x1ce0c2827e2ef14d5c4f29a091d735a204794041 },
  { name: "SHIB", address: 0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce },
  { name: "BCH", address: 0x8ff795a6f4d97e7887c79bea79aba5cc76444adf },
  { name: "DOT", address: 0x7083609fce4d1d8dc0c979aab8c869ea2c873402 },
  { name: "WBTC", address: 0x2260fac5e5542a773aa44fbcfedf7c193bc2c599 },
  { name: "LINK", address: 0x514910771af9ca656af840dff83e8264ecf986ca },
  { name: "TRX", address: 0x50327c6c5a14dcade707abad2e27eb517df87ab5 },
  { name: "LTC", address: 0x4338665cbb7b2485a8855a139b75d5e34ab0db94 },
  { name: "NEAR", address: 0x1fa4a73a3f0133f0025378af00236f3abdee5d63 },
  { name: "UNI", address: 0x1f9840a85d5af5bf1d1762f925bdaddc4201f984 },
  { name: "LEO", address: 0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3 },
  { name: "APT", address: 0xb12dab2a48a53c96734e0989eda6fdbc5e1a9dbe },
  { name: "ETC", address: 0xdd2799fc98c010d967ba0a95a1fe6dab8c08cb97 },
  { name: "STX", address: 0x7db0e1b967ce66d3ff135e1ac4c312b84890ca71 },
  { name: "FIL", address: 0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153 },
  { name: "MNT", address: 0x3c3a81e81dc49a522a592e7622a7e711c06bf354 },
  { name: "ATOM", address: 0x0eb3a705fc54725037cc9e008bdede697f62f335 },
  { name: "WIF", address: 0x09ab61bd94d05b8ac5fac95743b59417df936f5c },
  { name: "IMX", address: 0xf57e7e7c23978c3caec3c3548e3d615c346e79ff },
  { name: "XLM", address: 0x43c934a845205f0b514417d757d7235b8f53f1b9 },
  { name: "RNDR", address: 0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24 },
  { name: "TAO", address: 0xea4a1fc739d8b70d16185950332158edfa85d3e8 },
  { name: "OKB", address: 0x75231f58b43240c9718dd58b4967c5114342a86c },
  { name: "MKR", address: 0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2 },
  { name: "VET", address: 0x6fdcdfef7c496407ccb0cec90f9c5aaa1cc8d888 },
  { name: "WBETH", address: 0xa2e3356610840701bdf5611a53974510ae27e2e1 },
  { name: "KAS", address: 0x78b7987d08c0b44df78865d9e55166ca83720e3b },
  { name: "GRT", address: 0x9623063377ad1b27544c965ccd7342f7ea7e88c7 },
  { name: "PEPE", address: 0x6982508145454ce325ddbe47a25d4ec3d2311933 },
  { name: "FDUSD", address: 0xc5f0f7b66764f6ec8c8dff7ba683102295e16409 },
  { name: "INJ", address: 0xa2b726b1145a4773f68593cf171187d8ebe4d495 },
  { name: "OP", address: 0x4200000000000000000000000000000000000042 },
  { name: "THETA", address: 0x3883f5e181fccaf8410fa61e12b59bad963fb645 },
  { name: "LDO", address: 0x5a98fcbea516cf06857215779fd812ca3bef1b32 },
  { name: "RUNE", address: 0x3155ba85d5f96b2d030a4966af206230e46849cb },
  { name: "FTM", address: 0xad29abb318791d579433d831ed122afeaf29dcfe },
  { name: "XMR", address: 0xae25ae116742220ebb40b9a38913a7ed8f69d45a },
  { name: "FET", address: 0xaea46a60368a7bd060eec7df8cba43b7ef41ad85 },
];
