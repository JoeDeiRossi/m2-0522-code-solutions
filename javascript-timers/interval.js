
const display = document.querySelector('.countdown-display');

const intervalID = setInterval(() => {
  display.textContent -= 1;
  if (display.textContent === '0') {
    display.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}, 1000);
