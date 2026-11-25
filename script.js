// ===== Mobile Menu =====
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close menu when a navigation link is clicked
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

// ===== Active Navigation Link on Scroll =====
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
    let currentSection = "";

    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50) {
        currentSection = "contact";
    } else {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;

            if (window.scrollY >= sectionTop - 150) {
                currentSection = section.getAttribute("id");
            }
        });
    }

    navItems.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});