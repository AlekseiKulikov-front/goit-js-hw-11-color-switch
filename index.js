const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  
  
const btnStart = document.querySelector('button[data-action="start"]');
console.log(btnStart);

const btnStop = document.querySelector('button[data-action="stop"]');
console.log(btnStop);

const body = document.querySelector('body');
//console.log(body);


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
//const a = randomIntegerFromInterval(0, colors.length - 1);
//console.log(a);
let color;

function randomColor() {
    color = randomIntegerFromInterval(0, colors.length - 1);
    body.style.backgroundColor = `${colors[color]}`;
    //console.log('fffffff');
}

let timer;


btnStart.addEventListener('click', start);
function start(event) {

    timer = setInterval(randomColor, 1000);
    btnStart.setAttribute('disabled', 'true');   
}




btnStop.addEventListener('click', stop);
function stop(event) {
    body.style.backgroundColor = `${colors[color]}`;
    clearInterval(timer);
    btnStart.removeAttribute('disabled');
}