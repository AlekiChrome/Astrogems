const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

const gemstones = [
    {name: "Garnet", zodiac: "Capricorn", properties: "", },
    {name: "Amethyst", zodiac: "Aquarius", properties: "", },
    {name: "Aquamarine", zodiac: "Pisces", properties: "", },
    {name: "Diamond", zodiac: "Aries", properties: "", },
    {name: "Emerald", zodiac: "Taurus", properties: "", },
    {name: "Pearl", zodiac: "Gemini", properties: "", },
    {name: "Ruby", zodiac: "Cancer", properties: "", },
    {name: "Periodt", zodiac: "Leo", properties: "", },
    {name: "Sapphire", zodiac: "Virgo", properties: "", },
    {name: "opal", zodiac: "Libra", properties: "", },
    {name: "Citrine", zodiac: "Scorpio", properties: "", },
    {name: "Blue Topaz", zodiac: "Sagittarius", properties: "", }
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

