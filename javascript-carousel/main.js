
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

dotContainer.addEventListener('click', event => {
  if (event.target.className === 'fa-regular fa-circle') {
    for (let i = 0; i < dots.length; i++) {
      const currentDot = dots[i];
      currentDot.className = 'fa-regular fa-circle';
      if (currentDot === event.target) {
        currentDot.className = 'fa-solid fa-circle';
        img.setAttribute('src', images[i].src);
        img.setAttribute('alt', images[i].alt);
      }
    }
  }
});

const nextArrow = document.querySelector('.fa-chevron-right');

nextArrow.addEventListener('click', event => {
  for (let i = 0; i < dots.length; i++) {
    if (dots[i].className === 'fa-solid fa-circle') {
      dots[i].className = 'fa-regular fa-circle';
      if (dots[i + 1]) {
        dots[i + 1].className = 'fa-solid fa-circle';
        img.setAttribute('src', images[i + 1].src);
        img.setAttribute('alt', images[i + 1].alt);
        return;
      } else {
        dots[0].className = 'fa-solid fa-circle';
        img.setAttribute('src', images[0].src);
        img.setAttribute('alt', images[0].alt);
      }
    }
  }
});

const previousArrow = document.querySelector('.fa-chevron-left');

previousArrow.addEventListener('click', event => {
  for (let i = 0; i < dots.length; i++) {
    if (dots[i].className === 'fa-solid fa-circle') {
      dots[i].className = 'fa-regular fa-circle';
      if (dots[i - 1]) {
        dots[i - 1].className = 'fa-solid fa-circle';
        img.setAttribute('src', images[i - 1].src);
        img.setAttribute('alt', images[i - 1].alt);
        return;
      } else {
        dots[dots.length - 1].className = 'fa-solid fa-circle';
        img.setAttribute('src', images[dots.length - 1].src);
        img.setAttribute('alt', images[dots.length - 1].alt);
        return;
      }
    }
  }
});
