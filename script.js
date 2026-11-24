
// Welcome message
console.log("Welcome to Abdul Rahman's Portfolio!");

// Navigation active effect
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => {
            item.style.color = "white";
        });

        link.style.color = "#00aaff";
    });
});

// Scroll reveal effect
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});
