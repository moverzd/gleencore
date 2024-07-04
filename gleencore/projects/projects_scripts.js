//Toggle menu

var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-100%";
}

// Get modal window

var modal = document.getElementById("modal");
    
//Get element for text and image inside modal window

var modalImg = document.getElementById("modal-img");
var modalTitle = document.getElementById("modal-title");
var modalDescription = document.getElementById("modal-description");

// Get element <span>, which closes modal window

var span = document.getElementsByClassName("close")[0];

//Get all triggers for opening modal window

var triggers = document.querySelectorAll(".modal-trigger");

//Values for state storage for slider

var images = [];
var currentIndex = 0;

//Function for updating image and text in modal window

function updateModal() {
    modalImg.src = images[currentIndex];
}

//Add event handler for every trigger

triggers.forEach(function(trigger) {
    trigger.onclick = function(event) {
        event.preventDefault();
        images = JSON.parse(this.getAttribute("data-images"));
        currentIndex = 0;
        modalTitle.textContent = this.getAttribute("data-title");
        modalDescription.innerHTML = this.getAttribute("data-description");
        updateModal();
        modal.style.display = "block";
    };
});

//When user presses (x), modal window closes

span.onclick = function() {
    modal.style.display = "none";
}

// When user press on any place out of modal window, it closes

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Event handler for buttons prev/nex

document.querySelector(".prev").onclick = function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateModal();
}

document.querySelector(".next").onclick = function() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateModal();
}


