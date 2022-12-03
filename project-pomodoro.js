

console.log("javaScript working");

// define variables
let acquaBox = document.querySelector(".acqua-box")
let breakBox = document.querySelector(".break-box")
let breakBtn = document.querySelector(".break-btn")
let breakEndBtn = document.querySelector(".break-end-btn")

const countdownBreakEl = document.querySelector(".break-timer");

let height = 1;
const progressBar = document.querySelector(".progress-bar");
const movingBar = document.querySelector(".moving-bar");

let pomodoroInactive = document.querySelector(".pomodoro-inactive")
let pomodoroBox = document.querySelector(".pomodoro-box")

let timerBox = document.querySelector(".timer-box")
let timerBtn = document.querySelector(".timer-btn")

const countdownEl = document.querySelector(".timer");

let startMinutes = 25.00;
let time = startMinutes * 60;

let breakStartMinutes = 5.00;
let breakTime = breakStartMinutes * 60;


setTimeout(function(){
  acquaBox.classList.remove("inactive-box");
  acquaBox.classList.add("box");
}, 1500);

// when you click on water, sets actions
acquaBox.addEventListener("click", (e) => {
  console.log("clicked");
  if (acquaBox.classList != "inactive-box") {
    fillBar();
    acquaBox.classList.add("inactive-box");
    pomodoroBox.classList.remove("hidden");
    pomodoroBox.classList.remove("inactive-box");
    pomodoroInactive.classList.add("hidden");
    }
  else return;
  }
);

breakBtn.addEventListener("click", (e) => {
  console.log("clicked");
  if (breakBtn.innerHTML == "Start") {
    console.log("started");
    breakBtn.innerHTML = "Pause";
    breakInterval = setInterval(updateBreakCountdown, 1000); }

  else if (breakBtn.innerHTML == "Pause") {
    breakBtn.innerHTML = "Start";
    clearInterval(breakInterval);
    console.log("paused");
  };
  }
);

breakEndBtn.addEventListener("click", (e) => {
  clearInterval(breakInterval);
  acquaBox.classList.remove("hidden");
  breakBox.classList.add("hidden"); }
);

function updateCountdown() {
  console.log("countdown update");
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  minutes = addZero(minutes);
  seconds = addZero(seconds);
  if (time == 0) {
    clearInterval(myInterval);
    countdownComplete();
    return;
  };

  let currentTime = `${minutes}:${seconds}`;
  countdownEl.innerHTML = currentTime;
  time--;
}

// when you fill, break timer starts

function updateBreakCountdown() {
  let minutes = Math.floor(breakTime / 60);
  let seconds = Math.floor(breakTime % 60);
  minutes = addZero(minutes);
  seconds = addZero(seconds);
  if (breakTime == 0) {
    clearInterval(breakInterval);
    acquaBox.classList.remove("hidden");
    breakBox.classList.add("hidden");
    return;
  };

  let currentTime = `${minutes}:${seconds}`;
  countdownBreakEl.innerHTML = currentTime;
  console.log(breakTime);
  breakTime--;
}

// adding zero to single integers
function addZero(num) {
  if (num<10) {
    return `0${num}`;
    } else {
        return num;
    }
}

// when you click on pomodoro btns, sets actions
timerBtn.addEventListener("click", (e) => {
  console.log("clicked");
  if (timerBtn.innerHTML == "Start") {
    console.log("started");
    timerBtn.innerHTML = "Pause";
    myInterval = setInterval(updateCountdown, 1000); }

  else if (timerBtn.innerHTML == "Fill") {
    time = startMinutes * 60;
    timerBtn.innerHTML = "Back to work";
    countdownBreakEl.innerHTML = "05:00";
    pomodoroReset();
    emptyBar();
    progressBar.style.backgroundColor = "#eb5a4b";
    pomodoroBox.classList.add("inactive-box");
    acquaBox.classList.remove("inactive-box");
    acquaBox.classList.add("hidden");
    breakBox.classList.remove("hidden");
    console.log("hidden removed");
    breakInterval = setInterval(updateBreakCountdown, 1000);
    console.log(breakInterval);
  }

  else if (timerBtn.innerHTML == "Back to work") {
    time = startMinutes * 60;
    clearInterval(myInterval);
    timerBtn.innerHTML = "Start";
    countdownEl.innerHTML = "25:00";
    pomodoroBox.classList.remove("pomodoro-box-complete");
    timerBtn.classList.remove("timer-btn-complete");
    resetBtn.classList.remove("complete");
    endBtn.classList.remove("complete");
    pomodoroBox.classList.remove("pomodoro-reset");
    timerBox.classList.remove("timer-box-reset");
    countdownEl.classList.remove("timer-reset");
    timerBtn.classList.remove("timer-btn-reset");
    pomodoroBox.classList.remove("inactive-box");
    acquaBox.classList.add("inactive-box")
  }

  else if (timerBtn.innerHTML == "Pause") {
    timerBtn.innerHTML = "Start";
    clearInterval(myInterval);
    console.log("paused");
  };
  }
);

// when you click on restart btn, countdown back to 25mins and paused

let resetBtn = document.querySelector(".reset-btn")
let endBtn = document.querySelector(".end-btn")

resetBtn.addEventListener("click", (e) => {
  time = startMinutes * 60;
  countdownEl.innerHTML = "25:00";
  if (timerBtn.innerHTML = "Pause") {
    clearInterval(myInterval);
    timerBtn.innerHTML = "Start";
  }
  }
);

endBtn.addEventListener("click", (e) => {
  clearInterval(myInterval);
  countdownComplete();
  }
);

function countdownComplete() {
  console.log("complete");
  countdownEl.innerHTML = "COMPLETE!";
  timerBtn.innerHTML = "Fill";
  pomodoroBox.classList.add("pomodoro-box-complete");
  timerBtn.classList.add("timer-btn-complete");
  resetBtn.classList.add("complete");
  endBtn.classList.add("complete");
};

function pomodoroReset() {
  console.log("pomodoro-reset");
  countdownEl.innerHTML = "COMPLETE!";
  timerBtn.innerHTML = "Back to work";
  pomodoroBox.classList.add("pomodoro-reset");
  timerBox.classList.add("timer-box-reset");
  countdownEl.classList.add("timer-reset");
  timerBtn.classList.add("timer-btn-reset");
};


// Progress bar

// when fill is clicked, % increased by 25%


// add 25 to height
function fillBar() {
  if (height < 100) {
    height+=25;
    progressBar.style.height = height + "%";
    progressBar.style.backgroundColor = "#95c4cc";
    progressBar.classList.add("moving-bar");
    }
  else {return;}
}

function emptyBar() {
  if (height > 100) {
    progressBar.style.height = "1%";
    height = 1;
  }
}
