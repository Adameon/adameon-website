document.addEventListener("DOMContentLoaded", function() {
    console.log("Bienvenue sur Adameon !");

    // Animation au scroll
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Récupérer les actualités crypto
    const apiKey = "YOUR_API_KEY"; // Remplace par ta clé API
    const newsContainer = document.getElementById("crypto-news");

    async function fetchCryptoNews() {
        try {
            const response = await fetch(
                `https://min-api.cryptocompare.com/data/v2/news/?lang=FR&api_key=${apiKey}`
            );
            const data = await response.json();
            displayNews(data.Data);
        } catch (error) {
            console.error("Erreur lors de la récupération des actualités :", error);
        }
    }

    function displayNews(news) {
        newsContainer.innerHTML = news
            .map(
                (item) => `
            <div class="news-item">
                <h3>${item.title}</h3>
                <p>${item.body}</p>
                <a href="${item.url}" target="_blank">Lire la suite</a>
            </div>
        `
            )
            .join("");
    }

    fetchCryptoNews();
});
