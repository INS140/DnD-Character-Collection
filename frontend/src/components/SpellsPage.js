import React, { useEffect, useState } from "react";
import useFetch from "../custom-hooks/useFetch";

export default function SpellsPage() {
  const { get } = useFetch("https://www.dnd5eapi.co/api");
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await get("/spells");
        setSpells(response.data);
      } catch (error) {
        console.error("Error fetching spells:", error);
      }
    };

    fetchSpells();
  }, [get]);

  return (
    <div>
      <h2>Spells Page</h2>
      <ul>
        {spells.map((spell) => (
          <li key={spell.id}>{spell.name}</li>
        ))}
      </ul>
    </div>
  );
}
