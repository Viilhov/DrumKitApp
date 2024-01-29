//document.addEventListener("DOMContentLoaded", function () {
// Get references to the button and audio elements
const kickButton = document.getElementById("kickButton");
const rideButton = document.getElementById("rideButton");
const snareButton = document.getElementById("snareButton");
const tomButton = document.getElementById("tomButton");
const hihatButton = document.getElementById("hihatButton");

const kickSound = document.getElementById("kickSound");
const rideSound = document.getElementById("rideSound");
const snareSound = document.getElementById("snareSound");
const tomSound = document.getElementById("tomSound");
const hihatSound = document.getElementById("hihatSound");

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
snareButton.addEventListener("click", function () {
  // Play the kick drum sound when the button is clicked
  snareSound.currentTime = 0;
  snareSound.play();
});
tomButton.addEventListener("click", function () {
  // Play the kick drum sound when the button is clicked
  tomSound.currentTime = 0;
  tomSound.play();
});
hihatButton.addEventListener("click", function () {
  // Play the kick drum sound when the button is clicked
  hihatSound.currentTime = 0;
  hihatSound.play();
});

// Attach a keydown event listener to the document
document.addEventListener("keydown", function (event) {
  // Check if the pressed key is "a"
  if (event.key === "a") {
    console.log("Key pressed - Key:", event.key, "Code:", event.code);
    kickSound.currentTime = 0;
    kickSound.play();
  }
  if (event.key === "s") {
    rideSound.currentTime = 0;
    rideSound.play();
  }
  if (event.key === "d") {
    snareSound.currentTime = 0;
    snareSound.play();
  }
  if (event.key === "f") {
    tomSound.currentTime = 0;
    tomSound.play();
  }
  if (event.key === "g") {
    hihatSound.currentTime = 0;
    hihatSound.play();
  }
});
//});
