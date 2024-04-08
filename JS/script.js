// Pre-loading DOM 

document.addEventListener("DOMContentLoaded", function() {
    getCryptoData();
    // cryptoLogo();
});

// API Integration // 

// Cryptofonts API source and async function to GET data


fetch('https://cryptofonts-token-icon-api1.p.rapidapi.com/1/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0', {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '38161647f8mshac755c891c6ebc7p1c5811jsndfa434d77468',
        'X-RapidAPI-Host': 'cryptofonts-token-icon-api1.p.rapidapi.com'
    }
})
.then(response => response.json())
.then(data => {
    addImageToHTML(data[0].logoURI); 
})
.catch(error => console.error('Error:', error));




async function getCryptoData() {
    const apiUrl = "https://api.coinlore.net/api/tickers/?start=0&limit=50";

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        data.data.forEach(crypto => {
            addCrypto(crypto);
        });
    } catch (error) {
        console.error("Error retrieving information", error);
    }
}



// Populating elements on index.html

function addCrypto (crypto) {
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
    {name: "BTC", address: 0x321162Cd933E2Be498Cd2267a90534A804051b11},
    {name: "ETH", address: 0x74b23882a30290451A17c44f4F05243b6b58C76d},
    {name: "USDT", address: 0xdAC17F958D2ee523a2206206994597C13D831ec7},
    {name: "BNB", address: 0xb8c77482e45f1f44de1745f52c74426c631bdd52},
    {name: "SOL", address: 0x570A5D26f7765Ecb712C0924E4De545B89fD43dF},
    {name: "STETH", address: 0xae7ab96520de3a18e5e111b5eaab095312d7fe84},
    {name: "DOGE", address: 0xba2ae424d960c26247dd6c32edc70b295c744c43},
    {name: "USDC", address: 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48},
    {name: "XRP", address: 0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE},
    {name: "ADA", address: 0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47},
    {name: "TON", address: 0x76A797A59Ba2C17726896976B7B3747BfD1d220f},
    {name:"AVAX", address: 0x1ce0c2827e2ef14d5c4f29a091d735a204794041},
    {name: "SHIB", address: 0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE},
    {name: "BCH", address: 0x8ff795a6f4d97e7887c79bea79aba5cc76444adf},
    {name: "DOT", address: 0x7083609fce4d1d8dc0c979aab8c869ea2c873402},
    {name: "WBTC", address: 0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599},
    {name: "LINK", address: 0x514910771AF9Ca656af840dff83E8264EcF986CA},
    {name: "TRX", address: 0x50327c6c5a14DCaDE707ABad2E27eB517df87AB5},
    {name: "LTC", address: 0x4338665CBB7B2485A8855A139b75D5e34AB0DB94},
    {name: "NEAR", address: 0x1Fa4a73a3F0133f0025378af00236f3aBDEE5D63},
    {name: "UNI", address: 0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984},
    {name: "LEO", address: 0x2AF5D2aD76741191D15Dfe7bF6aC92d4Bd912Ca3},
    {name: "APT", address: 0xB12dAB2A48a53C96734E0989edA6fdBc5e1A9dbe},
    {name: "ETC", address: 0xdD2799Fc98C010D967ba0a95A1fe6DaB8C08cb97},
    {name: "STX", address: 0x7db0E1b967CE66d3ff135e1AC4c312b84890ca71},
    {name: "FIL", address: 0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153},
    {name: "MNT", address: 0x3c3a81e81dc49A522A592e7622A7E711c06bf354},
    {name: "ATOM", address: 0x0Eb3a705fc54725037CC9e008bDede697f62F335},
    {name: "WIF", address: 0x09Ab61BD94d05b8AC5FAc95743B59417df936F5C},
    {name: "IMX", address: 0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF},
    {name: "XLM", address: 0x43c934a845205f0b514417d757d7235b8f53f1b9},
    {name:"RNDR", address: 0x6De037ef9aD2725EB40118Bb1702EBb27e4Aeb24},
    {name: "TAO", address: 0xea4a1Fc739D8B70d16185950332158eDFa85d3e8},
    {name: "OKB", address: 0x75231F58b43240C9718Dd58B4967c5114342a86c},
    {name: "MKR", address: 0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2},
    {name: "VET", address: 0x6FDcdfef7c496407cCb0cEC90f9C5Aaa1Cc8D888},
    {name: "WBETH", address: 0xa2E3356610840701BDf5611a53974510Ae27E2e1},
    {name: "KAS", address: 0x78B7987D08C0B44dF78865D9E55166CA83720E3b},
    {name: "GRT", address: 0x9623063377AD1B27544C965cCd7342f7EA7e88C7},
    {name: "PEPE", address: 0x6982508145454Ce325dDbE47a25d4ec3d2311933},
    {name: "FDUSD", address: 0xc5f0f7b66764f6ec8c8dff7ba683102295e16409},
    {name: "INJ", address: 0xa2B726B1145A4773F68593CF171187d8EBe4d495},
    {name: "OP", address: 0x4200000000000000000000000000000000000042},
    {name: "THETA", address: 0x3883f5e181fccaF8410FA61e12b59BAd963fb645},
    {name: "LDO", address: 0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32},
    {name: "RUNE", address: 0x3155BA85D5F96b2d030a4966AF206230e46849cb},
    {name: "FTM", address: 0xad29abb318791d579433d831ed122afeaf29dcfe},
    {name: "XMR", address: 0xae25ae116742220ebb40b9a38913a7ed8f69d45a},
    {name: "FET", address: 0xaea46a60368a7bd060eec7df8cba43b7ef41ad85},
];







