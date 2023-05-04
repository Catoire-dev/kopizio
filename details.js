const pizzas = [
  {
    name: "4 fromages",
    description:
      "Base sauce tomate, Mozzarella, Chèvre, Reblochon, Fourme d'Ambert",
    poster: "./img/4fromages.avif",
  },
  {
    name: "Margherita",
    description: "Base sauce tomate, Mozzarella",
    poster: "./img/margherita.avif",
  },
  {
    name: "Savoyarde",
    description: "Base crème fraîche, Mozzarella, lardons, Reblochon, Oignons",
    poster: "./img/savoyarde",
  },
  {
    name: "Reine",
    description: "Base sauce tomate, Mozzarella, Jambon, Champignons",
    poster: "./img/reine.avif",
  },
  {
    name: "Chèvre Miel",
    description: "Base crème fraîche, Mozzarella, Chèvre, Miel",
    poster: "./img/chevremiel.avif",
  },
  {
    name: "Pepperoni",
    description: "Base sauce tomate, Mozzarella, Pepperoni",
    poster: "./img/pepperoni.avif",
  },
];

const params = new URLSearchParams(window.location.search);
console.log("params", params.get("pizzaId"));
const currPizzaId = params.get("pizzaId");

const pizzaTitle = document.createElement("h2");
pizzaTitle.textContent = pizzas[currPizzaId].name;
// document.body.appendChild(pizzaTitle);

const pizzaDescription = document.createElement("p");
pizzaDescription.textContent = pizzas[currPizzaId].description;
// document.body.appendChild(pizzaDescription);

const img = document.createElement("img");
img.src = pizzas[currPizzaId].poster;
document.body.appendChild(img);
document.body.appendChild(pizzaTitle);
document.body.appendChild(pizzaDescription);
