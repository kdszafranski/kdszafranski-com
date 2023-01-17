$(document).ready(start);

// data
const basePath = 'img/game-images/';
const images = [
  { description: `A Druid's Duel`, path: 'add1.png' },
  { description: `A Druid's Duel 2`, path: 'add2.png' },
  { description: `Monsters of Myth`, path: 'mom-dead.png' },
  { description: `A Druid's Duel`, path: 'add3.png' },
  { description: `Monsters of Myth Closeup`, path: 'mom-close-up.png' },
  { description: `A Druid's Duel`, path: 'add4.png' },
  { description: `Edge of the Abyss`, path: 'eoa.png' },
];

// globals
let current = getRandomNumber();
// timer
let intId = setInterval(nextImage, 4500);
// carousels
let carousels = [];

function start() {
  console.log('dom');
  carousels = $('.carousel');
  // start it up
  seedCarouselStart();
  
  $('.carousel').on('click', resetInterval);
}


function resetInterval(e) {
    console.log('clicked car');
    clearInterval(intId);
    intId = setInterval(nextImage, 4500);
    // go to next image
    nextImage($(this));
}

function nextImage(target) {
  current++;
  if (current == images.length) {
    current = 0;
  }
  // set image path and desc
  target.attr('src', basePath + images[current].path);
  target.attr('alt', images[current].description);
}

function getRandomNumber() {
  return Math.floor(Math.random() * images.length);
}

function seedCarouselStart() {
  for(let car in carousels) {
    $(car).attr('src', basePath + images[getRandomNumber()].path);
    $(car).attr('alt', images[current].description);
  }
}

