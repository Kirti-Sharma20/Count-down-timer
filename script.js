let targetDate = null;
let interval = null;

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
    // Countdown is over
    document.getElementById('days').innerText = '00';
    document.getElementById('hours').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
    clearInterval(interval);
    document.getElementById('countdown-text').innerText = "The event has started!";
  } else {
    // Calculate the remaining time
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the remaining time
    document.getElementById('days').innerText = formatTime(days);
    document.getElementById('hours').innerText = formatTime(hours);
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function startCountdown() {
  const countdownInput = document.getElementById('countdownInput');
  if (!countdownInput.value) {
    alert('Please enter a valid target date and time.');
    return;
  }

  targetDate = new Date(countdownInput.value).getTime();

  if (isNaN(targetDate)) {
    alert('Please enter a valid date and time format (YYYY-MM-DDTHH:MM).');
    return;
  }

  interval = setInterval(updateCountdown, 1000);
  countdownInput.disabled = true;
  document.getElementById('startButton').disabled = true;
}

// Add an event listener to the start button
document.getElementById('startButton').addEventListener('click', startCountdown);
