// Toggle menu 

var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-100%";
}

// Scroll to Facts

function scrollToFacts() {
    hideMenu();
    setTimeout(() => {
        const element = document.querySelector(".facts");
        element.scrollIntoView({ behavior: "smooth" });
    }, 100); // timming for closing
}

//Scroll to Projects 

function scrollToProjects() {
    hideMenu();
    setTimeout(() => {
        const element = document.querySelector(".projectsbox");
        element.scrollIntoView({ behavior: "smooth" });
    }, 100);
}

//Scroll to Partners

function scrollToPartners() {
    hideMenu();
    setTimeout(() => {
        const element = document.querySelector(".partners");
        element.scrollIntoView({ behavior: "smooth" });
    }, 100); 
}

//Scroll to contacts

function scrollToContacts() {
    hideMenu();
    setTimeout(() => {
        const element = document.querySelector(".contacts");
        element.scrollIntoView({ behavior: "smooth" });
    }, 100);
}