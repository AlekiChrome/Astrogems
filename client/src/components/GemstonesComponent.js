import React, { useEffect, useState } from 'react';

const GemstonesComponent = () => {
    const [gemstones, setGemstones] = useState([]);

    useEffect(() => {
        fetch('/api/gemstones')
        .then(response => response.json())
        .then(data => setGemstones(data))
        .catch(error => console.error("Error fetching gemstones:", error));
    }, []);

    return (
        <div>
            <h2>Gemstones</h2>
            <ul>
                {gemstones.map((gem, index) => (
                    <li key={index}>
                        <strong>{gem.name}</strong> - {gem.properties} (Zodiac: {gem.zodiac})
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GemstonesComponent;