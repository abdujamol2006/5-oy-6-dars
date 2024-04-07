let title = document.getElementById("title");
let startBtn = document.getElementById("stbtn");
let stopBtn = document.getElementById("spbtn");

let minutes = +prompt("Minut kiriting");
let seconds = 0;

startBtn.addEventListener("click", () => {
  title.textContent = `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  startBtn.disabled = true;

  let interval = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(interval);
        startBtn.disabled = false;
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }

    title.textContent = `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  }, 1000);

  stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    startBtn.disabled = false;
  });
});
