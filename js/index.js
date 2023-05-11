// Functions for Navigation
function reveal(name) {
  if(previousMenu){
    previousMenu.classList.remove("active");
  }
  previousElement.style.display = "none";
  previousElement = document.querySelector(`#${name}`);
  previousElement.style.display = "flex";
  previousMenu = document.querySelector(`a[name=${name}]`);
  previousMenu.classList.add("active");
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


const baseURL = "https://rubytears.github.io/";
let previousElement = document.querySelector("#home");
let previousMenu;
const profile = document.querySelector('.profile');
const dialog = document.querySelector('.dialog');

profile.addEventListener('mouseover', surprise);
profile.addEventListener('mouseout', silent);