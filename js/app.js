/*let minute = +prompt("Minut kiriting");
let seconds = 0;
let soat = 0;

stbtn.addEventListener("click", () => {
  const interval = setInterval(() => {
    seconds -= 1;
    title.textContent = `${minute < 10 ? `0${minute}` : minute}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
    if (seconds == 0) {
      seconds = 0;
      minute -= 1;
    }
  }, 1000);
  stbtn.disabled = true;
  spbtn.addEventListener("click", () => {
    stbtn.disabled = false;
    clearInterval(interval);
  });
});*/ const title = document.getElementById("title");
const startBtn = document.getElementById("stbtn");
const stopBtn = document.getElementById("spbtn");

let minutes = +prompt("Enter the minutes");
let seconds = 0;

startBtn.addEventListener("click", () => {
  // Update the timer display
  title.textContent = `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  // Disable start button to prevent multiple starts
  startBtn.disabled = true;

  // Set interval to update the timer every second
  const interval = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        // When countdown finishes, clear interval and enable start button
        clearInterval(interval);
        startBtn.disabled = false;
      } else {
        // Decrease minutes and set seconds to 59
        minutes--;
        seconds = 59;
      }
    } else {
      // Decrease seconds
      seconds--;
    }

    // Update the timer display
    title.textContent = `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  }, 1000);

  // Add event listener to stop button to stop the timer
  stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    startBtn.disabled = false;
  });
});
