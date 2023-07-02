import React, { useState, useEffect } from "react";

export default function Spells({ level }) {
  const [spells, setSpells] = useState([]);
  const [selectedSpell, setSelectedSpell] = useState("");

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await fetch(`API_ENDPOINT?level=${level}`);
        const data = await response.json();
        setSpells(data.spells);
      } catch (error) {
        console.error("Error fetching spells:", error);
      }
    };

    fetchSpells();
  }, [level]);

  const handleSpellSelect = (event) => {
    setSelectedSpell(event.target.value);
  };

  return (
    <div>
      <h3>{level}</h3>
      <select value={selectedSpell} onChange={handleSpellSelect}>
        <option value="">+ Add {level} Spell</option>
        {spells.map((spell) => (
          <option key={spell.id} value={spell.name}>
            {spell.name}
          </option>
        ))}
      </select>
    </div>
  );
}
