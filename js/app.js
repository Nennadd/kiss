const menu = document.querySelector(".bars");
const closeMenu = document.querySelector(".close-menu");
const modal = document.querySelector(".navbar-modal");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  modal.className = "navbar-modal show";
  nav.style.marginTop = "-10rem";
});
closeMenu.addEventListener("click", () => {
  modal.className = "navbar-modal close";
  nav.style.marginTop = "0";
});

// NOTE Navbar !!!
gsap.to("nav", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top-=100px",
    end: "top top-=100px",
    scrub: 1,
  },
  top: "-10.1rem",
  // duration: 1,
  // delay: 0.5,
});
gsap.to(".navbar-modal", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top-=100px",
    end: "top top-=100px",
    scrub: 1,
  },
  top: "-100%",
  delay: 1,
  duration: 5,
});

window.addEventListener("resize", () => {
  console.log(window.innerWidth);
});
