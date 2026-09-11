const time = document.getElementById("time");
const date = document.getElementById("date");
const themeButton = document.getElementById("themeButton");

function updateClock() {
  const now = new Date();

  // Time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  time.textContent = `${hours}:${minutes}:${seconds}`;

  // Date
  date.textContent = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

// Update every second
updateClock();
setInterval(updateClock, 1000);

// Dark / Light mode
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeButton.textContent = "☀️ Light Mode";
  } else {
    themeButton.textContent = "🌙 Dark Mode";
  }
});