function toggleNavbar() {
  const navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('active');
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
      const navBar = document.querySelector('.nav-bar');
      navBar.classList.remove('active');
  });
});

var typed = new Typed('#element', {
    strings: [' Wed Developer', 'Desinger', 'App Developer', 'Developer'],
    typeSpeed: 170,
    backSpeed: 80,
    loop: true
});
