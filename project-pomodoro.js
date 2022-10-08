

console.log("javaScript working");

// define variables
let acquaBox = document.querySelector(".acqua-box")
let breakBox = document.querySelector(".break-box")
let breakBtn = document.querySelector(".break-btn")

const countdownBreakEl = document.querySelector(".break-timer");


let height = 1;
const progressBar = document.getElementById("progress-bar");

let pomodoroInactive = document.querySelector(".pomodoro-inactive")
let pomodoroBox = document.querySelector(".pomodoro-box")

let timerBox = document.querySelector(".timer-box")
let timerBtn = document.querySelector(".timer-btn")

const countdownEl = document.querySelector(".timer");

let startMinutes = 0.05;
let time = startMinutes * 60;

let breakStartMinutes = 0.05;
let breakTime = startMinutes * 60;


let btn = document.querySelector(".timer-btn");

// when you click on water, sets actions

acquaBox.addEventListener("click", (e) => {
    console.log("clicked");
    if (acquaBox.classList != "inactive-box") {
        fillBar();
        acquaBox.classList.add("inactive-box");
        pomodoroBox.classList.remove("hidden");
        pomodoroInactive.classList.add("hidden");
        }
    else {return;}
    }
);


function updateCountdown() {
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

// adding zero to single intagers
function addZero(num) {
    if (num<10) {
        return `0${num}`;
    } else {
        return num;
    }
} 

// when you click on pomodoro btns, sets actions


btn.addEventListener("click", (e) => {
    console.log("clicked");
    if (btn.innerHTML == "Start") {
        btn.innerHTML = "Pause";
        myInterval = setInterval(updateCountdown, 1000); }

    else if (btn.innerHTML == "Fill") {
        time = startMinutes * 60;
        btn.innerHTML = "Back to work";
        pomodoroReset();
        progressBar.style.backgroundColor = "#eb5a4b";
        pomodoroBox.classList.add("inactive-box");
        acquaBox.classList.remove("inactive-box");
        acquaBox.classList.add("hidden");
        breakBox.classList.remove("hidden");
        console.log("hidden removed");
        breakInterval = setInterval(updateBreakCountdown, 1000);
        }

    else if (btn.innerHTML = "Back to work") {
        clearInterval(myInterval);
        btn.innerHTML = "Start";
        countdownEl.innerHTML = "25:00";
        pomodoroBox.classList.remove("pomodoro-box-complete");
        timerBtn.classList.remove("timer-btn-complete");
        resetBtn.classList.remove("reset-btn-complete");
        pomodoroBox.classList.remove("pomodoro-reset");
        timerBox.classList.remove("timer-box-reset");
        countdownEl.classList.remove("timer-reset");
        timerBtn.classList.remove("timer-btn-reset");
        emptyBar();
        pomodoroBox.classList.remove("inactive-box");
        acquaBox.classList.add("inactive-box")
    }

    else {
        btn.innerHTML = "Start";
        clearInterval(myInterval);
    };
}
);

// when you click on restart btn, countdown back to 25mins and paused

let resetBtn = document.querySelector(".reset-btn")

resetBtn.addEventListener("click", (e) => {
    time = startMinutes * 60;
    countdownEl.innerHTML = "25:00";
    if (btn.innerHTML = "Pause") {
        clearInterval(myInterval);
        btn.innerHTML = "Start";
    }
}
); 

function countdownComplete() {
    console.log("complete");
    countdownEl.innerHTML = "COMPLETE!";
    btn.innerHTML = "Fill";
    pomodoroBox.classList.add("pomodoro-box-complete");
    timerBtn.classList.add("timer-btn-complete");
    resetBtn.classList.add("reset-btn-complete");
};

function pomodoroReset() {
    console.log("pomodoro-reset");
    countdownEl.innerHTML = "COMPLETE!";
    btn.innerHTML = "Back to work";
    pomodoroBox.classList.add("pomodoro-reset");
    timerBox.classList.add("timer-box-reset");
    countdownEl.classList.add("timer-reset");
    timerBtn.classList.add("timer-btn-reset");
};


// Progress bar

// when fill is clicked, % increased by 25% 



// add 25 to height 

function fillBar() {
   if (height <= 100) {
    height+=25;
    progressBar.style.height = height + "%";
    progressBar.style.backgroundColor = "#95c4cc";
    }
    else {return;}
}

function emptyBar() {
    if (height >= 100) {
        progressBar.style.height = "1%";
        height = 1;
    }
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
    breakTime--;
}

