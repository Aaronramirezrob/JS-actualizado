const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurguer = document.querySelector(".menu");
const mobileMenu = document.querySelector (".mobile-menu");

menuEmail.addEventListener("click", toggleDesktopmenu);
menuBurguer.addEventListener("click", toggleMobilemenu);

function toggleDesktopmenu(){
desktopMenu.classList.toggle("inactive");
}

function toggleMobilemenu() {
    mobileMenu.classList.toggle("inactive");
}