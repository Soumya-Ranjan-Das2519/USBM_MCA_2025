function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format time to 2 digits (e.g., 09 instead of 9)
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById("digitalClock").textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Call the function immediately to avoid 1-second delay
updateClock();
