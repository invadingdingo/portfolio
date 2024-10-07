// Object to track slide indices for each slideshow
let slideIndices = {};

// Initialize the slideshow for a given container
function initSlides(containerId) {
    slideIndices[containerId] = 1;
    showSlides(1, containerId);
}

// Next/previous controls
function changeSlide(n, containerId) {
    showSlides(slideIndices[containerId] += n, containerId);
}

function showSlides(n, containerId) {
    let container = document.getElementById(containerId);
    let slides = container.getElementsByClassName("my-work-entry-image");
    
    if (n > slides.length) {
        slideIndices[containerId] = 1;
    }
    if (n < 1) {
        slideIndices[containerId] = slides.length;
    }
    // Hide all slides in the container
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    // Show the current slide
    slides[slideIndices[containerId] - 1].style.display = "block";  
}

// Initialize each slideshow
initSlides('slideshow1');
initSlides('slideshow2');
initSlides('slideshow3');