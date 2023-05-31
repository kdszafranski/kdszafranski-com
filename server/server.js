const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const assets = {
    imagePath: "http://localhost:5000/img/game-images",
    images: [
        { description: `A Druid's Duel`, path: 'add1.png' },
        { description: `Monsters of Myth`, path: 'mom-dead.png' },
        { description: `A Druid's Duel`, path: 'add3.png' },
        { description: `Monsters of Myth Closeup`, path: 'mom-close-up.png' },
        { description: `A Druid's Duel`, path: 'add4.png' },
    ],
};

app.use(express.static('server/public'));

app.get("/assets", (req, res) => {
    res.json(assets);
});

app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`);    
});