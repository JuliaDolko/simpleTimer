// CREATING VARIABLES 

var timeBegan = null;  //to know if clock start running 
var timeStopped = null; //to know if the timer stopped 
var stoppedDuration = null; 
var stoppedTime = 0; //how long 
var startInterval = null; // to start the interval if needed 
var flag = false; //to control


//CONTAINER ONE CLICK FUNCTIONS 
const timerContainer = document.getElementsByClassName("timer-container")[0]; 
timerContainer.addEventListener("click", function ()
{
  if(!flag) {
    startTimer(); 
    flag = true; 
  } else {
    stopTimer ();
    flag= false; 
  }
})

///  on RESET // 
const button = document.getElementById("buttonReset");

if(buttonReset) {
  button.addEventListener('click', function () {
    resetTimer()
  });
}


// START AND STOP //
function startTimer() {
  if (timeBegan === null)
  timeBegan = new Date();
  
  if (timeStopped !== null)
  stoppedDuration += (new Date() - timeStopped);

  startInterval = setInterval(clockRunning, 10); 
}

function stopTimer(){
  timeStopped =new Date(); 
  clearInterval(startInterval);
}

// CLOCK RUNNING 

function clockRunning(){
  var currentTime = new Date(); 
  var timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);

  var minutes = timeElapsed.getUTCMinutes(); 
  var seconds = timeElapsed.getUTCSeconds(); 
  var milliseconds = timeElapsed.getUTCMilliseconds(); 

  milliseconds = Math.floor (milliseconds/10); 

  document.getElementById("timer-display").innerHTML = 
  (minutes = minutes < 10 ? '0' + minutes:minutes)+ ":" + 
  (seconds = seconds < 10 ? '0' + seconds:seconds)+ ":" + 
  (milliseconds = milliseconds < 10 ? '0' + milliseconds:milliseconds); 
}

// RESETING  TIMER // 

function resetTimer() {
  clearInterval(startInterval);
  timeBegan = null; 
  timeStopped = null; 
  stoppedDuration = 0; 
  document.getElementById("timer-display").innerHTML = "00:00:00"; 
  flag = false; 
}

