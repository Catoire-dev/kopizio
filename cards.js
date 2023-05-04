const cards = document.querySelectorAll(".block_images .card");

cards.forEach((card, idx) => {
  const btn = card.querySelector("button");
  btn.addEventListener("click", () => {
    window.location = `http://127.0.0.1:3000/details.html?pizzaId=${idx}`;
  });
});
