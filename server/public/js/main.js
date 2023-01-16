const basePath = 'img/game-images/';
const images = [
  { description: `A Druid's Duel`, path: 'add1.png' },
  { description: `A Druid's Duel 2`, path: 'add2.png' },
  { description: `Monsters of Myth`, path: 'mom-dead.png' },
  { description: `A Druid's Duel`, path: 'add3.png' },
  { description: `A Druid's Duel`, path: 'add4.png' },
];

let current = 0;
let intId = setInterval(nextImage, 4500);

// timer
function resetInterval() {
    clearInterval(intId);
    intId = setInterval(nextImage, 4500);
    // go to next image
    nextImage();
}

function nextImage() {
  current++;
  if (current == images.length) {
    current = 0;
  }
  // set image path and desc
  $('#games-carousel').attr('src', basePath + images[current].path);
  $('#games-carousel').attr('alt', images[current].description);
}

