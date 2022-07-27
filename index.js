// Mobile Navigation Bar
document.querySelector(".hamb").addEventListener("click", openNav);
document.querySelectorAll(".hamb-close, main, .mobile, .logo").forEach(elem => elem.addEventListener("click", closeNav));

function openNav() {
    document.querySelector(".header-nav-hamb").style.display = "block";
}

function closeNav() {
    document.querySelector(".header-nav-hamb").style.display = "none";
}
