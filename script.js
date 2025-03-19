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
