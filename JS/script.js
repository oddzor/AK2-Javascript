// Pre-loading DOM 

document.addEventListener("DOMContentLoaded", function() {
    getCryptoData();
});


async function getCryptoData() {
    const apiUrl = "https://api.coinlore.net/api/tickers/?start=0&limit=100";

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

    listTemplate.querySelector(".crypto__symbol__index").textContent = crypto.symbol;
    listTemplate.querySelector(".crypto__name__index").textContent = crypto.name;
    listTemplate.querySelector(".crypto__rank__index").textContent = crypto.rank;
    listTemplate.querySelector(".crypto__price__index").textContent = crypto.price_usd;
    listElement.appendChild(listTemplate);
}



const cryptoAddressList = [
    {name: "BTC", address: "0x321162Cd933E2Be498Cd2267a90534A804051b11"},
    {name: "ETH", address: "0x74b23882a30290451A17c44f4F05243b6b58C76d"},
    {name: "USDT", address: "0xdAC17F958D2ee523a2206206994597C13D831ec7"},
    {name: "BNB", address: "0xb8c77482e45f1f44de1745f52c74426c631bdd52"},
    {name: "SOL", address: "0x570A5D26f7765Ecb712C0924E4De545B89fD43dF"},
    {name: "STETH", address: "0xae7ab96520de3a18e5e111b5eaab095312d7fe84"},
    {name: "DOGE", address: "0xba2ae424d960c26247dd6c32edc70b295c744c43"},
    {name: "USDC", address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},
    {name: "XRP", address: "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE"},
    {name: "ADA", address: "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47"},
    {name: "TON", address: "0x76A797A59Ba2C17726896976B7B3747BfD1d220f"},
    {name:"AVAX", address: "0x1ce0c2827e2ef14d5c4f29a091d735a204794041"},
    {name: "SHIB", address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE"},
    {name: "BCH", address: "0x8ff795a6f4d97e7887c79bea79aba5cc76444adf"},
    {name: "DOT", address: "0x7083609fce4d1d8dc0c979aab8c869ea2c873402"},
    {name: "WBTC", address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"},
    {name: "LINK", address: "0x514910771AF9Ca656af840dff83E8264EcF986CA"},
    {name: "TRX", address: "0x50327c6c5a14DCaDE707ABad2E27eB517df87AB5"},
    {name: "LTC", address: "0x4338665CBB7B2485A8855A139b75D5e34AB0DB94"},
    {name: "NEAR", address: "0x1Fa4a73a3F0133f0025378af00236f3aBDEE5D63"},
    {name: "UNI", address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"},
    {name: "LEO", address: "0x2AF5D2aD76741191D15Dfe7bF6aC92d4Bd912Ca3"},
    {name: "APT", address: "0xB12dAB2A48a53C96734E0989edA6fdBc5e1A9dbe"},
    {name: "ETC", address: "0xdD2799Fc98C010D967ba0a95A1fe6DaB8C08cb97"},
    {name: "STX", address: "0x7db0E1b967CE66d3ff135e1AC4c312b84890ca71"},
    {name: "FIL", address: "0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153"},
    {name: "MNT", address: "0x3c3a81e81dc49A522A592e7622A7E711c06bf354"},
    {name: "ATOM", address: "0x0Eb3a705fc54725037CC9e008bDede697f62F335"},
    {name: "WIF", address: "0x09Ab61BD94d05b8AC5FAc95743B59417df936F5C"},
    {name: "IMX", address: "0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF"},
    {name: "XLM", address: "0x43c934a845205f0b514417d757d7235b8f53f1b9"},
    {name:"RNDR", address: "0x6De037ef9aD2725EB40118Bb1702EBb27e4Aeb24"},
    {name: "TAO", address: "0xea4a1Fc739D8B70d16185950332158eDFa85d3e8"},
    {name: "OKB", address: "0x75231F58b43240C9718Dd58B4967c5114342a86c"},
    {name: "MKR", address: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2"},
    {name: "VET", address: "0x6FDcdfef7c496407cCb0cEC90f9C5Aaa1Cc8D888"},
    {name: "WBETH", address: "0xa2E3356610840701BDf5611a53974510Ae27E2e1"},
    {name: "KAS", address: "0x78B7987D08C0B44dF78865D9E55166CA83720E3b"},
    {name: "GRT", address: "0x9623063377AD1B27544C965cCd7342f7EA7e88C7"},
    {name: "PEPE", address: "0x6982508145454Ce325dDbE47a25d4ec3d2311933"},
    {name: "FDUSD", address: "0xc5f0f7b66764f6ec8c8dff7ba683102295e16409"},
    {name: "INJ", address: "0xa2B726B1145A4773F68593CF171187d8EBe4d495"},
    {name: "OP", address: "0x4200000000000000000000000000000000000042"},
    {name: "THETA", address: "0x3883f5e181fccaF8410FA61e12b59BAd963fb645"},
    {name: "LDO", address: "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32"},
    {name: "RUNE", address: "0x3155BA85D5F96b2d030a4966AF206230e46849cb"},
    {name: "FTM", address: "0xad29abb318791d579433d831ed122afeaf29dcfe"},
    {name: "XMR", address: "0xae25ae116742220ebb40b9a38913a7ed8f69d45a"},
    {name: "FET", address: "0xaea46a60368a7bd060eec7df8cba43b7ef41ad85"},
    {name: "CORE", address: "0xe214ED30ea065c45476DDF911a493e46e92fA8f3"},
    {name: "AR", address: "0xa142182d9be18f300f42cca82660d274eed5ebba"},
    {name: "FLOKI", address: "0xfb5b838b6cfeedc2873ab27866079ac55363d37e"},
    {name: "SUI", address: "0x403353e22f332701a9036497d937793e40d27782"},
    {name: "MATIC", address: "0x0000000000000000000000000000000000001010"},
    {name: "ARB", address: "0x912CE59144191C1204E64559FE8253a0e49E6548"},
    {name: "ALGO", address: "0x6ae5f164d006b2fcfae195436345f0aa833d4830"},
    {name: "FLOW", address: "0xC943c5320B9c18C153d1e2d12cC3074bebfb31A2"},
    {name: "BSV", address: "0x17f41e28b2264289e49727b97705fa329c28465c"},
    {name: "SEI", address: "0x9c1CB740f3b631ed53600058ae5B2f83E15d9fBF"},
    {name: "AAVE", address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9"},
    {name: "BGB", address: "0x19de6b897Ed14A376Dda0Fe53a5420D2aC828a28"},
    {name: "GALA", address: "0xd1d2eb1b1e90b638588728b4130137d262c87cae"},
    {name: "ORDI", address: "0x8fcF86C2636987e08AE001be290919997E41F9fE"},
    {name: "PENDLE", address: "0xb3ed0a426155b79b898849803e3b36552f7ed507"},
    {name: "XEC", address: "0x0Ef2e7602adD1733Bfdb17aC3094d0421B502cA3"},
    {name: "QNT", address: "0x4a220E6096B25EADb88358cb44068A3248254675"},
    {name: "BONK", address: "0xa697e272a73744b343528c3bc4702f2565b2f422"},
    {name: "SAND", address: "0x3845badAde8e6dFF049820680d1F14bD3903a5d0"},
    {name: "AXS", address: "0xbb0e17ef65f82ab018d8edd776e8dd940327b28b"},
    {name: "AGIX", address: "0x5B7533812759B45C2B44C19e320ba2cD2681b542"},
    {name: "FLR", address: "0xc1b23c67dffb267956736dbea4b3962fed05763a"},
    {name: "CRO", address: "0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b"},
    {name: "CHZ", address: "0x3506424F91fD33084466F402d5D97f05F8e3b4AF"},
    {name: "CFX", address:"0x42E3e76Fa1eb2bEDeF4Bda5225469282b56c333e"},
    {name: "NEO", address: "TKVca316H4kYQnh1bFjMhdAVUUbtTausKS"},
    {name: "TUSD", address: "0x40af3827F39D0EAcBF4A168f8D4ee67c121D11c9"},
    {name: "XTZ", address: "0x16939ef78684453bfdfb47825f8a5f714f12623a"},
    {name: "MSOL", address: "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"},
    {name: "PYTH", address: "0xF04dba8671484085d5878A25A55eC9ca6132299f"},
    {name: "EOS", address: "0x56b6fb708fc5732dec1afc8d8556423a2edccbd6"},
    {name: "CKB", address: "0xa07486056AF16D2eBCE225AE5Dcb365B04A1f099"},
    {name: "TKX", address: "0x4D864E4f542b4b40acB3151C9daD2e2C9236a88f"},
    {name: "MANA", address: "0x26433c8127d9b4e9B71Eaa15111DF99Ea2EeB2f8"},
    {name: "RON", address: "0x5f2Db62536dd888AacEa933068384318A02094c0"},
    {name: "MINA", address: "0xD5745a490f14CdA24bed11156d91Eb7A77c8CB1B"},
    {name: "ONDO", address: "0xfAbA6f8e4a5E8Ab82F62fe7C39859FA577269BE3"},
    {name: "KAVA", address: "0x5F88AB06e8dfe89DF127B2430Bba4Af600866035"},
    {name: "1000SATS", address: "0x39C4e418BeaCe4F1b8cb24a176b2141b373a27eA"},
    {name: "HBAR", address: "0xa43C7F27E36279645Bd1620070414e564ec291a9"},
    {name: "AKT", address: "0x7F0EFf4705658706B04D2b47853f3CBe4A218f93"},
    {name: "JASMY", address: "0x15669CF161946C09a8B207650BfBB00e3d8A2E3E"},
    {name: "MIOTA", address: "0xd944f1D1e9d5f9Bb90b62f9D45e447D989580782"},
    {name: "CAKE", address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"},
    {name: "HNT", address: "hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux"},
    {name: "GNO", address: "0x6810e776880c02933d47db1b9fc05908e5386b96"},
    {name: "AXL", address: "0x8b1f4432F943c465A973FeDC6d7aa50Fc96f1f65"},
    {name: "AIOZ", address: "0x626E8036dEB333b408Be468F951bdB42433cBF18"},
    {name: "CHEEL", address: "0x1f1c90aeb2fd13ea972f0a71e35c0753848e3db0"},
    {name: "KCS", address: "0x039B5649A59967e3e936D7471f9c3700100Ee1ab"},
    {name: "KLAY", address: "0x393126c0653F49E079500cc0f218A27c793136A0"},
    
];


