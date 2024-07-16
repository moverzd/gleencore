// Toggle menu 

var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-100%";
}
// Get modal window
var modal = document.getElementById("modal");

// Get elements for text and image inside modal window
var modalImg = document.getElementById("modal-img");
var modalTitle = document.getElementById("modal-title");
var modalDescription = document.getElementById("modal-description");

// Get element <span>, which closes modal window
var span = document.getElementsByClassName("close")[0];

// Get all triggers for opening modal window
var triggers = document.querySelectorAll(".modal-trigger");

// Values for state storage for slider
var images = [];
var currentIndex = 0;

// Dots container
var dotsContainer = document.querySelector(".dots-container");

// Function for updating image and text in modal window
function updateModal() {
    modalImg.src = images[currentIndex];
    updateDots();
}

// Function for updating dots
function updateDots() {
    var dots = document.querySelectorAll(".dot");
    dots.forEach(function(dot, index) {
        dot.classList.remove("active-dot");
        if (index === currentIndex) {
            dot.classList.add("active-dot");
        }
    });
}

// Function for creating dots
function createDots() {
    dotsContainer.innerHTML = ''; // Clear existing dots
    images.forEach(function(_, index) {
        var dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", function() {
            currentIndex = index;
            updateModal();
        });
        dotsContainer.appendChild(dot);
    });
}

// Add event handler for every trigger
triggers.forEach(function(trigger) {
    trigger.onclick = function(event) {
        event.preventDefault();
        images = JSON.parse(this.getAttribute("data-images"));
        currentIndex = 0;
        modalTitle.textContent = this.getAttribute("data-title");
        modalDescription.innerHTML = this.getAttribute("data-description");
        createDots();
        updateModal();
        modal.style.display = "block";
    };
});

// When user presses (x), modal window closes
span.onclick = function() {
    modal.style.display = "none";
}

// When user presses on any place out of modal window, it closes
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Event handler for buttons prev/next
document.querySelector(".prev").onclick = function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateModal();
}

document.querySelector(".next").onclick = function() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateModal();
}

/*Making text formatting */
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalTriggers = document.querySelectorAll(".modal-trigger");

    modalTriggers.forEach(trigger => {
        trigger.addEventListener("click", function() {
            const images = JSON.parse(this.getAttribute("data-images"));
            const title = this.getAttribute("data-title");
            const description = this.getAttribute("data-description");

            modalImg.src = images[0];
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalDescription.style.whiteSpace = "pre-line";

            modal.style.display = "block";
        });
    });

    document.querySelector(".close").addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});