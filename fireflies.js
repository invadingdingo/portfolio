// Number of fireflies
const fireflyCount = 200;

// Get the firefly container and the firefly box dimensions
const fireflyContainer = document.querySelector('.fireflies');
const fireflyBox = document.querySelector('.fireflies');

// Function to create firefly
function createFirefly() {
    const firefly = document.createElement('div');
    firefly.classList.add('firefly');
    
    // Get the dimensions of the firefly box
    const boxWidth = fireflyBox.offsetWidth;
    const boxHeight = fireflyBox.offsetHeight;

    // Random position and animation duration
    const x = Math.random() * boxWidth;
    const y = -250;
    const duration = Math.random() * 7 + 6; // Between 3 and 10 seconds
    const delay = Math.random() * 5;

    firefly.style.opacity = 0;
    firefly.style.left = `${x}px`;
    firefly.style.top = `${y}px`;
    firefly.style.animationDuration = `${duration}s`;
    firefly.style.animationDelay = `${delay}s`;


    fireflyContainer.appendChild(firefly);
}

// Create multiple fireflies
for (let i = 0; i < fireflyCount; i++) {
    createFirefly();
}