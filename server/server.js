const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

const assets = {
    imagePath: "http://localhost:5000/img/game-images/",
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
    console.log(req.query);
    console.log('env: ', process.env.ASSET_API_KEY);
    if(req.query.api_key === process.env.ASSET_API_KEY) {
        res.json(assets);
    } else {
        res.sendStatus(403);
    }
});

app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`);    
});