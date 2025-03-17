async function fetchCryptoNews() {
    const response = await fetch("https://api.coingecko.com/api/v3/news");
    const news = await response.json();
    let newsHTML = "";

    news.data.slice(0, 5).forEach(article => {
        newsHTML += `<p><a href="${article.url}" target="_blank">${article.title}</a></p>`;
    });

    document.getElementById("crypto-news").innerHTML = newsHTML;
}

fetchCryptoNews();
