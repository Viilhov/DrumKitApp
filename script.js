document.addEventListener("DOMContentLoaded", function () {
  // Get references to the button and audio elements
  const kickButton = document.getElementById("kickButton");
  const rideButton = document.getElementById("rideButton");
  const kickSound = document.getElementById("kickSound");
  const rideSound = document.getElementById("rideSound");

  // Add a click event listener to the button
  kickButton.addEventListener("click", function () {
    // Play the kick drum sound when the button is clicked
    kickSound.currentTime = 0;
    kickSound.play();
  });
  rideButton.addEventListener("click", function () {
    // Play the kick drum sound when the button is clicked
    rideSound.currentTime = 0;
    rideSound.play();
  });
});
