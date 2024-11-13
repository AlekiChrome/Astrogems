const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const gemstones = [
    {name: "", zodiac: "", properties: "", },
    {name: "", zodiac: "", properties: "", },
    {name: "", zodiac: "", properties: "", },
    {name: "", zodiac: "", properties: "", },
    {name: "", zodiac: "", properties: "", }
];

app.get('/api/gemstones', (req, res) => {
    res.json(gemstones);
});

app.get('/api/gemstones/:zodiac', (req, res) => {
    const { zodiac } = req.params;
    const filteredGemstones = gemstones.filter(gem => gem.zodiac.toLowerCase() === zodiac.toLowerCase());
    res.json(filteredGemstones.length ? filteredGemstones : {message: "No gemstones found for this zodiac sign"});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

