document.addEventListener("DOMContentLoaded", function () {
    fetchCryptoNews();
});

function fetchCryptoNews() {
    fetch("https://api.coingecko.com/api/v3/news")
        .then(response => response.json())
        .then(data => {
            let newsContainer = document.getElementById("crypto-news");
            newsContainer.innerHTML = "";

            data.data.slice(0, 5).forEach(news => {
                let newsItem = document.createElement("div");
                newsItem.innerHTML = <h3>${news.title}</h3><p>${news.description}</p>;
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => console.error("Erreur récupération actus :", error));
}
