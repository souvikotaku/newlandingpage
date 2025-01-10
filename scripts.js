// Select all cards
const cards = document.querySelectorAll(".card");

// Delay adding the visible class to cards after page load (e.g., after 0.5s for smoother effect)
setTimeout(() => {
  cards.forEach((card) => {
    card.classList.add("visible"); // Add the visible class to start the animation
  });
}, 500); // Adjust the time (500ms) to suit your desired delay
