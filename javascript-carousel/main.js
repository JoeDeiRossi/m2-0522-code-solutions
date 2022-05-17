
const dotContainer = document.querySelector('.dot-container');
const dots = dotContainer.children;

const img = document.querySelector('img');
const images = [
  { src: 'images/001.png', alt: 'Bulbasaur' },
  { src: 'images/004.png', alt: 'Charmander' },
  { src: 'images/007.png', alt: 'Squirtle' },
  { src: 'images/025.png', alt: 'Pikachu' },
  { src: 'images/039.png', alt: 'Jigglypuff' }
];

function handleDotClick(event) {
  if (event.target.className === 'fa-regular fa-circle') {
    clearInterval(interval);
    for (let i = 0; i < dots.length; i++) {
      const currentDot = dots[i];
      currentDot.className = 'fa-regular fa-circle';
      if (currentDot === event.target) {
        currentDot.className = 'fa-solid fa-circle';
        img.setAttribute('src', images[i].src);
        img.setAttribute('alt', images[i].alt);
      }
    }
    interval = setInterval(handleNextClick, 3000);
  }
}

dotContainer.addEventListener('click', handleDotClick);

const nextArrow = document.querySelector('.fa-chevron-right');

function handleNextClick(event) {
  clearInterval(interval);
  for (let i = 0; i < dots.length; i++) {
    if (dots[i].className === 'fa-solid fa-circle') {
      dots[i].className = 'fa-regular fa-circle';
      if (dots[i + 1]) {
        dots[i + 1].className = 'fa-solid fa-circle';
        img.setAttribute('src', images[i + 1].src);
        img.setAttribute('alt', images[i + 1].alt);
        interval = setInterval(handleNextClick, 3000);
        return;
      } else {
        dots[0].className = 'fa-solid fa-circle';
        img.setAttribute('src', images[0].src);
        img.setAttribute('alt', images[0].alt);
        interval = setInterval(handleNextClick, 3000);
      }
    }
  }
}

nextArrow.addEventListener('click', handleNextClick);

const previousArrow = document.querySelector('.fa-chevron-left');

function handlePreviousClick(event) {
  clearInterval(interval);
  for (let i = 0; i < dots.length; i++) {
    if (dots[i].className === 'fa-solid fa-circle') {
      dots[i].className = 'fa-regular fa-circle';
      if (dots[i - 1]) {
        dots[i - 1].className = 'fa-solid fa-circle';
        img.setAttribute('src', images[i - 1].src);
        img.setAttribute('alt', images[i - 1].alt);
        interval = setInterval(handleNextClick, 3000);
        return;
      } else {
        dots[dots.length - 1].className = 'fa-solid fa-circle';
        img.setAttribute('src', images[dots.length - 1].src);
        img.setAttribute('alt', images[dots.length - 1].alt);
        interval = setInterval(handleNextClick, 3000);
        return;
      }
    }
  }
}

previousArrow.addEventListener('click', handlePreviousClick);

let interval = setInterval(handleNextClick, 3000);
