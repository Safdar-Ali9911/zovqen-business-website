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
// Contact Form Validation
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !service || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you! Your inquiry form has been validated successfully.");

        contactForm.reset();
    });
}