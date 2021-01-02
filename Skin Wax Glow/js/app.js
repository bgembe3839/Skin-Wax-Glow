const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const ul = document.querySelector("ul");
const a = document.querySelector("a");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active"), 
  nav.classList.toggle("nav-active");
  ul.classList.toggle("nav-active");
})
