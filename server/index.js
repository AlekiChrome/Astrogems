const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

const gemstones = [
    {name: "Garnet", zodiac: "Capricorn", properties: "", imageUrl: "" },
    {name: "Amethyst", zodiac: "Aquarius", properties: "", imageUrl: "" },
    {name: "Aquamarine", zodiac: "Pisces", properties: "", imageUrl: ""},
    {name: "Diamond", zodiac: "Aries", properties: "", imageUrl: ""},
    {name: "Emerald", zodiac: "Taurus", properties: "", imageUrl: ""},
    {name: "Pearl", zodiac: "Gemini", properties: "", imageUrl: ""},
    {name: "Ruby", zodiac: "Cancer", properties: "", imageUrl: ""},
    {name: "Periodt", zodiac: "Leo", properties: "", imageUrl: ""},
    {name: "Sapphire", zodiac: "Virgo", properties: "", imageUrl: ""},
    {name: "opal", zodiac: "Libra", properties: "", imageUrl: ""},
    {name: "Citrine", zodiac: "Scorpio", properties: "", imageUrl: ""},
    {name: "Blue Topaz", zodiac: "Sagittarius", properties: "", imageUrl: ""}
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

