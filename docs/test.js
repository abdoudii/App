const root = document.documentElement;
const button = document.querySelector('.send-button');
const totaldiv = document.querySelector('.totalcoins');
const ucounter = document.querySelector('.ucounter');
const toggleEffect = document.getElementById('toggle-effect');
const counterElement = document.getElementById("counter");
const startButton = document.getElementById("farmbutton");
const claimbutton = document.getElementById("claimbutton");
let count = 0;
let amount = 0.001;
let clickable = true;
let loop = false;
let boost = false;
let intervalTime = boost? 100 : 1000;
var audio = document.getElementById("myAudio");
let intervalId;
let claimed = true;
let totalcoins = 65;

const startCounter = () => {
    intervalId = setInterval(minecounter, intervalTime);
};


function minecounter() {
    console.log(loop, clickable);
    if (loop === true) {
        if (count>=1) {
            clearInterval(intervalId);
            button.classList.remove('looping');
            ucounter.textContent='claim';
            counterElement.textContent='claim';
            loop = false;
            clickable = true;
            claimed=false;
        } else {
            count += amount;
            root.style.setProperty('--water-level', `-${count*50+25}%`);
            ucounter.textContent = `${count.toFixed(3)}`;
            counterElement.textContent = `${count.toFixed(3)}`;
        }
    } 

}
// Toggle effects on button click
button.addEventListener('click', () => {
  button.classList.toggle('active');

  if (clickable === true && count === 0 && loop===false) {
    button.classList.add('looping');
    count = 0;
    counterElement.textContent=`0.000`;
    ucounter.textContent=`0.000`;
    loop=true;
    clickable = false;
  }
});

function setShineColors() {
    if (boost) {
        root.style.setProperty('--mixed-glow', `0 0 3px 2px hsl(0deg 100% 85%),
          0 0 7px 4px hsl(240deg 100% 85%),
          0 0 13px 4px hsl(0deg 100% 70%),
          0 0 25px 5px hsl(240deg 100% 70%)`);

    } else {
        root.style.setProperty('--mixed-glow', `0 0 3px 2px hsl(222deg 20% 95%),
          0 0 7px 4px hsl(222deg 20% 80%),
          0 0 13px 4px hsl(222deg 50% 70%),
          0 0 25px 5px hsl(222deg 100% 70%)`);
    }
      
}
function claimcoin(event) {
    if ((loop === false) && (clickable === true) && claimed === false){
        console.log(count)
        console.log.apply(count);
        totalcoins = totalcoins + 1;
        claimed=true;
        totaldiv.textContent=totalcoins;
        count=0;
        counterElement.textContent='sharks';
        ucounter.textContent='sharks';
        root.style.setProperty('--water-level', `-50%`);
        clearInterval(clearInterval);
        clickable=true;
    }
}
claimbutton.addEventListener('click', claimcoin);

function handleBoost(event) {
  boost = true;
  root.style.setProperty('--shimer-angle', '720deg');
  setShineColors();
  intervalTime = boost? 1 : 1000;
  clearInterval(intervalId); // Clear the previous interval
  startCounter();

}

claimbutton.addEventListener('mousedown', handleBoost);
claimbutton.addEventListener('touchstart', handleBoost);
startButton.addEventListener('mousedown', handleBoost);
startButton.addEventListener('touchstart', handleBoost);

function handleEndBoost() {
  boost = false;
  setShineColors(); // Call the function to set colors
  root.style.setProperty('--shimer-angle', '360deg');
  intervalTime = boost? 100 : 1000;
  clearInterval(intervalId); // Clear the previous interval
  startCounter();
}

claimbutton.addEventListener('mouseup', handleEndBoost);
claimbutton.addEventListener('touchend', handleEndBoost);
startButton.addEventListener('mouseup', handleEndBoost);
startButton.addEventListener('touchend', handleEndBoost);
let testing = 0;


startCounter()
