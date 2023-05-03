// Functions for Navigation
function revealHome() {
  previousElement.style.display = "none";
  previousElement = document.querySelector("#home");
  previousElement.style.display = "block";
}
function revealAbout() {
  previousElement.style.display = "none";
  previousElement = document.querySelector("#about");
  previousElement.style.display = "block";
}

function revealCreations() {
  previousElement.style.display = "none";
  previousElement = document.querySelector("#creations");
  previousElement.style.display = "block";
}
function revealInterests() {
  previousElement.style.display = "none";
  previousElement = document.querySelector("#interests");
  previousElement.style.display = "block";
}
function revealContact() {
  previousElement.style.display = "none";
  previousElement = document.querySelector("#contact");
  previousElement.style.display = "block";
}

// Functions for About page
function talk() {
  profile.src = baseURL + "img/Talk2.png";
  setTimeout(silent, 100);
}
function surprise() {
profile.src = baseURL + "img/Surprise.png";
}
function silent() {
profile.src = baseURL + "img/Silent.png";
}

let previousElement = document.querySelector("#home");
const baseURL = "https://rubytears.github.io/";

const profile = document.querySelector('.profile');
const dialog = document.querySelector('.dialog');

profile.addEventListener('mouseover', surprise);
profile.addEventListener('mouseout', silent);