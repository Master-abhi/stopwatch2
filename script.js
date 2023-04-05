// selecting buttons and span by ID.
var start = document.getElementById("start")
var stop = document.getElementById("stop")
var reset = document.getElementById("reset")
var time = document.getElementById("time")
var sec = 00;

// Main funtions
function formatTime(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; // for timer updation
  }

function updateTime(){
    update = setInterval(function(){
        sec++;
        time.innerHTML = formatTime(sec); // updation of timer
      }, 1000);
};
function stopTime(){
    clearInterval(update); // to stop timer
}

function resetTime(){
    sec = 00;
    clearInterval(update); //stops timer
    time.innerHTML = formatTime(sec); // resets displayed timer to 0
}
// Using eventListner for click
start.addEventListener('click', updateTime);
stop.addEventListener('click', stopTime);
reset.addEventListener('click', resetTime);