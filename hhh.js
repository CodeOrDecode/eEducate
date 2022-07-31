let burger = document.querySelector(".burger");
let navbar = document.querySelector(".navbar");
let navList = document.querySelector(".nav-list");
let rightNav = document.querySelector(".rightNav");

burger.addEventListener("click", () => {
    navList.classList.toggle("v-class");
    rightNav.classList.toggle("v-class");
    navbar.classList.toggle("h-nav");

})