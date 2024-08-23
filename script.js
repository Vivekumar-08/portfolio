function toggleNavbar() {
  const navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.remove("active");
  });
});

var typed = new Typed("#element", {
  strings: ["App Developer", "Desinger", "Developer"],
  typeSpeed: 170,
  backSpeed: 80,
  loop: true,
});
