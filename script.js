document.addEventListener("DOMContentLoaded", function() {
    console.log("Bienvenue sur Adameon !");
});

// Protection contre les attaques XSS
const sanitizeInput = (input) => {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

// Détection des bots
if (navigator.webdriver) {
    alert("Les bots ne sont pas autorisés ici !");
}

document.addEventListener("DOMContentLoaded", function() {
    fetchCryptoNews();
});

function fetchCryptoNews() {
    fetch("https://api.coingecko.com/api/v3/news")
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById("crypto-news");
            data.news.slice(0, 5).forEach(news => {
                const newsItem = document.createElement("div");
                newsItem.classList.add("news-item");
                newsItem.innerHTML = 
                    <h3>${news.title}</h3>
                    <p>${news.description}</p>
                    <a href="${news.url}" target="_blank">Lire la suite</a>
                ;
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => console.error("Erreur lors du chargement des actualités :", error));
}
