const button = document.querySelector(".hamburgerButton");
const header = document.querySelector(".headerTest");

// creation des elements du nav menu mobile
const navSide = document.createElement('nav');
const ulSide = document.createElement('ul');
const liMenu = document.createElement('li');
const liAbout = document.createElement('li');
const liOrder = document.createElement('li');
const aMenu = document.createElement('a');
const aAbout = document.createElement('a');
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

// creation de la fonction pour afficher nav menu mobile
function activeNavside() {
  navSide.classList.toggle("activeMobile");
}

button.addEventListener("click", activeNavside);