document.addEventListener("DOMContentLoaded", function() {
    console.log("Bienvenue sur Adameon !");
    alert("Bienvenue sur Adameon - La cryptomonnaie qui protège votre argent !");

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

    // Protection contre les attaques XSS
    const sanitizeInput = (input) => {
        return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    };

    // Détection des bots
    if (navigator.webdriver) {
        alert("Les bots ne sont pas autorisés ici !");
    }
});
