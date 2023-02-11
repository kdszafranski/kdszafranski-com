// Create some carousels and let'em rip
//

let games = new Carousel(
  [
    { description: `A Druid's Duel`, path: 'add1.png' },
    { description: `Monsters of Myth`, path: 'mom-dead.png' },
    { description: `A Druid's Duel`, path: 'add3.png' },
    { description: `Monsters of Myth Closeup`, path: 'mom-close-up.png' },
    { description: `A Druid's Duel`, path: 'add4.png' },
  ],
  document.querySelector('#games-carousel'),
  4500
);

let moreGames = new Carousel(
    [
      { description: `Edge of the Abyss`, path: 'eoa.png' },
      { description: `Edge of the Abyss`, path: 'land-trees.png' },
      { description: `Edge of the Abyss`, path: 'land.png' },
      { description: `Edge of the Abyss`, path: 'mom-hill.png' },
    ],
    document.querySelector('#more-games'),
    5500
);


//// UTILITIES
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
