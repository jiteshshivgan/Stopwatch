let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;
let displayTime = document.querySelector(".displayTime");

// function related to how the stopwatch actually work
function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  // If the sec, min, hour is less than 10, we don't want only 1 digit to come, so we added these condition
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  displayTime.textContent = h + ":" + m + ":" + s;
}

function watchStart() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}
function reset() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime.textContent = "00:00:00";
}
