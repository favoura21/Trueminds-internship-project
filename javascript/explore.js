// NAV TOGGLE
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const menuLinks = document.querySelectorAll(".menu-link");
const sections = document.querySelectorAll(".menu-section");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {

        menuLinks.forEach(l => l.classList.remove("active"));
        sections.forEach(section => section.classList.remove("active-section"));

        link.classList.add("active");

        const target = link.getAttribute("data-target");
        document.getElementById(target).classList.add("active-section");
    });
});