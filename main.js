// Sticky Navbar
const header = document.querySelector("header");
function stickyNavbar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}
stickyNavbar();
window.addEventListener("scroll", stickyNavbar);
//Show Case Area Animation
let sr = ScrollReveal({
  duration: 2500,
  distance: "60px",
});
sr.reveal(".showcase-info", { delay: 600 });
sr.reveal(".showcase-image", { origin: "top", delay: 700 });
//Open and Close Navbar Menu
const links = document.querySelectorAll(".nav-link");
const togglebtn = document.querySelector(".toggle-btn");
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  document.body.classList.toggle("open");
  document.body.classList.toggle("stopScrolling");
});
links.forEach((link) =>
  link.addEventListener("click", () => {
    document.body.classList.remove("open");
    document.body.classList.remove("stopScrolling");
  })
);
