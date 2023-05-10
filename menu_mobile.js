const button = document.querySelector(".hamburgerButton");
const header = document.querySelector(".headerTest");

// creation des elements du nav menu mobile
const navSide = document.createElement("nav");
const ulSide = document.createElement("ul");
const liMenu = document.createElement("li");
const liAbout = document.createElement("li");
const liOrder = document.createElement("li");
const aMenu = document.createElement("a");
const aAbout = document.createElement("a");
const aOrder = document.createElement("a");

// création du nav menu version mobile
header.appendChild(navSide);
navSide.appendChild(ulSide);
ulSide.appendChild(liMenu);
ulSide.appendChild(liAbout);
ulSide.appendChild(liOrder);

liMenu.appendChild(aMenu);
liAbout.appendChild(aAbout);
liOrder.appendChild(aOrder);

// ajout de classe sur la nav menu du mobile
navSide.classList.add("mobileNav", "activeMobile");

// ajout de texte et href aux li
aMenu.textContent = "Menu";
aMenu.href = "#menu";

aAbout.textContent = "About";
aAbout.href = "#about";

aOrder.textContent = "Order";
aOrder.href = "#order";

// definition de la taille de l'ecran
const windowSize = window.matchMedia("(max-width: 768px)");

// creation fonction toggle sur le bouton burger
function activeNavside() {
  navSide.classList.toggle("activeMobile");
}

// creation fonction d'affichage de la nav mobile en fonction de la taille de l'ecran
function afficherNav(windowSize) {
  if (windowSize.matches) {
    // navSide.style.display;
    button.addEventListener("click", activeNavside);
  } else {
    navSide.style.display = "none";
  }
}

afficherNav(windowSize);
windowSize.addListener(afficherNav);
