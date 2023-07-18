// Create some carousels and let'em rip
//

let games = new Carousel(
  [
    { description: `A Druid's Duel`, path: 'add1.png' },
    { description: `Monsters of Myth Closeup`, path: 'mom-july2.png' },
    { description: `A Druid's Duel`, path: 'add4.png' },
    { description: `Horror`, path: 'horror-hand.png' },
    { description: `Monsters of Myth`, path: 'mom-july1.png' },
    { description: `Edge of the Abyss`, path: 'eoa.png' },
    { description: `Unity`, path: 'mom-unity.png' },
    { description: `Land and Ladders`, path: 'land.png' },
    { description: `Twisted Temple`, path: 'runner.jpg' },
    { description: `A Druid's Duel`, path: 'add3.png' },
    { description: `Gargoyle`, path: 'gargoyle.png' },
    { description: `Using Unity`, path: 'unity1.png' },
    { description: `Buxton`, path: 'buxton.png' },
    { description: `Buxton`, path: 'buxton.png' },
    { description: `ShaderGraph For`, path: 'shadergraph.png' },
    { description: `Monsters 2D`, path: 'mom2d.png' },
    { description: `Rescue Ship Icarus`, path: 'udemy-boost-screenie.png' },
    { description: `Fallback`, path: 'fallback-action.png' },
  ],
  document.querySelector('#games-carousel'),
  4500
);

// let moreGames = new Carousel(
//     [
      
//     ],
//     document.querySelector('#more-games'),
//     5500
// );


//// UTILITIES
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
