// Toggle menu

var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-100%";
}

// General function for smooth scrolling
function scrollToSection(sectionClass) {
    hideMenu();
    setTimeout(() => {
        const element = document.querySelector(sectionClass);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, 100); // timing for closing
}

// Event listeners for scroll buttons
document.getElementById("scrollToFactsBtn").addEventListener("click", () => scrollToSection(".facts"));
document.getElementById("scrollToPartnersBtn").addEventListener("click", () => scrollToSection(".partners"));
document.getElementById("scrollToContactsBtn").addEventListener("click", () => scrollToSection(".contacts"));
