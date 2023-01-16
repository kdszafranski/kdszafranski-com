const basePath = 'img/game-images/';
const images = [
  { description: `A Druid's Duel`, path: 'add1.png' },
  { description: `A Druid's Duel 2`, path: 'add2.png' },
  { description: `Monsters of Myth`, path: 'mom-dead.png' },
  { description: `A Druid's Duel`, path: 'add3.png' },
  { description: `A Druid's Duel`, path: 'add4.png' },
];

let current = 0;

// timer
setInterval(nextImage, 4500);

function nextImage() {
  console.log('clicked next');
  current++;
  if (current == images.length) {
    current = 0;
  }
  // set image path
  $('#games-carousel').attr('src', basePath + images[current].path);
  $('#games-carousel').attr('alt', images[current].description);

}
