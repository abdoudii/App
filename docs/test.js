const root = document.documentElement;
const button = document.querySelector('.send-button');
const material = document.querySelector('.material');
const chart = document.querySelector('.chart-holder');
const totaldiv = document.querySelector('.totalcoins');
const ucounter = document.querySelector('.ucounter');
const toggleEffect = document.getElementById('toggle-effect');
const hint = document.getElementById('hint');
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
            material.classList.remove('active');
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
    material.classList.add('active');
    count = 0;
    audio.play();
    hint.textContent = "Hold to boost!";
    counterElement.textContent=`0.000`;
    ucounter.textContent=`0.000`;
    loop=true;
    clickable = false;
  }
});
const shimmer = button.querySelector('.shimmer');
function setShineColors() {
    if (boost) {
        root.style.setProperty('--mixed-glow', `0 0 3px 2px hsl(0deg 100% 85%),
          0 0 7px 4px hsl(240deg 100% 85%),
          0 0 13px 4px hsla(0deg, 100% ,70%, .2),
          0 0 25px 5px hsla(240deg ,100% ,70%, .2)`);

    } else {
        root.style.setProperty('--mixed-glow', `0 0 3px 2px hsl(222deg 20% 95%),
        0 0 7px 4px hsl(222deg 20% 80%),
        0 0 13px 4px hsla(222, 50%, 70%, 0.2),
        0 0 25px 5px hsla(222, 100%, 70%, 0)`);
    }
      
}
function claimcoin(event) {
    if ((loop === false) && (clickable === true) && claimed === false){
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

chart.addEventListener('click', () => {
    if (chart.classList.contains('active')){
        chart.classList.remove('active');
    }
    else{
        chart.classList.add('active');
    }
});

function handleBoost(event) {
  hint.textContent = "";
  boost = true;
  shimmer.style.animation = 'shimmer 0.6s infinite linear'
  setShineColors();
  intervalTime = boost? 10 : 1000;
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
  shimmer.style.animation = 'shimmer 1.2s infinite'
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


