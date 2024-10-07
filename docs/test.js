const root = document.documentElement;
const button = document.querySelector('.send-button');
const toggleEffect = document.getElementById('toggle-effect');
const counterElement = document.getElementById("counter");
const startButton = document.getElementById("farmbutton");
const claimbutton = document.getElementById("claimbutton");
let count = 0;
let amount = 0.001;
let intervalId;
let clickable = true;
let loop = false;
let boost = true;
var audio = document.getElementById("myAudio");

// Toggle effects on button click
button.addEventListener('click', () => {
  button.classList.toggle('active');

  if (clickable === true && count === 0 && loop===false) {
    button.classList.add('looping');
    audio.play();
    count = 0;
    root.style.setProperty('--content', `0.00`);
    claimbutton.textContent=`0.00`;
    counterElement.textContent=`0.00`;
    clickable = false;
    loop = true;
  }

  if (!intervalId) {
    intervalId = setInterval(() => {
      if (loop === true) {
        count += amount;
        root.style.setProperty('--content', `${count.toFixed(2)}`);
        claimbutton.textContent = `${count.toFixed(2)}`;
        counterElement.textContent = `${count.toFixed(2)}`;
      }

      if (count >= 1) {
        button.classList.remove('looping');
        claimbutton.textContent='claim';
        counterElement.textContent='claim';
        loop = false;
        clickable = true;
      }
    }, 100);
  }
});
function setShineColors() {
    if (boost) {
      root.style.setProperty('--color1', 'hsl(240, 100%, 50%)');
      root.style.setProperty('--color2', 'hsl(0, 100%, 50%)');
      root.style.setProperty('--color3', 'hsl(202, 100%, 50%)');
      root.style.setProperty('--color4', 'hsl(308, 100%, 51%)');
    } else {
      root.style.setProperty('--color1', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--color2', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--color3', 'hsl(0, 0%, 100%)');
      root.style.setProperty('--color4', 'hsl(0, 0%, 100%)');
    }
}
function handleBoost(event) {
  amount = 0.004;
  boost = true;
  root.style.setProperty('--shimer-angle', '720deg');
  setShineColors(); // Call the function to set colors
}

claimbutton.addEventListener('mousedown', handleBoost);
claimbutton.addEventListener('touchstart', handleBoost);
startButton.addEventListener('mousedown', handleBoost);
startButton.addEventListener('touchstart', handleBoost);

function handleEndBoost() {
  amount = 0.001;
  boost = false;
  setShineColors(); // Call the function to set colors
  root.style.setProperty('--shimer-angle', '360deg');
}

claimbutton.addEventListener('mouseup', handleEndBoost);
claimbutton.addEventListener('touchend', handleEndBoost);
startButton.addEventListener('mouseup', handleEndBoost);
startButton.addEventListener('touchend', handleEndBoost);

