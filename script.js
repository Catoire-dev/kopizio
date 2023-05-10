const carousel = [
  {
    titre: "About us",
    paragraphe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Porttitor leo a diam sollicitudin tempor id. Lobortis elementum nibh tellus molestie nunc non blandit massa. Leo duis ut diam quam nulla. Pretium nibh ipsum consequat nisl vel pretium lectus. Est placerat in egestas erat. Neque viverra justo nec ultrices dui sapien eget mi. Posuere morbi leo urna molestie. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa. Nam aliquam sem et tortor. Donec et odio pellentesque diam volutpat commodo sed egestas. Commodo elit at imperdiet dui accumsan sit amet. Sed vulputate mi sit amet. Fermentum leo vel orci porta non pulvinar neque laoreet. Arcu non odio euismod lacinia at quis risus. Id interdum velit laoreet id donec ultrices tincidunt arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Cursus mattis molestie a iaculis at erat.",
    backgroundColor: "#3c6997",
    image: "img/chef.avif",
    propersties: "",
  },
  {
    titre: "Other title",
    paragraphe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisietiam dignissim diam quis enim lobortis scelerisque fermentum.Porttitor leo a diam sollicitudin tempor id. Lobortis elementum nibhtellus molestie nunc non blandit massa. Leo duis ut diam quam nulla.Pretium nibh ipsum consequat nisl vel pretium lectus. Est placerat in",
    backgroundColor: "green",
    image:
      "https://f.maformation.fr/edito/sites/3/2022/04/devenir-pizzaiolo.jpeg",
    propersties: "",
  },
  {
    titre: "Other title",
    paragraphe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Porttitor leo a diam sollicitudin tempor id. Lobortis elementum nibh tellus molestie nunc non blandit massa. Leo duis ut diam quam nulla. Pretium nibh ipsum consequat nisl vel pretium lectus. Est placerat in egestas erat. Neque viverra justo nec ultrices dui sapien eget mi. Posuere morbi leo urna molestie. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa. Nam aliquam sem et tortor. Donec et odio pellentesque diam volutpat commodo sed egestas. Commodo elit at imperdiet dui accumsan sit amet. Sed vulputate mi sit amet. Fermentum leo vel orci porta non pulvinar neque laoreet. Arcu non odio euismod lacinia at quis risus. Id interdum velit laoreet id donec ultrices tincidunt arcu. Vivamus arcu felis bibendum ut tristique et egestas quis. Cursus mattis molestie a iaculis at erat.",
    backgroundColor: "purple",
    image:
      "https://www.metier.org/wp-content/uploads/2022/10/pizzaiolo-fabrique-pate-a-pizza.jpg",
    propersties: "",
  },
];


const section = document.querySelector(".about");
const text = document.querySelector(".text")
const titre = document.querySelector("h2");
const p = document.querySelector("p");
const img = document.querySelector("img");
const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right");
const circle = document.querySelectorAll(".rond");

circle[0].style.backgroundColor = "red";


function changeSection(carousel, i) {
  titre.textContent = carousel[i].titre;
  section.style.backgroundColor = carousel[i].backgroundColor;
  p.textContent = carousel[i].paragraphe;
  img.src = carousel[i].image;

  for (let j = 0; j < circle.length; j++)
    circle[j].style.backgroundColor = "white";

  circle[i].style.backgroundColor = "red";

}

let i = 0;
leftArrow.addEventListener("click", function(event){ 
    i--; 
    console.log(i);  
    if(i < 0)
    { 
        i = carousel.length-1;
        console.log(i);  
    }
    changeSection(carousel, i);
});
rightArrow.addEventListener("click", function (event) {
    i++;
    console.log(i);
    if(i >= carousel.length)
    { 
        i = 0;
    }
  changeSection(carousel, i);
});

