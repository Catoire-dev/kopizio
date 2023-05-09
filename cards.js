const cards = document.querySelectorAll(".block_images .card");

cards.forEach((card, idx) => {
  const btn = card.querySelector("button");
  btn.addEventListener("click", () => {
    window.location = `./details.html?pizzaId=${idx}`;
  });
});
