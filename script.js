
const countdownElement = document.getElementById("countdown");
const timerSection = document.getElementById("timer-section");
const birthdaySection = document.getElementById("birthday-section");

let count = 3;

// Start the countdown
const countdown = setInterval(() => {
  countdownElement.textContent = count;
  count--;

  if (count < 0) {
    clearInterval(countdown);
    // Hide the timer section
    timerSection.style.display = "none";
    // Show the birthday section
    birthdaySection.classList.remove("hidden");
    birthdaySection.style.opacity = 0; // Start with hidden opacity
    birthdaySection.style.transition = "opacity 1s ease-in"; // Transition effect
    birthdaySection.style.opacity = 1; // Fade in
  }
}, 1000);