const timerDiv = document.getElementById("timer");
const startTimerBtn = document.getElementById("start");
const stopTimerBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const getTimeStampBtn = document.getElementById("get_time_stamp");
const clearTimeStampBtn = document.getElementById("clear_time_stamp");
const timeStamps = document.querySelector(".time_stamp_container");
let timeStampCount = 1;
let countTime = 0;
let intervalId;

// Start timer
const startTimer = () => {
  startTimerBtn.classList.add("startColor");
  intervalId = setInterval(() => {
    timerDiv.innerText = ++countTime;
  }, 1000);
};

// Stop timer
const stopTimer = () => {
  if (countTime != 0) {
    stopTimerBtn.classList.add("stopColor");
    startTimerBtn.classList.remove("startColor");
    clearInterval(intervalId);
    resetBtn.classList.remove("hidden");
  }
};

// Reset Timer
const resetTimer = () => {
  startTimerBtn.classList.remove("startColor");
  stopTimerBtn.classList.remove("stopColor");

  countTime = 0;
  timerDiv.innerText = countTime;
  resetBtn.classList.add("hidden");
};

// Get TimeShamps
const getTimeStamp = () => {
  if (timeStampCount != 11 && countTime != 0) {
    getTimeStampBtn.classList.add("timeStampColor");
    timeStamps.innerHTML += ` <p>Time Stamp : ${countTime}</p>`;
    timeStampCount++;
  } else if (timeStampCount > 10) {
    document.getElementById("message").style.display = "block";
  }
};

// Clear TimeStamp
const clearTimeStamp = () => {
  if (countTime != 0) {
    getTimeStampBtn.classList.remove("timeStampColor");

    timeStamps.innerHTML = `<p id="message">*Time stamps Limit reach.</p>
    <p>Time Stamps</p>`;
    timeStampCount = 1;
  }
};

startTimerBtn.addEventListener("click", startTimer);
stopTimerBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
getTimeStampBtn.addEventListener("click", getTimeStamp);
clearTimeStampBtn.addEventListener("click", clearTimeStamp);
