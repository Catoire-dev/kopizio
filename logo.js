var logo = document.querySelector(".logo a");
logo.addEventListener("click", function (event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien
  window.location.href = "index.html"; // Remplacez "accueil.html" par l'URL de votre page d'accueil
});
