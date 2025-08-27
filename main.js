let time = 0;
const timerElement = document.getElementById("timer");

// Jede Sekunde +1
setInterval(() => {
  time++;
  timerElement.textContent = time;
}, 1000);
