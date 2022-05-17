
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
