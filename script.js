function updateCountdown() {
  const now = new Date();
  const christmas = new Date(now.getFullYear(), 11, 25); // December 25 of the current year

  // If Christmas has passed, set the countdown for next year
  if (now > christmas) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }

  const diff = christmas - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    // `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds;
    `${days} days`;

  document.getElementById(
    "timer"
  ).innerHTML = `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

const audio = document.getElementById("audio-song");

// Trigger autoplay after the page is loaded
window.onload = () => {
  audio
    .play()
    .then(() => {
      console.log("Audio is playing.");
    })
    .catch((error) => {
      console.error("Error playing audio:", error);
    });
};
audio.muted = false; // Unmute after interaction
