window.onload = function() {
    fetch('https://api.coinlore.net/api/tickers/?start=0&limit=50')
    .then(response => response.json())
    .then(data => {
        const shopContainer = document.getElementById('shop');
        data.data.forEach(crypto => {
            const productElement = document.createElement('div');
            productElement.classList.add('produkt');

            const cryptoName = document.createElement('h2');
            cryptoName.textContent = `${crypto.rank}. ${crypto.name} (${crypto.symbol})`;
            productElement.appendChild(cryptoName);

            const cryptoPrice = document.createElement('p');
            cryptoPrice.textContent = `pris: $${crypto.price.usd}`;
            productElement.appendChild(cryptoPrice);

            const cryptoImage = document.createElement('img');
            cryptoImage.src = getCryptoImageURL(crypto.symbol);
            cryptoImage.alt = crypto.name;
            productElement.appendChild(cryptoImage);

            shopContainer.appendChild(productElement);
        });
    })
    .catch(error => {
    console.error('Feil ved innhenting av data:', error)});
};

function getCryptoImageURL(symbol) {
    const cryptoAddressList = [
        { name: "BTC", address: "0x321162cd933e2be498cd2267a90534a804051b11" },
        { name: "ETH", address: "0x74b23882a30290451a17c44f4f05243b6b58c76d" },
        // Add more crypto addresses here
    ];
    const crypto = cryptoAddressList.find(crypto => crypto.name === symbol);
    if (crypto) {
        return `https://cryptofonts-token-icon-api1.p.rapidapi.com/1/${crypto.address}`;
    } else {
        return ''; // Return empty string if no match found
    }
}
