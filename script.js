let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let mSecond = document.getElementById("mSecond");
let interval;
let hr = (min = sec = ms = "0" + 0);

startButton.addEventListener("click", () => {
  interval = setInterval(() => {
    ms++;
    if (ms == 100) {
      sec++;
      sec = sec < 10 ? "0" + sec : sec;
      ms = "0" + 0;
    }

    if (sec == 60) {
      min++;
      min = min < 10 ? "0" + min : min;
      sec = "0" + 0;
    }

    if (min == 60) {
      hr++;
      hr = hr < 10 ? "0" + hr : hr;
      min = "0" + 0;
    }
    displayTime();
  }, 10);
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
});

resetButton.addEventListener("click",()=>{
    clearInterval(interval);
    hr = min = sec = ms = "0" + 0;
    displayTime();
})

function displayTime() {
  minute.innerHTML = min;
  second.innerHTML = sec;
  mSecond.innerHTML = ms;
}
