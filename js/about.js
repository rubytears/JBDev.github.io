const baseURL = "https://rubytears.github.io/";

const profile = document.querySelector('.profile');
const dialog = document.querySelector('.dialog');

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

profile.addEventListener('mouseover', surprise);
profile.addEventListener('mouseout', silent);